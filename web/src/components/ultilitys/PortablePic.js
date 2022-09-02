import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
const Pic = styled(GatsbyImage)``;
const sanityConfig = {
  projectId: process.env.GATSBY_SANITY_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
};
function PortablePic({ data }) {
  const imageData = getGatsbyImageData(
    data.picData.asset._ref,
    {},
    sanityConfig
  );
  return <Pic alt={data.alt} image={imageData} />;
}

export default PortablePic;
