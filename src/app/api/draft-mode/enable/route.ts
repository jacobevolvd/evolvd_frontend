import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { client } from "@/src/lib/sanity/client";

export const { GET } = defineEnableDraftMode({
  client: client.withConfig({
    token: process.env.SANITY_VIEWER_TOKEN,
  }),
});
