import React from "react";
import styled from "styled-components";
import BasicEditor from "../../ultilitys/BasicEditor";
import PortablePic from "../../ultilitys/PortablePic";
import SocialHandle from "../../ultilitys/SocialHandle";
import { useStaticQuery, graphql } from "gatsby";

const Wrapper = styled.div``;
const BioCardAltWrapper = styled.div`
  /* keep this */
  /* Font Options */
  font-size: ${(props) =>
    props.customtheme.font ? `${props.customtheme.font.mobile}px` : "inherit"};
  color: ${(props) =>
    props.customtheme.font ? props.customtheme.font.fontColor.hex : "inherit"};
  /* Background Color */
  background-color: ${(props) =>
    props.customtheme.backgroundColor
      ? `rgba(${props.customtheme.backgroundColor.rgb.r},${props.customtheme.backgroundColor.rgb.g},${props.customtheme.backgroundColor.rgb.b},${props.customtheme.backgroundColor.rgb.a})`
      : "inherit"};
  /*Hover Color */
  &:hover {
    background-color: ${(props) =>
      props.customtheme.hoverTheme
        ? props.customtheme.hoverTheme.hoverBackground.hex
        : "inherit"};
    color: ${(props) =>
      props.customtheme.hoverTheme
        ? props.customtheme.hoverTheme.fontHover.hex
        : "inherit"};
  }

  /* Border */
  border: ${(props) =>
    props.customtheme.borderOptions
      ? `${props.customtheme.borderOptions.borderWeight}px solid ${props.customtheme.borderOptions.borderColor.hex}`
      : "inherit"};

  /* Tablet */
  @media only screen and (min-width: 600px) {
    font-size: ${(props) =>
      props.customtheme.font
        ? `${props.customtheme.font.tablet}px`
        : "inherit"};
  }
  /* Desktop */
  @media only screen and (min-width: 900px) {
    font-size: ${(props) =>
      props.customtheme.font
        ? `${props.customtheme.font.desktop}px`
        : "inherit"};
  }
`;
const ProfilePic = styled(PortablePic)``;
function BioCardAlt({ data }) {
  const sanity = useStaticQuery(graphql`
    {
      sanityBioCardAltTheme {
        _rawTheme
      }
    }
  `);
  return (
    <Wrapper>
      {data.cardArray.map((bioCardAlt, i) => {
        return (
          <BioCardAltWrapper
            customtheme={
              sanity.sanityBioCardAltTheme
                ? sanity.sanityBioCardAltTheme._rawTheme
                : "inherit"
            }
            key={i}
          >
            <BasicEditor data={bioCardAlt.textEditor} />
            <ProfilePic data={bioCardAlt.pic} />
            <SocialHandle data={bioCardAlt.socialArray} />
          </BioCardAltWrapper>
        );
      })}
    </Wrapper>
  );
}

export default BioCardAlt;
