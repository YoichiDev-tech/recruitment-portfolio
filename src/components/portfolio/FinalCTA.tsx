import Container from "../ui/Container";
import Button from "../ui/Button";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-line py-20 md:py-28 text-center">
      <div
        className="absolute -top-24 right-1/2 translate-x-1/2 md:right-10 md:translate-x-0 w-72 h-72 rounded-full bg-accent-soft blur-3xl opacity-70"
        aria-hidden="true"
      />
      <Container narrow className="relative">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Let's build something that works.
        </h2>
        <p className="text-lg text-ink-soft mb-10 max-w-lg mx-auto leading-relaxed">
          Open to trainee and junior frontend roles in Italy, and remote
          — plus freelance work through BrightWave Studio.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Button to="/contact" variant="secondary" className="border-accent text-accent">
            Get in touch
          </Button>
          <a
            href="https://www.linkedin.com/in/o-francesco-derek-cole-860b59427/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-soft hover:text-accent transition font-medium"
          >
            LinkedIn
          </a>
          <a
            href="mailto:yoichi_dev@proton.me"
            className="text-ink-soft hover:text-accent transition font-medium"
          >
            Email
          </a>
        </div>
      </Container>
    </section>
  );
}