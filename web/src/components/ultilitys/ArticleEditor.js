import React from "react";
import styled from "styled-components";
import PortableText from "react-portable-text";
import BackgroundCard from "../articleEditor/cards/BackgroundCard";
import BioCards from "../articleEditor/cards/BioCards";
import BioCardsAlt from "../articleEditor/cards/BioCardAlt";
import InfoCard from "../articleEditor/cards/InfoCard";
import IconCard from "../articleEditor/cards/IconCard";
import PicCard from "../articleEditor/cards/PicCard";
import PicCardAlt from "../articleEditor/cards/PicCardAlt";
import ServiceCard from "../articleEditor/cards/ServiceCard";
import CollageArticle from "../articleEditor/collages/CollageArticle";
import PicArticle from "../articleEditor/images/PicArticle";
import Picture from "../articleEditor/images/Picture";
import Statistics from "../articleEditor/statistics/Statistics";
import StatisticsAlt from "../articleEditor/statistics/StatisticsAlt";
import Quotes from "../articleEditor/testimonials/Quotes";
import CustomerReview from "../articleEditor/testimonials/CustomerReview";
import CustomerReviewsAlt from "../articleEditor/testimonials/CustomerReviewAlt";
import ButtonAlt from "../articleEditor/buttons/ButtonAlt";
import ButtonHero from "../articleEditor/buttons/ButtonHero";
import ButtonMain from "../articleEditor/buttons/ButtonMain";
import ButtonSubmit from "../articleEditor/buttons/ButtonSubmit";
import ButtonCard from "../articleEditor/buttons/ButtonCard";
import Video from "../articleEditor/videos/Video";
import VideoArticle from "../articleEditor/videos/VideoArticle";
const Editor = styled(PortableText)`
  /* Background Options */
  background: ${(props) =>
    props.customtheme.backgroundColor
      ? `rgba(${props.customtheme.backgroundColor.rgb.r},${props.customtheme.backgroundColor.rgb.g},${props.customtheme.backgroundColor.rgb.b},${props.customtheme.backgroundColor.rgb.a})`
      : "inherit"};

  /* Headers */
  h1,
  h2,
  h3,
  h4,
  h5 {
    /* Color Options */
    color: ${(props) =>
      props.customtheme.headerColor
        ? props.customtheme.headerColor.hex
        : "inherit"};
  }
  /* Font */
  ol,
  ul,
  li,
  p,
  span {
    /* Color Options */
    color: ${(props) =>
      props.customtheme.fontColor
        ? props.customtheme.fontColor.hex
        : "inherit"};
  }
`;
function ArticleEditor({ data }) {
  return (
    <Editor
      customtheme={data.theme ? data.theme : "inherit"}
      content={data.textContent}
      serializers={{
        backgroundCards: (props) => <BackgroundCard data={props} />,
        bioCards: (props) => <BioCards data={props} />,
        bioCardsAlt: (props) => <BioCardsAlt data={props} />,
        iconCards: (props) => <IconCard data={props} />,
        infoCards: (props) => <InfoCard data={props} />,
        picCards: (props) => <PicCard data={props} />,
        picCardsAlt: (props) => <PicCardAlt data={props} />,
        serviceCards: (props) => <ServiceCard data={props} />,
        collageArticle: (props) => <CollageArticle data={props} />,
        picArticle: (props) => <PicArticle data={props} />,
        picture: (props) => <Picture data={props} />,
        statistics: (props) => <Statistics data={props} />,
        statisticsAlt: (props) => <StatisticsAlt data={props} />,
        customerReviews: (props) => <CustomerReview data={props} />,
        customerReviewsAlt: (props) => <CustomerReviewsAlt data={props} />,
        quotes: (props) => <Quotes data={props} />,
        buttonAlt: (props) => <ButtonAlt data={props} />,
        buttonCard: (props) => <ButtonCard data={props} />,
        buttonHero: (props) => <ButtonHero data={props} />,
        buttonMain: (props) => <ButtonMain data={props} />,
        buttonSubmit: (props) => <ButtonSubmit data={props} />,
        video: (props) => <Video data={props} />,
        videoArticle: (props) => <VideoArticle data={props} />,
      }}
    />
  );
}

export default ArticleEditor;
