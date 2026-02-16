export type RiskSeverity = 'Low' | 'Medium' | 'High' | 'Critical';
export type RiskStatus = 'Open' | 'Mitigated' | 'Closed';

export interface RiskAssessment {
    id: string;
    title: string;
    description: string;
    severity: RiskSeverity;
    status: RiskStatus;
    location: string;
    dateReported: string;
    reportedBy: string;
}
