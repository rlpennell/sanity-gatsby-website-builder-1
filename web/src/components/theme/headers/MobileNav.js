import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
const Wrapper = styled.div`
  @media only screen and (min-width: 900px) {
    display: none;
  }
`;
const Active = styled.div`
  display: ${(props) => (props.active ? "display" : "none")};
`;
const MobileIcon = styled(GatsbyImage)``;
const MobileIconWrapper = styled.div``;
function MobileNav({ image, children, theme }) {
  const [active, setActive] = useState(false);
  return (
    <Wrapper theme={theme ? theme : "inherit"}>
      <MobileIconWrapper
        onClick={() => setActive(!active)}
        onKeyDown={() => setActive(!active)}
      >
        <MobileIcon
          image={image.picData.asset.gatsbyImageData}
          alt={image.alt}
        />
      </MobileIconWrapper>
      <Active active={active}>{children}</Active>
    </Wrapper>
  );
}

export default MobileNav;
