import Container from "../ui/Container";

export default function DeveloperIntro() {
  return (
    <Container narrow className="py-16 md:py-24">
      <p className="font-mono text-xs text-accent tracking-widest mb-4">THE DEVELOPER</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 leading-tight">
        From service floors and switchboards to the frontend.
      </h2>

      <p className="text-lg text-ink-soft mb-5 leading-relaxed">
        I'm Francesco — a frontend-heavy web developer focused on clean, fast,
        real-world products. Before code, I spent seven years in restaurants
        and hotels, and hold a technical diploma plus a qualification as an
        electrical operator. Both trades taught me the same thing: things
        either work under pressure, or they don't.
      </p>
      <p className="text-lg text-ink-soft leading-relaxed">
        Today I build with React, TypeScript, Tailwind CSS and Supabase —
        self-taught, currently deepening my fundamentals through freeCodeCamp,
        and shipping deployable projects rather than exercises.
      </p>
    </Container>
  );
}