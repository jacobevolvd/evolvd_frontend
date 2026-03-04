import { defineLive } from "next-sanity/live";
import { client } from "./client";

const token = process.env.SANITY_VIEWER_TOKEN;
if (!token) {
  throw new Error("Missing SANITY_VIEWER_TOKEN environment variable");
}

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
});
