; 'use client'

import { NextPage } from "next";
import { ContactForm } from "../components/contact-form";
// import { Resend } from "resend";

const Contact: NextPage = () => {
    // async function sendEmail(formData: FormData) {

    //     try {
    //         const emailContent = `            
    //         Name: ${formData.get("first-name")} ${formData.get("last-name")}
    //         Email: ${formData.get("email")}
    //         Message: ${formData.get("message")}
    //       `;

    //         const { data, error } = await resend.emails.send({
    //             from: 'Ashley <ashleyluu87@gmail.com>',
    //             to: ['ashleyluu87@gmail.com'],
    //             subject: 'New Contact Form Submission',
    //             text: emailContent,
    //         });

    //         if (error) {
    //             return Response.json({ error });
    //         }

    //         return Response.json(data);
    //     } catch (error) {
    //         return Response.json({ error });
    //     }
    // }

    return (
        <div className='flex flex-col items-center justify-center pt-32 pb-16 mb-12'>
            <a href="mailto:ashleyluu87@gmail.com?Subject=ContactForm" target="_top">Let's Connect!</a>
            {/* <ContactForm /> */}
        </div>
    );
}

export default Contact;