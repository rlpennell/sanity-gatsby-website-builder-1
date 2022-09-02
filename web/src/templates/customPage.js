import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
const Wrapper = styled(Layout)``;

function customPage({ data }) {
  return <Wrapper page={data.sanityCustomPage.pageData} />;
}

export default customPage;
export const query = graphql`
  query CustomPageQuery($current: String!) {
    sanitySiteInfo {
      cannonicalLink
    }
    sanityCustomPage(seo: { slug: { current: { eq: $current } } }) {
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
    <title>{data.sanityCustomPage._rawSeo.title}</title>
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
        data.sanityCustomPage._rawSeo.robotTags
          ? data.sanityCustomPage._rawSeo.robotTags
          : "all"
      }
    />
    <meta
      name="description"
      content={
        data.sanityCustomPage._rawSeo.description
          ? data.sanityCustomPage._rawSeo.description
          : ""
      }
    />
    <meta
      name="keywords"
      content={
        data.sanityCustomPage._rawSeo.keywords
          ? data.sanityCustomPage._rawSeo.keywords.join(",")
          : ""
      }
    />
    <meta name="googlebot" content="notranslate" />
    <meta
      name="google-site-verification"
      content={
        data.sanityCustomPage._rawSeo.googleVerifcation
          ? data.sanityCustomPage._rawSeo.googleVerifcation
          : null
      }
    />
    {/* Values given in search console */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="og:title" content={data.sanityCustomPage._rawSeo.title} />
    <meta name="og:type" content={data.sanityCustomPage._rawSeo.ogType} />
    <meta name="og:url" content={location.pathname} />
    <meta
      name="og:image"
      content={
        data.sanityCustomPage._rawSeo.ogImage
          ? data.sanityCustomPage._rawSeo.ogImage.picData.asset.url
          : ""
      }
    />
    <meta
      name="og:description"
      content={
        data.sanityCustomPage._rawSeo.description
          ? data.sanityCustomPage._rawSeo.description
          : ""
      }
    />
    <meta name="og:locale" content="en_US" />
    <meta name="author" content="Alec Venzor" />
    <meta charSet="utf-8" />
    <meta name="twiiter:card" content="summary_large_image" />
  </>
);
