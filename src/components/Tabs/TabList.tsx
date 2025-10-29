import styled from "@emotion/styled";
import { TabListProps } from "./tabs.type";
import React from "react";
import { useTabContext } from "./Tabs";
import { useSxStyles } from "../../utils/useSxStyles";

const TabListRoot = styled("div")<TabListProps>((props) => {
  const {
    disableUnderline = false,
    orientation = "horizontal",
    sx = {},

  } = props;
  const sxStyle = useSxStyles(sx);
  return {
    display: "flex",
    flexDirection: orientation === "horizontal" ? "row" : "column",
    ...(orientation === "horizontal"
      ? {
          borderBottom: disableUnderline ? "none" : "1px solid #cfcfcf",
        }
      : {
          borderRight: disableUnderline ? "none" : "1px solid #cfcfcf",
        }),
    boxSizing: "border-box",
    ...sxStyle,
  };
});

export const TabList = (props: TabListProps) => {
  const { children } = props;
  const { orientation } = useTabContext();

  return (
    <TabListRoot orientation={orientation} {...props}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child as React.ReactElement<any>, { index });
      })}
    </TabListRoot>
  );
};
