import * as React from 'react';
import {
    AiOutlineGithub,
    AiOutlineLinkedin
} from 'react-icons/ai'

export const Footer = () => {
    return (
        <><footer className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
            <hr className='w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0'></hr>
            <div className='mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between'>
                <div className='flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-light'>
                    <a href='/' className='hover:no-underline'>@ 2024 Ashley Luu</a>
                </div>
                <div className="flex flex-row items-center justify-center space-x-2 mb-1">
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
                        href='https://www.linkedin.com/in/ashley-t-luu/'
                        rel='noreferrer'
                        target='_blank'
                    >
                        <AiOutlineLinkedin
                            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-600 dark:text-light"
                            size={30} />
                    </a>
                </div>
            </div>
        </footer></>
    )
}