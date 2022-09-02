export default {
  name: "footerMain",
  title: "Footer",
  type: "document",
  fieldsets: [
    {
      name: "theme",
      title: "Theme",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "signUp",
      title: "Sign Up Box",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "pageLink",
      title: "Page Links",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "serviceLink",
      title: "Service Links",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "resourceLink",
      title: "Resource Links",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: "footertheme",
      title: "Footer Theme",
      type: "footerTheme",
      fieldset: "theme",
    },
    {
      name: "pageLinkTitle",
      title: "Title for links",
      type: "string",
      fieldset: "pageLink",
    },
    {
      name: "pages",
      title: "Pages",
      type: "array",
      of: [{ type: "linkOptions" }],
      fieldset: "pageLink",
    },
    {
      name: "servicesLinkTitle",
      title: "Title for links",
      type: "string",
      fieldset: "serviceLink",
    },
    {
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "linkOptions" }],
      fieldset: "serviceLink",
    },
    {
      name: "resourceLinkTitle",
      title: "Title for links",
      type: "string",
      fieldset: "resourceLink",
    },
    {
      name: "resources",
      title: "Resources",
      type: "array",
      of: [{ type: "linkOptions" }],
      fieldset: "resourceLink",
    },
  ],
};
