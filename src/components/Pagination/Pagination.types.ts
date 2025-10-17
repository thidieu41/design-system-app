import { SxProps } from "../../hooks/useSxStyles";

export type ITypeProps =
  | "page"
  | "start-ellipsis"
  | "end-ellipsis"
  | "previous"
  | "next"
  | "first"
  | "last";

export type PaginationProps = {
  boundaryCount?: number;
  color?: "primary" | "secondary";
  count?: number;
  defaultPage?: number;
  disabled?: boolean;
  hideNextButton?: boolean;
  hidePrevButton?: boolean;
  onChange?: (event: any, page: number) => void;
  page?: number;
  renderItem?: () => void;
  shape?: "circular" | "rounded";
  showLastButton?: boolean;
  showFirstButton?: boolean;
  siblingCount?: number;
  size?: "small" | "medium" | "large";
  variant?: "outlined" | "text";
  sx?: SxProps;
};

export type UsePaginationProps = Pick<
  PaginationProps,
  | "count"
  | "page"
  | "defaultPage"
  | "onChange"
  | "siblingCount"
  | "boundaryCount"
  | "showLastButton"
  | "showFirstButton"
  | "hideNextButton"
  | "hidePrevButton"
>;

export type PaginationItemProps = PaginationProps & {
  type: ITypeProps;
  page?: number; // dùng cho type="page"
  selected?: boolean; // nếu là trang hiện tại
  disabled?: boolean; // nếu không thể click
  onClick?: (e: React.MouseEvent, page: number) => void;
};

export type PaginationList = Pick<
  PaginationItemProps,
  "disabled" | "page" | "type"
>;

export type IButtonProps = Pick<
  PaginationItemProps,
  "selected" | "disabled" | "variant" | "shape" | "color" | "size" | "sx"
>;
