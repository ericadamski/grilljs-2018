export default {
  font: "Georgia",
  monospace: "Menlo, monospace",
  fontSizes: ["0.75em", "1em", "1.5em", "2em", "3em"],
  colors: {
    text: "#000",
    background: "transparent",
    link: "#07c",
    heading: "#000",
    quote: "#000",
    pre: "#f0f",
    preBackground: "#333",
    code: "#f0f",
    codeBackground: "transparent"
  },
  css: {
    // apply any styles to the root element
  },
  // custom CSS can be provided to any of the default components:
  heading: {
    fontWeight: 400
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
};
