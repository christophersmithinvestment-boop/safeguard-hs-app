import { HSUpdate } from '@/types/updates';
import { UpdateCard } from '@/components/updates/UpdateCard';
import { BellRing } from 'lucide-react';

const MOCK_UPDATES: HSUpdate[] = [
    {
        id: '1',
        title: 'Emergency Fire Drill Scheduled',
        content: 'Please be advised that a mandatory fire drill will be conducted this Friday at 10:00 AM. All employees must evacuate to the designated assembly points immediately upon hearing the alarm.',
        date: '2026-02-15T09:00:00Z',
        category: 'Alert',
        author: 'Safety Committee',
        important: true,
    },
    {
        id: '2',
        title: 'Updated PPE Regulations',
        content: 'New guidelines for Personal Protective Equipment (PPE) in the warehouse have been released. High-visibility vests are now mandatory at all times in loading zones.',
        date: '2026-02-14T14:30:00Z',
        category: 'Regulation',
        author: 'Compliance Officer',
        important: false,
    },
    {
        id: '3',
        title: 'Elevator B Maintenance',
        content: 'Elevator B in the West Wing will be out of service for scheduled maintenance on Saturday, Feb 20th. Please use the freight elevator or stairs.',
        date: '2026-02-12T11:15:00Z',
        category: 'Maintenance',
        author: 'Facilities Management',
        important: false,
    },
    {
        id: '4',
        title: 'Monthly Safety Awards',
        content: 'Congratulations to the Logistics Team for achieving 200 days without a lost-time incident! Verification audit completed successfully.',
        date: '2026-02-10T16:00:00Z',
        category: 'News',
        author: 'HR Department',
        important: false,
    },
];

export default function UpdatesPage() {
    return (
        <div className="container mx-auto max-w-4xl p-6 lg:p-8">
            <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <BellRing className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">H&S Updates</h1>
                    <p className="text-muted-foreground">
                        Stay informed with the latest safety announcements and regulations.
                    </p>
                </div>
            </div>

            <div className="space-y-6">
                {MOCK_UPDATES.map((update) => (
                    <UpdateCard key={update.id} update={update} />
                ))}
            </div>
        </div>
    );
}
