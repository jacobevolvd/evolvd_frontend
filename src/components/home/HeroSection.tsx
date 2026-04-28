import Link from "next/link";
import NewsletterSignup from "@/src/components/NewsletterSignup";

export default function HeroSection() {
  return (
    <section className="pt-[180px] pb-28 bg-white relative overflow-hidden px-7">
      <div className="max-w-[780px] mx-auto relative text-center">
        <div className="font-primary text-sm font-[300] tracking-[2.5px] uppercase text-primary mb-7">
          FOR PMS, DESIGNERS, FOUNDERS, ENGINEERS &amp; GTM
        </div>
        <h1 className="font-primary text-[clamp(42px,7vw,64px)] font-[800] text-dark leading-[1.05] mb-7 tracking-[-2px]">
          Great products come from teams who{" "}
          <span className="text-primary relative inline-block">
            think beyond
            <span className="absolute bottom-[-2px] left-0 right-0 h-[3px] bg-primary/25 block" />
          </span>{" "}
          their role
        </h1>
        <p className="font-secondary text-[clamp(17px,2.2vw,20px)] text-[#57534E] leading-[1.2] max-w-[540px] mx-auto mb-10">
          Built for everyone who shapes a product, not just the person with
          "product" in their title. Because great products are never the work of
          one role.
        </p>

        <div className="flex justify-center mb-3">
          <NewsletterSignup />
        </div>
        <p className="font-secondary text-sm text-dark/35 mb-8">
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
