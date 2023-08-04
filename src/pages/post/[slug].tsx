import React from "react";
import { format } from "date-fns";
import Head from "next/head";

import { getClient } from "../../lib/sanity.client";

import { Article, Title, Content } from "../../components";

import styles from "./styles.module.scss";
import { token } from "@/lib/sanity.api";

const Post = ({ post }: { post: any }) => {
  const date = format(new Date(post._updatedAt), "dd MMM yyy");
  return (
    <Article backUrl="/" className={styles.post}>
      <Head>
        <title>{post.meta_title}</title>
      </Head>
      <Title className={styles.postTitle}>{post.title}</Title>
      <p className={styles.postDate}>{date}</p>
      <Content body={post.body} />
    </Article>
  );
};

export default Post;

export async function getStaticPaths() {
  const query = `*[_type == "post"] {
        slug {
            current
        }
    }`;

  const posts = await getClient({ token }).fetch(query);
  const paths = posts.map((post: any) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { slug } }: { params: any }) {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`;

  const post = await getClient({ token }).fetch(query);

  return {
    props: {
      post,
    },
  };
}
