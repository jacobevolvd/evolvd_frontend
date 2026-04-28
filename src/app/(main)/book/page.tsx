import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Link from "next/link";
import Image from "next/image";

const parts = [
  {
    title: "Part 1: Users, Ego & Data",
    chapters: [
      "Awakening to the Great 'User-Centric Design' Lie",
      "The Assumption Trap",
    ],
  },
  {
    title: "Part 2: The Stakeholders & Their Battles",
    chapters: [
      "The Stakeholders",
      "Designers vs. Developers The Never-Ending Battle",
      "Product Manager: The Role Between All Roles",
      "When Executives & Clients Derail Product Strategy",
    ],
  },
  {
    title: "Part 3: Crisis, Chaos & Traps",
    chapters: [
      "The Collaboration Crisis",
      "Common Product Building Traps",
      "The Decision Chaos",
    ],
  },
  {
    title: "Part 4: Scaling Without Breaking",
    chapters: [
      "Think Beyond Your Job Title",
      "The Ecosystem Mindset",
      "The New Definition of a 'Great Product'",
    ],
  },
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
                  href="https://mybook.to/MisAligned"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-primary text-white font-secondary text-sm font-bold hover:bg-primary/85 transition-colors"
                >
                  Buy the Book
                </Link>
                <Link
                  href="https://books.google.co.in/books?id=NqCbEQAAQBAJ&lpg=PA1&pg=PA1#v=onepage&q&f=false"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-transparent text-dark font-secondary text-sm font-bold border-[1.5px] border-dark/8 hover:border-primary transition-colors"
                >
                  Read Free Chapters
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Chapters */}
        <section className="py-25 px-7 bg-white">
          <div className="max-w-[700px] mx-auto">
            <div className="section-label mb-4">Inside the Book</div>
            <h2 className="font-primary text-[32px] font-extrabold text-dark tracking-[-1px] mb-12">
              Table of Contents
            </h2>
            <p className="font-primary text-lg font-semibold text-dark/70 mb-10">
              Introduction: The Most Organized Chaos
            </p>
            {parts.map((part, pi) => (
              <div key={pi} className="mb-10">
                <h3 className="font-primary text-xl font-extrabold text-dark mb-5 pt-6 border-t border-dark/8">
                  {part.title}
                </h3>
                {part.chapters.map((ch, ci) => {
                  const globalIndex = parts.slice(0, pi).reduce((acc, p) => acc + p.chapters.length, 0) + ci + 1;
                  return (
                    <div
                      key={ci}
                      className="py-3.5"
                    >
                      <span className="font-primary text-[17px] font-medium text-dark/70">
                        Chapter {globalIndex}: {ch}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
            <Link
              href="https://books.google.co.in/books?id=NqCbEQAAQBAJ&lpg=PA1&pg=PT4#v=onepage&q&f=false"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-7 py-3.5 bg-primary text-white font-secondary text-sm font-bold hover:bg-primary/85 transition-colors"
            >
              Read Free Chapters
            </Link>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-25 px-7 bg-light">
          <div className="max-w-[1100px] mx-auto">
            <div className="section-label mb-4">Who It&apos;s For</div>
            <h2 className="font-primary text-[32px] font-extrabold text-dark tracking-[-1px] mb-9">
              This book is for you if...
            </h2>
            <div className="border border-dark/8 bg-white divide-y divide-dark/8">
              {audiences.map((txt, i) => (
                <div
                  key={i}
                  className="p-6 flex gap-3.5 items-start"
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
