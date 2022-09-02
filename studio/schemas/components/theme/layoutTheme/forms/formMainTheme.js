export default {
  name: "formMainTheme",
  title: "Form main",
  type: "object",
  fieldsets: [
    {
      name: "formTheme",
      title: "formTheme",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: "borderOptions",
      title: "Border color",
      type: "borderOptions",
    },
    {
      name: "backgroundColor",
      title: "Form Background Color",
      type: "color",
    },
    {
      name: "formTheme",
      title: "Theme for Inner Form",
      type: "formTheme",
      fieldset: "formTheme",
    },
  ],
};
