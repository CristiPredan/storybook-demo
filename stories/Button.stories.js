import { createButton } from "./Button";
import { Button } from "react-bootstrap-storybook";

export default {
  title: "Components/Button",
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "small btn",
  onClick() {
    alert("Small button");
  },
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "medium btn",
  onClick() {
    alert("Medium buton");
  },
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "large btn",
  onClick() {
    alert("Large button");
  },
};
