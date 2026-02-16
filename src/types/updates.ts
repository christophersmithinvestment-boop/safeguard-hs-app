export type UpdateCategory = 'Regulation' | 'Alert' | 'News' | 'Maintenance';

export interface HSUpdate {
    id: string;
    title: string;
    content: string;
    date: string;
    category: UpdateCategory;
    author: string;
    important: boolean;
}
