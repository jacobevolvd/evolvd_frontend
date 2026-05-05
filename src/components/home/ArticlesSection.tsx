import Link from "next/link";
import { sanityFetch } from "@/src/lib/sanity/live";
import { postsQuery } from "@/src/lib/sanity/queries";
import type { Post } from "@/src/lib/sanity/types";
import BlogCard from "@/src/components/BlogCard";

export default async function ArticlesSection() {
  const { data } = await sanityFetch({ query: postsQuery });
  const articles = (data as Post[]).slice(0, 3);

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
            className="font-primary text-sm font-bold text-primary"
          >
            View all &rarr;
          </Link>
        </div>

        {/* 3-column equal grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
          {articles.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
