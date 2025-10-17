import styled from "@emotion/styled";
import { SxProps, useSxStyles } from "../../hooks/useSxStyles";
import { useAccordionContext } from "./Accordion";
import { useRef } from "react";

export type AccordionDetailsProps = React.HTMLAttributes<HTMLDivElement> & {
  sx?: SxProps;
  expanded?: boolean;
};

export type ExpanededIconProps = {
  expanded: boolean;
};

const AccordionDetailsRoot = styled("div")<AccordionDetailsProps>(
  ({ sx, expanded }) => {
    const sxStyle = useSxStyles(sx);
    return {
      backgroundColor: "#d9d9d9",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      padding: 16,
      marginBottom: expanded ? 4 : 0,
      color: "#000000",
      overflow: "hidden",
      lineHeight: "2",
      ...sxStyle,
    };
  }
);

const AccordionDetailsWrapper = styled("div")<ExpanededIconProps>(
  ({ expanded }) => ({
    transition: "0.3s ease",
  })
);

export const AccordionDetails: React.FC<AccordionDetailsProps> = (props) => {
  const { expanded, detailId, summaryId } = useAccordionContext();
  const { children } = props;
  const ref = useRef<HTMLDivElement>(null);
  return (
    <AccordionDetailsWrapper
      expanded={expanded}
      role="region"
      aria-labelledby={summaryId}
      style={{
        maxHeight: expanded ? `${ref.current?.scrollHeight}px` : 0,
      }}
    >
      <AccordionDetailsRoot ref={ref} expanded {...props}>
        {children}
      </AccordionDetailsRoot>
    </AccordionDetailsWrapper>
  );
};
