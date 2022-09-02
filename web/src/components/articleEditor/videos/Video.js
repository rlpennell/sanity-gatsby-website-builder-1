import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";
const Wrapper = styled.div``;

function Video({ data }) {
  return (
    <Wrapper>
      <YouTube
        videoId={data.youtube.videoID}
        id={data.youtube.videoID}
        title={data.youtube.title}
      />
    </Wrapper>
  );
}

export default Video;
