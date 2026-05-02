import { personalInfo } from "../mock";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 px-6 md:px-10 py-10 bg-[#1a1a1a] text-[#f5f1e8] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-serif italic text-2xl">utkarsh singh.</p>
          <p className="mt-1 font-mono text-xs text-[#d9d2c0]">
            © {year} — designed &amp; built with too much chai.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          {Object.entries(personalInfo.socials).map(([k, v]) => (
            <a
              key={k}
              href={v}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm text-[#f5f1e8] hover:text-[#e8a93c] transition-colors"
            >
              {k} ↗
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
