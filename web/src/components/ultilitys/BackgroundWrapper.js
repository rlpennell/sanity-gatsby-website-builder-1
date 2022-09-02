import React from "react";
import styled from "styled-components";
import { getGatsbyImageData } from "gatsby-source-sanity";
import { convertToBgImage } from "gbimage-bridge";
import { getImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";
const Wrapper = styled(BackgroundImage)`
  z-index: 50;
`;
const sanityConfig = { projectId: "j5dplla1", dataset: "production" };
// Wrap this component over whatever you want to background
function BackgroundWrapper({ data, children }) {
  console.log(JSON.stringify(data));
  // Grab image data from sanity
  const imageData = getGatsbyImageData(
    data.picData.asset._ref,
    {},
    sanityConfig
  );
  console.log(JSON.stringify(imageData));

  // Convert gatsby image data into bg image
  const image = getImage(imageData);
  console.log(JSON.stringify(image));
  const bgImage = convertToBgImage(image);
  return (
    <Wrapper {...bgImage} preserveStackingContext alt="">
      {children}
    </Wrapper>
  );
}

export default BackgroundWrapper;
