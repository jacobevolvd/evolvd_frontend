import type { Metadata } from "next";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Link from "next/link";
import { sanityFetch } from "@/src/lib/sanity/live";
import {
  postsQuery,
  postsByCategoryQuery,
  categoriesQuery,
} from "@/src/lib/sanity/queries";
import type { Post, Category } from "@/src/lib/sanity/types";
import FilterTabs from "@/src/components/FilterTabs";
import BlogCard from "@/src/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog — Product Insights & Frameworks",
  description:
    "Weekly essays on building products people actually need. Practical frameworks, real lessons, and honest takes from 20 years of product experience.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog — Product Insights & Frameworks | ProductNatives",
    description:
      "Weekly essays on building products people actually need. Practical frameworks, real lessons, and honest takes.",
    url: "/blog",
    type: "website",
  },
};

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

  const featured = posts.slice(0, 3);
  const rest = posts.slice(3);

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

            {/* Featured posts */}
            {featured.length > 0 && (
              <div className="mb-18 space-y-12">
                {featured.map((post) => (
                  <Link key={post._id} href={`/blog/${post.slug.current}`} className="block group">
                    <article>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-primary text-xs font-bold text-white bg-primary px-2 py-0.5 uppercase tracking-wide">New</span>
                        <span className="font-primary text-sm font-semibold text-dark/50 uppercase tracking-wide">
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <h2 className="font-primary text-[clamp(24px,3vw,36px)] font-extrabold text-dark leading-tight tracking-tight group-hover:text-primary transition-colors max-w-[700px]">
                        {post.title}
                      </h2>
                      {(post.excerpt || post.description) && (
                        <p className="font-secondary text-base text-dark/70 leading-relaxed mt-3 max-w-[700px] line-clamp-4">
                          {post.excerpt || post.description}
                        </p>
                      )}
                    </article>
                  </Link>
                ))}
              </div>
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
