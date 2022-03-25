import "./Heading.css";

export const createHeading = ({
  size = 1,
  color = color,
  text = "",
  font = "",
  weight = "",
}) => {
  const heading = document.createElement(`h${size}`);
  heading.style.color = color;
  heading.innerText = text;
  heading.fontFamily = font;
  heading.className = [`heading-${weight}`];

  return heading;
};
