import React from "react";
import styled from "styled-components";
import PicArticle from "../../articleEditor/images/PicArticle";
const Wrapper = styled.div``;
function PicArticleFlip({ data }) {
  return (
    <Wrapper>
      {data.picArticles.map((picArticle, i) => {
        return <PicArticle key={i} data={picArticle}></PicArticle>;
      })}
    </Wrapper>
  );
}

export default PicArticleFlip;
