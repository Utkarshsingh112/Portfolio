import { projects } from "../mock";
import { ArrowUpRight, Github } from "lucide-react";

const accentMap = {
  coral: "#e85d4e",
  blue: "#2c4ee8",
  mustard: "#e8a93c",
  sage: "#5b7b5a",
};

export default function Projects() {
  return (
    <section id="work" className="px-6 md:px-10 py-24 md:py-32 bg-[#efe9dc] border-y border-[#d9d2c0]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#6b6558]">
              — selected work
            </span>
            <h2 className="mt-4 font-serif text-5xl md:text-7xl leading-[1.05] text-[#1a1a1a] font-light">
              things i&apos;ve <span className="italic">built</span>.
            </h2>
          </div>
          <a
            href={"#"}
            className="link-underline font-mono text-sm text-[#1a1a1a]"
          >
            view archive ↗
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((p, idx) => (
            <div
              key={p.id}
              className={`group block tilt-hover ${
                idx % 2 === 1 ? "md:translate-y-12" : ""
              }`}
            >
              <div
                className="relative aspect-[4/3] overflow-hidden"
                style={{ background: accentMap[p.accent] }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute top-4 left-4 px-3 py-1 bg-[#1a1a1a] text-[#f5f1e8] font-mono text-xs uppercase tracking-wider"
                >
                  {p.type}
                </div>
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#f5f1e8] flex items-center justify-center hover:bg-[#1a1a1a] hover:text-[#f5f1e8] transition-colors text-[#1a1a1a]"
                      title="View Code"
                    >
                      <Github size={22} />
                    </a>
                  )}
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-[#f5f1e8] flex items-center justify-center hover:bg-[#1a1a1a] hover:text-[#f5f1e8] transition-colors text-[#1a1a1a]"
                      title="Live Preview"
                    >
                      <ArrowUpRight size={22} />
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] group-hover:italic transition-all">
                  {p.title}
                </h3>
                <span className="font-mono text-sm text-[#6b6558]">
                  {p.year}
                </span>
              </div>
              <p className="mt-3 text-[#2c2c2c] leading-relaxed max-w-lg">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2.5 py-1 border border-[#1a1a1a]/30 text-[#2c2c2c]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
