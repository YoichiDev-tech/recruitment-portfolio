export default function Footer() {
  return (
    <footer className="w-full border-t border-white/8 py-8 bg-graphite">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-slate">
          © 2026 O. Francesco Cole — built with React &amp; Tailwind
        </p>

        <div className="flex items-center gap-6 text-sm">
          
          <a
            href="https://github.com/YoichiDev-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-amber transition"
          >
            GitHub
          </a>
          
          <a
            href="https://www.linkedin.com/in/o-francesco-derek-cole-860b59427/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-amber transition"
          >
            LinkedIn
          </a>
          
          <a
            href="mailto:yoichi_dev@proton.me"
            className="text-slate hover:text-amber transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}