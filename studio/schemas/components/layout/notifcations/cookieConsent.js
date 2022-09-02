export default {
  name: "cookieConsent",
  title: "Cookie consent",
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
