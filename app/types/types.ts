export type Project = {
    id: number;
    name: string;
    description: string;
    github: string;
}

export type ProjectProps = {
    projects: Project[];
}