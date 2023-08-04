import { token } from "@/lib/sanity.api";
import { getClient } from "../../lib/sanity.client";
import { groq } from "next-sanity";

export default async function post(req: any, res: any) {
  const { start, end } = req.query;

  if (isNaN(Number(start)) || isNaN(Number(end))) {
    return res.status(400).end();
  }

  const { posts, total } = await loadData(start, end);

  res.status(200).json({
    posts,
    total,
  });
}

const postFields = groq`
  _id,
  title,
  date,
  _updatedAt,
  excerpt,
  mainImage,
  "slug": slug.current,
  "author": author->{name, picture},
`;

export async function loadData(start: any, end: any) {
  const query = groq`{
    "posts": *[_type == "post"] | order(date desc, _updatedAt desc) {
      ${postFields}
    },
    "total": count(*[_type == "post"])
  }`;

  const { posts, total } = await getClient({ token }).fetch(query);

  return {
    posts,
    total,
  };
}
