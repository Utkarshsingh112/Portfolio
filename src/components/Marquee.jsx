const words = [
  "react",
  "❖",
  "node.js",
  "❖",
  "design",
  "❖",
  "typescript",
  "❖",
  "shipping",
  "❖",
  "open source",
  "❖",
  "coffee",
  "❖",
  "freelance",
  "❖",
  "systems",
  "❖",
];

export default function Marquee() {
  return (
    <div className="relative py-8 bg-[#1a1a1a] text-[#f5f1e8] overflow-hidden border-y border-[#1a1a1a]">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...words, ...words, ...words].map((w, i) => (
          <span
            key={i}
            className={`font-serif italic text-5xl md:text-6xl px-6 ${
              w === "❖" ? "text-[#e85d4e]" : ""
            }`}
          >
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}
