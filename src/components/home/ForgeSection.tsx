const roles = [
  { emoji: "\uD83D\uDE80", label: "Founders", desc: "Building from zero to one" },
  { emoji: "\uD83C\uDFAF", label: "Product Managers", desc: "Shipping what matters" },
  { emoji: "\uD83C\uDFA8", label: "Designers", desc: "Solving real problems" },
  { emoji: "\u26A1", label: "Developers", desc: "Turning vision into code" },
];

export default function ForgeSection() {
  return (
    <section className="py-28 bg-dark relative overflow-hidden px-7">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-[1100px] mx-auto relative">
        {/* Centered header */}
        <div className="text-center mb-12">
          <div className="section-label justify-center mb-4">The Forge</div>
          <h2 className="font-primary text-[clamp(28px,4vw,42px)] font-extrabold text-light leading-[1.1] tracking-[-1px] mb-3.5">
            Where builders find their people
          </h2>
          <p className="font-secondary text-base text-light/35 leading-relaxed max-w-[480px] mx-auto">
            A free community for founders, PMs, designers, and developers who
            build products together.
          </p>
        </div>

        {/* Role cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-[860px] mx-auto mb-11">
          {roles.map((r) => (
            <div
              key={r.label}
              className="p-6 bg-white/3 border border-white/6 text-center hover:bg-white/6 hover:border-primary/30 transition-all cursor-default"
            >
              <div className="text-[28px] mb-3">{r.emoji}</div>
              <div className="font-primary text-base font-bold text-light mb-0.5">
                {r.label}
              </div>
              <div className="font-secondary text-[13px] text-light/30">
                {r.desc}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#"
            className="inline-block px-7.5 py-3.5 bg-primary text-white font-secondary text-sm font-bold hover:bg-primary/85 transition-colors"
          >
            Join The Forge (Free)
          </a>
        </div>
      </div>
    </section>
  );
}
