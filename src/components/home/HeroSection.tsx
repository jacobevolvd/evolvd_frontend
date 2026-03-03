import Link from "next/link";
import NewsletterSignup from "@/src/components/NewsletterSignup";

export default function HeroSection() {
  return (
    <section className="pt-[180px] pb-28 bg-light relative overflow-hidden px-7">
      {/* Decorative radial glow */}
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-primary/5 pointer-events-none" />

      <div className="max-w-[780px] mx-auto relative text-center">
        <div className="font-secondary text-xs font-bold tracking-[2.5px] uppercase text-primary mb-7">
          For founders, PMs &amp; designers
        </div>
        <h1 className="font-primary text-[clamp(42px,7vw,74px)] font-extrabold text-dark leading-[1.05] mb-7 tracking-[-2px]">
          Build Products People{" "}
          <span className="text-primary relative inline-block">
            Actually
            <span className="absolute bottom-[-2px] left-0 right-0 h-[3px] bg-primary/25 block" />
          </span>{" "}
          Need
        </h1>
        <p className="font-secondary text-[clamp(17px,2.2vw,20px)] text-[#57534E] leading-relaxed max-w-[540px] mx-auto mb-10">
          Every week, one practical lesson from 20 years of shipping products at
          Adobe, Boeing, Nike, and beyond. No theory. No fluff.
        </p>

        <div className="flex justify-center mb-3">
          <NewsletterSignup />
        </div>
        <p className="font-secondary text-xs text-dark/35 mb-8">
          Free weekly newsletter. No spam. Unsubscribe anytime.
        </p>

        <Link
          href="/vault"
          className="font-secondary text-sm font-semibold text-secondary border-b-[1.5px] border-secondary/30 pb-0.5 hover:border-secondary transition-colors"
        >
          Or explore free frameworks and resources &#8599;
        </Link>
      </div>
    </section>
  );
}
