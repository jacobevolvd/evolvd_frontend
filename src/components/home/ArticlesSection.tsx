import Link from "next/link";

const articles = [
  {
    title: "Why Your Product Isn\u2019t the Problem. Your Alignment Is.",
    tag: "Strategy",
    time: "8 min",
  },
  {
    title: "The 0-to-1 Framework: A Step-by-Step Guide to Shipping",
    tag: "Framework",
    time: "12 min",
  },
  {
    title: "What 20 Years at Adobe, Boeing, and Nike Taught Me",
    tag: "Lessons",
    time: "10 min",
  },
];

export default function ArticlesSection() {
  return (
    <section className="py-28 bg-light px-7">
      <div className="max-w-[1100px] mx-auto">
        {/* Section header */}
        <div className="flex flex-wrap justify-between items-end mb-11 gap-3.5">
          <div>
            <div className="section-label mb-3">From the Blog</div>
            <h2 className="font-primary text-[clamp(28px,4vw,38px)] font-extrabold text-dark leading-[1.1] tracking-[-1px]">
              Featured articles
            </h2>
          </div>
          <Link
            href="/blog"
            className="font-secondary text-sm font-bold text-primary"
          >
            View all &rarr;
          </Link>
        </div>

        {/* 3-column equal grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
          {articles.map((a, i) => (
            <Link key={i} href="/blog">
              <article className="border border-dark/8 bg-white cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(200,75,49,0.04)] overflow-hidden">
                <div className="h-[170px] bg-gradient-to-br from-light to-dark/8 flex items-center justify-center font-secondary text-[13px] text-dark/35">
                  [Article Image]
                </div>
                <div className="p-5.5">
                  <div className="flex gap-2.5 items-center mb-3">
                    <span className="font-secondary text-[10px] font-bold text-primary tracking-[1.5px] uppercase px-2.5 py-0.5 bg-primary/10">
                      {a.tag}
                    </span>
                    <span className="font-secondary text-xs text-dark/35">
                      {a.time}
                    </span>
                  </div>
                  <h3 className="font-primary text-lg font-bold text-dark leading-snug">
                    {a.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
