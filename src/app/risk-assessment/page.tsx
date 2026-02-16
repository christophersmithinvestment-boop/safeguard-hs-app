'use client';

import { useState } from 'react';
import { RiskAssessment } from '@/types/risk';
import { RiskAssessmentForm } from '@/components/risk/RiskAssessmentForm';
import { RiskAssessmentList } from '@/components/risk/RiskAssessmentList';
import { Plus } from 'lucide-react';

// Mock initial data
const INITIAL_RISKS: RiskAssessment[] = [
    {
        id: '1',
        title: 'Exposed Wiring in Server Room',
        description: 'Main distribution panel has exposed wires near the floor level. High risk of electrical shock or accidental disconnection.',
        severity: 'Critical',
        status: 'Open',
        location: 'Server Room B',
        dateReported: new Date().toISOString(),
        reportedBy: 'System Admin',
    },
    {
        id: '2',
        title: 'Slippery Floor Warning Sign Missing',
        description: 'Cleaning in progress in the main lobby but no warning signs have been placed.',
        severity: 'Medium',
        status: 'Open',
        location: 'Main Lobby',
        dateReported: new Date(Date.now() - 86400000).toISOString(),
        reportedBy: 'Receptionist',
    },
];

export default function RiskAssessmentPage() {
    const [risks, setRisks] = useState<RiskAssessment[]>(INITIAL_RISKS);
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleAddRisk = (newRiskData: any) => {
        const newRisk: RiskAssessment = {
            id: Math.random().toString(36).substr(2, 9),
            ...newRiskData,
        };
        setRisks([newRisk, ...risks]);
        setIsFormVisible(false);
    };

    return (
        <div className="container mx-auto max-w-5xl p-6 lg:p-8">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Risk Assessment</h1>
                    <p className="text-muted-foreground">
                        Report and track health and safety hazards across the facility.
                    </p>
                </div>
                <button
                    onClick={() => setIsFormVisible(!isFormVisible)}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                    <Plus className="mr-2 h-4 w-4" />
                    {isFormVisible ? 'Cancel Report' : 'New Assessment'}
                </button>
            </div>

            <div className="grid gap-8 lg:grid-cols-12">
                {isFormVisible && (
                    <div className="lg:col-span-4 lg:order-last">
                        <div className="sticky top-6">
                            <RiskAssessmentForm onSubmit={handleAddRisk} />
                        </div>
                    </div>
                )}

                <div className={isFormVisible ? "lg:col-span-8" : "lg:col-span-12"}>
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-semibold tracking-tight">Recent Reports</h2>
                        <div className="text-sm text-muted-foreground">
                            Showing {risks.length} reports
                        </div>
                    </div>
                    <RiskAssessmentList risks={risks} />
                </div>
            </div>
        </div>
    );
}
