export default {
  name: "editorTheme",
  title: "Editor theme",
  type: "object",
  fieldsets: [
    {
      name: "borderOptions",
      title: "Border options",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "font",
      title: "Fonts options",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: "backgroundColor",
      title: "Background color",
      type: "color",
      fieldset: "font",
    },
    {
      name: "headerColor",
      title: "Header color",
      type: "color",
      fieldset: "font",
    },
    {
      name: "fontColor",
      title: "Font color",
      type: "color",
      fieldset: "font",
    },
  ],
};
