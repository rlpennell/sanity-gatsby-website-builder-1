export default {
  name: "serviceCard",
  title: "Service card",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "pic",
      title: "Pic",
      type: "pic",
    },
    {
      name: "textEditor",
      title: "Text content",
      type: "basicEditor",
    },
  ],
};
