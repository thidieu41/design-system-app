import React, { HTMLAttributes } from "react";
import {
  IColor,
  IndicatorPlacementType,
  ISize,
  ISticky,
  IVariantButton,
  IVariantTabs,
  OrientationType,
} from "../../types/general.types";
import { SxProps } from "../../utils/useSxStyles";

export type TabsProps = HTMLAttributes<HTMLDivElement> & {
  defaultValue?: number;
  orientation?: OrientationType;
  sx?: SxProps
};

export type TabListProps = HTMLAttributes<HTMLDivElement> & {
  disableUnderline?: boolean;
  color?: IColor;
  component?: React.ElementType;
  size?: ISize;
  slotProps?: {
    root?: SxProps;
  };
  slots?: {
    root: React.ElementType;
  };
  sticky?: ISticky;
  sx?: SxProps;
  tabFlex?: number | string;
  underlinePlacement?: IndicatorPlacementType;
  variant?: IVariantTabs;
  orientation?: OrientationType;
};

export type TabProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: IColor;
  variant?: IVariantButton;
  size?: ISize;
  disableIndicator?: boolean;
  indicatorInset?: boolean;
  index?: number | string;
  indicatorPlacement?: IndicatorPlacementType;
  onChange?: () => void;
  slotProps?: {
    root?: SxProps;
  };
  slots?: { root?: React.ElementType };
  sx?: SxProps
};

export type TabStyleProps = TabProps & {
  selected?: boolean
  orientation?: OrientationType
}

export type TabPanelProps = HTMLAttributes<HTMLDivElement> & {
  value?: number | string;
  sx?:SxProps
};

export type TabContextProps = {
  onClick: (e: any, tabValue: number | string) => void;
  tab: number | string;
  orientation?: OrientationType;
};
