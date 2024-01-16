'use client'

import { toast } from "sonner"
import * as React from 'react'
import * as z from 'zod';

const schema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(1),
});


export const ContactForm = () => {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        const form = document.querySelector('#my-form') as HTMLFormElement;
        e.preventDefault();

        const data = new FormData(form);
        const action = e.currentTarget.action;

        const validate = schema.safeParse({
            name: data.get('Name'),
            email: data.get('Email'),
            message: data.get('Message')
        })

        if (!validate.success) {
            toast.error('Invalid form input(s).');
            return;
        }

        fetch(action, {
            method: 'POST',
            body: data,
        })
            .then(() => {
                form.reset();
                toast.success('Message sent! I will get back to you shortly.');
            })
            .catch((err) => {
                console.error('error: ', err);
                toast.error('We cannot submit the form at the moment. Try again later.');
            });
    }

    return (
        <div className="md:w-4/12 content">
            < h1 className="font-bold text-center text-2xl pb-3 text-black dark:text-white" > Let&#39;s Connect!</h1 >
            <hr className="w-6 h-1 mx-auto my-4 bg-secondHighlight border-0 rounded mt-0.5"></hr>
            <p className="text-center text-sm pb-10">Please feel free to reach out to me through this form, and I will respond to your inquiry as soon as possible. Thank you!</p>
            <form id="my-form" method="POST" action="https://script.google.com/macros/s/AKfycbzNQ9ZvUtqOGhvD909RMP83-SCcSGMQpVCD_tWwoSxqUz7RDSvQzoEty8Y8cKblryDe/exec" onSubmit={handleSubmit} className="bg-gray-100 border-0 rounded-lg px-7 py-5 dark:bg-zinc-600">
                <div className="mb-5">
                    <label
                        htmlFor="Name"
                        className='mb-3 block text-base font-medium text-black dark:text-light'
                    >
                        Name
                    </label>
                    <input
                        id="Name"
                        type="text"
                        name="Name"
                        placeholder="Name"
                        autoComplete="off"
                        aria-autocomplete="inline"
                        className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                        required
                    />
                    <span></span>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="Email"
                        className='mb-3 block text-base font-medium text-black dark:text-light'
                    >
                        Email Address
                    </label>
                    <input
                        id="Email"
                        type="email"
                        name="Email"
                        autoComplete="off"
                        aria-autocomplete="inline"
                        placeholder="your-email@domain.com"
                        className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                        required
                    />
                    <span></span>
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="Message"
                        className="mb-3 block text-base font-medium text-black dark:text-neutral-100"
                    >
                        Message
                    </label>
                    <textarea
                        id="Message"
                        rows={4}
                        name="Message"
                        placeholder="Type your message..."
                        className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                        required
                    />
                </div>
                <div>
                    <button className='hover:shadow-form rounded-md bg-violet-500 py-3 px-8 text-base font-semibold text-white outline-none hover:bg-violet-600' type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div >
    )
}