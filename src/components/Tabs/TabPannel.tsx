import styled from "@emotion/styled";
import { useTabContext } from "./Tabs";
import { TabPanelProps } from "./tabs.type";
import { useSxStyles } from "../../utils/useSxStyles";

const TabPannelRoot = styled("div")<TabPanelProps>((props) => {
  const { sx } = props;
  const sxStyle = useSxStyles(sx);
  return {
    padding: "10px 20px",
    height: "100%",
    width: "100%",
    transition: "0.2s ease",
    overflowX: "hidden",
    overflowY: "scroll",
    lineHeight:2,
    ...sxStyle,
  };
});

export const TabPanel = (props: TabPanelProps) => {
  const ctxTab = useTabContext();
  const rawTab = (ctxTab as any).tab;
  const { value, children } = props;

  if (rawTab === value) {
    return <TabPannelRoot {...props}>{children}</TabPannelRoot>;
  }

  return null;
};
