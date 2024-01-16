/* no longer using this file for email validation */

// import { Resend } from "resend";
// import { NextRequest } from 'next/server';
// import * as z from 'zod';
// import { toast } from "sonner";
// import { parse } from "path";

// const sendRouteSchema = z.object({
//     name: z.string().min(2),
//     email: z.string().email(),
//     message: z.string().min(2),
// });

// export async function POST(req: NextRequest) {

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: NextRequest) {
//     console.log('Server route hit!');

//     try {
//         const body = await req.json();
//         const { firstName, lastName, email, message } = sendRouteSchema.parse(body);

//         const { data, error } = await resend.emails.send({
//             from: `${firstName} ${lastName} <${email}>`,
//             to: ['ashleyluu87@gmail.com'],
//             subject: 'New Contact Form Submission',
//             text: `${message}`
//         });

//         if (error) {
//             toast.error('Error sending message. Please try again.')
//             return Response.json({ error });
//         }

//         console.log('data in route: ', data);
//         if (data) {
//             toast.success('Message sent successfully! I will get back to you shortly.')
//         }
//         return Response.json(data);
//     } catch (error) {
//         console.error('Error parsing JSON from request:', error);
//         return Response.json({ error });
//     }
// }