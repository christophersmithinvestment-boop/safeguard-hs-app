import { TrainingModule } from '@/types/training';
import { BadgeCheck, Clock, PlayCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TrainingCardProps {
    module: TrainingModule;
    onStart: (id: string) => void;
}

export function TrainingCard({ module, onStart }: TrainingCardProps) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Completed': return 'text-green-600 bg-green-100 dark:bg-green-900/20';
            case 'In Progress': return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20';
            default: return 'text-gray-600 bg-gray-100 dark:bg-gray-800';
        }
    };

    return (
        <div className="group flex flex-col rounded-xl border bg-card shadow-sm transition-all hover:shadow-md overflow-hidden">
            <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5 p-6 flex items-center justify-center">
                {module.status === 'Completed' ? (
                    <BadgeCheck className="h-12 w-12 text-primary" />
                ) : (
                    <PlayCircle className="h-12 w-12 text-primary/40 group-hover:text-primary transition-colors" />
                )}
            </div>

            <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between mb-2">
                    <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", getStatusColor(module.status))}>
                        {module.status}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {module.duration}
                    </span>
                </div>

                <h3 className="font-semibold text-lg mb-2">{module.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                    {module.description}
                </p>

                {module.status !== 'Completed' && (
                    <div className="w-full bg-secondary h-2 rounded-full mb-4 overflow-hidden">
                        <div
                            className="bg-primary h-full transition-all duration-300"
                            style={{ width: `${module.progress}%` }}
                        />
                    </div>
                )}

                <button
                    onClick={() => onStart(module.id)}
                    className="w-full inline-flex items-center justify-center rounded-md bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
                >
                    {module.status === 'Not Started' ? 'Start Module' : module.status === 'Completed' ? 'Review' : 'Continue'}
                </button>
            </div>
        </div>
    );
}
