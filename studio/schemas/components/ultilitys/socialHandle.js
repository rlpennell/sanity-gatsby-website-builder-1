export default {
  name: "socialHandle",
  title: "Social Media Handles",
  type: "object",
  fields: [
    {
      name: "icon",
      title: "Social Handle Icon",
      type: "pic",
      description: "Use 15x15 or 25x25 Pixel Icons",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "label",
      title: "Label",
      type: "string",
      description: "Link Label",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link",
      type: "string",
      description: "Social Media Url Link",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "theme",
      title: "Theme",
      type: "fontSize",
    },
  ],
};
