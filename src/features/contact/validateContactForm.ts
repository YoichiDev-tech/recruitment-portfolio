export function validateContactForm({ name, email, message }) {
    const errors = [];

    if (!name.trim()) errors.push("Name is required.");
    if (!email.includes("@")) errors.push("Email is invalid.");
    if (message.length < 10) errors.push("Message must be at least 10 characters.");

    return errors;
}