import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { useTheme } from "../../theme/ThemeProvider";
import { keyframes } from "@emotion/react";
import { SxProps, useSxStyles } from "../../utils/useSxStyles";
import { IColor, ISize, IVariantButton } from "../../types/general.types";
import { useButtonGroupContext } from "../../context/ButtonContext";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  lable?: string;
  variant?: IVariantButton;
  color?: IColor;
  size?: ISize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  sx?: SxProps;
}

const spin = keyframes`
0% { transform: rotate(0deg);}
100% {transform: rotate(360deg);}
`;

const Spinner = styled("span")({
  display: "inline-block",
  width: 18,
  height: 18,
  border: "2px solid rgba(255,255,255,0.6)",
  borderTopColor: "#fff",
  borderRadius: "50%",
  animation: `${spin} 1s linear infinite`,
  position: "absolute",
});

const ButtonContent = styled("span")<{ loading?: boolean }>(({ loading }) => ({
  visibility: loading ? "hidden" : "visible",
}));

const ButtonStartIcon = styled("span")<ButtonProps>(({ size }) => ({
  display: "inherit",
  marginRight: size === "small" ? 4 : size === "large" ? 10 : 8,
}));

const ButtonEndIcon = styled("span")<ButtonProps>(({ size }) => ({
  display: "inherit",
  marginLeft: size === "small" ? 4 : size === "large" ? 10 : 8,
}));

const ButtonRoot = styled("button")<ButtonProps>(
  ({
    variant,
    color = "primary",
    size,
    disabled = false,
    loading = false,
    fullWidth = false,
    sx,
  }) => {
    const theme = useTheme();
    const palette = theme.palette[color];
    const sxStyles = useSxStyles(sx);
    const isDisable = disabled || loading;
    return {
      position: "relative",
      fontFamily: theme.typography.fontFamily,
      borderRadius: 6,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      // flex: 1,
      ...(fullWidth && {
        width: "100%",
      }),
      padding:
        size === "small"
          ? "4px 14px"
          : size === "large"
          ? "8px 22px"
          : "6px 16px",
      fontSize:
        size === "small"
          ? 12
          : size === "large"
          ? 16
          : theme.typography.fontSize,
      cursor: isDisable ? "not-allowed" : "pointer",
      transition: "all 0.2s ease",
      ...(variant === "contained" && {
        backgroundColor: isDisable
          ? theme.palette.action.disabledBackground
          : palette.main,
        color: isDisable
          ? theme.palette.action.disabledText
          : palette.contrastText,
        border: "none",
      }),
      ...(variant === "outlined" && {
        backgroundColor: "transparent",
        color: isDisable ? theme.palette.action.disabledText : palette.main,
        border: `1px solid ${
          isDisable ? theme.palette.action.disabledBorder : palette.main
        }`,
      }),
      ...(variant === "text" && {
        backgroundColor: "transparent",
        color: isDisable ? theme.palette.action.disabledText : palette.main,
        border: "none",
      }),
      "&:hover": {
        backgroundColor: palette.hover,
        color: palette.contrastText
      },
      ...sxStyles,
    };
  }
);

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    startIcon,
    endIcon,
    children,
    lable,
    size: sizeProp,
    variant: variantProp,
    color: colorProp,
    disabled: disabledProp = false,
  } = props;
  
  const buttonGroupContext = useButtonGroupContext();
  const dataProps = buttonGroupContext?.dataProps;

  const size = sizeProp || dataProps?.size || "medium";
  const variant = variantProp || dataProps?.variant || "contained";
  const color = colorProp || dataProps?.color || "primary";
  const disabled = disabledProp || dataProps?.disabled || false;

  const mergeProps = {
    ...props,
    size,
    variant,
    color,
    disabled,
  };

  return (
    <ButtonRoot
      aria-label={lable || ""}
      {...mergeProps}
      disabled={disabled || props.loading}
    >
      {startIcon && (
        <ButtonStartIcon {...mergeProps}>{startIcon} </ButtonStartIcon>
      )}
      {props.loading && <Spinner />}
      <ButtonContent loading={props.loading}>{lable || children}</ButtonContent>
      {endIcon && <ButtonEndIcon {...mergeProps}> {endIcon}</ButtonEndIcon>}
    </ButtonRoot>
  );
};

Button.propTypes /* remove-proptypes */ = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(["contained", "outlined", "text"]),
    PropTypes.string,
  ]),
  color: PropTypes.oneOfType([
    PropTypes.oneOf(["primary", "secondary", "error"]),
    PropTypes.string,
  ]),
  size: PropTypes.oneOfType([
    PropTypes.oneOf(["small", "medium", "large"]),
    PropTypes.string,
  ]),
  loading: PropTypes.bool,
  fullWidth: PropTypes.bool,

  sx: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
  ]),

  id: PropTypes.string,
};
