import * as React from "react";
import { NavigationMenu } from "@/_components/navigation_menu";

import styles from "./layout.module.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.layout}>
      <NavigationMenu />
      {children}
    </div>
  );
}
