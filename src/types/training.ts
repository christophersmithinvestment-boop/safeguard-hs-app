export type TrainingStatus = 'Not Started' | 'In Progress' | 'Completed';

export interface TrainingModule {
    id: string;
    title: string;
    description: string;
    duration: string; // e.g., "30 min"
    status: TrainingStatus;
    progress: number; // 0-100
    dueDate: string;
    category: 'Safety' | 'Compliance' | 'Technical' | 'Health';
    thumbnailUrl?: string; // Optional for now
}
