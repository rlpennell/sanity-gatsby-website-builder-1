export default {
  name: "pic",
  title: "Picture",
  type: "object",
  fields: [
    {
      name: "picData",
      title: "Pic",
      type: "image",
    },
    {
      name: "alt",
      title: "Alt Text",
      type: "string",
      description: "Used for screen readers and the impaired",
      validation: (Rule) => Rule.required(),
    },
  ],
};
