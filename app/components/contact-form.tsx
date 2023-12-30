'use client'

import { FormEvent } from "react"

type FormInput = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
};

// interface ContactFormProps {
//     onSubmit: (formData: FormData) => Promise<Response>;
// }

export const ContactForm = () => {

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const data = new FormData(form);
        const dataObject = Object.fromEntries(data);
        console.log('data: ', dataObject);

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ dataObject })
            })

            if (!response.ok) {
                throw new Error(`Invalid response from fetch: ${response.status}`);
            }

            // await onSubmit(response);
            console.log('response: ', response)
            // alert('Thanks for contacting me. I will get back to you soon!');
            form.reset();
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
                        htmlFor="firstName"
                        className='mb-3 block text-base font-medium text-black dark:text-light'
                    >
                        First Name
                    </label>
                    <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                        required
                    >
                    </input>
                    <span></span>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="lastName"
                        className='mb-3 block text-base font-medium text-black dark:text-light'
                    >
                        Last Name
                    </label>
                    <input
                        id="lastName"
                        type="text"
                        name="lastName"
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
                        className='mb-3 block text-base font-medium text-black dark:text-light'
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
