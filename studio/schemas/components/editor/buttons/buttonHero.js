export default {
  name: "buttonHero",
  title: "Hero Button",
  type: "object",

  fields: [
    {
      name: "text",
      title: "Button Text",
      type: "string",
    },
    {
      name: "link",
      title: "Button url",
      type: "string",
    },
    {
      name: "icon",
      title: "Icon",
      type: "pic",
      desciption: "optional",
    },
    {
      name: "isOutbound",
      title: "Outbound Link?",
      desciption: "Does this link take you off the webpage?",
      type: "boolean",
    },
  ],
};
