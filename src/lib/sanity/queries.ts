export const postsQuery = `*[_type == "blog"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  banner
}`;

export const postBySlugQuery = `*[_type == "blog" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  banner,
  body
}`;
