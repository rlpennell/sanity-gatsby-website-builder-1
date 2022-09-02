import React from "react";
import styled from "styled-components";
import BasicEditor from "../../ultilitys/BasicEditor";
import PortablePic from "../../ultilitys/PortablePic";
import { useStaticQuery, graphql } from "gatsby";

const Wrapper = styled.div``;
const StatisticWrapper = styled.div`
  /* keep this */
  /* Font Options */
  font-size: ${(props) =>
    props.customtheme.font ? `${props.customtheme.font.mobile}px` : "inherit"};
  color: ${(props) =>
    props.customtheme.font ? props.customtheme.font.fontColor.hex : "inherit"};
  /* Background Color */
  background-color: ${(props) =>
    props.customtheme.backgroundColor
      ? props.customtheme.backgroundColor.hex
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
const Statistic = styled.h2``;
const PicWrapper = styled.div``;

// Acceps Array
function Statistics({ data }) {
  const sanity = useStaticQuery(graphql`
    {
      sanityStatisticsMainTheme {
        _rawTheme
      }
    }
  `);
  return (
    <Wrapper>
      {data.statisticsArray.map((statistic, i) => {
        return (
          <StatisticWrapper
            key={i}
            customtheme={
              sanity.sanityStatisticsMainTheme
                ? sanity.sanityStatisticsMainTheme._rawTheme
                : "inherit"
            }
          >
            <Statistic>{statistic.statNumber}</Statistic>
            <BasicEditor data={statistic.textEditor} />
            <PicWrapper>
              <PortablePic data={statistic.icon} />
            </PicWrapper>
          </StatisticWrapper>
        );
      })}
    </Wrapper>
  );
}

export default Statistics;
