export default {
  name: "formAlt",
  title: "Alternative Form",
  type: "object",
  fields: [
    {
      name: "textEditor",
      title: "Form title",
      type: "basicEditor",
    },
    {
      name: "pic",
      title: "Background Pic",
      type: "pic",
    },
    {
      name: "button",
      title: "Button",
      type: "buttonSubmit",
    },
    {
      name: "theme",
      title: "Theme",
      type: "formAltTheme",
    },
  ],
};
