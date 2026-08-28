export default function Footer() {
  return (
    <footer className="w-full border-t border-line py-8 bg-paper">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-ink-faint">
          © 2026 O. Francesco Cole — built with React, TypeScript &amp; Tailwind
        </p>

        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://github.com/YoichiDev-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-soft hover:text-accent transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/o-francesco-derek-cole-860b59427/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-soft hover:text-accent transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:yoichi_dev@proton.me"
            className="text-ink-soft hover:text-accent transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}