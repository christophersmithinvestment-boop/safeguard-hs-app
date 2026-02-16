import { RiskAssessment } from '@/types/risk';
import { AlertCircle, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RiskAssessmentListProps {
    risks: RiskAssessment[];
}

export function RiskAssessmentList({ risks }: RiskAssessmentListProps) {
    if (risks.length === 0) {
        return (
            <div className="flex min-h-[200px] flex-col items-center justify-center rounded-xl border border-dashed bg-muted/50 p-8 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background shadow-sm">
                    <CheckCircle2 className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">No Risks Reported</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                    Great job! There are currently no open risk assessments.
                </p>
            </div>
        );
    }

    const getSeverityColor = (severity: string) => {
        switch (severity) {
            case 'Critical': return 'text-destructive bg-destructive/10 border-destructive/20';
            case 'High': return 'text-orange-600 bg-orange-100 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400';
            case 'Medium': return 'text-yellow-600 bg-yellow-100 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400';
            default: return 'text-blue-600 bg-blue-100 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'Closed': return <CheckCircle2 className="h-4 w-4 text-primary" />;
            case 'Mitigated': return <CheckCircle2 className="h-4 w-4 text-primary" />;
            default: return <Clock className="h-4 w-4 text-yellow-600" />;
        }
    };

    return (
        <div className="grid gap-4">
            {risks.map((risk) => (
                <div
                    key={risk.id}
                    className="group relative flex flex-col gap-4 rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
                >
                    <div className="flex items-start justify-between">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border", getSeverityColor(risk.severity))}>
                                    {risk.severity}
                                </span>
                                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Clock className="h-3 w-3" />
                                    {new Date(risk.dateReported).toLocaleDateString()}
                                </span>
                            </div>
                            <h3 className="font-semibold leading-none tracking-tight">{risk.title}</h3>
                        </div>
                        <div className={cn("flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors")}>
                            {getStatusIcon(risk.status)}
                        </div>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                        {risk.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground border-t pt-4 mt-auto">
                        <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {risk.location}
                        </div>
                        <div className="flex items-center gap-1">
                            Reported by {risk.reportedBy}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
