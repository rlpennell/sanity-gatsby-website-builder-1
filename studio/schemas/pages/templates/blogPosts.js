export default {
  name: "blogPosts",
  title: "Blog posts",
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
      type: "string",
      description: "For Labeling Purposes Only",
    },
    {
      name: "seo",
      title: "Page Data",
      type: "seo",
      fieldset: "seo",
    },
    {
      name: "pageData",
      title: "Page Data",
      type: "layout",
    },
  ],
};
