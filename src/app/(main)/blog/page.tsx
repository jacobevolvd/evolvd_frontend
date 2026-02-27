import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { sanityFetch } from "@/src/lib/sanity/client";
import { postsQuery } from "@/src/lib/sanity/queries";
import { urlFor } from "@/src/lib/sanity/image";
import type { Post } from "@/src/lib/sanity/types";

export default async function BlogPage() {
  const posts = await sanityFetch<Post[]>(postsQuery);

  return (
    <div className="min-h-screen w-full bg-white text-black font-primary">
      <Header />

      <section className="px-8 py-12 md:px-16 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="text-gray-400 text-sm mt-1">Insights and stories.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug.current}`}
              key={post._id}
              className="group"
            >
              {post.banner ? (
                <Image
                  src={urlFor(post.banner).width(600).height(450).url()}
                  alt={post.title}
                  width={600}
                  height={450}
                  className="aspect-4/3 w-full object-cover rounded-xl"
                />
              ) : (
                <div className="aspect-4/3 bg-gray-100 rounded-xl" />
              )}
              <h2 className="text-sm font-semibold mt-4 group-hover:underline">
                {post.title}
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
