import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
const Wrapper = styled(Layout)``;

function bioPost({ data }) {
  return <Wrapper page={data.sanityBioPosts.pageData} />;
}
export const query = graphql`
  query BioQuery($current: String!) {
    sanitySiteInfo {
      cannonicalLink
    }
    sanityBioPosts(seo: { slug: { current: { eq: $current } } }) {
      _rawSeo(resolveReferences: { maxDepth: 3 })
      pageData {
        _rawLayoutContent
        _rawTheme
      }
    }
  }
`;
export default bioPost;
export const Head = ({ location, data }) => (
  <>
    <title>{data.sanityBioPosts._rawSeo.title}</title>
    <meta name="geo.region" content="US-CA" />
    <link
      href={
        data.sanitySiteInfo.cannonicalLink
          ? data.sanitySiteInfo.cannonicalLink
          : "null"
      }
      rel="canonical"
    />
    <meta name="geo.placename" content="Vista" />
    <meta name="geo.position" content="33.170999;-117.204215" />
    <meta name="ICBM" content="33.170999, -117.204215" />
    <meta
      name="robots"
      content={
        data.sanityBioPosts._rawSeo.robotTags
          ? data.sanityBioPosts._rawSeo.robotTags
          : "all"
      }
    />
    <meta
      name="description"
      content={
        data.sanityBioPosts._rawSeo.description
          ? data.sanityBioPosts._rawSeo.description
          : ""
      }
    />
    <meta
      name="keywords"
      content={
        data.sanityBioPosts._rawSeo.keywords
          ? data.sanityBioPosts._rawSeo.keywords.join(",")
          : ""
      }
    />
    <meta name="googlebot" content="notranslate" />
    <meta
      name="google-site-verification"
      content={
        data.sanityBioPosts._rawSeo.googleVerifcation
          ? data.sanityBioPosts._rawSeo.googleVerifcation
          : null
      }
    />
    {/* Values given in search console */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="og:title" content={data.sanityBioPosts._rawSeo.title} />
    <meta name="og:type" content={data.sanityBioPosts._rawSeo.ogType} />
    <meta name="og:url" content={location.pathname} />
    <meta
      name="og:image"
      content={
        data.sanityBioPosts._rawSeo.ogImage
          ? data.sanityBioPosts._rawSeo.ogImage.picData.asset.url
          : ""
      }
    />
    <meta
      name="og:description"
      content={
        data.sanityBioPosts._rawSeo.description
          ? data.sanityBioPosts._rawSeo.description
          : ""
      }
    />
    <meta name="og:locale" content="en_US" />
    <meta name="author" content="Alec Venzor" />
    <meta charSet="utf-8" />
    <meta name="twiiter:card" content="summary_large_image" />
  </>
);
