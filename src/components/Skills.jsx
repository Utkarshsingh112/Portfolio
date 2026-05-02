import { skills } from "../mock";

const accentBg = {
  coral: "#e85d4e",
  ink: "#1a1a1a",
  mustard: "#e8a93c",
  sage: "#5b7b5a",
};
const accentText = {
  coral: "#f5f1e8",
  ink: "#f5f1e8",
  mustard: "#1a1a1a",
  sage: "#f5f1e8",
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#6b6558]">
            — toolbox
          </span>
          <h2 className="mt-4 font-serif text-5xl md:text-7xl leading-[1.05] text-[#1a1a1a] font-light">
            stuff i <span className="italic text-[#e85d4e]">use</span> daily.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((s, i) => (
            <div
              key={s.category}
              className="group relative p-7 border border-[#1a1a1a] bg-[#f5f1e8] hover:bg-[#1a1a1a] transition-colors duration-500 cursor-default"
            >
              <div
                className="w-10 h-10 mb-6 flex items-center justify-center font-serif text-lg"
                style={{
                  background: accentBg[s.color],
                  color: accentText[s.color],
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-serif text-2xl text-[#1a1a1a] group-hover:text-[#f5f1e8] transition-colors">
                {s.category}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="font-mono text-xs px-2.5 py-1 border border-[#1a1a1a]/40 text-[#2c2c2c] group-hover:border-[#f5f1e8]/40 group-hover:text-[#f5f1e8] transition-colors"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
