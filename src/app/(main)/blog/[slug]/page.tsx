import type { Metadata } from "next";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextComponents } from "next-sanity";
import { sanityFetch } from "@/src/lib/sanity/live";
import { postBySlugQuery } from "@/src/lib/sanity/queries";
import { urlFor } from "@/src/lib/sanity/image";
import type { Post } from "@/src/lib/sanity/types";
import { Suspense } from "react";
import InlineAd from "@/src/components/InlineAd";
import NewsletterSignup from "@/src/components/NewsletterSignup";
import RelatedPosts from "@/src/components/RelatedPosts";
import NewsletterModal from "@/src/components/NewsletterModal";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://productnatives.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { data: post } = await sanityFetch({ query: postBySlugQuery, params: { slug } }) as { data: Post | null };

  if (!post) return {};

  const ogImage = post.banner
    ? urlFor(post.banner).width(1200).height(630).url()
    : undefined;

  return {
    title: post.title,
    description: post.description ?? undefined,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description ?? undefined,
      url: `/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Arun Jacob"],
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: post.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description ?? undefined,
      images: ogImage ? [ogImage] : [],
    },
  };
}

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
    divider: ({ value }) => (
      <hr
        className={`my-10 border-0 ${
          value?.style === "dots"
            ? "text-center text-2xl tracking-[0.5em] text-gray-400 before:content-['•••']"
            : "h-px bg-gray-200"
        }`}
      />
    ),
    codeBlock: ({ value }) => (
      <div className="my-8 rounded-lg overflow-hidden bg-gray-900 text-gray-100">
        {value?.filename && (
          <div className="px-4 py-2 text-sm text-gray-400 bg-gray-800 border-b border-gray-700">
            {value.filename}
          </div>
        )}
        <pre className="p-4 overflow-x-auto text-sm">
          <code>{value?.code}</code>
        </pre>
      </div>
    ),
  },
  marks: {
    inlineQuote: ({ children }) => (
      <q className="font-serif">{children}</q>
    ),
  },
  block: {
    blockquote: ({ children }) => (
      <blockquote className="my-8 pl-5 text-lg text-gray-600">
        <span className="text-4xl leading-none text-primary font-serif">
          &ldquo;
        </span>
        {children}
        <span className="text-4xl leading-none text-primary font-serif">
          &rdquo;
        </span>
      </blockquote>
    ),
    pullQuote: ({ children }) => (
      <blockquote className="my-10 !border-l-4 !border-primary !pl-5 text-xl italic text-gray-500">
        {children}
      </blockquote>
    ),
  },
};

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: post } = await sanityFetch({ query: postBySlugQuery, params: { slug } }) as { data: Post | null };

  if (!post) notFound();

  const ogImage = post.banner
    ? urlFor(post.banner).width(1200).height(630).url()
    : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description ?? "",
    url: `${siteUrl}/blog/${slug}`,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: "Arun Jacob",
      url: `${siteUrl}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "ProductNatives",
      url: siteUrl,
    },
    ...(ogImage && { image: ogImage }),
  };

  return (
    <div className="min-h-screen w-full bg-white text-black font-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <article className="px-8 mt-20 py-12 md:px-16 max-w-4xl mx-auto">
        {/* Title & Date */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          {post.title}
        </h1>
        {post.description && (
          <p className="mt-3 text-base">{post.description}</p>
        )}
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
        {post.body && (() => {
          const mid = Math.floor(post.body.length / 2);
          const firstHalf = post.body.slice(0, mid);
          const secondHalf = post.body.slice(mid);
          return (
            <div className="mt-10 prose prose-gray max-w-none prose-blockquote:border-0 prose-blockquote:pl-0">
              <PortableText
                value={firstHalf}
                components={portableTextComponents}
              />
              {post.inlineAd && (
                <InlineAd
                  title={post.inlineAd.title}
                  description={post.inlineAd.description}
                  href={post.inlineAd.link}
                  image={post.inlineAd.image}
                />
              )}
              <PortableText
                value={secondHalf}
                components={portableTextComponents}
              />
            </div>
          );
        })()}
      </article>

      {/* Subscribe Banner */}
      <section className="px-8 md:px-16 max-w-4xl mx-auto mb-20">
        <div className="p-10 bg-[#F2EDE6] border border-dark/8 text-center">
          <div className="section-label justify-center mb-4">Stay in the loop</div>
          <h2 className="font-primary text-[28px] font-extrabold text-dark tracking-[-0.5px] mb-3">
            Enjoyed this article?
          </h2>
          <p className="font-secondary text-[15px] text-[#57534E] leading-relaxed max-w-[400px] mx-auto mb-7">
            Get one practical product lesson every week. Join 1,200+ founders, PMs, and designers.
          </p>
          <div className="flex justify-center">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {post.category?.slug?.current && (
        <Suspense>
          <RelatedPosts
            category={post.category.slug.current}
            slug={slug}
          />
        </Suspense>
      )}

      <NewsletterModal />
      <Footer />
    </div>
  );
}
