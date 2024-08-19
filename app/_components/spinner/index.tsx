import * as React from "react";

import styles from "./index.module.css";
import classnames from "classnames";

type SpinnerProps = {
  isLoading?: boolean;
  blue?: boolean;
  danger?: boolean;
  submit?: boolean;
};

export function Spinner({ isLoading, blue, danger, submit }: SpinnerProps) {
  return (
    <div
      className={classnames(styles.container, {
        [styles.submit]: submit,
      })}
    >
      {isLoading && (
        <div
          className={classnames(styles.spinner, {
            [styles.blue]: blue,
            [styles.danger]: danger,
          })}
        >
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      )}
    </div>
  );
}
