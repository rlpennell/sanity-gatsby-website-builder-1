export default {
  name: "iconCards",
  title: "Icon card",
  type: "object",
  fields: [
    {
      name: "cardArray",
      title: "Card Array",
      type: "array",
      of: [{ type: "iconCard" }],
    },
  ],
};
