import { createButton } from "./Button";
import { createHeading } from "./Heading";
import "./Page.css";

export const createPage = () => {
  const container = document.createElement("div");
  const mainText = createHeading({
    text: "Header container example",
    color: "black",
  });
  const secondText = createHeading({
    size: 5,
    text: "This example is a quick exercise to illustrate hoe the bottom navba works",
    color: "gray",
  });

  const button = createButton({
    size: "medium",
    label: "View more",
    backgroundColor: "#7F56D9",
  });

  container.append(mainText);
  container.append(secondText);
  container.append(button);

  return container;
};
