import { sanityFetch } from "@/src/lib/sanity/live";
import { relatedPostsQuery } from "@/src/lib/sanity/queries";
import type { Post } from "@/src/lib/sanity/types";
import BlogCard from "@/src/components/BlogCard";

export default async function RelatedPosts({
  category,
  slug,
}: {
  category: string;
  slug: string;
}) {
  const { data } = await sanityFetch({
    query: relatedPostsQuery,
    params: { category, slug },
  });
  const posts = data as Post[];

  if (!posts.length) return null;

  return (
    <section className="px-8 md:px-16 max-w-4xl mx-auto mb-20">
      <div className="section-label mb-4">Related Articles</div>
      <h2 className="font-primary text-[28px] font-extrabold text-dark tracking-[-0.5px] mb-8">
        More like this
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
        {posts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
}
