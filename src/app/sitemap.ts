import type { MetadataRoute } from "next";
import { client } from "@/src/lib/sanity/client";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://productnatives.com";

const staticRoutes: MetadataRoute.Sitemap = [
  { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
  { url: `${siteUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${siteUrl}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
  { url: `${siteUrl}/book`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  { url: `${siteUrl}/speaking`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  { url: `${siteUrl}/subscribe`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  { url: `${siteUrl}/tools`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  { url: `${siteUrl}/vault`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client
    .fetch<{ slug: { current: string }; publishedAt: string }[]>(
      `*[_type == "blog"] | order(publishedAt desc) { slug, publishedAt }`
    )
    .catch(() => []);

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
