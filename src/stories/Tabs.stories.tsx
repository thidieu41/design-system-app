import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { TabList } from "../components/Tabs/TabList";
import { Tabs } from "../components/Tabs/Tabs";
import { Tab } from "../components/Tabs/Tab";
import { TabPanel } from "../components/Tabs/TabPannel";
import {
  TabsProps,
  TabListProps,
  TabProps,
  TabPanelProps,
} from "../components/Tabs/tabs.type";
import { IVariantButton } from "../types/general.types";

type ArgTypesProp = TabsProps & TabListProps & TabProps & TabPanelProps;

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
      table: { category: "Tabs" },
    },
    variant: {
      control: "radio",
      options: ["contained", "outlined", "text"],
      table: { category: "Tab" },
    },
    color: {
      control: "radio",
      options: ["primary", "secondary", "success", "warning", "error"],
      table: { category: "Tab" },
    },
  },
  render: (args) => {
    console.log(args);
    const { variant = "contained", color = "primary" } = args;
    return (
      <Tabs
        {...args}
        sx={{
          height: "200px",
        }}
      >
        <TabList>
          <Tab variant={variant} color={color}>
            Tab 0
          </Tab>
          <Tab variant={variant} color={color}>
            Tab 1
          </Tab>
          <Tab variant={variant} color={color}>
            Tab 2
          </Tab>
        </TabList>
        <TabPanel value={0}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </TabPanel>
        <TabPanel value={1}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.{" "}
        </TabPanel>
        <TabPanel value={2}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </TabPanel>
      </Tabs>
    );
  },
} satisfies Meta<ArgTypesProp>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};
