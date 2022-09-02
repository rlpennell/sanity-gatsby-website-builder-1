import React from "react";
import styled from "styled-components";
import PortableText from "react-portable-text";
import ButtonAlt from "../articleEditor/buttons/ButtonAlt";
import ButtonHero from "../articleEditor/buttons/ButtonHero";
import ButtonMain from "../articleEditor/buttons/ButtonMain";
import ButtonSubmit from "../articleEditor/buttons/ButtonSubmit";
import ButtonCard from "../articleEditor/buttons/ButtonCard";
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
        ? props.customtheme.headerColor.hexss
        : "inherit"}!important;
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
        : "inherit"}!important;
  }
  /* Border */
  border: ${(props) =>
    props.customtheme.borderOptions
      ? `${props.customtheme.borderOptions.borderWeight}px solid ${props.customtheme.borderOptions.borderColor.hex}`
      : "inherit"};
`;
function BasicEditor({ data }) {
  return (
    <>
      {data.textContent ? (
        <Editor
          customtheme={data.theme ? data.theme : "inherit"}
          content={data.textContent}
          serializers={{
            buttonAlt: (props) => <ButtonAlt data={props} />,
            buttonCard: (props) => <ButtonCard data={props} />,
            buttonHero: (props) => <ButtonHero data={props} />,
            buttonMain: (props) => <ButtonMain data={props} />,
            buttonSubmit: (props) => <ButtonSubmit data={props} />,
          }}
        />
      ) : null}
    </>
  );
}

export default BasicEditor;
