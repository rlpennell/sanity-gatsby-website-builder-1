export default {
  name: "picCards",
  title: "Pic cards",
  type: "object",
  fields: [
    {
      name: "cardArray",
      title: "Card Array",
      type: "array",
      of: [{ type: "picCard" }],
    },
  ],
};
