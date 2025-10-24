import { generateUtilityClass } from "../../utils/utils";

export const circularProgressClasses = {
  root: 'CircularProgress-root',
  svg: 'CircularProgress-svg',
  circle: 'CircularProgress-circle',
  circleDeterminate: 'CircularProgress-circleDeterminate',
  circleIndeterminate: 'CircularProgress-circleIndeterminate',
};

export const getCircularProgressUtilityClass = (slots: string) => {
  return generateUtilityClass('CircularProgress', slots);
}