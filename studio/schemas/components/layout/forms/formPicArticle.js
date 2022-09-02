export default {
  name: "formPicArticle",
  title: "Form & Article",
  type: "object",
  fields: [
    {
      name: "picArticle",
      title: "Pic & Article",
      type: "picArticle",
    },
    {
      name: "textEditor",
      title: "Form title",
      type: "basicEditor",
    },
    {
      name: "pic",
      title: "Pic",
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
      type: "formPicArticleTheme",
    },
  ],
};
