import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/src/lib/sanity/image";
import type { Post } from "@/src/lib/sanity/types";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug.current}`} className="block">
      <article className="border border-dark/8 bg-white cursor-pointer transition-all hover:-translate-y-1 hover:border-primary/40 overflow-hidden">
        {post.banner ? (
          <Image
            src={urlFor(post.banner).width(640).height(320).url()}
            alt={post.title}
            width={640}
            height={320}
            className="w-full h-[160px] object-cover"
          />
        ) : (
          <div className="h-[160px] bg-gradient-to-br from-[#F2EDE6] to-dark/8" />
        )}
        <div className="p-5.5">
          <div className="flex gap-2.5 items-center mb-2.5">
            {post.category?.title && (
              <span className="font-secondary text-sm font-bold text-primary tracking-[1.5px] blog-card-categories">
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
          {post.description && (
            <p className="font-secondary text-sm text-dark leading-relaxed mt-2 line-clamp-3">
              {post.description}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}
