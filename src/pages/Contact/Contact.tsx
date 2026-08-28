import ContactForm from "../../components/portfolio/ContactForm";
import Container from "../../components/ui/Container";
import Card from "../../components/ui/Card";

export default function Contact() {
  return (
    <Container narrow className="py-16">
      <p className="font-mono text-xs text-accent tracking-widest mb-4">CONTACT</p>
      <h1 className="font-display text-4xl font-bold mb-5 text-ink">Let's talk.</h1>
      <p className="mb-10 text-lg text-ink-soft leading-relaxed">
        Open to junior frontend roles, internships, and freelance work —
        in-office, hybrid, or remote. Currently in Poland,
        considering relocating for job opportunities.
      </p>

      <Card className="mb-10 flex flex-col sm:flex-row gap-4 sm:gap-8 font-mono text-sm">
        <a href="mailto:yoichi_dev@proton.me" className="text-ink hover:text-accent transition">
          yoichi_dev@proton.me
        </a>

        <a
          href="https://www.linkedin.com/in/o-francesco-derek-cole-860b59427/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink hover:text-accent transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/YoichiDev-tech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink hover:text-accent transition"
        >
          GitHub
        </a>
      </Card>

      <ContactForm />
    </Container>
  );
}