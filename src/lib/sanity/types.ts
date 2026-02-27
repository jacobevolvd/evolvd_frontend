import type { PortableTextBlock } from "next-sanity";

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  banner?: {
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  body?: (PortableTextBlock | ImageBlock)[];
}

export interface ImageBlock {
  _type: "image";
  _key: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
}
