import styled from "@emotion/styled";
import { IButtonProps, PaginationItemProps } from "./Pagination.types";
import { useTheme } from "../../theme/ThemeProvider";

const ButtonPagination = styled("button")<IButtonProps>(
  ({
    selected,
    variant = "outlined",
    color = "secondary",
    size,
    shape = "rounded",

  }) => {
    const theme = useTheme();
    const paletee = theme.palette[color];
    return {
      background: selected ? paletee.main : "transparent",
      color: selected ? "#fff" : "#000",
      cursor: "pointer",
      padding: "8px 12px",
      margin: "0 2px",
      fontSize: theme.typography.fontSize,
      borderRadius: shape === "rounded" ? "50%" : 6,
      border: variant==="outlined" ? "1px solid": "none",
      borderColor: variant==="outlined" ? paletee.main : "transparent",
      "&:disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
    };
  }
);

export const PaginationItem = (props: PaginationItemProps) => {
  const { page, type, disabled, selected, onClick } = props;

  const content = () => {
    switch (type) {
      case "start-ellipsis":
      case "end-ellipsis":
        return "...";
      case "previous":
        return "<";
      case "next":
        return ">";
      case "first":
        return "<<";
      case "last":
        return ">>";
      default:
        return page;
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (disabled || !page) return;
    onClick?.(e, Number(page));
  };
  return (
    <ButtonPagination
      onClick={handleClick}
      disabled={disabled}
      selected={selected}
      shape={props.shape}
      variant={props.variant}
    >
      {content()}
    </ButtonPagination>
  );
};
