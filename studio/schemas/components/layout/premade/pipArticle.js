export default {
  name: "pipArticle",
  title: "Pip article",
  type: "object",
  fields: [
    {
      name: "mainPic",
      title: "Main pic",
      type: "pic",
    },
    {
      name: "pip",
      title: "Secondary Pic",
      type: "pic",
    },
    {
      name: "textEditor",
      title: "Text Editor",
      type: "basicEditor",
    },
    {
      name: "theme",
      title: "Theme",
      type: "pipArticleTheme",
    },
  ],
};
