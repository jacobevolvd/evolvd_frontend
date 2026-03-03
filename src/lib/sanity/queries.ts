export const postsQuery = `*[_type == "blog"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  banner,
  category
}`;

export const postsByCategoryQuery = `*[_type == "blog" && category == $category] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  banner,
  category
}`;

export const categoriesQuery = `array::unique(*[_type == "blog" && defined(category)].category)`;

export const postBySlugQuery = `*[_type == "blog" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  banner,
  body
}`;
