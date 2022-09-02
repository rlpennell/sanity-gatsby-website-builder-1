import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
const Wrapper = styled(Layout)``;
function blog({ data }) {
  return <Wrapper page={data.sanityBlog.pageData}></Wrapper>;
}

export default blog;
export const query = graphql`
  {
    sanitySiteInfo {
      cannonicalLink
    }
    sanityBlog {
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
    <title>{data.sanityBlog._rawSeo.title}</title>;
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
    <meta name="robots" content={data.sanityBlog._rawSeo.robotTags} />
    <meta name="description" content={data.sanityBlog._rawSeo.description} />
    <meta
      name="keywords"
      content={
        data.sanityBlog._rawSeo.keywords
          ? data.sanityBlog._rawSeo.keywords.join(",")
          : ""
      }
    />
    <meta name="googlebot" content="notranslate" />
    <meta
      name="google-site-verification"
      content={data.sanityBlog._rawSeo.googleVerifcation}
    />
    {/* Values given in search console */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="og:title" content={data.sanityBlog._rawSeo.title} />
    <meta name="og:type" content={data.sanityBlog._rawSeo.ogType} />
    <meta name="og:url" content={location.pathname} />
    <meta
      name="og:image"
      content={
        data.sanityBlog._rawSeo.ogImage
          ? data.sanityBlog._rawSeo.ogImage.picData.asset.url
          : ""
      }
    />
    <meta
      name="og:description"
      content={
        data.sanityBlog._rawSeo.description
          ? data.sanityBlog._rawSeo.description
          : ""
      }
    />
    <meta name="og:locale" content="en_US" />
    <meta name="author" content="Alec Venzor" />
    <meta charSet="utf-8" />
    <meta name="twiiter:card" content="summary_large_image" />
  </>
);
