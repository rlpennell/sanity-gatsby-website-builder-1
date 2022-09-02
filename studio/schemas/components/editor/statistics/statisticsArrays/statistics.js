export default {
  name: "statistics",
  title: "Statistics",
  type: "object",
  fields: [
    {
      name: "statisticsArray",
      title: "statisticsArray",
      type: "array",
      of: [{ type: "statistic" }],
    },
  ],
};
