import Pagination from "../components/Pagination/Pagination";

const meta = {
    title:"Components/Pagination",
    component:Pagination,
    argTypes:{
        onClick: {
          action:"click"
        }
    }
}

export default meta

const Template = (args) => {
  return <Pagination {...args}></Pagination>;
};

export const Default =  Template.bind({});
Default.args = {
  count: 10,
}

