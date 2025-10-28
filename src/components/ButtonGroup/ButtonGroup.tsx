import styled from "@emotion/styled";
import { ButtonGroupProps } from "./ButtonGroup.types";
import { useTheme } from "../../theme/ThemeProvider";
import { ButtonGroupProvider } from "../../context/ButtonContext";
import { useMemo } from "react";
import { useSxStyles } from "../../hooks/useSxStyles";

const ButtonGroupRoot = styled("div")((props: ButtonGroupProps) => {
  const {
    color = "primary",
    spacing = 0,
    orientation = "horizontal",
    sx,
  } = props;
  const theme = useTheme();
  const palette = theme.palette[color];
  const useStyle = useSxStyles(sx);

  const direction: "row" | "column" =
    orientation === "horizontal" ? "row" : "column";

  return {
    display: "flex",
    flexDirection: direction,
    gap: `${spacing}px`,
    maxWidth: "fit-content",
    "& > :not(:first-child)": {
      ...(orientation === "horizontal"
        ? {
            borderLeft: `1px solid`,
          }
        : {
            borderTop: `1px solid`,
          }),
    },

    ...(spacing === 0 && {
      "& > :first-of-type": {
        ...(orientation === "horizontal"
          ? {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }
          : {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }),
      },
      "& > :last-of-type": {
        ...(orientation === "horizontal"
          ? {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }
          : {
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }),
      },
      "& > :not(:first-child):not(:last-child)": {
        borderRadius: 0,
      },
    }),

    ...useStyle,
  };
});

export const ButtonGroup = (props: ButtonGroupProps) => {
  const {
    children,
    variant = "contained",
    color = "primary",
    size = "medium",
    disabled,
  } = props;

  const buttonGroupContext = useMemo(
    () => ({ variant, color, size, disabled }),
    [variant, color, size, disabled]
  );

  return (
    <ButtonGroupRoot {...props}>
      <ButtonGroupProvider dataProps={buttonGroupContext}>
        {children}
      </ButtonGroupProvider>
    </ButtonGroupRoot>
  );
};
