export default {
  name: "quotes",
  title: "Quotes",
  type: "object",
  fields: [
    {
      name: "testimonialArray",
      title: "testimonialArray",
      type: "array",
      of: [{ type: "quote" }],
    },
  ],
};
