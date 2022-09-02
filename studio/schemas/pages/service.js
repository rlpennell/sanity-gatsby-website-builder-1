export default {
  name: "service",
  title: "Service Page",
  type: "document",
  fieldsets: [
    {
      name: "seo",
      title: "Seo",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: "pageName",
      title: "Page name",
      description: "for sanity use only",
      type: "string",
      fieldset: "seo",
    },
    {
      name: "seo",
      title: "Page Data",
      type: "seo",
    },
    {
      name: "pageData",
      title: "Page Data",
      type: "layout",
    },
  ],
};
