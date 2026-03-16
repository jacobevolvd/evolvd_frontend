import NewsletterSignup from "@/src/components/NewsletterSignup";

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
              <div className="font-secondary text-sm text-light/30">
                {r.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Founding members section */}
        <div className="border-t-2 border-primary bg-white/3 p-8 sm:p-10 mt-4">
          <div className="inline-block px-3 py-1 bg-primary/15 font-secondary text-sm font-bold text-primary tracking-widest uppercase mb-4">
            Founding Members
          </div>
          <h3 className="font-primary text-[clamp(20px,3vw,26px)] font-bold text-light leading-tight mb-2">
            The Forge is being built deliberately.
          </h3>
          <p className="font-secondary text-sm text-light/50 leading-relaxed max-w-[580px] mb-6">
            Small, curated, and intentional. Not another noisy Slack group. When
            it opens, founding members get in first, shape the culture, and set
            the standard. Get on the list now.
          </p>
          <NewsletterSignup
            dark
            buttonText="Apply for Early Access"
            placeholder="Your email address"
          />
          <p className="font-secondary text-sm text-light/30 mt-3">
            No spam. First to know when the doors open.
          </p>
        </div>
      </div>
    </section>
  );
}
