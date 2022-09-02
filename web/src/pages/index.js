import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const Wrapper = styled(Layout)``;
function index({ data }) {
  return <Wrapper page={data.sanityIndex.pageData}></Wrapper>;
}
export const query = graphql`
  {
    sanitySiteInfo {
      cannonicalLink
    }
    sanityIndex {
      _rawSeo(resolveReferences: { maxDepth: 3 })
      pageData {
        _rawLayoutContent
        _rawTheme
      }
    }
  }
`;
export default index;
export const Head = ({ location, data }) => (
  <>
    <title>{data.sanityIndex._rawSeo.title}</title>
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
        data.sanityIndex._rawSeo.robotTags
          ? data.sanityIndex._rawSeo.robotTags
          : "all"
      }
    />
    <meta
      name="description"
      content={
        data.sanityIndex._rawSeo.description
          ? data.sanityIndex._rawSeo.description
          : ""
      }
    />
    <meta
      name="keywords"
      content={
        data.sanityIndex._rawSeo.keywords
          ? data.sanityIndex._rawSeo.keywords.join(",")
          : ""
      }
    />
    <meta name="googlebot" content="notranslate" />
    <meta
      name="google-site-verification"
      content={
        data.sanityIndex._rawSeo.googleVerifcation
          ? data.sanityIndex._rawSeo.googleVerifcation
          : null
      }
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="og:title" content={data.sanityIndex._rawSeo.title} />
    <meta name="og:type" content={data.sanityIndex._rawSeo.ogType} />
    <meta name="og:url" content={location.pathname} />
    <meta
      name="og:image"
      content={
        data.sanityIndex._rawSeo.ogImage
          ? data.sanityIndex._rawSeo.ogImage.picData.asset.url
          : ""
      }
    />
    <meta
      name="og:description"
      content={
        data.sanityIndex._rawSeo.description
          ? data.sanityIndex._rawSeo.description
          : ""
      }
    />
    <meta name="og:locale" content="en_US" />
    <meta name="author" content="Alec Venzor" />
    <meta charSet="utf-8" />
    <meta name="twiiter:card" content="summary_large_image" />
  </>
);
