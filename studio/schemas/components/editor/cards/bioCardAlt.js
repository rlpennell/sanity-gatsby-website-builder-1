export default {
  name: "bioCardAlt",
  title: "Bio card alt",
  type: "object",
  fields: [
    {
      name: "textEditor",
      title: "Title",
      type: "basicEditor",
    },
    {
      name: "pic",
      title: "Pic",
      type: "pic",
    },
    {
      name: "socialArray",
      title: "Social Media",
      type: "array",
      of: [{ type: "socialHandle" }],
    },
  ],
};
