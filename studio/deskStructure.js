import S from "@sanity/desk-tool/structure-builder";
export default () =>
  S.list()
    .title("Editor")
    .items([
      S.listItem()
        .title("Site Configuration")
        .child(
          S.list()
            // Sets a title for our new list
            .title("Widgets and Themes")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title("Site Icons")
                .child(
                  S.document()
                    .schemaType("widgets")
                    .documentId("widgets")
                    .title("Edit")
                ),
              S.listItem()
                .title("Company Settings")
                .child(
                  S.document()
                    .schemaType("siteInfo")
                    .documentId("siteInfo")
                    .title("Edit")
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Themes")
        .child(
          S.list()
            .title("All Theme Options")
            .items([
              S.listItem()
                .title("Header & Footer")
                .child(
                  S.list()
                    .title("Edit")
                    .items([
                      S.listItem()
                        .title("Header")
                        .child(
                          S.document()
                            .schemaType("headerMain")
                            .documentId("headerMain")
                            .title("Header")
                        ),
                      S.listItem()
                        .title("Footer")
                        .child(
                          S.document()
                            .schemaType("footerMain")
                            .documentId("footerMain")
                            .title("Header")
                        ),
                    ])
                ),
              // Start of the list, Main Theme
              S.listItem()
                .title("Main Theme")
                .child(
                  S.document()
                    .schemaType("siteTheme")
                    .documentId("siteTheme")
                    .title("Edit")
                ),
              // Buttons
              S.listItem()
                .title("Buttons")
                .child(
                  S.list()
                    .title("All Button Theme Options")
                    .items([
                      // List of buttton Components
                      S.listItem()
                        .title("Hero Button Styles")
                        .child(
                          S.document()
                            .schemaType("heroButtonTheme")
                            .documentId("heroButtonTheme")
                            .title("Edit")
                        ),
                      S.listItem()
                        .title("Main Button Styles")
                        .child(
                          S.document()
                            .schemaType("mainButtonTheme")
                            .documentId("mainButtonTheme")
                            .title("Edit")
                        ),
                      S.listItem()
                        .title("Alternative Button Styles")
                        .child(
                          S.document()
                            .schemaType("altButtonTheme")
                            .documentId("altButtonTheme")
                            .title("Edit")
                        ),
                      S.listItem()
                        .title("Card Button Styles")
                        .child(
                          S.document()
                            .schemaType("cardButtonTheme")
                            .documentId("cardButtonTheme")
                            .title("Edit")
                        ),
                      S.listItem()
                        .title("Submit Button Style")
                        .child(
                          S.document()
                            .schemaType("submitButtonTheme")
                            .documentId("submitButtonTheme")
                            .title("Edit")
                        ),
                    ])
                ),
              // End of Buttons
              // Cards
              S.listItem()
                .title("Cards")
                .child(
                  S.list()
                    .title("All Card Theme Options")
                    .items([
                      S.listItem()
                        .title("Background Card Styles")
                        .child(
                          S.document()
                            .schemaType("backgroundCardTheme")
                            .documentId("backgroundCardTheme")
                            .title("Edit")
                        ),
                      S.listItem()
                        .title("Bio Card Styles")
                        .child(
                          S.document()
                            .schemaType("bioCardTheme")
                            .documentId("bioCardTheme")
                            .title("Edit")
                        ),
                      S.listItem()
                        .title("Bio Card Alt Styles")
                        .child(
                          S.document()
                            .schemaType("bioCardAltTheme")
                            .documentId("bioCardAltTheme")
                            .title("Edit")
                        ),
                      S.listItem()
                        .title("Contact Card Theme")
                        .child(
                          S.document()
                            .schemaType("contactCardTheme")
                            .documentId("contactCardTheme")
                            .title("Edit")
                        ),
                      S.listItem()
                        .title("Icon Card Theme")
                        .child(
                          S.document()
                            .schemaType("iconCardTheme")
                            .documentId("iconCardTheme")
                            .title("Edit")
                        ),
                      S.listItem()
                        .title("Info Card Styles")
                        .child(
                          S.document()
                            .schemaType("infoCardTheme")
                            .documentId("infoCardTheme")
                            .title("Edit")
                        ),
                      S.listItem()
                        .title("Pic Card Styles")
                        .child(
                          S.document()
                            .schemaType("picCardTheme")
                            .documentId("picCardTheme")
                            .title("Edit")
                        ),
                      S.listItem()
                        .title("Alternative Pic Card Styles")
                        .child(
                          S.document()
                            .schemaType("picCardAltTheme")
                            .documentId("picCardAltTheme")
                            .title("Edit")
                        ),
                      S.listItem()
                        .title("Service Card Theme")
                        .child(
                          S.document()
                            .schemaType("serviceCardTheme")
                            .documentId("serviceCardTheme")
                            .title("Edit")
                        ),
                    ])
                ),
              // End of Cards
              // Pics
              S.listItem()
                .title("Pictures")
                .child(
                  S.list()
                    .title("All Pic Options")
                    .items([
                      S.listItem()
                        .title("Picture Article")
                        .child(
                          S.document()
                            .schemaType("picArticleTheme")
                            .documentId("picArticleTheme")
                            .title("Edit")
                        ),
                    ])
                ),
              // End of pics
              S.listItem()
                .title("Collages")
                .child(
                  S.list()
                    .title("All Card Theme Options")
                    .items([
                      S.listItem()
                        .title("Collage Article")
                        .child(
                          S.document()
                            .schemaType("picCollageTheme")
                            .documentId("picCollageTheme")
                            .title("Edit")
                        ),
                    ])
                ),
              S.listItem()
                .title("Statistics")
                .child(
                  S.list()
                    .title("All Statistics Theme Options")
                    .items([
                      S.listItem()
                        .title("Main Statistics")
                        .child(
                          S.document()
                            .schemaType("statisticsMainTheme")
                            .documentId("statisticsMainTheme")
                            .title("Edit")
                        ),
                      S.listItem()
                        .title("Alternative Statistics")
                        .child(
                          S.document()
                            .schemaType("statisticsAltTheme")
                            .documentId("statisticsAltTheme")
                            .title("Edit")
                        ),
                    ])
                ),
              S.listItem()
                .title("Testimonials")
                .child(
                  S.list()
                    .title("All Testimonials Theme Options")
                    .items([
                      S.listItem()
                        .title("Customer Review")
                        .child(
                          S.document()
                            .schemaType("customerReviewTheme")
                            .documentId("customerReviewTheme")
                            .title("Edit")
                        ),
                      S.listItem()
                        .title("Alternative Customer Review")
                        .child(
                          S.document()
                            .schemaType("customerReviewAltTheme")
                            .documentId("customerReviewAltTheme")
                            .title("Edit")
                        ),
                      S.listItem()
                        .title("Quotes")
                        .child(
                          S.document()
                            .schemaType("quotesTheme")
                            .documentId("quotesTheme")
                            .title("Edit")
                        ),
                    ])
                ),
              S.listItem()
                .title("Videos")
                .child(
                  S.list()
                    .title("All Video Theme Options")
                    .items([
                      S.listItem()
                        .title("Video Article Theme")
                        .child(
                          S.document()
                            .schemaType("videoArticleTheme")
                            .documentId("videoArticleTheme")
                            .title("Edit")
                        ),
                    ])
                ),
            ])
        ),
      S.divider(),
      //   Pages
      S.listItem()
        .title("Site Pages")
        .child(
          S.list()
            // Sets a title for our new list
            .title("Pages")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title("Home")
                .child(
                  S.document()
                    .schemaType("index")
                    .documentId("index")
                    .title("Edit")
                ),
              S.listItem()
                .title("Contact")
                .child(
                  S.document()
                    .schemaType("contact")
                    .documentId("contact")
                    .title("Edit")
                ),
              // Usecase
              S.listItem()
                .title("About")
                .child(
                  S.document()
                    .schemaType("about")
                    .documentId("about")
                    .title("Edit")
                ),
              S.listItem()
                .title("Bio Posts")
                .child(
                  S.documentList()
                    .schemaType("bioPosts")
                    .title("Bio Pages")
                    .filter('_type == "bioPosts"')
                ),
              // services
              S.divider(),
              S.listItem()
                .title("Service Landing Page")
                .child(
                  S.document()
                    .schemaType("serviceMain")
                    .documentId("serviceMain")
                    .title("Edit")
                ),
              S.listItem()
                .title("Service Pages")
                .child(
                  S.documentList()
                    .schemaType("servicePosts")
                    .title("Service Pages")
                    .filter('_type == "servicePosts"')
                ),
              // blogs
              S.divider(),
              S.listItem()
                .title("Usecase Index")
                .child(
                  S.document()
                    .schemaType("usecases")
                    .documentId("usescases")
                    .title("Edit")
                ),
              S.listItem()
                .title("Usecase Posts")
                .child(
                  S.documentList()
                    .schemaType("usecasePosts")
                    .title("Usecase Pages")
                    .filter('_type == "usecasePosts"')
                ),
              // Bio
              S.divider(),
              S.listItem()
                .title("Blog Homepage")
                .child(
                  S.document()
                    .schemaType("blog")
                    .documentId("blog")
                    .title("Edit")
                ),
              S.listItem()
                .title("Blog Posts")
                .child(
                  S.documentList()
                    .schemaType("blogPosts")
                    .title("Blog Pages")
                    .filter('_type == "blogPosts"')
                ),
            ])
        ),
      S.listItem()
        .title("Custom Pages")
        .child(
          S.documentList()
            .schemaType("customPage")
            .title("Custom Pages")
            .filter('_type == "customPage"')
        ),
    ]);
