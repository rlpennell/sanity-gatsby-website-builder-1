import React from "react";
const highlightIcon = () => <span style={{ fontWeight: "bold" }}>H</span>;
const highlightRender = (props) => (
  <span style={{ backgroundColor: "yellow" }}>{props.children}</span>
);

export default {
  name: "layout",
  title: "Layout",
  type: "object",
  fieldsets: [
    {
      name: "theme",
      title: "Theme",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: "theme",
      title: "Theme",
      type: "layoutTheme",
      description: "Leave Blank for Defaults",
      fieldset: "theme",
    },
    {
      name: "layoutContent",
      title: "Layout content",
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
        { type: "editor" },
        { type: "heroMain" },
        { type: "heroAlt" },
        { type: "heroBanner" },
        { type: "infoBanner" },
        { type: "formMain" },
        { type: "formAlt" },
        { type: "formPicArticle" },
        { type: "notifcationBar" },
        { type: "picArticleFlip" },
        { type: "cookieConsent" },
      ],
    },
  ],
};
// Main layout editor for heros,forms,premades,sections etc
