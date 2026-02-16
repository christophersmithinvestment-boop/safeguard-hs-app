'use client';

import { useState } from 'react';
import { TrainingModule } from '@/types/training';
import { TrainingCard } from '@/components/training/TrainingCard';
import { Search } from 'lucide-react';

const MOCK_MODULES: TrainingModule[] = [
    {
        id: '1',
        title: 'Fire Safety Basics',
        description: 'Learn the fundamental procedures for fire prevention and emergency evacuation. Mandatory for all employees.',
        duration: '20 min',
        status: 'Completed',
        progress: 100,
        dueDate: '2023-12-31',
        category: 'Safety',
    },
    {
        id: '2',
        title: 'Workplace Ergonomics',
        description: 'Best practices for setting up your workstation to prevent strain and injury.',
        duration: '15 min',
        status: 'In Progress',
        progress: 45,
        dueDate: '2024-03-15',
        category: 'Health',
    },
    {
        id: '3',
        title: 'Hazardous Materials Handling',
        description: 'Proper protocols for handling, storing, and disposing of hazardous chemical substances.',
        duration: '45 min',
        status: 'Not Started',
        progress: 0,
        dueDate: '2024-04-01',
        category: 'Safety',
    },
    {
        id: '4',
        title: 'First Aid Refresher',
        description: 'Annual refresher course on basic first aid and CPR techniques.',
        duration: '60 min',
        status: 'Not Started',
        progress: 0,
        dueDate: '2024-05-20',
        category: 'Health',
    },
];

export default function TrainingPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredModules = MOCK_MODULES.filter(module =>
        module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        module.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleStartModule = (id: string) => {
        console.log(`Starting module ${id}`);
        alert(`Starting module: ${MOCK_MODULES.find(m => m.id === id)?.title}`);
    };

    return (
        <div className="container mx-auto p-6 lg:p-8">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Training Center</h1>
                    <p className="text-muted-foreground">
                        Complete your mandatory safety training and view your progress.
                    </p>
                </div>
                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                        type="search"
                        placeholder="Search modules..."
                        className="h-9 w-full rounded-md border bg-background pl-9 pr-4 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring sm:w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredModules.map((module) => (
                    <TrainingCard key={module.id} module={module} onStart={handleStartModule} />
                ))}
            </div>
        </div>
    );
}
