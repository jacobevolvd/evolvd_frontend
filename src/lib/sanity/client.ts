import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
  useCdn: process.env.NEXT_PUBLIC_USE_CDN === "true",
  stega: {
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
});

const fetchOptions = {
  next: {
    revalidate:
      process.env.NEXT_PUBLIC_ENV === "production"
        ? Number(process.env.NEXT_PUBLIC_SANITY_REVALIDATE)
        : (false as const),
  },
};

export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T> {
  return client.fetch<T>(query, params, fetchOptions);
}
