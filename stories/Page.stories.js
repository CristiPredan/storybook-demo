import { createPage } from "./Page";
import { createButton } from "./Button";

export default {
  title: "Pages/Page1",
};

const Template = ({ text, ...args }) => {
  return createPage();
};

export const page1 = Template.bind({});
