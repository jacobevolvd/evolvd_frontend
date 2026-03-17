import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { sanityFetch } from "@/src/lib/sanity/live";
import {
  postsQuery,
  postsByCategoryQuery,
  categoriesQuery,
} from "@/src/lib/sanity/queries";
import { urlFor } from "@/src/lib/sanity/image";
import type { Post, Category } from "@/src/lib/sanity/types";
import FilterTabs from "@/src/components/FilterTabs";
import BlogCard from "@/src/components/BlogCard";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = category || "All";

  const [postsResult, categoriesResult] = await Promise.all([
    active === "All"
      ? sanityFetch({ query: postsQuery })
      : sanityFetch({ query: postsByCategoryQuery, params: { category: active } }),
    sanityFetch({ query: categoriesQuery }),
  ]);

  const posts = postsResult.data as Post[];
  const categories = categoriesResult.data as Category[];

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div className="min-h-screen w-full">
      <Header />

      <div className="pt-[100px]">
        <section className="py-15 px-7 bg-light">
          <div className="max-w-[1100px] mx-auto">
            {/* Header */}
            <div className="section-label mb-4">Blog</div>
            <h1 className="font-primary text-[clamp(36px,5vw,56px)] font-extrabold text-dark tracking-[-2px] mb-3">
              Thinking out loud.
            </h1>
            <p className="font-secondary text-[17px] text-[#57534E] leading-relaxed max-w-[480px] mb-12">
              Weekly essays on building products that matter. Strategy, process,
              frameworks, and hard-won lessons.
            </p>

            {/* Featured post */}
            {featured && (
              <Link href={`/blog/${featured.slug.current}`} className="block">
                <div className="flex flex-col md:flex-row gap-10 mb-18 p-9 border border-dark/8 bg-white">
                  {featured.banner ? (
                    <Image
                      src={urlFor(featured.banner).width(720).height(480).url()}
                      alt={featured.title}
                      width={720}
                      height={480}
                      className="flex-none w-full md:w-[360px] h-[240px] object-cover"
                    />
                  ) : (
                    <div className="flex-none w-full md:w-[360px] h-[240px] bg-gradient-to-br from-[#F2EDE6] to-dark/8 flex items-center justify-center font-secondary text-sm text-dark/35">
                      [Featured Image]
                    </div>
                  )}
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex gap-2.5 items-center mb-3.5">
                      {featured.category?.title && (
                        <span className="font-secondary text-sm font-bold text-primary tracking-[1.5px] uppercase">
                          {featured.category.title}
                        </span>
                      )}
                      <span className="font-secondary text-sm text-dark/35">
                        {new Date(featured.publishedAt).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "short", day: "numeric" }
                        )}
                      </span>
                    </div>
                    <h2 className="font-primary text-[26px] font-extrabold text-dark leading-snug tracking-tight mb-3">
                      {featured.title}
                    </h2>
                    {featured.description && (
                      <p className="font-secondary text-sm text-dark leading-relaxed mb-3 line-clamp-3">
                        {featured.description}
                      </p>
                    )}
                    <span className="font-secondary text-sm font-bold text-primary">
                      Read article &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            )}

            {/* Category filters */}
            <FilterTabs
              items={categories}
              active={active}
              basePath="/blog"
              paramName="category"
            />

            {/* Posts grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
              {rest.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
