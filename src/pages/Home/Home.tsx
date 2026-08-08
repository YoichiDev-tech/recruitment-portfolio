import profile_pic1 from '../../assets/images/profile_pic1.jpg'
import Container from '../../components/ui/Container'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import { stack } from '../../data/stack'

export default function Home() {
  return (
    <Container className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-mono text-xs text-amber tracking-widest mb-4 animate-fade-up">
            JUNIOR FRONTEND DEVELOPER
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-[1.05] text-offwhite animate-fade-up-delay-1">
            Building real products with precision.
          </h1>
          <p className="text-lg text-slate mb-5 leading-relaxed animate-fade-up-delay-2">
            I'm Francesco Cole — a frontend-heavy web developer focused on shipping
            fast, responsive, production-ready applications with React, TypeScript,
            Tailwind, and Supabase.
          </p>
          <p className="text-lg text-slate mb-9 leading-relaxed animate-fade-up-delay-2">
            Before code, I spent years in hospitality and as a qualified electrical
            operator — trades where precision and things actually working aren't optional.
            That's the standard I hold my code to now.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
            <Button to="/projects" variant="primary">View my work</Button>
            <Button to="/contact" variant="secondary">Get in touch</Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 animate-fade-up-delay-1">
          <img
            src={profile_pic1}
            alt="Portrait of O. Francesco Cole"
            className="w-full max-w-sm h-80 object-cover rounded-xl shadow-2xl border border-white/8"
          />
          <Card className="w-full max-w-sm !p-5">
            <p className="font-mono text-[11px] text-slate mb-3 tracking-widest">CURRENT STACK</p>
            <div className="grid grid-cols-2 gap-2.5">
              {stack.map(({ name, icon: Icon, color }) => (
                <div key={name} className="switch-plate !p-2">
                  <span className="switch-toggle" aria-hidden="true" />
                  <Icon size={15} color={color} aria-hidden="true" />
                  <span className="text-xs font-mono text-offwhite">{name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
}