import { createHeading } from "./Heading";
// import { createButton } from "./Button";

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

export const InterThin = Template.bind({});
InterThin.args = {
  size: 2,
  fontSize: "30px",
  text: "The Outermost House by Henry Beston",
  weight: "thin",
};

export const InterExtraLight = Template.bind({});
InterExtraLight.args = {
  size: 2,
  fontSize: "30px",
  text: "The Outermost House by Henry Beston",
  weight: "extralight",
};

export const InterLight = Template.bind({});
InterLight.args = {
  size: 2,
  fontSize: "30px",
  text: "The Outermost House by Henry Beston",
  weight: "light",
};

export const InterRegular = Template.bind({});
InterRegular.args = {
  size: 2,
  fontSize: "30px",
  text: "The Outermost House by Henry Beston",
  weight: "regular",
};

export const InterMedium = Template.bind({});
InterMedium.args = {
  size: 2,
  fontSize: "30px",
  text: "The Outermost House by Henry Beston",
  weight: "medium",
};

export const InterSemiBold = Template.bind({});
InterSemiBold.args = {
  size: 2,
  fontSize: "30px",
  text: "The Outermost House by Henry Beston",
  weight: "semibold",
};

export const InterBold = Template.bind({});
InterBold.args = {
  size: 2,
  fontSize: "30px",
  text: "The Outermost House by Henry Beston",
  weight: "bold",
};

export const InterExtraBold = Template.bind({});
InterExtraBold.args = {
  size: 2,
  fontSize: "30px",
  text: "The Outermost House by Henry Beston",
  weight: "extrabold",
};

export const InterBlack = Template.bind({});
InterBlack.args = {
  size: 2,
  fontSize: "30px",
  text: "The Outermost House by Henry Beston",
  weight: "black",
};
