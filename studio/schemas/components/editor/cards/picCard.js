export default {
  name: "picCard",
  title: "Card Component",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "pic",
      title: "Main Pic",
      type: "pic",
    },
    {
      name: "textEditor",
      title: "Article Section",
      type: "basicEditor",
    },
  ],
};
