export default {
  name: "serviceCards",
  title: "Service cards",
  type: "object",
  fields: [
    {
      name: "cardArray",
      title: "Card Array",
      type: "array",
      of: [{ type: "serviceCard" }],
    },
  ],
};
