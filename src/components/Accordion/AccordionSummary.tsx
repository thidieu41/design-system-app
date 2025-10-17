import styled from "@emotion/styled";
import { SxProps, useSxStyles } from "../../hooks/useSxStyles";
import React from "react";
import { useTheme } from "../../theme/ThemeProvider";
import { useAccordionContext } from "./Accordion";

export type AccordionSummaryProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    classes?: object;
    expandIcon?: React.ReactNode;
    focusVisibleClassName?: string;
    sx?: SxProps;
  };

export type ExpanededIconProps = AccordionSummaryProps & {
  expanded: boolean;
};

const AccordionSummaryRoot = styled("button")<ExpanededIconProps>(
  ({ sx, disabled, expanded }) => {
    const theme = useTheme();
    const sxStyle = useSxStyles(sx);
    return {
      color: "black",
      fontSize: theme.typography.fontSize,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      padding: "12px 16px",
      width: "100%",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      userSelect: "none",
      fontWeight: 600,
      outline: "none",
      border: 0,
      "&: focus": {
        boxShadow: "0 0 0 3px rgba(25,118,210,0.15)",
        borderRadius: 4,
      },
      ...(disabled && {
        opacity: 0.6,
        cursor: "not-allowed",
      }),
      ...(expanded && {
        paddingTop: 20,
        transition: "0.3s ease",
      }),
      ...sxStyle,
    };
  }
);

const ExpandedIcon = styled("span")<ExpanededIconProps>(({ expanded }) => ({
  transition: "transform 0.25s ease",
  animationDuration: "0.25",
  ...(expanded && {
    animation: "rotate(180deg)",
  }),
  ...(expanded && {
    transform: "rotate(180deg)",
  }),
}));

const SumaryContent = styled("div")<{ expanded: boolean }>((expanded) => ({
  flexGrow: 1,
  textAlign: "start",
  // transition: "margin 0.25s ease",
  ...(expanded && {
    margin: "8px 0",
  }),
}));

export const AccordionSummary: React.FC<AccordionSummaryProps> = (props) => {
  const { children, expandIcon } = props;
  const { expanded, disabled, toggle, summaryId, detailId } =
    useAccordionContext();

  const onKeyDown: React.KeyboardEventHandler = (e) => {
    if (e.key == "" || e.key === "Enter") {
      e.preventDefault();
      toggle();
    }
  };
  return (
    <AccordionSummaryRoot
      id={summaryId}
      aria-controls={detailId}
      aria-expanded={expanded}
      onClick={() => !disabled && toggle()}
      onKeyDown={onKeyDown}
      disabled={disabled}
      expanded={expanded}
      {...props}
    >
      <SumaryContent expanded>{children}</SumaryContent>
      {expandIcon && (
        <ExpandedIcon expanded={expanded}>{expandIcon}</ExpandedIcon>
      )}
    </AccordionSummaryRoot>
  );
};
