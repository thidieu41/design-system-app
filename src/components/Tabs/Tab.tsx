import styled from "@emotion/styled";
import { TabProps, TabStyleProps } from "./tabs.type";
import { useTabContext } from "./Tabs";
import { useTheme } from "../../theme/ThemeProvider";
import { useSxStyles } from "../../utils/useSxStyles";

const TabRoot = styled("button")<TabStyleProps>((props) => {
  const {
    selected,
    color = "primary",
    size = "medium",
    orientation,
    sx = {},
  } = props;
  const theme = useTheme();
  const palette = theme.palette[color];
  const fontSizeText = theme.fontSize;
  const sxStyle = useSxStyles(sx);
  return {
    display: "flex",
    border: "none",
    padding: "10px 20px",
    fontSize: fontSizeText[`${size}`],
    transition: "0.2s ease",
    position: "relative",
    ...(selected
      ? {
          backgroundColor: palette.main,
          color: palette.contrastText,
          "&::after": {
            content: '""',
            position: "absolute",
            ...(orientation === "horizontal"
              ? {
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                }
              : {
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "3px",
                  height: "100%",
                }),
            backgroundColor: "black",
          },
        }
      : {
          background: "none",
          "&:hover": {
            backgroundColor: "#ececec",
          },
        }),
    ...sxStyle,
  };
});

export const Tab = (props: TabProps) => {
  const { children, value, index } = props;
  const { tab, onClick: handleClick, orientation } = useTabContext();

  const handleSetTab = (e: any, valueTab: any) => {
    handleClick(e, valueTab);
  };

  const currentTabValue = value === undefined ? index : value;
  const selected = tab === currentTabValue;

  return (
    <TabRoot
      selected={selected}
      orientation={orientation}
      {...props}
      onClick={(e) => handleSetTab(e, currentTabValue)}
      role="tab"
    >
      {children}
    </TabRoot>
  );
};
