import styled from "@emotion/styled";
import {
  IButtonPaginationProps,
  ISlotPropsTypes,
  PaginationItemProps,
} from "./Pagination.types";
import { useTheme } from "../../theme/ThemeProvider";
import React from "react";
import { useSxStyles } from "../../hooks/useSxStyles";

const ButtonPagination = styled("button")<IButtonPaginationProps>((props) => {
  const {
    selected,
    variant = "outlined",
    color = "secondary",
    shape = "rounded",
    typeProps,
    slotProps = {},
    sx,
  } = props;
  const theme = useTheme();
  const palette = theme.palette[color];
  const sxStyle = useSxStyles(sx);
  const slotPropsStyle = slotProps[typeProps as keyof ISlotPropsTypes] || {};

  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: selected ? palette.main : "transparent",
    color: selected ? "#fff" : "#000",
    cursor: "pointer",
    width: 30,
    height: 30,
    margin: "0 2px",
    padding: 6,
    boxSizing: "border-box",
    fontSize: theme.typography.fontSize,
    borderRadius: shape === "rounded" ? "50%" : 6,
    border: variant === "outlined" ? "1px solid" : "none",
    borderColor: variant === "outlined" ? palette.main : "transparent",
    "&:disabled": {
      opacity: 0.4,
      cursor: "not-allowed",
    },
    ...(typeProps !== "page" && {
      border: "none",
    }),
    ...sxStyle,
    ...(slotPropsStyle.style || slotPropsStyle.sx),
  };
});

export const PaginationItem = (props: PaginationItemProps) => {
  // exclude onChange from being spread onto the native button to avoid the type conflict
  const {
    page,
    disabled,
    selected,
    onClick: onClickProp,
    onChange,
    slots,
    slotProps,
    ...rest
  } = props;

  const content = () => {
    switch (props.typeProps) {
      case "start-ellipsis":
      case "end-ellipsis":
        return "...";
      case "previous":
        return slots?.previous || "<";
      case "next":
        return slots?.next || ">";
      case "first":
        return slots?.first || "<<";
      case "last":
        return slots?.last || ">>";
      default:
        return page;
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || !page) return;
    onClickProp?.(e, Number(page));
  };

  return (
    <ButtonPagination
      onClick={handleClick}
      disabled={disabled}
      selected={selected}
      shape={props.shape}
      variant={props.variant}
      slotProps={slotProps}
      {...rest}
    >
      {content()}
    </ButtonPagination>
  );
};
