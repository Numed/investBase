import HeaderNav from "../headerNav/HeaderNav";
import VideoSection from "../videoSection/VideoSection";
import Intro from "../intro/Intro";
import Partners from "../partners/Partners";
import StackedSection from "../stackedSection/StackedSection";
import Portfolio from "../../portfolio/Portfolio";

const App = () => {
  return (
    <>
      <HeaderNav />
      <Intro />
      <Partners />
      <VideoSection />
      <StackedSection />
      <Portfolio />
    </>
  );
};

export default App;
