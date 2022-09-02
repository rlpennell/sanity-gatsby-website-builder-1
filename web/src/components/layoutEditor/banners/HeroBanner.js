import React from "react";
import styled from "styled-components";
import BackgroundWrapper from "../../ultilitys/BackgroundWrapper";
import BasicEditor from "../../ultilitys/BasicEditor";

const Wrapper = styled(BackgroundWrapper)`
  /* Border */
  border: ${(props) =>
    props.customtheme.borderOptions
      ? `${props.customtheme.borderOptions.borderWeight}px solid ${props.customtheme.borderOptions.borderColor.hex}`
      : "inherit"};
`;
function HeroBanner({ data }) {
  return (
    <Wrapper
      customtheme={data.theme ? data.theme : "inherit"}
      data={data.backgroundPic}
    >
      <BasicEditor data={data.textEditor} />
    </Wrapper>
  );
}

export default HeroBanner;
