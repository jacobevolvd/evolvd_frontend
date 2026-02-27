import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextComponents } from "next-sanity";
import { sanityFetch } from "@/src/lib/sanity/client";
import { postBySlugQuery } from "@/src/lib/sanity/queries";
import { urlFor } from "@/src/lib/sanity/image";
import type { Post } from "@/src/lib/sanity/types";

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <Image
          src={urlFor(value).width(1200).url()}
          alt={value.alt || ""}
          width={1200}
          height={680}
          className="w-full rounded-xl my-8"
        />
      );
    },
  },
};

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await sanityFetch<Post | null>(postBySlugQuery, { slug });

  if (!post) notFound();

  return (
    <div className="min-h-screen w-full bg-white text-black font-primary">
      <Header />

      <article className="px-8 py-12 md:px-16 max-w-4xl mx-auto">
        {/* Title & Date */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          {post.title}
        </h1>
        <p className="text-sm text-gray-400 mt-2">
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>

        {/* Hero Image */}
        {post.banner ? (
          <Image
            src={urlFor(post.banner).width(1200).height(680).url()}
            alt={post.title}
            width={1200}
            height={680}
            priority
            className="w-full rounded-2xl mt-10 object-cover"
          />
        ) : (
          <div className="w-full aspect-video bg-gray-100 rounded-2xl mt-10" />
        )}

        {/* Body */}
        {post.body && (
          <div className="mt-10 prose prose-gray max-w-none">
            <PortableText
              value={post.body}
              components={portableTextComponents}
            />
          </div>
        )}
      </article>

      <Footer />
    </div>
  );
}
