import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
const Wrapper = styled(Layout)``;
function blogPost({ data }) {
  return <Wrapper page={data.sanityBlogPosts.pageData} />;
}

export default blogPost;
export const query = graphql`
  query BlogQuery($current: String!) {
    sanitySiteInfo {
      cannonicalLink
    }
    sanityBlogPosts(seo: { slug: { current: { eq: $current } } }) {
      _rawSeo(resolveReferences: { maxDepth: 3 })
      pageData {
        _rawLayoutContent
        _rawTheme
      }
    }
  }
`;
export const Head = ({ location, data }) => (
  <>
    <title>{data.sanityBlogPosts._rawSeo.title}</title>
    <meta name="geo.region" content="US-CA" />
    <link
      href={
        data.sanitySiteInfo.cannonicalLink
          ? data.sanitySiteInfo.cannonicalLink
          : "null"
      }
      rel="canonical"
    />{" "}
    <meta name="geo.placename" content="Vista" />
    <meta name="geo.position" content="33.170999;-117.204215" />
    <meta name="ICBM" content="33.170999, -117.204215" />
    <meta
      name="robots"
      content={
        data.sanityBlogPosts._rawSeo.robotTags
          ? data.sanityBlogPosts._rawSeo.robotTags
          : "all"
      }
    />
    <meta
      name="description"
      content={
        data.sanityBlogPosts._rawSeo.description
          ? data.sanityBlogPosts._rawSeo.description
          : ""
      }
    />
    <meta
      name="keywords"
      content={
        data.sanityBlogPosts._rawSeo.keywords
          ? data.sanityBlogPosts._rawSeo.keywords.join(",")
          : ""
      }
    />
    <meta name="googlebot" content="notranslate" />
    <meta
      name="google-site-verification"
      content={
        data.sanityBlogPosts._rawSeo.googleVerifcation
          ? data.sanityBlogPosts._rawSeo.googleVerifcation
          : null
      }
    />
    {/* Values given in search console */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="og:title" content={data.sanityBlogPosts._rawSeo.title} />
    <meta name="og:type" content={data.sanityBlogPosts._rawSeo.ogType} />
    <meta name="og:url" content={location.pathname} />
    <meta
      name="og:image"
      content={
        data.sanityBlogPosts._rawSeo.ogImage
          ? data.sanityBlogPosts._rawSeo.ogImage.picData.asset.url
          : ""
      }
    />
    <meta
      name="og:description"
      content={
        data.sanityBlogPosts._rawSeo.description
          ? data.sanityBlogPosts._rawSeo.description
          : ""
      }
    />
    <meta name="og:locale" content="en_US" />
    <meta name="author" content="Alec Venzor" />
    <meta charSet="utf-8" />
    <meta name="twiiter:card" content="summary_large_image" />
  </>
);
