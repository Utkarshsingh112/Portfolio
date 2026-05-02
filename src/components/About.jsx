import { personalInfo } from "../mock";
import { Sparkles, Zap, Palette, Wrench } from "lucide-react";

const tags = [
  { icon: Sparkles, label: "curious" },
  { icon: Zap, label: "fast-shipper" },
  { icon: Palette, label: "design-leaning" },
  { icon: Wrench, label: "hands-on" },
];

export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <div className="sticky top-32">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#6b6558]">
              — about
            </span>
            <div className="mt-6 relative w-full max-w-xs">
              <div className="absolute -inset-3 bg-[#e8a93c] -rotate-2 z-0" />
              <img
                src={personalInfo.avatar}
                alt="utkarsh"
                className="-rotate-90 relative z-10 w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-8">
          <h2 className="font-serif text-5xl md:text-7xl leading-[1.05] text-[#1a1a1a] font-light">
            i make <span className="italic text-[#2c4ee8]">things</span> for the
            <br />
            <span className="italic">web</span>, mostly with{" "}
            <span className="text-[#e85d4e] italic">love</span>.
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-10 text-[#2c2c2c] text-lg leading-relaxed">
            <p>{personalInfo.bio}</p>
            <p>
              When I&apos;m not coding, I&apos;m probably redesigning my own
              website (again), digging through obscure GitHub repos, or arguing
              about <span className="font-serif italic">whether AI will take the job or not</span>.
              I believe the best products feel like they were made by
              <span className="underline decoration-[#5b7b5a] decoration-2 underline-offset-2"> a real person</span>,
              not a committee.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {tags.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 px-4 py-2 border border-[#1a1a1a] text-sm font-mono bg-transparent hover:bg-[#1a1a1a] hover:text-[#f5f1e8] transition-colors cursor-default"
              >
                <Icon size={14} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
