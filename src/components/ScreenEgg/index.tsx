import React from "react";
import cl from "classnames";

import styles from "./index.module.scss";

const ScreenEgg = ({
  className,
  type,
  children,
}: {
  className?: any;
  type?: any;
  children: any;
}) => {
  return (
    <div
      className={cl(
        className,
        styles.screenEgg,
        type === "right" ? styles.screenEggRight : styles.screenEggLeft
      )}
    >
      {children}
    </div>
  );
};

export default ScreenEgg;
