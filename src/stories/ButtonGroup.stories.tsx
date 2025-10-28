import { Meta, StoryObj } from "@storybook/react-webpack5";
import { ButtonGroup } from "../components/ButtonGroup/ButtonGroup";
import { Button } from "../components/Button/Button";

const meta = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  argTypes:{
    spacing: {
      control:"number"
    }
  },
  render: (args) => {
    return (
      <ButtonGroup {...args}>
        <Button>Press 1</Button>
        <Button>Press 2</Button>
        <Button>Press 3</Button>
      </ButtonGroup>
    );
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    // spacing: 3,
    color:"secondary"
  },
};
