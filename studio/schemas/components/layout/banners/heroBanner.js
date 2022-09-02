export default {
  name: "heroBanner",
  title: "Hero banner",
  type: "object",
  fields: [
    {
      name: "textEditor",
      title: "Content",
      type: "basicEditor",
    },
    {
      name: "backgroundPic",
      title: "Background Pic",
      type: "pic",
    },
    {
      name: "theme",
      title: "theme",
      type: "heroBannerTheme",
    },
  ],
};
