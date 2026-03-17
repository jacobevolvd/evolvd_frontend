export const postsQuery = `*[_type == "blog"] | order(publishedAt desc) {
  _id,
  title,
  description,
  slug,
  publishedAt,
  banner,
  category->{title, slug}
}`;

export const postsByCategoryQuery = `*[_type == "blog" && category->slug.current == $category] | order(publishedAt desc) {
  _id,
  title,
  description,
  slug,
  publishedAt,
  banner,
  category->{title, slug}
}`;

export const categoriesQuery = `*[_type == "blogCategory"] | order(title asc) {
  title,
  slug
}`;

export const postBySlugQuery = `*[_type == "blog" && slug.current == $slug][0] {
  _id,
  title,
  description,
  slug,
  publishedAt,
  banner,
  body,
  category->{title, slug},
  inlineAd->{title, description, link}
}`;

export const relatedPostsQuery = `*[_type == "blog" && category->slug.current == $category && slug.current != $slug] | order(publishedAt desc) [0...3] {
  _id,
  title,
  description,
  slug,
  publishedAt,
  banner,
  category->{title, slug}
}`;
