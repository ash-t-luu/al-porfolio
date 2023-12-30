import { Resend } from "resend";
import { NextRequest } from 'next/server';
import * as z from 'zod';
import { INTERNALS } from "next/dist/server/web/spec-extension/request";
import Contact from "@/app/contact/page";
import { toast } from "sonner";

const sendRouteSchema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(2),
});


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    console.log('Server route hit!');
    // const formData = await req.json();
    // console.log(formData);
    const { firstName, lastName, email, message } = await req
        .json()
        .then((body) => sendRouteSchema.parse(body));

    try {
        const { data, error } = await resend.emails.send({
            from: `${firstName} ${lastName} <${email}>`,
            to: ['ashleyluu87@gmail.com'],
            subject: 'New Contact Form Submission',
            text: `${message}`
        });

        if (error) {
            toast.error('Error sending message. Please try again.')
            return Response.json({ error });
        }

        console.log('data in route: ', data);
        if (data) {
            toast.success('Message sent successfully!')
        }
        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}