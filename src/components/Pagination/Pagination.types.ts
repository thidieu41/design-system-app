import React, { HTMLAttributes } from "react";
import { SxProps } from "../../hooks/useSxStyles";
import {
  IColor,
  ISize,
  IVariantButton,
  ShapeType,
} from "../../types/general.types";

export type ITypeProps =
  | "page"
  | "start-ellipsis"
  | "end-ellipsis"
  | "previous"
  | "next"
  | "first"
  | "last";

export type ISlotPropsTypes = {
  first?: HTMLAttributes<React.ElementType> & {
    sx?: SxProps | {};
  };
  last?: HTMLAttributes<React.ElementType> & {
    sx?: SxProps | {};
  };
  next?: HTMLAttributes<React.ElementType> & {
    sx?: SxProps | {};
  };
  previous?: HTMLAttributes<React.ElementType> & {
    sx?: SxProps | {};
  };
};

export type ISlotsProps = {
  first?: React.ReactNode;
  last?: React.ReactNode;
  next?: React.ReactNode;
  previous?: React.ReactNode;
};

export type PaginationProps = {
  boundaryCount?: number;
  color?: IColor;
  count?: number;
  defaultPage?: number;
  disabled?: boolean;
  hideNextButton?: boolean;
  hidePrevButton?: boolean;
  onChange?: (event: any, page: number) => void;
  page?: number;
  renderItem?: (item: PaginationItemProps) => React.ReactNode;
  shape?: ShapeType;
  showLastButton?: boolean;
  showFirstButton?: boolean;
  siblingCount?: number;
  size?: ISize;
  variant?: IVariantButton;
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
  typeProps?: ITypeProps;
  page?: number; // dùng cho type="page"
  selected?: boolean; // nếu là trang hiện tại
  disabled?: boolean; // nếu không thể click
  slots?: ISlotsProps;
  slotProps?: ISlotPropsTypes;
  onClick?: (e: React.MouseEvent, page: number) => void;
};

export type PaginationList = Pick<
  PaginationItemProps,
  "disabled" | "page" | "typeProps"
>;

export type IButtonProps = Pick<
  PaginationItemProps,
  | "selected"
  | "disabled"
  | "variant"
  | "shape"
  | "color"
  | "size"
  | "sx"
  | "typeProps"
  | "slotProps"
  | "slots"
>;

export type IButtonPaginationProps = IButtonProps &
  React.HTMLAttributes<HTMLButtonElement>;
