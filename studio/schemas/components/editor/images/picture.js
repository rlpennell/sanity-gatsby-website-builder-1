export default {
  name: "picture",
  title: "Picture",
  type: "object",
  fields: [
    {
      name: "pic",
      title: "Picture",
      type: "pic",
      validation: (Rule) => Rule.required(),
    },
  ],
};
