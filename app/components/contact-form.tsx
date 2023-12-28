'use client'

import { URLSearchParams } from "next/dist/compiled/@edge-runtime/primitives/url";
import { FormEvent } from "react"

type FormInput = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
};

export const ContactForm = () => {
    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const data: FormInput = new FormData(form);
        console.log('data: ', data);

        try {
            const response = await fetch('/api/email', {
                method: 'POST',
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`Invalid response from fetch: ${response.status}`);
            }

            alert('Thanks for contacting me. I will get back to you soon!');
        } catch (error) {
            console.error(error);
            alert('We cannot submit the form at the moment. Try again later.');
        }
    }

    return (
        <div className="md:w-full` w-1/3">
            <h1 className="font-bold text-center text-2xl pb-6 text-black dark:text-white">Let&#39;s Connect!</h1>
            <form method="post" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label
                        htmlFor="first-name"
                        className='mb-3 block text-base font-medium text-black dark:text-neutral-100'
                    >
                        First Name
                    </label>
                    <input
                        id="first-name"
                        type="text"
                        name="first-name"
                        placeholder="First Name"
                        className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                        required
                    >
                    </input>
                    <span></span>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="last-name"
                        className='mb-3 block text-base font-medium text-black dark:text-neutral-100'
                    >
                        Last Name
                    </label>
                    <input
                        id="last-name"
                        type="text"
                        name="last-name"
                        placeholder="Last Name"
                        className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                        required
                    >
                    </input>
                    <span></span>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className='mb-3 block text-base font-medium text-black dark:text-neutral-100'
                    >
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="your-email@domain.com"
                        className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                        required
                    >
                    </input>
                    <span></span>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="message"
                        className="mb-3 block text-base font-medium text-black dark:text-neutral-100"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        name="message"
                        placeholder="Type your message..."
                        className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                        required
                    ></textarea>
                </div>
                <div>
                    <button className='hover:shadow-form rounded-md bg-violet-500 py-3 px-8 text-base font-semibold text-white outline-none hover:bg-violet-600' type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
