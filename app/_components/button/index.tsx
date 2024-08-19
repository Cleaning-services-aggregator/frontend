import cx from "classnames";

import styles from "./index.module.css";

type ButtonProps = {
  children: string;
  onClick: () => void;
  small?: boolean;
  transparent?: boolean;
};

export function Button({ children, onClick, small, transparent }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cx(styles.wrapper, {
        [styles.small]: small,
        [styles.transparent]: transparent,
      })}
    >
      {children}
    </button>
  );
}
