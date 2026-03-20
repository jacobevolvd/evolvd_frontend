import Link from "next/link";

interface InlineAdProps {
  title?: string;
  description?: string;
  href?: string;
  image?: { asset: { _ref: string; _type: "reference" } }; // ready to use — not rendered yet
}

export default function InlineAd({
  title = "Read MisAligned",
  description = "Why smart teams ship products nobody wants — and the framework to fix it. 20 years of lessons in one book.",
  href = "/book",
}: InlineAdProps) {
  return (
    <div className="my-12 p-8 border border-dark/8 bg-[#F2EDE6] not-prose">
      <div className="font-secondary text-sm font-bold tracking-[2px] uppercase text-primary mb-3 flex items-center gap-2.5">
        <span className="w-5 h-[1.5px] bg-primary inline-block" />
        Recommended
      </div>
      <h3 className="font-primary text-xl font-extrabold text-dark tracking-[-0.5px] mb-2">
        {title}
      </h3>
      <p className="font-secondary text-sm text-[#57534E] leading-relaxed mb-5">
        {description}
      </p>
      <Link
        href={href}
        className="inline-block px-6 py-3 bg-primary text-white font-primary text-sm font-bold hover:bg-primary/85 transition-colors"
      >
        Learn more &rarr;
      </Link>
    </div>
  );
}
