import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
const Wrapper = styled.div`
  /* Font Options */
  font-size: ${(props) =>
    props.customtheme.fontLabel
      ? `${props.customtheme.fontLabel.mobile}px`
      : "inherit"};
  color: ${(props) =>
    props.customtheme.fontLabel
      ? props.customtheme.fontLabel.fontColor.hex
      : "inherit"};
  /* Background Color */
  background-color: ${(props) =>
    props.customtheme.backgroundColor
      ? `rgba(${props.customtheme.backgroundColor.rgb.r},${props.customtheme.backgroundColor.rgb.g},${props.customtheme.backgroundColor.rgb.b},${props.customtheme.backgroundColor.rgb.a})`
      : "inherit"};
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
const CompanyInfo = styled.div``;
const SocialMedia = styled.div``;
const SocialIcon = styled(GatsbyImage)``;
const PageDirectory = styled.div``;
const LinkList = styled.div``;
function Footer(props) {
  const data = useStaticQuery(graphql`
    {
      sanityFooterMain {
        _rawFootertheme
        pages {
          link
          text
        }
        resourceLinkTitle
        pageLinkTitle
        resources {
          text
          link
        }
        services {
          link
          text
        }
        servicesLinkTitle
      }
      sanitySiteInfo {
        socialMedia {
          icon {
            alt
            picData {
              asset {
                gatsbyImageData
              }
            }
          }
          label
          link
        }
        companyName
        companyEmail
        phoneNumber
      }
    }
  `);
  return (
    <Wrapper
      customtheme={data.sanityFooterMain ? data.sanityFooterMain : "inherit"}
    >
      <CompanyInfo>
        <h3>{data.sanitySiteInfo.companyName}</h3>
        <SocialMedia>
          {data.sanitySiteInfo.socialMedia.map((social, i) => {
            return (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon
                  image={social.icon.picData.asset.gatsbyImageData}
                  alt={social.icon.alt}
                />
              </a>
            );
          })}
        </SocialMedia>
      </CompanyInfo>
      <PageDirectory>
        <LinkList>
          <h3>{data.sanityFooterMain.pageLinkTitle}</h3>
          {data.sanityFooterMain.pages.map((pages, i) => {
            return (
              <Link to={pages.link} key={i}>
                {pages.text}
              </Link>
            );
          })}
        </LinkList>
        <LinkList>
          <h3>{data.sanityFooterMain.servicesLinkTitle}</h3>
          {data.sanityFooterMain.services.map((pages, i) => {
            return (
              <Link to={pages.link} key={i}>
                {pages.text}
              </Link>
            );
          })}
        </LinkList>
        <LinkList>
          <h3>{data.sanityFooterMain.resourceLinkTitle}</h3>
          {data.sanityFooterMain.resources.map((pages, i) => {
            return (
              <Link to={pages.link} key={i}>
                {pages.text}
              </Link>
            );
          })}
        </LinkList>
      </PageDirectory>
    </Wrapper>
  );
}

export default Footer;
