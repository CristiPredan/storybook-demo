import { createHeading } from "./Heading";
import { createButton } from "./Button";

export default {
  title: "Components/Heading",
};

const Template = ({ text, ...args }) => {
  return createHeading({ text, ...args });
};

export const H1 = Template.bind({});
H1.args = {
  size: 1,
  fontSize: "60px",
  text: "How to change text styles",
  color: "#101828",
};

export const H2 = Template.bind({});
H2.args = {
  size: 2,
  fontSize: "30px",
  text: "How to change text styles",
  color: "#101828",
};

export const H3 = Template.bind({});
H3.args = {
  size: 3,
  fontSize: "24px",
  text: "Open the text style edit menu",
  color: "#101828",
};
