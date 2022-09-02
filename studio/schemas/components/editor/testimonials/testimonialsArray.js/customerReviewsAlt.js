export default {
  name: "customerReviewsAlt",
  title: "Customer reviews alt",
  type: "object",
  fields: [
    {
      name: "testimonialArray",
      title: "testimonialArray",
      type: "array",
      of: [{ type: "customerReviewAlt" }],
    },
  ],
};
