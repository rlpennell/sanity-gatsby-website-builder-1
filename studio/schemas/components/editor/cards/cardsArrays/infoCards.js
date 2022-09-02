export default {
  name: "infoCards",
  title: "Info cards",
  type: "object",
  fields: [
    {
      name: "cardArray",
      title: "Card Array",
      type: "array",
      of: [{ type: "infoCard" }],
    },
  ],
};
