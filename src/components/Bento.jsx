import { useEffect, useState } from "react";
import { bento, personalInfo } from "../mock";
import {
  Trophy,
  Hammer,
  Sparkles,
  Github,
  Music,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

export default function Bento() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      });
      setTime(now);
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="currently"
      className="px-6 md:px-10 py-24 md:py-32 bg-[#f5f1e8]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#6b6558]">
            — currently
          </span>
          <h2 className="mt-4 font-serif text-5xl md:text-7xl leading-[1.05] text-[#1a1a1a] font-light">
            a peek into my{" "}
            <span className="italic text-[#e85d4e]">world</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[180px]">
          {/* Achievements — large featured */}
          <div className="md:col-span-2 md:row-span-2 group p-7 md:p-8 bg-[#1a1a1a] text-[#f5f1e8] border border-[#1a1a1a] flex flex-col justify-between hover:bg-[#e85d4e] transition-colors duration-500 cursor-default">
            <div className="flex items-center justify-between">
              <Trophy size={28} className="text-[#e8a93c] group-hover:text-[#1a1a1a] transition-colors" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d9d2c0] group-hover:text-[#1a1a1a]">
                achievements
              </span>
            </div>
            <div>
              <h3 className="font-serif text-3xl md:text-4xl leading-tight">
                hackathon{" "}
                <span className="italic">wins</span>.
              </h3>
              <ul className="mt-5 space-y-3">
                {bento.achievements.map((a) => (
                  <li
                    key={a.title}
                    className="flex items-baseline justify-between gap-4 pb-2 border-b border-[#f5f1e8]/15 group-hover:border-[#1a1a1a]/20"
                  >
                    <span className="font-serif text-base md:text-lg">
                      {a.title}
                    </span>
                    <span className="font-mono text-xs text-[#e8a93c] group-hover:text-[#1a1a1a]">
                      {a.subtitle}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Currently building */}
          <div className="md:col-span-2 group p-7 bg-[#ede6d3] border border-[#d9d2c0] flex flex-col justify-between hover:bg-[#e8a93c] transition-colors duration-500 cursor-default">
            <div className="flex items-center justify-between">
              <Hammer size={22} className="text-[#1a1a1a]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6b6558] group-hover:text-[#1a1a1a]">
                currently building
              </span>
            </div>
            <div>
              <h3 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] leading-tight">
                {bento.currentlyBuilding.name}
              </h3>
              <p className="mt-2 text-sm text-[#2c2c2c] font-mono">
                {bento.currentlyBuilding.note}
              </p>
            </div>
          </div>

          {/* GitHub */}
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            className="group p-6 bg-[#f5f1e8] border border-[#1a1a1a] flex flex-col justify-between hover:bg-[#1a1a1a] hover:text-[#f5f1e8] transition-colors duration-500"
          >
            <div className="flex items-center justify-between">
              <Github size={22} />
              <ArrowUpRight
                size={18}
                className="opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300"
              />
            </div>
            <div>
              <p className="font-mono text-xs text-[#6b6558] group-hover:text-[#d9d2c0]">
                github
              </p>
              <p className="font-serif text-2xl mt-1">{bento.github.handle}</p>
              <div className="mt-3 flex gap-4 font-mono text-xs">
                <span>
                  <span className="text-[#e85d4e] group-hover:text-[#e8a93c]">
                    {bento.github.commits}
                  </span>{" "}
                  commits
                </span>
                <span>
                  <span className="text-[#e85d4e] group-hover:text-[#e8a93c]">
                    {bento.github.repos}
                  </span>{" "}
                  repos
                </span>
              </div>
            </div>
          </a>

          {/* Local time */}
          <div className="group p-6 bg-[#5b7b5a] text-[#f5f1e8] border border-[#5b7b5a] flex flex-col justify-between cursor-default hover:bg-[#1a1a1a] transition-colors duration-500">
            <div className="flex items-center justify-between">
              <MapPin size={20} />
              <span className="w-2 h-2 rounded-full bg-[#e8a93c] pulse-dot" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-[#d9d2c0]">
                jaipur, in
              </p>
              <p className="font-serif text-4xl mt-1 italic">{time}</p>
              <p className="font-mono text-[10px] text-[#d9d2c0] mt-1">
                local time, ist
              </p>
            </div>
          </div>

          {/* Learning */}
          <div className="md:col-span-2 group p-7 bg-[#f5f1e8] border border-[#1a1a1a] flex flex-col justify-between cursor-default hover:bg-[#2c4ee8] hover:text-[#f5f1e8] transition-colors duration-500">
            <div className="flex items-center justify-between">
              <Sparkles size={22} />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6b6558] group-hover:text-[#d9d2c0]">
                learning right now
              </span>
            </div>
            <div>
              <p className="font-serif text-2xl md:text-3xl mb-3 italic">
                exploring...
              </p>
              <div className="flex flex-wrap gap-2">
                {bento.learning.map((l) => (
                  <span
                    key={l}
                    className="font-mono text-xs px-2.5 py-1 border border-[#1a1a1a]/40 group-hover:border-[#f5f1e8]/40 transition-colors"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Now playing */}
          <div className="md:col-span-2 group p-6 bg-[#ede6d3] border border-[#d9d2c0] flex flex-col justify-between cursor-default hover:bg-[#e85d4e] hover:text-[#f5f1e8] transition-colors duration-500">
            <div className="flex items-center justify-between">
              <Music size={20} />
              <span className="flex gap-0.5 items-end h-3">
                <span className="w-0.5 h-2 bg-[#e85d4e] group-hover:bg-[#f5f1e8] animate-pulse" />
                <span
                  className="w-0.5 h-3 bg-[#e85d4e] group-hover:bg-[#f5f1e8] animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                />
                <span
                  className="w-0.5 h-1.5 bg-[#e85d4e] group-hover:bg-[#f5f1e8] animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                />
              </span>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-[#6b6558] group-hover:text-[#f5f1e8]/80">
                now playing
              </p>
              <p className="font-serif text-xl mt-1">{bento.nowPlaying.track}</p>
              <p className="font-mono text-[10px] text-[#6b6558] group-hover:text-[#f5f1e8]/80 mt-1 italic">
                {bento.nowPlaying.label}
              </p>
            </div>
          </div>

          {/* Availability CTA */}
          <a
            href="#contact"
            className="md:col-span-4 group p-7 md:p-8 bg-[#e85d4e] text-[#f5f1e8] border border-[#e85d4e] flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:bg-[#1a1a1a] transition-colors duration-500"
          >
            <div className="flex flex-col gap-3">
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em]">
                <span className="w-2 h-2 rounded-full bg-[#f5f1e8] pulse-dot" />
                {bento.availability.status}
              </span>
              <h3 className="font-serif text-3xl md:text-5xl leading-tight">
                got an idea?{" "}
                <span className="italic underline decoration-[#f5f1e8] underline-offset-4">
                  {bento.availability.cta}
                </span>
              </h3>
            </div>
            <ArrowUpRight
              size={48}
              className="shrink-0 group-hover:rotate-45 transition-transform duration-500"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
