const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityBioPosts {
        nodes {
          seo {
            slug {
              current
            }
          }
        }
      }
      allSanityBlogPosts {
        nodes {
          seo {
            slug {
              current
            }
          }
        }
      }
      allSanityCustomPage {
        nodes {
          seo {
            slug {
              current
            }
          }
        }
      }
      allSanityServicePosts {
        nodes {
          seo {
            slug {
              current
            }
          }
        }
      }
      allSanityUsecasePosts {
        nodes {
          seo {
            slug {
              current
            }
          }
        }
      }
    }
  `);
  const bioPost = path.resolve(`./src/templates/bioPost.js`);
  const blogPost = path.resolve(`./src/templates/blogPost.js`);
  const caseStudy = path.resolve(`./src/templates/caseStudy.js`);
  const customPage = path.resolve(`./src/templates/customPage.js`);
  const servicePost = path.resolve(`./src/templates/servicePost.js`);
  // Services
  result.data.allSanityServicePosts.nodes.forEach((node) => {
    createPage({
      path: `services/${node.seo.slug.current}`,
      component: servicePost,
      context: {
        current: node.seo.slug.current,
      },
    });
  });
  // Bio Post
  result.data.allSanityBioPosts.nodes.forEach((node) => {
    createPage({
      path: `bio/${node.seo.slug.current}`,
      component: bioPost,
      context: {
        current: node.seo.slug.current,
      },
    });
  });
  //blog
  result.data.allSanityBlogPosts.nodes.forEach((node) => {
    createPage({
      path: `blog/${node.seo.slug.current}`,
      component: blogPost,
      context: {
        current: node.seo.slug.current,
      },
    });
  });
  // case study
  result.data.allSanityUsecasePosts.nodes.forEach((node) => {
    createPage({
      path: `casestudy/${node.seo.slug.current}`,
      component: caseStudy,
      context: {
        current: node.seo.slug.current,
      },
    });
  });
  // customer page
  result.data.allSanityCustomPage.nodes.forEach((node) => {
    createPage({
      path: `${node.seo.slug.current}`,
      component: customPage,
      context: {
        current: node.seo.slug.current,
      },
    });
  });
};
