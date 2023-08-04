import React from "react";
import cl from "classnames";
import { PortableText } from "@portabletext/react";

import styles from "./index.module.scss";

const Content = ({ body, className }: { body: any; className?: any }) => {
  return (
    <div className={cl(className, styles.content)}>
      <PortableText
        value={body}
        // imageOptions={{ w: 1000, h: 750, fit: "max" }}
      />
    </div>
  );
};

export default Content;
