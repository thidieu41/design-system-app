import styled from "@emotion/styled";
import { TabContextProps, TabsProps } from "./tabs.type";
import { createContext, useContext, useState } from "react";
import { useSxStyles } from "../../utils/useSxStyles";

const TabContext = createContext<TabContextProps | null>(null);

const TabsRoot = styled("div")<TabsProps>((props) => {
  const { sx, orientation="horizontal" } = props;
  const sxStyled = useSxStyles(sx);
  return {
    ...(orientation === "horizontal"
      ? {
          display: "flex",
          flexDirection:"column"
        }
      : {
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
        }),
    ...sxStyled,
  };
});
export const Tabs = (props: TabsProps) => {
  const { children, defaultValue, orientation = "horizontal" } = props;
  const [tab, setTab] = useState(defaultValue || 0);
  const handleChangeTab = (e?: any, value?: number | string) => {
    setTab(Number(value));
  };

  const ctxValue = {
    onClick: handleChangeTab,
    tab,
    orientation,
  };

  return (
    <TabContext.Provider value={ctxValue}>
      <TabsRoot {...props}>{children}</TabsRoot>
    </TabContext.Provider>
  );
};

export const useTabContext = () => {
  const ctx = useContext(TabContext);
  if (!ctx) throw new Error("Tab subcomponet must be use within Tab");
  return ctx;
};
