type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export function validateContactForm({ name, email, message }: ContactForm) {
  const errors: string[] = [];

  if (!name.trim()) errors.push("Name is required.");
  if (!email.trim()) errors.push("Email is required.");
  if (!message.trim()) errors.push("Message is required.");

  return errors;
}