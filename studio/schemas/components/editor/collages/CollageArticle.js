export default {
  name: "collageArticle",
  title: "Pic collage",
  type: "object",
  fields: [
    {
      name: "pics",
      title: "Pic Selection",
      validation: (Rule) => Rule.required(),
      type: "array",
      of: [{ type: "pic" }],
    },
    {
      name: "textEditor",
      title: "Description Text",
      type: "basicEditor",
    },
  ],
};
