import Link from "next/link";
import Image from "next/image";
import { sanityFetch } from "@/src/lib/sanity/live";
import { postsQuery } from "@/src/lib/sanity/queries";
import { urlFor } from "@/src/lib/sanity/image";
import type { Post } from "@/src/lib/sanity/types";

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
            className="font-secondary text-sm font-bold text-primary"
          >
            View all &rarr;
          </Link>
        </div>

        {/* 3-column equal grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
          {articles.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="block"
            >
              <article className="border border-dark/8 bg-white cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(200,75,49,0.04)] overflow-hidden">
                {post.banner ? (
                  <Image
                    src={urlFor(post.banner).width(640).height(340).url()}
                    alt={post.title}
                    width={640}
                    height={340}
                    className="w-full h-[170px] object-cover"
                  />
                ) : (
                  <div className="h-[170px] bg-gradient-to-br from-light to-dark/8" />
                )}
                <div className="p-5.5">
                  <div className="flex gap-2.5 items-center mb-3">
                    {post.category?.title && (
                      <span className="font-secondary text-sm font-bold text-primary tracking-[1.5px] uppercase px-2.5 py-0.5 bg-primary/10">
                        {post.category.title}
                      </span>
                    )}
                    <span className="font-secondary text-sm text-dark/35">
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="font-primary text-lg font-bold text-dark leading-snug">
                    {post.title}
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
