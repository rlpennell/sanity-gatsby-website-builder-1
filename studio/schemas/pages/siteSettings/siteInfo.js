export default {
  name: "siteInfo",
  title: "Site Info",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Company Logo",
      type: "pic",
      description: "Company Logo Will Be Populated Throughout The Site",
    },
    {
      name: "companyName",
      title: "Company Name",
      type: "string",
      description: "Business DBA",
    },
    {
      name: "cannonicalLink",
      title: "Cannonical Link",
      type: "url",
      description: "Website Domain Name",
    },
    {
      name: "socialMedia",
      title: "Social Media",
      type: "array",
      description: "List Companys Social Media Profiles",
      of: [{ type: "socialHandle" }],
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      description: "Address",
    },
    {
      name: "phoneNumber",
      title: "Phone Number",
      description: "Company Number",
      type: "string",
    },
    {
      name: "companyEmail",
      title: "Company Email",
      description: "Main Email",
      type: "string",
    },
    {
      name: "muxKey",
      title: "Mux Video Key",
      description:
        "https://docs.mux.com/guides/video/integrate-with-sanity#1-install-mux-plugin",
      type: "mux.video",
    },
  ],
};
