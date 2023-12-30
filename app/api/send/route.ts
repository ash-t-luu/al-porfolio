import { Resend } from "resend";
import { NextRequest } from 'next/server';

// create new instance of resend with the arg of api key
const resend = new Resend('re_W6VdCjAV_HDEon4VeRKmcXyb9Zui4tVkr');

export async function POST(req: NextRequest) {
    console.log('Server route hit!');
    const formData = await req.json();
    console.log(formData);
    const { firstName, lastName, email, message } = formData.dataObject;
    console.log('first,', firstName);


    try {
        //     const emailContent = `            
        //     Name: ${formData.get("firstName")} ${formData.get("lastName")}
        //     Email: ${formData.get("email")}
        //     Message: ${formData.get("message")}
        //   `;

        const { data, error } = await resend.emails.send({
            from: `${firstName} ${lastName} <${email}>`,
            to: ['ashleyluu87@gmail.com'],
            subject: 'New Contact Form Submission',
            text: `${message}`
        });

        if (error) {
            return Response.json({ error });
        }

        console.log('data in route: ', data);
        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}