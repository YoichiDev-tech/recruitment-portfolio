import { useState } from "react";
import { validateContactForm } from "../../features/contact/validateContactForm";
import { sendMessage } from "../../features/contact/sendMessage";
import { validateEmail } from "../../utils/validateEmail";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const errors = validateContactForm(form);
    if (form.email && !validateEmail(form.email)) {
      errors.push("Enter a valid email address.");
    }
    if (errors.length > 0) {
      setStatus(errors.join(" "));
      return;
    }

    setSending(true);
    const result = await sendMessage(form);
    setSending(false);
    setStatus(result);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        id="name"
        name="name"
        label="Name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your name"
      />
      <Input
        id="email"
        name="email"
        type="email"
        label="Email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your email"
      />
      <Textarea
        id="message"
        name="message"
        label="Message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your message"
        rows={5}
      />
      <Button type="submit" variant="primary" disabled={sending} className="w-fit">
        {sending ? "Sending…" : "Send message"}
      </Button>
      {status && <p className="text-sm text-ink-soft font-mono">{status}</p>}
    </form>
  );
}