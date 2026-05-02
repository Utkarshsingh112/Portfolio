import { personalInfo, stats } from "../mock";
import { ArrowDownRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Status pill */}
        <div className="rise inline-flex items-center gap-2 px-3 py-1.5 border border-[#d9d2c0] bg-[#ede6d3] mb-10">
          <span className="w-2 h-2 bg-[#5b7b5a] rounded-full pulse-dot" />
          <span className="font-mono text-xs text-[#2c2c2c]">
            {personalInfo.status}
          </span>
        </div>

        {/* Big serif name */}
        <h1 className="rise rise-delay-1 font-serif text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.95] tracking-tight text-[#1a1a1a] font-light">
          <span className="italic">hi,</span> i&apos;m{" "}
          <span className="text-[#e85d4e] italic">utkarsh</span>.
        </h1>

        <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7 rise rise-delay-2">
            <p className="text-xl md:text-2xl text-[#2c2c2c] leading-snug max-w-xl">
              A <span className="underline decoration-[#e8a93c] decoration-[3px] underline-offset-4"> full-stack developer</span> &amp;
              B.Tech student building bold, fast, and slightly opinionated
              <span className="font-serif italic"> web experiences</span>.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-[#6b6558] font-mono">
              <MapPin size={14} className="text-[#e85d4e]" />
              <span>{personalInfo.location}</span>
              <span>—</span>
              <span>2026</span>
            </div>
          </div>

          <div className="md:col-span-5 rise rise-delay-3 flex md:justify-end">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 text-base font-mono text-[#1a1a1a] border-b-2 border-[#1a1a1a] pb-1 hover:text-[#e85d4e] hover:border-[#e85d4e] transition-colors"
            >
              see my work
              <ArrowDownRight
                size={20}
                className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#d9d2c0] border border-[#d9d2c0] rise rise-delay-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-[#f5f1e8] p-6 md:p-8 hover:bg-[#ede6d3] transition-colors"
            >
              <div className="font-serif text-4xl md:text-5xl text-[#1a1a1a]">
                {s.value}
              </div>
              <div className="mt-2 text-xs font-mono uppercase tracking-wider text-[#6b6558]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
