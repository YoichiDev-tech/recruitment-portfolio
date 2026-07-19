import { useState } from "react";
import { validateContactForm } from "../../features/contact/validateContactForm";
import { sendMessage } from "../../features/contact/sendMessage";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const errors = validateContactForm(form);
        if (errors.length > 0) {
            setStatus(errors[0]);
            return;
        }

        const result = await sendMessage(form);
        setStatus(result);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="border p-3 rounded"
                required
            />

            <input
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="border p-3 rounded"
                required
            />

            <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className="border p-3 rounded h-32"
                required
            />

            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Send Message
            </button>

            {status && <p className="text-sm text-gray-700 mt-2">{status}</p>}
        </form>
    );
}