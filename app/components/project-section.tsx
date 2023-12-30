import { ProjectProps } from "@/app/types/types"
import { Project } from "@/app/types/types"
import Link from "next/link"
import { BsGithub } from "react-icons/bs"

export default async function ProjectSection({ projects }: ProjectProps) {
    return (
        <section id='projects'>
            <div className="mt-12 pb-12 md:pt-20">
                <h1 className="text-center font-bold text-4xl pb-6">Projects
                    <hr className="w-6 h-1 mx-auto my-4 bg-secondHighlight border-0 rounded mt-5"></hr>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                    {projects.map((project: Project, idx: number) => {
                        return (
                            <div key={idx} className="border border-highlight dark:border-highlight rounded">
                                <div className="p-5">
                                    <div className="my-3">
                                        <h1 className="text-2xl font-bold mb-4">{project.name}</h1>
                                        <p className="text-base leading-5 mb-4 text-neutral-900 dark:text-neutral-200">{project.description}</p>
                                        <div>
                                            <Link href={project.github} target='_blank'>
                                                <BsGithub
                                                    size={25}
                                                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
