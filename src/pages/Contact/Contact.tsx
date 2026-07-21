import ContactForm from "../../components/portfolio/ContactForm";

export default function Contact() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 cursor-default">
            <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

            <p className="mb-6 text-lg">
                Tell me about your project. I'll get back to you within 24 hours.
            </p>

            <ContactForm />
        </div>
    );
}