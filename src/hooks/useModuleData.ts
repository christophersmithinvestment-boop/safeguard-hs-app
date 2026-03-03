"use client";

import { useState, useEffect, useCallback } from "react";
import { loadRecords, saveRecord, deleteRecord, updateRecord, migrateFromLocalStorage } from "@/lib/database";
import { loadFromStore, saveToStore } from "@/lib/utils";
import { isSupabaseConfigured } from "@/lib/supabase";

interface UseModuleDataOptions {
    module: string;       // Supabase module name (e.g. "risk_assessments")
    storeKey: string;     // localStorage key (e.g. "risk_assessments")
}

export function useModuleData<T extends { id: string }>(options: UseModuleDataOptions) {
    const { module, storeKey } = options;
    const [items, setItems] = useState<T[]>([]);
    const [loading, setLoading] = useState(true);

    // ─── Load data ──────────────────────────────────────────────────
    useEffect(() => {
        async function load() {
            if (isSupabaseConfigured) {
                // Try migrating localStorage data first (one-time)
                await migrateFromLocalStorage(module, storeKey);
                const records = await loadRecords<T>(module);
                setItems(records);
            } else {
                // Fallback to localStorage
                setItems(loadFromStore<T[]>(storeKey, []));
            }
            setLoading(false);
        }
        load();
    }, [module, storeKey]);

    // ─── Add a new record ──────────────────────────────────────────
    const addItem = useCallback(async (item: T) => {
        const updated = [item, ...items];
        setItems(updated);

        if (isSupabaseConfigured) {
            await saveRecord(module, item);
        } else {
            saveToStore(storeKey, updated);
        }
    }, [items, module, storeKey]);

    // ─── Delete a record ──────────────────────────────────────────
    const removeItem = useCallback(async (id: string) => {
        const updated = items.filter((i) => i.id !== id);
        setItems(updated);

        if (isSupabaseConfigured) {
            await deleteRecord(module, id);
        } else {
            saveToStore(storeKey, updated);
        }
    }, [items, module, storeKey]);

    // ─── Update a record ──────────────────────────────────────────
    const editItem = useCallback(async (id: string, updatedItem: T) => {
        const updated = items.map((i) => (i.id === id ? updatedItem : i));
        setItems(updated);

        if (isSupabaseConfigured) {
            await updateRecord(module, id, updatedItem);
        } else {
            saveToStore(storeKey, updated);
        }
    }, [items, module, storeKey]);

    // ─── Bulk set (for complex operations) ─────────────────────────
    const setAllItems = useCallback((newItems: T[]) => {
        setItems(newItems);
        if (!isSupabaseConfigured) {
            saveToStore(storeKey, newItems);
        }
    }, [storeKey]);

    return { items, loading, addItem, removeItem, editItem, setAllItems };
}
