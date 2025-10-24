import { HTMLAttributes } from "react";
import { IColor, IVariantProgess } from "../../types/general.types";

export type CircularProgressProps = HTMLAttributes<HTMLDivElement> & {
  classes?: Record<string, string>;
  color?: IColor;
  disableShrink?: boolean;
  enableTrackSlot?: boolean;
  size?: number | string;
  thickness?: number;
  value?: number;
  variant?: IVariantProgess
};

export type CircularProgressCircle = {
  circumference: number;
  ownerState: CircularProgressProps;
}