import { HSUpdate } from '@/types/updates';
import { AlertCircle, Calendar, Info, Megaphone, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UpdateCardProps {
    update: HSUpdate;
}

export function UpdateCard({ update }: UpdateCardProps) {
    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'Alert': return <AlertCircle className="h-5 w-5 text-destructive" />;
            case 'Regulation': return <Info className="h-5 w-5 text-blue-500" />;
            case 'Maintenance': return <Wrench className="h-5 w-5 text-orange-500" />;
            default: return <Megaphone className="h-5 w-5 text-primary" />;
        }
    };

    return (
        <div className={cn(
            "flex flex-col gap-4 rounded-xl border p-6 shadow-sm transition-all hover:shadow-md",
            update.important ? "bg-red-50/50 border-red-200 dark:bg-red-900/10 dark:border-red-900/50" : "bg-card"
        )}>
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full bg-background shadow-sm",
                        update.important && "bg-destructive/10"
                    )}>
                        {getCategoryIcon(update.category)}
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                {update.category}
                            </span>
                            {update.important && (
                                <span className="inline-flex items-center rounded-full bg-destructive/10 px-2 py-0.5 text-xs font-medium text-destructive">
                                    Important
                                </span>
                            )}
                        </div>
                        <h3 className="text-lg font-semibold leading-none tracking-tight mt-1">
                            {update.title}
                        </h3>
                    </div>
                </div>
                <div className="flex items-center text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">
                    <Calendar className="mr-1 h-3 w-3" />
                    {new Date(update.date).toLocaleDateString()}
                </div>
            </div>

            <div className="pl-13">
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {update.content}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Posted by:</span> {update.author}
                </div>
            </div>
        </div>
    );
}
