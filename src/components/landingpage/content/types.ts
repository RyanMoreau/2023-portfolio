export type PageContent = {
    id: string;
    title: string;
    description: string;
    company?: string;
    image?: string;
    link?: string;
};

export type Skills = Partial<PageContent> & {
    skills: string[];
};
