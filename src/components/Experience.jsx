import { experience } from "../mock";

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-10 py-24 md:py-32 bg-[#1a1a1a] text-[#f5f1e8]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#e8a93c]">
            — timeline
          </span>
          <h2 className="mt-4 font-serif text-5xl md:text-7xl leading-[1.05] font-light">
            a short <span className="italic text-[#e8a93c]">history</span>.
          </h2>
        </div>

        <ol className="relative">
          {experience.map((e, i) => (
            <li
              key={e.id}
              className="grid md:grid-cols-12 gap-6 py-8 md:py-10 border-t border-[#f5f1e8]/15 group"
            >
              <div className="md:col-span-2 font-mono text-sm text-[#e8a93c]">
                {e.period}
              </div>
              <div className="md:col-span-7">
                <h3 className="font-serif text-3xl md:text-4xl group-hover:italic transition-all">
                  {e.role}
                </h3>
                <p className="mt-2 text-[#d9d2c0] text-sm font-mono uppercase tracking-wider">
                  {e.company}
                </p>
              </div>
              <p className="md:col-span-3 text-[#d9d2c0] leading-relaxed">
                {e.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
