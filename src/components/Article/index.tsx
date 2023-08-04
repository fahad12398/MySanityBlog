import React from "react";
import Link from "next/link";
import cl from "classnames";
import { AiOutlineArrowLeft } from "react-icons/ai";

import styles from "./index.module.scss";

const Article = ({
  children,
  backUrl,
  className,
}: {
  children: any;
  backUrl: any;
  className: any;
}) => {
  return (
    <article className={cl(className, styles.article)}>
      <Link href={backUrl} className={styles.articleBack}>
        <AiOutlineArrowLeft />
      </Link>
      <div className={styles.articleContent}>{children}</div>
    </article>
  );
};

export default Article;
