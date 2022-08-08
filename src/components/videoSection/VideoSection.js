import { useCallback, useRef } from "react";
import styled from "styled-components";
import background from "../../assets/video-bg.svg";
import videoOverlay from "../../assets/video-overlay.svg";
import { UseHook } from "../../hooks/http.hook";

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

  @media (max-width: 580px) {
    font-size: 28px;
  }
`;

const Img = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  user-select: none;

  @media (max-width: 925px) {
    z-index: -2;
  }

  @media (max-width: 670px) {
    display: none;
  }
`;

const Video = styled.a`
  display: block;
  justify-self: center;
  border-radius: 8px;
  background: url(${videoOverlay}) no-repeat center;
  background-size: contain;
  opacity: 0.95;
  width: 100%;
  height: 350px;

  @media (max-width: 925px) {
    opacity: 1;
  }

  @media (max-width: 580px) {
    width: 80%;
    margin: 0 auto;
    height: 200px;
  }
`;

const VideoSection = () => {
  const ref = useRef();
  const { useOnScreen } = UseHook();
  const onScreen = useOnScreen(ref, "-100px");

  const listener = useCallback(() => {
    const y = window.scrollY;
    const element = ref.current;
    if (y > 1280 && y < 1300) {
      element.style.transform = "scale(1.3)";
      element.style.opacity = "0";
      element.style.transition = "all 0.25s linear";
    } else if (y < 1280 && y > 1250) {
      element.style.transform = "scale(1)";
      element.style.opacity = "1";
      element.style.transition = "all 0.25s linear";
    }
  }, []);

  if (onScreen === true) {
    window.addEventListener("scroll", listener);
  }

  const View = () => {
    return (
      <StackedSection ref={ref}>
        <VideoTitle>How Stacked Works</VideoTitle>
        <Img src={background} alt="Video-bg" />
        <Video />
      </StackedSection>
    );
  };

  return <View />;
};

export default VideoSection;
