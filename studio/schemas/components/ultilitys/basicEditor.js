import React from "react";

const highlightIcon = () => <span style={{ fontWeight: "bold" }}>H</span>;
const highlightRender = (props) => (
  <span style={{ backgroundColor: "yellow" }}>{props.children}</span>
);

export default {
  name: "basicEditor",
  title: "Basic Editor",
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
      type: "basicEditorTheme",
      fieldset: "theme",
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
        { type: "buttonHero" },
        { type: "buttonMain" },
        { type: "buttonAlt" },
        { type: "buttonCard" },
        { type: "buttonSubmit" },
      ],
    },
  ],
};
