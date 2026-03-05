"use client";

import { useEffect } from "react";

export function ServiceWorkerRegistration() {
    useEffect(() => {
        if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

        navigator.serviceWorker
            .register("/sw.js")
            .then((registration) => {
                // Check for updates every 60 seconds
                setInterval(() => registration.update(), 60 * 1000);

                registration.addEventListener("updatefound", () => {
                    const newWorker = registration.installing;
                    if (!newWorker) return;

                    newWorker.addEventListener("statechange", () => {
                        if (
                            newWorker.state === "activated" &&
                            navigator.serviceWorker.controller
                        ) {
                            // New version available — will activate on next visit
                            console.log("[DutyDocs] New version available. Refresh to update.");
                        }
                    });
                });
            })
            .catch((err) => {
                console.warn("[DutyDocs] SW registration failed:", err);
            });
    }, []);

    return null;
}
