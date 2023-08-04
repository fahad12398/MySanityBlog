import React from "react";
import cl from "classnames";
import Link from "next/link";
import Image from "next/image";

import { urlFor } from "../../lib/sanity.client";
import Title from "../Title";

import styles from "./index.module.scss";

const Post = ({
  className,
  mainImage,
  title,
  excerpt,
  slug,
}: {
  className: any;
  mainImage: any;
  title: any;
  excerpt: any;
  slug: any;
}) => {
  return (
    <Link
      href={`/post/${encodeURIComponent(slug)}`}
      className={cl(className, styles.post, styles.postLink)}
    >
      <Title type="small" className={styles.postTitle}>
        {title}
      </Title>
      <div className={styles.postContent}>
        <div className={styles.postImage}>
          <Image
            src={mainImage ? urlFor(mainImage).url() : ""}
            alt={mainImage ? mainImage.caption : ""}
            width="100"
            height="100"
          />
        </div>
        <p className={styles.postDescription}>{excerpt}</p>
      </div>
    </Link>
  );
};

export default Post;
