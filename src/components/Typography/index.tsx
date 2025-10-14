
import { clsnm } from "@/utils/clsnm";
import type { PropsWithChildren } from "react";
import styles from "./style.module.css";
import type { FontAlign, FontColor, FontVariant, FontWeight } from "./types";

type Props<T extends React.ElementType> = {
  variant?: FontVariant;
  weight?: FontWeight;
  color?: FontColor;
  as?: T;
  align?: FontAlign;
  title?: string;
  className?: string;
  custom_color?: string;
};

export function Typography<T extends React.ElementType = "p">({
  variant = "body1",
  color = "primary",
  weight = "regular",
  as,
  align = "left",
  custom_color,
  children,
  className,
  title,
  ...props
}: PropsWithChildren<Props<T>> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) {
  const Component = as || "p";
  return (
    <Component
      title={title}
      className={clsnm(
        { color: custom_color },
        styles[variant],
        styles[weight],
        styles[color],
        styles[align],
        className,
      )}
      {...props}
      style={custom_color ? { color: custom_color } : undefined}
    >
      {title || children}
    </Component>
  );
}
