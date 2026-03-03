import Link from "next/link";

const companies = [
  "Adobe",
  "Boeing",
  "Nike",
  "Grab",
  "Freshworks",
  "Microsoft",
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
          <p className="font-secondary text-base text-[#57534E] leading-relaxed mb-3.5">
            Product design leader with two decades across petroleum, aviation,
            SaaS, retail, IoT, and fitness wearables. From Adobe to Boeing, Nike
            to Grab, I&apos;ve seen what makes products succeed and why they
            fail.
          </p>
          <p className="font-secondary text-base text-[#57534E] leading-relaxed mb-2.5">
            Now I&apos;m building ProductOS: the system for turning product
            ideas into products people actually need.
          </p>

          {/* Company strip */}
          <div className="border-t border-dark/8 pt-4.5 mt-6 mb-5">
            <div className="flex gap-6 flex-wrap">
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
            className="font-secondary text-sm font-bold text-primary inline-flex items-center gap-2 group"
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
