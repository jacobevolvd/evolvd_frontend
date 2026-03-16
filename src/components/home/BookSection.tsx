import Link from "next/link";
import Image from "next/image";

export default function BookSection() {
  return (
    <section className="py-28 bg-light px-7">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Book info */}
        <div>
          <div className="section-label mb-4">The Book</div>
          <h2 className="font-primary text-[clamp(32px,5vw,50px)] font-extrabold text-dark leading-[1.05] tracking-[-1.5px] mb-2">
            MisAligned
          </h2>
          <p className="font-secondary text-lg text-[#57534E] leading-snug mb-5">
            Finding the Missing Link Between Smart Teams and Successful Products
          </p>
          <p className="font-secondary text-base text-[#57534E] leading-relaxed mb-8">
            The gap between a great team and a great product isn't talent. It's
            alignment. This book is about what that gap looks like in the real
            world and how to close it, whatever your role.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/book"
              className="px-6.5 py-3.5 bg-secondary text-white font-secondary text-sm font-bold hover:bg-secondary/85 transition-colors"
            >
              Get the Book
            </Link>
            <Link
              href="/book#preview"
              className="px-6.5 py-3.5 bg-transparent text-secondary font-secondary text-sm font-bold border-[1.5px] border-secondary/20 hover:border-secondary transition-colors"
            >
              Read Free Chapters
            </Link>
          </div>
        </div>

        {/* Book cover */}
        <div className="relative w-full aspect-square max-w-[400px] md:max-w-none">
          <Image
            src="/book_front.jpg"
            alt="MisAligned Book Cover"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
