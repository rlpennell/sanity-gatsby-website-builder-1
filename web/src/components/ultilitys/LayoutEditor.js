import React from "react";
import styled from "styled-components";
import PortableText from "react-portable-text";
import ArticleEditor from "./ArticleEditor";
import HeroBanner from "../layoutEditor/banners/HeroBanner";
import InfoBanner from "../layoutEditor/banners/InfoBanner";
import FormAlt from "../layoutEditor/forms/FormAlt";
import FormMain from "../layoutEditor/forms/FormMain";
import FormPicArticle from "../layoutEditor/forms/FormPicArticle";
import HeroAlt from "../layoutEditor/heros/HeroAlt";
import HeroMain from "../layoutEditor/heros/HeroMain";
import NotifcationBar from "../layoutEditor/notifcations/NotifcationBar";
import PicArticleFlip from "../layoutEditor/premades/PicArticleFlip";
import CookieConsent from "../layoutEditor/notifcations/CookieConsent";

const Editor = styled(PortableText)`
  /* Background Options */
  background: ${(props) =>
    props.customtheme.backgroundColor
      ? `rgba(${props.customtheme.backgroundColor.rgb.r},${props.customtheme.backgroundColor.rgb.g},${props.customtheme.backgroundColor.rgb.b},${props.customtheme.backgroundColor.rgb.a})`
      : "inherit"};
  z-index: -2;
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
    padding-top: 12px;
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
function LayoutEditor({ data }) {
  return (
    <>
      <Editor
        customtheme={data._rawTheme ? data._rawTheme : "inherit"}
        projectId="j5dplla1"
        dataset="production"
        content={data._rawLayoutContent}
        serializers={{
          editor: (props) => <ArticleEditor data={props} />,
          heroBanner: (props) => <HeroBanner data={props} />,
          infoBanner: (props) => <InfoBanner data={props} />,
          formAlt: (props) => <FormAlt data={props} />,
          formMain: (props) => <FormMain data={props} />,
          formPicArticle: (props) => <FormPicArticle data={props} />,
          heroAlt: (props) => <HeroAlt data={props} />,
          heroMain: (props) => <HeroMain data={props} />,
          notifcationBar: (props) => <NotifcationBar data={props} />,
          picArticleFlip: (props) => <PicArticleFlip data={props} />,
          cookieConsent: (props) => <CookieConsent data={props} />,
        }}
      />
    </>
  );
}

export default LayoutEditor;
//  dont forget to switch out id and dataset to enviromentals
