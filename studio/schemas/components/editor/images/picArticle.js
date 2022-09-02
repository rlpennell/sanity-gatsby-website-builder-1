export default {
  name: "picArticle",
  title: "Pic article",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Optional",
      type: "string",
    },
    {
      name: "pic",
      title: "Pic",
      type: "pic",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "invertAsset",
      title: "Invert Pic/Video",
      description: "Flip Pic/Video To Right",
      type: "boolean",
    },
    {
      name: "textEditor",
      title: "text Content",
      type: "basicEditor",
      validation: (Rule) => Rule.required(),
    },
  ],
};
