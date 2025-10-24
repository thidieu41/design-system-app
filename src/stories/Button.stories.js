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
  color: "primary",
  variant:"outlined",
  size:"small",
  className:"",
  disabled:false,
  loading: false,
  fullWidth: false,
  sx: {},
  id:"",
  startIcon:<></>,
  children:"Press Me",
};
