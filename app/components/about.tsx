import React from "react"
import SkillItem from "./skill-item"

type Skill = {
    skill: string
}

const skills: Skill[] = [
    { skill: "HTML5" },
    { skill: "CSS3" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "React.js" },
    { skill: "Redux" },
    { skill: "Next.js" },
    { skill: "TailwindCSS" },
    { skill: "Styled Components" },
    { skill: "Sass" },
    { skill: "Node.js" },
    { skill: "Express.js" },
    { skill: "SQL" },
    { skill: "MySQL" },
    { skill: "PostgreSQL" },
    { skill: "MongoDB" },
    { skill: "Webpack" },
    { skill: "AWS (S3, EC2, EBN)" },
    { skill: "Azure Pipelines" },
    { skill: "Docker" },
    { skill: "Jest" },
    { skill: "Mocha" },
    { skill: "Chai" },
    { skill: "Git" },
    { skill: "GitHub" },
]

const AboutSection = (): JSX.Element => {
    return (
        <section id="about" className="section">
            <div className="mt-12 pb-12 md:pt-28">
                <h1 className="text-center font-bold text-4xl pb-6">
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-secondHighlight border-0 rounded mt-5"></hr>
                </h1>

                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2 ">
                        <p>
                            Hi, I&#39;m Ashley and I am a{" "}
                            <span className="font-bold text-highlight">{"highly ambitious"}</span>,
                            <span className="font-bold text-highlight">{" self-motivated"}</span>, and
                            <span className="font-bold text-highlight">{" driven"}</span> software engineer
                            based in Los Angeles, CA.
                        </p>
                        <br />
                        <p>
                            My journey began at California State University, Long Beach, where I earned a BA in History. I successfully completed a Coding Advanced Immersive Program, paving the way for my transition into the tech sphere. I&#39;m adept at quickly learning new technologies and have experience in building web applications to create efficient, expansible user-curated experiences.
                        </p>
                        <br />
                        <p>
                            Beyond code and algorithms, I find joy in a spectrum of hobbies that enrich my life. Whether strumming melodies on my guitar, delving into the latest tech trends, or embarking on travel adventures, I am a firm believer in embracing diverse experiences and fostering continuous personal and professional growth.
                        </p>
                        <br />
                        <p>
                            I am committed to unraveling my {" "}
                            <span className="font-bold bg-gradient-to-r from-violet-500 via-green-500 to-pink-600 inline-block text-transparent bg-clip-text">
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