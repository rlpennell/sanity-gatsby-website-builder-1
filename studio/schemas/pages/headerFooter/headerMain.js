export default {
  name: "headerMain",
  title: "Header",
  type: "document",
  fieldsets: [
    {
      name: "theme",
      title: "Theme",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "mobileTheme",
      title: "Mobile Theme",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "pic",
    },
    {
      name: "links",
      title: "links",
      type: "array",
      of: [{ type: "linkOptions" }],
    },
    {
      name: "theme",
      title: "Theme",
      type: "headerTheme",
      fieldset: "theme",
    },
    {
      name: "mobileIcon",
      title: "Mobile icon",
      type: "pic",
      fieldset: "mobileTheme",
    },
    {
      name: "mobileTheme",
      title: "mobile Theme Options",
      type: "headerTheme",
      fieldset: "mobileTheme",
    },
  ],
};
