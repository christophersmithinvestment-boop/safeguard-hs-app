-- SafeGuard Database Schema
-- Run this in the Supabase SQL Editor (Dashboard → SQL Editor → New Query)

-- ─── Records table ────────────────────────────────────────────────
-- Single table for all module data using JSONB
CREATE TABLE IF NOT EXISTS records (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  module TEXT NOT NULL,
  data JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- ─── Row Level Security ───────────────────────────────────────────
-- Users can only see and modify their own records
ALTER TABLE records ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own records"
  ON records FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own records"
  ON records FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own records"
  ON records FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own records"
  ON records FOR DELETE
  USING (auth.uid() = user_id);

-- ─── Indexes ──────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_records_user_module
  ON records(user_id, module);

CREATE INDEX IF NOT EXISTS idx_records_created_at
  ON records(created_at DESC);
