export default {
  name: "customerReviewAlt",
  title: "Customer review alternative",
  type: "object",
  fields: [
    {
      name: "personsName",
      title: "Persons Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "pic",
      title: "Bio Pic",
      type: "pic",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "textEditor",
      title: "Enter Their Review",
      type: "basicEditor",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "rate",
      title: "Rate 1-5",
      type: "number",
      validation: (Rule) => Rule.required().max("5"),
    },
  ],
};
