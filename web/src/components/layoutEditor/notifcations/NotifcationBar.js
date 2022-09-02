import React from "react";
import BasicEditor from "../../ultilitys/BasicEditor";
import styled from "styled-components";

const Wrapper = styled.div`
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
`;
function NotifcationBar({ data }) {
  return (
    <Wrapper customtheme={data.theme ? data.theme : "inherit"}>
      <BasicEditor data={data.textEditor} />
    </Wrapper>
  );
}

export default NotifcationBar;
