import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Link from "next/link";
import Image from "next/image";

const chapters = [
  "The Alignment Illusion",
  "Why Smart Teams Ship Dumb Products",
  "Vision Misalignment: Building the Wrong Thing Brilliantly",
  "Execution Misalignment: The Handoff Graveyard",
  "Market Misalignment: Solving Problems Nobody Has",
  "The Alignment Audit: A Diagnostic Framework",
  "Realigning Under Pressure",
  "Building Alignment Into Your Culture",
];

const audiences = [
  "You're a founder who's shipped something and it didn't land",
  "You're a PM who senses your team is building the wrong thing but can't articulate why",
  "You're a designer frustrated by products that look great but solve the wrong problem",
  "You lead a product org and want a shared language for alignment",
];

export default function BookPage() {
  return (
    <div className="min-h-screen w-full">
      <Header />

      <div className="pt-[100px]">
        {/* Hero */}
        <section className="relative pt-15 pb-25 px-7">
          <Image
            src="/book_1.avif"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-light/85" />
          <div className="relative max-w-[1100px] mx-auto flex gap-16 items-start flex-wrap">
            {/* Book cover */}
            <div className="relative flex-none w-[420px] h-[400px] ">
              <Image
                src="/book.png"
                alt="MisAligned Book Cover"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex-1 sm:min-w-[400px]">
              <div className="section-label mb-4">The Book</div>
              <h1 className="font-primary text-[clamp(36px,5vw,52px)] font-extrabold text-dark tracking-[-2px] leading-none mb-2.5">
                MisAligned
              </h1>
              <p className="font-secondary text-lg text-[#57534E] leading-snug mb-6">
                Finding the Missing Link Between Smart Teams and Successful
                Products
              </p>
              <p className="font-secondary text-base text-[#57534E] leading-relaxed mb-4">
                Why do talented teams still ship products nobody wants? After 20
                years watching brilliant people fail at building the right
                thing, I wrote the book I wish someone had handed me on day one.
              </p>
              <p className="font-secondary text-base text-[#57534E] leading-relaxed mb-8">
                MisAligned gives you a diagnostic framework for the three types
                of alignment failure that kill products, plus practical tools to
                fix each one before they cost you everything.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#"
                  className="px-7 py-3.5 bg-primary text-white font-secondary text-sm font-bold hover:bg-primary/85 transition-colors"
                >
                  Buy the Book
                </Link>
                <Link
                  href="#preview"
                  className="px-7 py-3.5 bg-transparent text-dark font-secondary text-sm font-bold border-[1.5px] border-dark/8 hover:border-primary transition-colors"
                >
                  Read 3 Free Chapters
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Chapters */}
        <section className="relative py-25 px-7">
          <Image src="/book_2.avif" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#F2EDE6]/85" />
          <div className="relative max-w-[700px] mx-auto">
            <div className="section-label mb-4">Inside the Book</div>
            <h2 className="font-primary text-[32px] font-extrabold text-dark tracking-[-1px] mb-9">
              8 Chapters. Zero filler.
            </h2>
            {chapters.map((ch, i) => (
              <div
                key={i}
                className="py-4.5 border-b border-dark/8 flex items-center gap-4.5"
              >
                <span className="font-primary text-sm font-bold text-dark/30 min-w-[28px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-primary text-[17px] font-bold text-dark">
                  {ch}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-25 px-7 bg-light">
          <div className="max-w-[1100px] mx-auto">
            <div className="section-label mb-4">Who It&apos;s For</div>
            <h2 className="font-primary text-[32px] font-extrabold text-dark tracking-[-1px] mb-9">
              This book is for you if...
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {audiences.map((txt, i) => (
                <div
                  key={i}
                  className="p-6 border border-dark/8 bg-white flex gap-3.5 items-start"
                >
                  <span className="text-primary font-primary font-extrabold text-lg leading-none">
                    ✓
                  </span>
                  <span className="font-secondary text-[15px] text-[#57534E] leading-relaxed">
                    {txt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
