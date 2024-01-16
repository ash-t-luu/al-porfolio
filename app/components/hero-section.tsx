import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { HiArrowDown } from "react-icons/hi"
import {
    AiOutlineGithub,
    AiOutlineLinkedin
} from 'react-icons/ai'

const HeroSection = (): JSX.Element => {
    return (
        <section id="home">
            <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
                <div className="md:mt-2 md:w-1/2">
                    <Image
                        src="/al-headshot.jpg"
                        alt=""
                        width={320}
                        height={320}
                        className="rounded-full shadow-2xl"
                        priority={true}
                    />
                </div>
                <div className="md:mt-2 md:w-3/5">
                    <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-6xl">
                        Hi, I&#39;m Ashley!
                    </h1>
                    <p className="text-lg mt-4 mb-6 md:text-2xl">
                        I&#39;m a{" "}
                        <span className="font-semibold text-highlight">
                            Software Engineer{" "}
                        </span>
                        based in Los Angeles, CA and I build software to
                        make life easier and more meaningful.
                    </p>
                    <div className="flex flex-row items-center md:justify-start sm:justify-center space-x-2 mb-1">
                        <a
                            href='https://github.com/ash-t-luu'
                            rel='noreferrer'
                            target='_blank'
                        >
                            <AiOutlineGithub
                                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-light"
                                size={30} />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/ashley-luu-98837620b/'
                            rel='noreferrer'
                            target='_blank'
                        >
                            <AiOutlineLinkedin
                                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-light"
                                size={30} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center text-center justify-center ">
                <Link href="#about" scroll={true}>
                    <HiArrowDown size={35} className="animate-bounce" />
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;