//hold and renders my data, cahngeing some of its content
// ex - contect variable is changed t the actual content we see on the websites
/export type Post = {
  id: string;
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  content: string;
  tags?: string[];
  coverImage?: string;
};

export const posts: Post[] = [
  {
    id: "1",
    title: "Post One",
    date: "2026-03-01",
    slug: "post-one",
    excerpt: "One sentence excerpt.",
    content: "Short content placeholder. Add real writing later.",
    tags: ["tag1", "tag2"],
    coverImage: "/palette.png",
  },
  {
    id: "2",
    title: "Post Two",
    date: "2026-03-05",
    slug: "post-two",
    excerpt: "One sentence excerpt.",
    content: "Short content placeholder. Add real writing later.",
    coverImage: "/palette.png",
  },
  {
    id: "3",
    title: "Post Three",
    date: "2026-03-08",
    slug: "post-three",
    excerpt: "One sentence excerpt.",
    content: "Short content placeholder. Add real writing later.",
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug) ?? null;
}