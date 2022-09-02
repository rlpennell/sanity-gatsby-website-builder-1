import React from "react";

const highlightIcon = () => <span style={{ fontWeight: "bold" }}>H</span>;
const highlightRender = (props) => (
  <span style={{ backgroundColor: "yellow" }}>{props.children}</span>
);

export default {
  name: "editor",
  title: "Editor",
  type: "object",
  fields: [
    {
      name: "theme",
      title: "Theme",
      type: "editorTheme",
    },
    {
      name: "textContent",
      title: "Editor",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              {
                title: "Highlight",
                value: "highlight",
                blockEditor: {
                  icon: () => "H",
                  render: highlightRender,
                },
              },
            ],
          },
        },

        { type: "buttonMain" },
        { type: "buttonAlt" },
        { type: "buttonCard" },
        { type: "buttonHero" },
        { type: "buttonSubmit" },
        { type: "collageArticle" },
        { type: "picArticle" },
        { type: "picture" },
        { type: "backgroundCards" },
        { type: "bioCards" },
        { type: "bioCardsAlt" },
        { type: "contactCards" },
        { type: "iconCards" },
        { type: "infoCards" },
        { type: "picCards" },
        { type: "picCardsAlt" },
        { type: "serviceCards" },
        { type: "statistics" },
        { type: "statisticsAlt" },
        { type: "customerReviews" },
        { type: "customerReviewsAlt" },
        { type: "quotes" },
        { type: "video" },
        { type: "videoArticle" },
      ],
    },
  ],
};
