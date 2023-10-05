/**
 * This function is used for get the position of the pointer and get effect when it pass for an element
 * Is used in the cards with glass effect, for example in the navbar
 * @param {*} e Get the event of the element specific
 */
export const handleOnMouseHover = (e) => {
  const { currentTarget: target } = e;

  console.log(e);

  const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
};
