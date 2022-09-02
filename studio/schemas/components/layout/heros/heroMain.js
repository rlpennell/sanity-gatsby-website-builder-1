export default {
  name: "heroMain",
  title: "Hero",
  type: "object",
  fields: [
    {
      name: "textEditor",
      title: "Text Content",
      type: "basicEditor",
    },
    {
      name: "backgroundPic",
      title: "Background Pic",
      type: "pic",
    },
    {
      name: "theme",
      title: "Theme",
      type: "heroMainTheme",
    },
  ],
};
