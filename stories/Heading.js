import "./Heading.css";

export const createHeading = ({ size = 1, color = color, text = "" }) => {
  const heading = document.createElement(`h${size}`);
  heading.style.color = color;
  heading.innerText = text;

  return heading;
};
