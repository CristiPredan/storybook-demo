import { createButton } from "./Button";
import { Button } from "react-bootstrap-storybook";

export default {
  title: "Components/Button",
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  size: "extrasmall",
  label: "Extrasm",
  onClick() {
    alert("ExtraSmall button");
  },
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Small",
  onClick() {
    alert("Small button");
  },
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Medium",
  onClick() {
    alert("Medium buton");
  },
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Large",
  onClick() {
    alert("Large button");
  },
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: "extralarge",
  label: "Extralarge",
  onClick() {
    alert("ExtraLarge button");
  },
};
