import { ProjectProps } from "@/app/types/types";
import { Project } from "@/app/types/types";
import Link from "next/link";

export default async function ProjectSection({ projects }: ProjectProps) {
    return (
        <section id='projects'>
            <div>
                <h1>Projects</h1>
                {projects.map((item: Project, idx: number) => {
                    return (
                        <div key={idx}>
                            {item.id}
                            {item.description}
                            {item.name}
                            <Link href={item.github}>
                                View on Github
                            </Link>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
