'use client';

import { useState } from 'react';
import { RiskSeverity } from '@/types/risk';
import { AlertTriangle, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RiskAssessmentFormProps {
    onSubmit: (data: any) => void;
}

export function RiskAssessmentForm({ onSubmit }: RiskAssessmentFormProps) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        severity: 'Medium' as RiskSeverity,
        location: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            ...formData,
            status: 'Open',
            dateReported: new Date().toISOString(),
            reportedBy: 'Current User', // Mock user
        });
        // Reset form
        setFormData({
            title: '',
            description: '',
            severity: 'Medium',
            location: '',
        });
    };

    return (
        <div className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive/10">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                </div>
                <h2 className="text-lg font-semibold">Report New Hazard</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-2">
                    <label htmlFor="title" className="text-sm font-medium">
                        Hazard Title
                    </label>
                    <input
                        id="title"
                        required
                        className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="e.g., Loose cabling in hallway"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <label htmlFor="location" className="text-sm font-medium">
                            Location
                        </label>
                        <input
                            id="location"
                            required
                            className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            placeholder="e.g., Block B, Corridor 2"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        />
                    </div>

                    <div className="grid gap-2">
                        <label htmlFor="severity" className="text-sm font-medium">
                            Severity
                        </label>
                        <select
                            id="severity"
                            className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            value={formData.severity}
                            onChange={(e) => setFormData({ ...formData, severity: e.target.value as RiskSeverity })}
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Critical">Critical</option>
                        </select>
                    </div>
                </div>

                <div className="grid gap-2">
                    <label htmlFor="description" className="text-sm font-medium">
                        Description
                    </label>
                    <textarea
                        id="description"
                        required
                        className="flex min-h-[80px] w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        placeholder="Describe the hazard and potential risks..."
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                </div>

                <button
                    type="submit"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                    <Send className="mr-2 h-4 w-4" />
                    Submit Report
                </button>
            </form>
        </div>
    );
}
