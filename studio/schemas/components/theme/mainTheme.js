export default {
  name: "mainTheme",
  title: "Theme",
  type: "object",
  fieldsets: [
    {
      name: "font",
      title: "Font Options",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "brand",
      title: "Brand Options",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "button",
      title: "Button Options",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "border",
      title: "Border options",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "card",
      title: "Card options",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: "textTheme",
      title: "Text Theme",
      type: "fontSize",
      fieldset: "font",
    },
    {
      name: "h1Theme",
      title: "H1 Font Settings",
      type: "fontSize",
      fieldset: "font",
    },
    {
      name: "h2Theme",
      title: "H2 Font Settings",
      type: "fontSize",
      fieldset: "font",
    },
    {
      name: "h3Theme",
      title: "H3 Font Settings",
      type: "fontSize",
      fieldset: "font",
    },
    {
      name: "h4Theme",
      title: "H4 Font Settings",
      type: "fontSize",
      fieldset: "font",
    },
    {
      name: "borderOptions",
      title: "Color for all the borders",
      type: "borderOptions",
      fieldset: "border",
    },
    {
      name: "backgroundColor",
      title: "Webpage Main Background Color",
      type: "color",
    },
    {
      name: "highlightColor",
      title: "Highlight color",
      description: "Highlight color for text",
      type: "color",
    },
  ],
};
