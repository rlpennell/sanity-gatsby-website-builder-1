import React from "react";
import styled from "styled-components";
import BasicEditor from "../../ultilitys/BasicEditor";
import { useStaticQuery, graphql } from "gatsby";

const Wrapper = styled.div``;
const Statistic = styled.h2``;
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
function StatisticsAlt({ data }) {
  const sanity = useStaticQuery(graphql`
    {
      sanityStatisticsAltTheme {
        _rawTheme
      }
    }
  `);
  return (
    <Wrapper>
      {data.statisticsArray.map((statisticAlt, i) => {
        return (
          <StatisticWrapper
            key={i}
            customtheme={
              sanity.sanityStatisticsAltTheme
                ? sanity.sanityStatisticsAltTheme._rawTheme
                : "inherit"
            }
          >
            <Statistic>{statisticAlt.statNumber}</Statistic>
            <BasicEditor data={statisticAlt.textEditor} />
          </StatisticWrapper>
        );
      })}
    </Wrapper>
  );
}

export default StatisticsAlt;
