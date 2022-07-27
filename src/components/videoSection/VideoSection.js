import styled from "styled-components";
import background from "../../assets/video-bg.svg";
import videoOverlay from "../../assets/video-overlay.svg";

const StackedSection = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`;

const VideoTitle = styled.h2`
  text-align: center;
  font-size: 54px;
  font-weight: 400;
  color: #3c3463;
  margin-bottom: 30px;
`;

const Img = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  user-select: none;
`;

const Video = styled.a`
  display: block;
  justify-self: center;
  border-radius: 8px;
  background: url(${videoOverlay}) no-repeat center;
  background-size: contain;
  z-index: 1;
  opacity: 0.95;
  width: 100%;
  height: 350px;
`;

const VideoSection = () => {
  return (
    <StackedSection>
      <VideoTitle>How Stacked Works</VideoTitle>
      <Img src={background} alt="Video-bg" />
      <Video />
    </StackedSection>
  );
};

export default VideoSection;
