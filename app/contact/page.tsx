import { NextPage } from "next";
import { ContactForm } from "../components/contact-form";

const Contact: NextPage = () => {
    return (
        <div className='flex flex-col items-center justify-center pt-32 pb-16 mb-12'>
            <ContactForm />
        </div>
    );
}

export default Contact;