import React from "react";
import styled from "styled-components";
import PortablePic from "../../ultilitys/PortablePic";
const Wrapper = styled.div``;

function Picture({ data }) {
  return (
    <Wrapper>
      <PortablePic data={data.pic} />;
    </Wrapper>
  );
}

export default Picture;
