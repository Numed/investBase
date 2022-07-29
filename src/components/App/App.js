import HeaderNav from "../headerNav/HeaderNav";
import VideoSection from "../videoSection/VideoSection";
import Intro from "../intro/Intro";
import Partners from "../partners/Partners";
import StackedSection from "../stackedSection/StackedSection";
import Portfolio from "../portfolio/Portfolio";
import PreBuild from "../preBuild/PreBuild";
import CalculateSection from "../calculateSection/CalculateSection";
import FooterBanner from "../footerBanner/FooterBanner";
import Footer from "../footer/Footer";
import Privacy from "../privacy/Privacy";

const App = () => {
  return (
    <>
      <HeaderNav />
      <Intro />
      <Partners />
      <VideoSection />
      <StackedSection />
      <Portfolio />
      <PreBuild />
      <CalculateSection />
      <FooterBanner />
      <Footer />
      <Privacy />
    </>
  );
};

export default App;
