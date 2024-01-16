import { NextPage } from "next";
import { ContactForm } from "../components/contact-form";

const Contact: NextPage = () => {
    return (
        <div className='contact flex flex-col items-center justify-center pt-32'>
            <ContactForm />
        </div>
    );
}

export default Contact;