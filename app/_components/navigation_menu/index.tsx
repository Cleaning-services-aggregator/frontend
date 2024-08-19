"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cx from "classnames";

import styles from "./index.module.css";

export function NavigationMenu() {
  const pathname = usePathname();

  return (
    <div className={styles.wrapper}>
      <div className={styles.links__wrapper}>
        <Link
          href="/requests/all"
          className={cx(styles.link, {
            [styles.active]: pathname.includes("/requests/all"),
          })}
        >
          Toate
        </Link>
        <Link
          href="/requests/mine"
          className={cx(styles.link, {
            [styles.active]: pathname.includes("/requests/mine"),
          })}
        >
          Ale mele
        </Link>
      </div>
    </div>
  );
}
