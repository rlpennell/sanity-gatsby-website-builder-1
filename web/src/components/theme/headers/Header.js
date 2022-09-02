import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import MobileNav from "./MobileNav";
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
const LinkWrapper = styled.div``;
function Header() {
  const data = useStaticQuery(graphql`
    {
      sanityHeaderMain {
        _rawTheme
        links {
          text
          link
        }
        logo {
          alt
          picData {
            asset {
              gatsbyImageData
            }
          }
        }
        mobileIcon {
          alt
          picData {
            asset {
              gatsbyImageData
            }
          }
        }
        _rawMobileTheme
      }
    }
  `);
  return (
    <Wrapper
      customtheme={data.sanityHeaderMain ? data.sanityHeaderMain : "inherit"}
    >
      <GatsbyImage
        image={data.sanityHeaderMain.logo.picData.asset.gatsbyImageData}
        alt={data.sanityHeaderMain.logo.alt}
      />
      <LinkWrapper>
        {data.sanityHeaderMain.links.map((link, i) => {
          return (
            <Link to={link.link} key={i}>
              {link.text}
            </Link>
          );
        })}
      </LinkWrapper>
      <MobileNav
        image={data.sanityHeaderMain.mobileIcon}
        theme={data.sanityHeaderMain._rawMobileTheme}
      >
        <LinkWrapper>
          {data.sanityHeaderMain.links.map((link, i) => {
            return (
              <Link to={link.link} key={i}>
                {link.text}
              </Link>
            );
          })}
        </LinkWrapper>
      </MobileNav>
    </Wrapper>
  );
}

export default Header;
