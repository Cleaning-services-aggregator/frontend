import * as React from "react";
import cx from "classnames";

import styles from "./index.module.css";

type InputProps = {
  type: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  required?: boolean;
  short?: boolean;
};

export function Input(props: InputProps) {
  return (
    <div
      className={cx(styles.input__container, {
        [styles.short]: props.short,
      })}
    >
      <label className={styles.label} htmlFor={props.name}>
        {props.label}
      </label>
      <input
        autoComplete={"off"}
        type={props.type}
        name={props.name}
        maxLength={props.maxLength}
        className={styles.input}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
      />
    </div>
  );
}
