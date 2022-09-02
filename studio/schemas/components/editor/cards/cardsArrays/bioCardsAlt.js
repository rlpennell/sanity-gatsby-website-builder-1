export default {
  name: "bioCardsAlt",
  title: "Bio cards alt",
  type: "document",
  fields: [
    {
      name: "cardArray",
      title: "Card Array",
      type: "array",
      of: [{ type: "bioCardAlt" }],
    },
  ],
};
