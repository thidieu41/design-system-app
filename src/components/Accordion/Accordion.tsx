import styled from "@emotion/styled";
import { createContext, useContext, useId, useState } from "react";

type AccordionContextProps = {
  expanded: boolean;
  disabled?: boolean;
  summaryId: string;
  detailId: string;
  toggle: () => void;
};

const AccordionContext = createContext<AccordionContextProps | null>(null);

type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
  expaned?: boolean;
  defaultExpaned?: boolean;
  onChange?: (expaned: boolean) => void;
  disabled?: boolean;
  clasName?: string;
  square?: boolean;
  size?: "small" | "meduim" | "large";
  variant?: "outlined" | "filled";
  id?: string;
};

const AccordionRoot = styled("div")<AccordionProps>(({ square, expaned }) => ({
  overflow: "hidden",
  background: "white",
  transition:'0.2s ease',
  ...(square && {
    borderRadius: 0,
  }),
  "&:not(:first-of-type)::before": {
    display: "block",
    right: 0,
    left: 0,
    top: -1,
    height: !expaned ? 1 : 0,
    backgroundColor: "#a89090",
    content: '""',
  },
  "&:first-of-type": {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  "&:last-of-type": {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  marginTop: expaned ? 2 : 0,
}));

export const Accordion = (props: AccordionProps) => {
  const {
    children,
    expaned: expanedProp,
    disabled,
    id,
    defaultExpaned,
    onChange,
  } = props;
  const autoId = useId();
  const baseId = id ?? `accordion-${autoId}`;

  const [expanedState, setExpandedState] = useState(defaultExpaned);
  const isControlled = expanedProp !== undefined;
  const expanded = isControlled ? !!expanedProp : expanedState;

  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setExpandedState(!expanded);
    onChange?.(!expanded);
  };
  const ctxValue = {
    disabled: disabled || false,
    expanded: expanded || false,
    toggle,
    summaryId: `${baseId}-summary`,
    detailId: `${baseId}-details`,
  };
  const stateAttr = expanded ? "expanded" : "collapsed";
  return (
    <AccordionContext.Provider value={ctxValue}>
      <AccordionRoot
        data-state={stateAttr}
        role="presentation"
        {...props}
        expaned={expanded}
      >
        {children}
      </AccordionRoot>
    </AccordionContext.Provider>
  );
};

export const useAccordionContext = () => {
  const ctx = useContext(AccordionContext);
  if (!ctx)
    throw new Error("Accordion subcomponent must be used within <Accordion />");
  return ctx;
};
