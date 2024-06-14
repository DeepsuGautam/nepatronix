"use client";

const toggleStyle = async (
  styleType: string,
  activeValue: string,
  inactiveValue: string
) => {
  const selects: any = getSelection();
  if (selects?.rangeCount > 0) {
    const range = selects.getRangeAt(0);
    const commonAncestor = range.commonAncestorContainer;
    let element: any;

    // Check if the selection is exactly wrapped in a span with the desired style
    if (
      commonAncestor.nodeType === Node.ELEMENT_NODE &&
      commonAncestor.tagName === "SPAN" &&
      commonAncestor.style[styleType] === activeValue
    ) {
      // If selected text is exactly wrapped in the style
      element = commonAncestor;
      element.style[styleType] = inactiveValue;
    } else {
      // Wrap the selected text in a new span and set the style
      element = document.createElement("span");
      element.style[styleType] = activeValue;
      element.appendChild(range.extractContents());
      range.insertNode(element);
    }

    // Adjust selection
    selects.removeAllRanges();
    const newRange = document.createRange();
    newRange.selectNodeContents(element);
    selects.addRange(newRange);
  }
};

const makeBold = async () => {
  await toggleStyle("fontWeight", "600", "400");
  return;
};

const makeItalic = async () => {
  await toggleStyle("fontStyle", "italic", "normal");
  return;
};

const makeColor = async (color: string) => {
  await toggleStyle("color", color, "black");
  return;
};

const makeTextSize = async (size: any) => {
  await toggleStyle("fontSize", size, "20px");
  return;
};
// Export functions
export { makeItalic, makeBold, makeColor, makeTextSize };
