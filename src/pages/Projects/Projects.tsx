import Hero from '../../components/portfolio/Hero';
import Container from '../../components/ui/Container';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { formatDate } from '../../utils/formatDate';

type Entry = {
  code: string;
  title: string;
  desc: string;
  stack: string;
  href: string;
  status: "live" | "prototype";
  logged: string;
};

const featured: Entry[] = [
  {
    code: "LOG-01",
    title: "Invoice Generator App",
    desc: "A professional, client-ready invoice generator for freelancers and small businesses — clean branded invoices exported as high-quality PDFs.",
    stack: "React · TypeScript · Supabase",
    href: "https://invoice-generator-41ubdd5uf-yoichidev-techs-projects.vercel.app",
    status: "live",
    logged: "2026-05-01",
  },
  {
    code: "LOG-02",
    title: "BrightWave Studio",
    desc: "A modern, responsive site for a creative agency — portfolio, services, and selectable templates, built for clarity and usability.",
    stack: "React · TypeScript · Tailwind",
    href: "https://bright-wave-studio.vercel.app",
    status: "live",
    logged: "2026-06-01",
  },
  {
    code: "LOG-03",
    title: "ServeSync",
    desc: "A workflow automation tool for hospitality teams — real-time task tracking and a clean interface, built for small and large teams alike.",
    stack: "React · TypeScript · Supabase · Vercel",
    href: "https://my-serve-sync.vercel.app",
    status: "live",
    logged: "2026-07-01",
  },
];

const prototypes: Entry[] = [
  {
    code: "LOG-04",
    title: "Waste Opportunity Finder",
    desc: "A fast, user-friendly app helping businesses identify reuse, resale, or recycling opportunities for their waste output.",
    stack: "React · TypeScript",
    href: "https://wof-form-eta.vercel.app",
    status: "prototype",
    logged: "2026-07-15",
  },
];

function EntryCard({ entry, delay = 0 }: { entry: Entry; delay?: number }) {
  return (
    <Card
      interactive
      className="flex flex-col gap-4 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-amber tracking-widest">{entry.code}</span>
        <Badge tone={entry.status === "live" ? "amber" : "wire"}>
          {entry.status === "live" ? "deployed" : "prototype"}
        </Badge>
      </div>
      <p className="font-mono text-[11px] text-slate -mt-2">logged {formatDate(entry.logged)}</p>
      <h3 className="font-display text-xl font-semibold text-offwhite">{entry.title}</h3>
      <p className="text-slate leading-relaxed">{entry.desc}</p>
      <p className="font-mono text-xs text-slate">{entry.stack}</p>
      <Button href={entry.href} variant="primary" className="w-fit mt-2">
        View project →
      </Button>
    </Card>
  );
}

export default function Projects() {
  return (
    <Container className="py-16">
      <Hero />

      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((entry, i) => (
            <EntryCard key={entry.code} entry={entry} delay={i * 100} />
          ))}
        </div>
      </section>

      <section>
        <p className="font-mono text-xs text-slate tracking-widest mb-6">PROTOTYPES</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {prototypes.map((entry, i) => (
            <EntryCard key={entry.code} entry={entry} delay={i * 100} />
          ))}
        </div>
      </section>
    </Container>
  );
}