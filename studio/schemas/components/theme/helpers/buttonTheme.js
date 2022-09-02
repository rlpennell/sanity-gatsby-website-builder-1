export default {
  name: "buttonTheme",
  title: "Button theme",
  type: "object",
  fieldsets: [
    {
      name: "fonts",
      title: "Fonts",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "backgrounds",
      title: "Backgrounds",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "borders",
      title: "Borders",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: "font",
      title: "font Options ",
      type: "fontSize",
      fieldset: "fonts",
    },
    {
      name: "borderOptions",
      title: "Border color",
      type: "borderOptions",
      fieldset: "borders",
    },
    {
      name: "backgroundColor",
      title: "Main Button Background Color",
      type: "color",
      fieldset: "backgrounds",
    },
    {
      name: "hoverTheme",
      title: "Button hover color",
      type: "hoverTheme",
      fieldset: "backgrounds",
    },
    {
      name: "enableIcon",
      title: "enableIcon",
      type: "boolean",
    },
  ],
};
