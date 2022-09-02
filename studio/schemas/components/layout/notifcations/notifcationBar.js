export default {
  name: "notifcationBar",
  title: "Notifcation Bar",
  type: "object",
  fields: [
    {
      name: "textEditor",
      title: "Alert Message",
      type: "basicEditor",
    },
    {
      name: "theme",
      title: "theme",
      type: "notifcationBarTheme",
    },
  ],
};
