
import { Button as ButtonAnt, type ButtonProps, } from "antd";
import type { PropsWithChildren } from "react";
import styles from "./button.module.css";

interface Props extends ButtonProps{
  customVariant:
    | "primary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "secondary"
    | "dark_blue"
    | "table";
  btnSize: "small" | "medium" | "large";
  isOutline?: boolean;
}

export default function ButtonCustom({
  children,
  customVariant,
  isOutline = false,
  btnSize,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <>
      <ButtonAnt
        disabled={props.disabled}
        loading={props.loading}
        className={`${styles.button_custom} ${customVariant && styles[customVariant]} ${btnSize && styles[btnSize]} ${isOutline && styles.outline_btn}`}
        {...props}
      >
        {children}
      </ButtonAnt>
    </>
  );
}
