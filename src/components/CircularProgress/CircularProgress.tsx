import styled from "@emotion/styled";
import { CircularProgressProps } from "./CircularProgress.types";
import { useTheme } from "../../theme/ThemeProvider";
import { keyframes } from "@emotion/react";
import { getCircularProgressUtilityClass } from "./circularProgressClasses";
import { capitalize, composeClasses } from "../../utils/utils";

const spinKeyframes = keyframes`
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
`;

const useUtilityClasses = (ownerState: CircularProgressProps) => {
  const { variant = "determinate", color = "primary" } = ownerState;
  const slots = {
    root: ["root", variant, color && `color${capitalize(color)}`],
    svg: ["svg"],
    circle: [
      "circle",
      variant === "determinate" ? "circleDeterminate" : "circleIndeterminate",
    ],
  };
  return composeClasses(
    slots,
    getCircularProgressUtilityClass,
    ownerState.classes || {}
  );
};

const CircularProgressRoot = styled("div")((props: CircularProgressProps) => {
  const {
    color = "secondary",
    variant = "indeterminate",
    size,
    thickness,
    value = 0,
  } = props;
  const theme = useTheme();
  const palette = theme.palette[color];
  return {
    color: palette?.main,
    width: size,
    height: size,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // position: "relative",
    ...(variant === "indeterminate" && {
      border: `${thickness}px solid #ccc`,
      borderTopColor: "#1976d2",
      animation: `${spinKeyframes} 1s linear infinite`,
    }),

    ...(variant === "determinate" && {
      background: `conic-gradient(#1976d2 ${value * 3.6}deg, #eee 0deg)`,
    }),
  };
});

const CircularProgressSVG = styled("svg")({
  display: "block",
});

const CircularProgressCircle = styled("circle")<{
  ownerState: CircularProgressProps;
  circumference: number;
}>((props) => {
  const { ownerState, circumference } = props;
  const { variant = "indeterminate", value = 0 } = ownerState;
  const strokeDashoffset = ((100 - value) / 100) * circumference;
  if (variant === "determinate") {
    return {
      stroke: "currentColor",
      strokeDasharray: circumference.toFixed(3),
      strokeDashoffset: strokeDashoffset.toFixed(3),
      transition: "stroke-dashoffset 0.3s ease 0s",
    };
  }
  return {
    stroke: "currentColor",
    strokeDasharray: "80px, 200px",
    strokeDashoffset: 0,
    animation: "circular-dash 1.4s ease-in-out infinite",
    strokeLinecap: "round",
  };
});

export default function CircularProgress(props: CircularProgressProps) {
  const { children, thickness, value, ...restProps } = props;
  const classes = useUtilityClasses(props);

  const radius = 20.2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div>
      <CircularProgressRoot {...restProps} className={classes.root}>
        <CircularProgressSVG className={classes.svg} viewBox="22 22 44 44">
          <CircularProgressCircle
            className={classes.circle}
            cx="44"
            cy="44"
            r="20.2"
            fill="none"
            strokeWidth={thickness}
            strokeLinecap="round"
            circumference={circumference}
            ownerState={props}
          >
          </CircularProgressCircle>
        </CircularProgressSVG>
      </CircularProgressRoot>
    </div>
  );
}
