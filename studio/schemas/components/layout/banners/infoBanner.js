export default {
  name: "infoBanner",
  title: "Info banner",
  type: "object",
  fields: [
    {
      name: "textEditor",
      title: "Article",
      type: "basicEditor",
    },
    {
      name: "backgroundPic",
      title: "Background Picture",
      type: "pic",
    },
    {
      name: "theme",
      title: "theme",
      type: "infoBannerTheme",
    },
  ],
};
