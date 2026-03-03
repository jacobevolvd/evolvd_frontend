import NewsletterSignup from "@/src/components/NewsletterSignup";

export default function FinalCTASection() {
  return (
    <section
      className="py-28 text-center px-7"
      style={{
        background:
          "linear-gradient(160deg, #1C1917 0%, #2A2230 50%, #1E1520 100%)",
      }}
    >
      <div className="max-w-[560px] mx-auto">
        <h2 className="font-primary text-[clamp(30px,5vw,44px)] font-extrabold text-light leading-[1.1] tracking-[-1px] mb-4">
          One lesson, every week.
        </h2>
        <p className="font-secondary text-[17px] text-light/35 leading-relaxed mb-9">
          Practical insights to help you build better products. No spam. No
          fluff.
        </p>

        <div className="flex justify-center">
          <NewsletterSignup dark buttonText="Subscribe →" />
        </div>
      </div>
    </section>
  );
}
