import Link from "next/link";
import type { Post } from "@/src/lib/sanity/types";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug.current}`} className="block">
      <article className="border border-dark/8 bg-white cursor-pointer transition-all hover:-translate-y-1 hover:border-primary/40 p-5.5">
        <h3 className="font-primary text-lg font-bold text-dark leading-snug">
          {post.title}
        </h3>
        {(post.description || post.excerpt) && (
          <p className="font-secondary text-sm text-dark leading-relaxed mt-2 line-clamp-3">
            {post.excerpt || post.description}
          </p>
        )}
        <div className="flex items-center justify-between mt-4 font-primary text-sm text-dark/35">
          {post.category?.title && (
            <span className="text-primary font-semibold">{post.category.title}</span>
          )}
          <span className="ml-auto">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </article>
    </Link>
  );
}
