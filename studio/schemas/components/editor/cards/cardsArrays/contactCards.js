export default {
  name: "contactCards",
  title: "Contact cards",
  type: "object",
  fields: [
    {
      name: "cardArray",
      title: "Card Array",
      type: "array",
      of: [{ type: "contactCard" }],
    },
  ],
};
