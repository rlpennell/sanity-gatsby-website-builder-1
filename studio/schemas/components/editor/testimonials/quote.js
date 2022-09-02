export default {
  name: "quote",
  title: "Enter Quote",
  type: "object",
  fields: [
    {
      name: "personsName",
      title: "Persons Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "textEditor",
      title: "Quote",
      type: "basicEditor",
    },
    {
      name: "profilePic",
      title: "Profile Pic",
      description: "Optional",
      type: "pic",
    },
  ],
};
