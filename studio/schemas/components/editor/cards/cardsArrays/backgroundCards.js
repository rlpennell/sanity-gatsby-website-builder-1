export default {
  name: "backgroundCards",
  title: "Background cards",
  type: "object",
  fields: [
    {
      name: "cardArray",
      title: "Card array",
      type: "array",
      of: [{ type: "backgroundCard" }],
    },
  ],
};
