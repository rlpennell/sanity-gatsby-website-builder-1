import React from "react";
import styled from "styled-components";
import BackgroundWrapper from "../../ultilitys/BackgroundWrapper";
import BasicEditor from "../../ultilitys/BasicEditor";
// Wrapper controls background card size
const Wrapper = styled.div`
  height: 100%;
`;
const BackgroundCardWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
function BackgroundCard({ data }) {
  return (
    <Wrapper>
      {data.cardArray.map((backgroundCard, i) => {
        return (
          <BackgroundCardWrapper key={i}>
            <BackgroundWrapper data={backgroundCard.pic}>
              <BasicEditor data={backgroundCard.textEditor} />
            </BackgroundWrapper>
          </BackgroundCardWrapper>
        );
      })}
    </Wrapper>
  );
}

export default BackgroundCard;
