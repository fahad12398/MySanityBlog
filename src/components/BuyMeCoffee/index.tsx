import React from "react";
import cl from "classnames";

import ScreenEgg from "../ScreenEgg";
import styles from "./index.module.scss";
import Link from "next/link";

const BuyMeCoffee = ({ className }: { className?: any }) => {
  return (
    <ScreenEgg type="right">
      <div className={cl(className, styles.buyCoffee)}>
        <Link href="/" className={styles.buyCoffeeButton}>
          Buy me a coffee
        </Link>
      </div>
    </ScreenEgg>
  );
};

export default BuyMeCoffee;
