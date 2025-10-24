import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Accordion } from "../components/Accordion/Accordion";
import { AccordionSummary } from "../components/Accordion/AccordionSummary";
import { AccordionDetails } from "../components/Accordion/AccordionDetails";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  render: (agrs) => {
    return (
      <Accordion {...agrs}>
        <AccordionSummary>Title</AccordionSummary>
        <AccordionDetails>Details</AccordionDetails>
      </Accordion>
    );
  },
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
