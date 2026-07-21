type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export async function sendMessage(form: ContactForm) {
  try {
    const res = await fetch(
      "https://frkcbmslrhjdiiliulkr.supabase.co/functions/v1/contact",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );

    if (!res.ok) return "Something went wrong. Try again.";

    return "Message sent successfully!";
  } catch {
    return "Network error. Try again.";
  }
}