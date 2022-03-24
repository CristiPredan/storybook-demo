import "./Button.css";

export const createButton = ({
  size = size,
  backgroundColor = backgroundColor,
  label = label,
  onClick,
}) => {
  const btn = document.createElement("button");
  btn.className = [`btn--${size}`];
  btn.style.backgroundColor = backgroundColor;
  btn.innerText = label;
  btn.addEventListener("click", onClick);

  return btn;
};
