import NewsletterSignup from "@/src/components/NewsletterSignup";

const topics = [
  {
    id: 1,
    title: "From Idea to MVP",
    desc: "Validating and shipping your first product in weeks",
  },
  {
    id: 2,
    title: "Product Strategy for Founders",
    desc: "Decisions that make or break your startup",
  },
  {
    id: 3,
    title: "Design Decisions That Scale",
    desc: "Building products that grow without breaking",
  },
];

export default function CoursesSection() {
  return (
    <section className="py-28 bg-light px-7">
      <div className="max-w-[680px] mx-auto text-center">
        <div className="inline-block px-4 py-1.5 bg-primary/10 font-secondary text-sm font-bold text-primary tracking-widest uppercase mb-5">
          Coming 2027
        </div>
        <h2 className="font-primary text-[clamp(28px,4vw,42px)] font-extrabold text-dark leading-[1.1] tracking-[-1px] mb-3.5">
          Structured courses are on the way
        </h2>
        <p className="font-secondary text-base text-[#57534E] leading-relaxed max-w-[480px] mx-auto mb-9">
          Deeper than any blog post. More structured than any framework. Help me
          decide what to build first.
        </p>

        {/* Course list */}
        <div className="flex flex-col gap-2">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="p-4 px-5 border border-dark/8 text-left cursor-pointer hover:border-primary transition-colors"
            >
              <div className="font-primary text-[15px] font-bold text-dark">
                {topic.title}
              </div>
              <div className="font-secondary text-sm text-[#57534E] mt-0.5">
                {topic.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Early access black section */}
        <div className="bg-dark text-white rounded-sm border-l-4 border-primary p-8 sm:p-10 mt-10 text-left">
          <h3 className="font-primary text-[clamp(20px,3vw,26px)] font-bold leading-tight mb-2">
            Get early access when courses launch.
          </h3>
          <p className="font-secondary text-sm text-white/60 mb-6">
            No spam. Just a heads-up when the doors open.
          </p>
          <NewsletterSignup
            dark
            buttonText="Reserve My Spot"
            placeholder="Your email address"
          />
        </div>
      </div>
    </section>
  );
}
