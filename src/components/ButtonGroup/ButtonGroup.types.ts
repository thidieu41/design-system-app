import React from "react";
import {
  IColor,
  ISize,
  IVariantButton,
  OrientationType,
} from "../../types/general.types";
import { SxProps } from "../../hooks/useSxStyles";

export type ButtonGroupSlotProps = {};

export type ButtonGroupSlots = {
  root?: React.ElementType;
};

export type ButtonGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  disabled?: boolean;
  size?: ISize;
  slots?: ButtonGroupSlots;
  slotProps?: ButtonGroupSlotProps;
  variant?: IVariantButton;
  color?: IColor;
  spacing?: number | string;
  orientation?: OrientationType;
  buttonFlex?: number | string;
  component?: React.ReactNode;
  sx?: SxProps;
};
