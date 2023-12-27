import React from "react"
import SkillItem from "./skill-item"

type Skill = {
    skill: string
}

const skills: Skill[] = [
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

const AboutSection = (): JSX.Element => {
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
                            My journey began at California State University, Long Beach, where I earned a BA in History in 2022. I shifted gears from the events industry to immerse myself in the world of software engineering. Embracing a rapid learning curve, I successfully completed a Coding Advanced Immersive Program, paving the way for my transition into the tech sphere.
                        </p>
                        <br />
                        <p>
                            Beyond code and algorithms, I find joy in a spectrum of hobbies that enrich my life. Whether strumming melodies on my guitar, delving into the latest tech trends, or embarking on travel adventures, I am a firm believer in embracing diverse experiences and fostering continuous personal and professional growth.
                        </p>
                        <br />
                        <p>
                            I am committed to unraveling my {" "}
                            <span className="font-bold text-emerald-500">
                                boundless potential and passion
                            </span>{" "}
                            within the dynamic tech realm. I am excited to see where my career takes me and am
                            always open to new opportunities. 🙂
                        </p>
                    </div>
                    <div className="text-center md:w-1/2 md:text-left">
                        <h1 className="text-2xl font-bold mb-6">My Skills</h1>
                        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                            {skills.map((item, idx) => {
                                return (
                                    <SkillItem skill={item.skill} key={idx} idx={idx} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection