export default {
  name: "picCardsAlt",
  title: "Pic cards alt",
  type: "object",
  fields: [
    {
      name: "cardArray",
      title: "Card Array",
      type: "array",
      of: [{ type: "picCardAlt" }],
    },
  ],
};
