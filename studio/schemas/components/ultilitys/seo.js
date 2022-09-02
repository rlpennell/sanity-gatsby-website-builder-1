export default {
  name: "seo",
  title: "SEO",
  type: "object",
  fieldsets: [
    {
      name: "openGraph",
      title: "Social Meida Info",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: "title",
      title: "Page Title",
      description: "Title for tab and url",
      type: "string",
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes your event.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "seo.title",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      title: "SEO Description",
      name: "description",
      type: "text",
      description: "page description for search engines",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "ogImage",
      title: "Og image",
      type: "pic",
      fieldset: "openGraph",
    },
    {
      name: "ogType",
      title: "Og type",
      description: "website or article",
      type: "string",
      fieldset: "openGraph",
    },
    {
      name: "robotTags",
      title: "Robot tags",
      description: "noindex,nofollow / or leave blank",
      type: "string",
      fieldset: "openGraph",
    },
    {
      name: "googleVerification",
      title: "Google verification",
      type: "string",
      fieldset: "openGraph",
    },
  ],
};
