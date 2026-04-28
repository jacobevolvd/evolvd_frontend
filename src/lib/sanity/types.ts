import type { PortableTextBlock } from "next-sanity";

export interface Category {
  title: string;
  slug: { current: string };
}

export interface Post {
  _id: string;
  title: string;
  description?: string;
  excerpt?: string;
  slug: { current: string };
  publishedAt: string;
  category?: Category;
  banner?: {
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  body?: (PortableTextBlock | ImageBlock)[];
  inlineAd?: InlineAd;
}

export interface InlineAd {
  title: string;
  description: string;
  link: string;
  image?: {
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
}

export interface ImageBlock {
  _type: "image";
  _key: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
}
