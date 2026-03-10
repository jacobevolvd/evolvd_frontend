import Link from "next/link";

const companies = [
  "Adobe",
  "Boeing",
  "Nike",
  "Paramount",
  "Freshworks",
  "Microsoft",
  "Motorola",
  "Schneider Electric",
  "Levi’s",
  "Yahoo",
];

export default function AboutSection() {
  return (
    <section className="py-28 bg-[#F2EDE6] px-7">
      <div className="max-w-[1100px] mx-auto flex flex-wrap gap-16 items-center">
        {/* Photo placeholder */}
        <div className="flex-none w-[280px] h-[350px] bg-gradient-to-br from-dark/8 to-light flex items-center justify-center font-secondary text-sm text-dark/35 border border-dashed border-dark/10">
          [Arun&apos;s Photo]
        </div>

        {/* Text content */}
        <div className="flex-1 sm:min-w-[380px]">
          <div className="section-label mb-4">About Arun Jacob</div>
          <h2 className="font-primary text-[clamp(28px,4vw,42px)] font-extrabold text-dark leading-[1.1] mb-5 tracking-[-1px]">
            20 years of building products.
            <br />
            Every mistake you can skip.
          </h2>
          <p className="font-secondary text-base text-[#57534E] mb-3.5">
            Arun Jacob's career never stayed in one world. Retail, SaaS,
            fintech, fitness wearables, petroleum, aviation, industrial IoT.
            Every switch felt like starting over. Every switch also taught him
            something the previous world never could. That cross-industry
            perspective is exactly what you'll find here.
          </p>

          {/* Company strip */}
          <div className="border-t border-dark/8 pt-4.5 mt-6 mb-5">
            <div className="flex gap-x-6 gap-y-3 flex-wrap">
              {companies.map((co) => (
                <span
                  key={co}
                  className="font-primary text-[11px] font-bold text-dark/30 tracking-widest uppercase"
                >
                  {co}
                </span>
              ))}
            </div>
          </div>

          <Link
            href="/about"
            className="font-primary text-sm font-bold text-primary inline-flex items-center gap-2 group"
          >
            Read the full story{" "}
            <span className="group-hover:translate-x-1.5 transition-transform">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
