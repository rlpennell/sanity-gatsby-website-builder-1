export default {
  name: "picArticleFlip",
  title: "Alternating Articles",
  type: "object",
  fields: [
    {
      name: "picArticles",
      title: "Enter Articles",
      type: "array",
      of: [{ type: "picArticle" }],
    },
  ],
};
