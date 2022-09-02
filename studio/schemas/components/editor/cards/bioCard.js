export default {
  name: "bioCard",
  title: "Bio card",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Name",
      description: "Enter the person name here",
      type: "string",
    },
    {
      name: "pic",
      title: "Profile Pic",
      type: "pic",
    },
    {
      name: "textEditor",
      title: "Text Content",
      type: "basicEditor",
    },
    {
      name: "socialArray",
      title: "Social Media Links",
      type: "array",
      of: [{ type: "socialHandle" }],
    },
  ],
};
