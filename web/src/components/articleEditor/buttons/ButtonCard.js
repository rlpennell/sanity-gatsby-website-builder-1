import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Wrapper = styled.div``;
const StyleLink = styled(Link)`
  /* keep this */
  display: inline-flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
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
const Arrow = styled(GatsbyImage)`
  /* Sizing */
  height: 35px;
  width: 35px;
  margin-left: 8px;
`;
const A = styled.a`
  /* keep this */
  display: inline-flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
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
function ButtonCard({ data }) {
  const sanity = useStaticQuery(graphql`
    {
      sanityCardButtonTheme {
        _rawTheme
      }
    }
  `);
  return (
    // Is Icon Enabled
    <Wrapper>
      {data.isOutbound ? (
        <A
          customtheme={
            sanity.sanityCardButtonTheme
              ? sanity.sanityCardButtonTheme._rawTheme
              : "inherit"
          }
          href={data.link}
        >
          {data.text}
          {data.icon && data.isOutbound ? (
            <Arrow
              alt={data.icon.alt}
              image={data.icon.picData.asset.gatsbyImageData}
              objectFit="cover"
            />
          ) : null}
        </A>
      ) : (
        <StyleLink
          customtheme={
            sanity.sanityCardButtonTheme
              ? sanity.sanityCardButtonTheme._rawTheme
              : "inherit"
          }
          to={data.link}
        >
          {data.text}
          {data.icon && data.isOutbound === false ? (
            <Arrow
              alt={data.icon.alt}
              image={data.icon.picData.asset.gatsbyImageData}
              objectFit="cover"
            />
          ) : null}
        </StyleLink>
      )}
    </Wrapper>
  );
}

export default ButtonCard;
// This component checks to see if its a in bound or out bound link, as well as checking to see if theirs a pic
