export default {
  name: "contactCard",
  title: "Contact card",
  description: "Defaults for Location",
  type: "object",
  fields: [
    {
      name: "icon",
      title: "Icon",
      type: "pic",
    },
    {
      name: "contactInfo",
      title: "Contact Info",
      type: "string",
    },
    {
      name: "isEmail",
      title: "Is Email?",
      type: "boolean",
    },
    {
      name: "isNumber",
      title: "Is Phone Number?",
      type: "boolean",
    },
  ],
};
