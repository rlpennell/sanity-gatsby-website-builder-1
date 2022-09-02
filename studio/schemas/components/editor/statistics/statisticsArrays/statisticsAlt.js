export default {
  name: "statisticsAlt",
  title: "Statistics alt",
  type: "object",
  fields: [
    {
      name: "statisticsArray",
      title: "Statistics array",
      type: "array",
      of: [{ type: "statisticAlt" }],
    },
  ],
};
