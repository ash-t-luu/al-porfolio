import React from "react"
import Image from "next/image"

const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "React" },
    { skill: "Redux" },
    { skill: "Next.js" },
    { skill: "jQuery" },
    { skill: "Tailwind CSS" },
    { skill: "Styled Components" },
    { skill: "Sass" },
    { skill: "SQL" },
    { skill: "Node" },
    { skill: "Express" },
    { skill: "PostgreSQL" },
    { skill: "MongoDB" },
    { skill: "Webpack" },
    { skill: "AWS Services" },
    { skill: "Docker" },
    { skill: "Git" },
    { skill: "GitHub" },
    { skill: "Github Actions" },
]

const AboutSection = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-28 md:pb-48">
                <h1 className="text-center font-bold text-4xl">
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-emerald-500 border-0 rounded"></hr>
                </h1>

                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2 ">
                        <p>
                            Hi, my name is Ashley and I am a{" "}
                            <span className="font-bold">{"highly ambitious"}</span>,
                            <span className="font-bold">{" self-motivated"}</span>, and
                            <span className="font-bold">{" driven"}</span> software engineer
                            based in Orange County, CA.
                        </p>
                        <br />
                        <p>
                            I graduated from California State University, Long Beach in 2022
                            with a BA in History. I transitioned from working in the events industry to the tech industry, focusing on software engineering and development. I graduated from a Coding Advanced Immersive Program, and have been working towards my goals in the tech industry since.
                        </p>
                        <br />
                        <p>
                            I have a wide range of hobbies and passions that keep me busy.
                            From playing guitar, reading upon the latest tech trends, and traveling,
                            I am always seeking new experiences and love to keep myself
                            engaged and learning new things.
                        </p>
                        <br />
                        <p>
                            I believe that you should{" "}
                            <span className="font-bold text-teal-500">
                                never stop growing
                            </span>{" "}
                            and that&#39;s what I strive to do, I have a passion for
                            technology and a desire to always push the limits of what is
                            possible. I am excited to see where my career takes me and am
                            always open to new opportunities. 🙂
                        </p>
                    </div>
                    <div className="text-center md:w-1/2 md:text-left">
                        <h1 className="text-2xl font-bold mb-6">My Skills</h1>
                        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                            {skills.map((item, idx) => {
                                return (
                                    <p
                                        key={idx}
                                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                    >
                                        {item.skill}
                                    </p>
                                )
                            })}
                            {/* <div>

                                <img src='https://skillicons.dev/icons?i=js,html,css,nextjs,react,ts,redux,jquery,babel,tailwind,sass,styledcomponents' alt='tech-stack-logos' width={200} height={200} />
                            </div>

                            <div>

                                <img src='https://skillicons.dev/icons?i=docker,aws,githubactions' alt='tech-stack-logos' width={200} height={200} />
                            </div>

                            <div>

                                <img src='https://skillicons.dev/icons?i=nodejs,postgres,mongodb,express,webpack' alt='tech-stack-logos' width={200} height={200} />
                            </div>

                            <div>

                                <img src='https://skillicons.dev/icons?i=,git,bash,linux,powershell,vscode,github,' alt='tech-stack-logos' width={200} height={200} />
                            </div> */}

                        </div>
                        {/* <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection