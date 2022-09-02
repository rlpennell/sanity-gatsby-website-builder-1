import React from "react";
import styled from "styled-components";
import BasicEditor from "../../ultilitys/BasicEditor";
import PortablePic from "../../ultilitys/PortablePic";
import { useStaticQuery, graphql } from "gatsby";

const Wrapper = styled.div`
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
      : "transparent"};
  /*Hover Color */
  &:hover {
    background-color: ${(props) =>
      props.customtheme.hoverTheme
        ? props.customtheme.hoverTheme.hoverBackground.hex
        : "inherits"};
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
const Content = styled.div`
  display: flex;
  @media only screen and (min-width: 600px) {
    flex-flow: row nowrap;
    flex-direction: ${(props) => (props.invert ? "row-reverse" : "row")};
  }
`;
const PicWrapper = styled.div``;
function PicArticle({ data }) {
  const sanity = useStaticQuery(graphql`
    {
      sanityPicArticleTheme {
        _rawTheme
      }
    }
  `);
  return (
    <Wrapper
      customtheme={
        sanity.sanityPicArticleTheme
          ? sanity.sanityPicArticleTheme._rawTheme
          : "inherit"
      }
    >
      {data.title ? <h2>{data.title}</h2> : null}
      <Content invert={data.invertAsset ? data.invertAsset : false}>
        <PicWrapper>
          <PortablePic data={data.pic} />
        </PicWrapper>
        <BasicEditor data={data.textEditor} />
      </Content>
    </Wrapper>
  );
}

export default PicArticle;
