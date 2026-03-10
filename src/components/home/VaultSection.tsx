import Link from "next/link";
import NewsletterSignup from "@/src/components/NewsletterSignup";

const items = [
  {
    icon: "\u25C8",
    type: "Frameworks",
    count: "4 available",
    desc: "Named concepts: 0-to-1 Framework, Product Lifecycle, MisAlignment Model.",
  },
  {
    icon: "\u25A4",
    type: "Workbooks",
    count: "2 available",
    desc: "Hands-on workbooks to apply frameworks to your own product challenges.",
  },
  {
    icon: "\u229E",
    type: "Templates",
    count: "Coming soon",
    desc: "Pitch decks, OKR worksheets, design review checklists, strategy briefs.",
  },
  {
    icon: "\u25FB",
    type: "Cheat Sheets",
    count: "Coming soon",
    desc: "One-page decision guides. Print-friendly. Built for fast decisions.",
  },
];

export default function VaultSection() {
  return (
    <section className="py-28 bg-[#F2EDE6] px-7">
      <div className="max-w-[1100px] mx-auto">
        {/* Centered section header */}
        <div className="text-center mb-14">
          <div className="section-label justify-center mb-4">The Vault</div>
          <h2 className="font-primary text-[clamp(28px,4vw,42px)] font-extrabold text-dark leading-[1.1] tracking-[-1px] mb-3.5">
            Tools built from 20 years of shipping. Not a textbook in sight.
          </h2>
          <p className="font-secondary text-base text-[#57534E] leading-relaxed max-w-[520px] mx-auto">
            Free to use. Some require an email. None require a credit card.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div
              key={item.type}
              className="bg-white border border-dark/8 p-7 cursor-pointer transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_14px_40px_rgba(200,75,49,0.05)]"
            >
              <div className="text-2xl text-primary/60 mb-3.5">{item.icon}</div>
              <h3 className="font-primary text-[17px] font-bold text-dark mb-1">
                {item.type}
              </h3>
              <span className="font-secondary text-[11px] font-bold text-primary tracking-widest uppercase block mb-2.5">
                {item.count}
              </span>
              <p className="font-secondary text-sm text-[#57534E] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Coming soon black section */}
        <div className="bg-dark text-white rounded-sm border-l-4 border-primary p-8 sm:p-10 mt-8">
          <h3 className="font-primary text-[clamp(20px,3vw,26px)] font-bold leading-tight mb-2">
            Workbooks, templates, and cheat sheets are on the way.
          </h3>
          <p className="font-secondary text-sm text-white/60 mb-5">
            Want to know when they drop?
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Workbooks", "Templates", "Cheat Sheets"].map((tag) => (
              <span
                key={tag}
                className="font-secondary text-[11px] font-bold tracking-widest uppercase bg-white/10 text-white/70 px-3 py-1.5"
              >
                {tag}
              </span>
            ))}
          </div>
          <NewsletterSignup
            dark
            buttonText="Notify Me"
            placeholder="Your email address"
          />
        </div>

        <div className="text-center mt-9">
          <Link
            href="/vault"
            className="font-secondary text-sm font-bold text-primary"
          >
            Browse the full Vault &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
