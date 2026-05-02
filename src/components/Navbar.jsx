import { useEffect, useState } from "react";
import { navLinks, personalInfo } from "../mock";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-md bg-[#f5f1e8]/80 border-b border-[#d9d2c0]" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span
            className="w-3 h-3 rounded-full bg-[#e85d4e] pulse-dot inline-block"
            aria-hidden
          />
          <span className="font-serif italic text-xl tracking-tight text-[#1a1a1a]">
            utkarsh.
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-sm font-medium text-[#2c2c2c] hover:text-[#e85d4e] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-mono px-4 py-2 bg-[#1a1a1a] text-[#f5f1e8] hover:bg-[#e85d4e] transition-colors duration-300"
          >
            résumé ↗
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#1a1a1a] p-2"
          aria-label="toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-4 mx-6 p-6 bg-[#ede6d3] border border-[#d9d2c0]">
          <nav className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[#1a1a1a] hover:text-[#e85d4e]"
              >
                {l.label}
              </a>
            ))}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-mono mt-2 px-4 py-2 bg-[#1a1a1a] text-[#f5f1e8] inline-block w-fit"
            >
              résumé ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
