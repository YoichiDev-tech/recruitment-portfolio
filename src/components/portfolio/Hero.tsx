export default function Hero() {
  return (
    <section className="text-left py-4 mb-4">
      <p className="font-mono text-xs text-amber tracking-widest mb-4 animate-fade-up">WORK LOG</p>
      <h1 className="font-display text-4xl md:text-5xl font-bold mb-5 text-offwhite animate-fade-up-delay-1">
        Projects &amp; prototypes
      </h1>
      <p className="text-lg text-slate max-w-2xl leading-relaxed animate-fade-up-delay-2">
        Real, deployed builds — not tutorials. Each entry below is a shipped
        project with a live link, logged the way I'd log any job: what it is,
        what it does, and proof it runs.
      </p>
    </section>
  );
}