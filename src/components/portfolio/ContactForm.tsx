import { useState } from "react";
import { validateContactForm } from "../../features/contact/validateContactForm";
import { sendMessage } from "../../features/contact/sendMessage";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const errors = validateContactForm(form);
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    const result = await sendMessage(form);
    alert(result);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your name"
        className="border p-2"
      />

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your email"
        className="border p-2"
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your message"
        className="border p-2"
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Send
      </button>
    </form>
  );
}