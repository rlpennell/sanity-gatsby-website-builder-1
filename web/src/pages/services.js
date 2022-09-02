import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const Wrapper = styled(Layout)``;
function services({ data }) {
  return <Wrapper page={data.sanityIndex.pageData}></Wrapper>;
}
export default services;
export const query = graphql`
  {
    sanitySiteInfo {
      cannonicalLink
    }
    sanityService {
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
    <title>{data.sanityService._rawSeo.title}</title>
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
        data.sanityService._rawSeo.robotTags
          ? data.sanityService._rawSeo.robotTags
          : "all"
      }
    />
    <meta
      name="description"
      content={
        data.sanityService._rawSeo.description
          ? data.sanityService._rawSeo.description
          : ""
      }
    />
    <meta
      name="keywords"
      content={
        data.sanityService._rawSeo.keywords
          ? data.sanityService._rawSeo.keywords.join(",")
          : ""
      }
    />
    <meta name="googlebot" content="notranslate" />
    <meta
      name="google-site-verification"
      content={
        data.sanityService._rawSeo.googleVerifcation
          ? data.sanityService._rawSeo.googleVerifcation
          : null
      }
    />
    {/* Values given in search console */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="og:title" content={data.sanityService._rawSeo.title} />
    <meta name="og:type" content={data.sanityService._rawSeo.ogType} />
    <meta name="og:url" content={location.pathname} />
    <meta
      name="og:image"
      content={
        data.sanityService._rawSeo.ogImage
          ? data.sanityService._rawSeo.ogImage.picData.asset.url
          : ""
      }
    />
    <meta
      name="og:description"
      content={
        data.sanityService._rawSeo.description
          ? data.sanityService._rawSeo.description
          : ""
      }
    />
    <meta name="og:locale" content="en_US" />
    <meta name="author" content="Alec Venzor" />
    <meta charSet="utf-8" />
    <meta name="twiiter:card" content="summary_large_image" />
  </>
);
