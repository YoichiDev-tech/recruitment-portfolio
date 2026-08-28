import profile_pic1 from "../../assets/images/profile_pic1.jpg";
import Button from "../ui/Button";

export default function HeroMain() {
  return (
    <section className="pt-14 pb-10 md:pt-20 md:pb-14 flex flex-col items-center text-center">
      <div className="portrait-halo mt-6 mb-20 animate-fade-up">
        <img
          src={profile_pic1}
          alt="Portrait of O. Francesco Cole"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-paper-raised shadow-xl"
        />

        <span className="orbit-track" aria-hidden="true">
          <span className="orbit-dot" />
        </span>
      </div>

      <p className="font-mono text-xs text-accent tracking-widest mb-8 animate-fade-up-delay-1">
        👋 HELLO, I'M FRANCESCO
      </p>

      <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.08] mb-6 max-w-3xl animate-fade-up-delay-2">
        Building interfaces that{" "}
        <span className="underline decoration-accent decoration-4 underline-offset-4">
          hold up
        </span>{" "}
        <span className="text-accent">under real use.</span>
      </h1>

      <p className="text-lg text-ink-soft max-w-xl mb-3 leading-relaxed animate-fade-up-delay-3">
        I'm a frontend-focused web developer working in React, TypeScript,
        Tailwind CSS and Supabase — shipping fast, responsive, production-ready
        products.
      </p>
      <p className="font-mono text-sm text-accent mb-9 animate-fade-up-delay-3">
        Seven years in hospitality taught me what "it has to work, tonight" means.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up-delay-3">
        <Button to="/projects" variant="primary">
          View my work →
        </Button>
        <Button to="/contact" variant="secondary">
          Let's connect
        </Button>
      </div>
    </section>
  );
}