export default {
  name: "customerReviews",
  title: "Customer reviews",
  type: "object",
  fields: [
    {
      name: "testimonialArray",
      title: "testimonialArray",
      type: "array",
      of: [{ type: "customerReview" }],
    },
  ],
};
