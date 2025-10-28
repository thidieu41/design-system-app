import { Button } from "../components/Button/Button";

const meta = {
    title:"Components/Button",
    component:Button,
    argTypes:{
        onClick: {
          action:"click"
        }
    }
}

export default meta

const Template = (args) => {
  return (
    <Button {...args}/>
  )
};

export const Default = Template.bind({});
Default.args = {
  children:"Press Me",
};
