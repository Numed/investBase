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
import usdt from "../../assets/CryptoIcons/usdt.svg";
import btc from "../../assets/CryptoIcons/btc.svg";
import eth from "../../assets/CryptoIcons/eth.svg";
import link from "../../assets/CryptoIcons/link.svg";
import uni from "../../assets/CryptoIcons/uni.svg";
import doge from "../../assets/CryptoIcons/doge.svg";
import Context from "../context/Context";
import { useState } from "react";

const App = () => {
  const [USDTheter, setUsdt] = useState(20);
  const [Bitcoin, setBtc] = useState(8);
  const [Ethurium, setEth] = useState(35);
  const [Link, setLink] = useState(10);
  const [Dai, setDai] = useState(5);
  const [Doge, setDoge] = useState(22);

  const dataCrypto = [
    {
      img: usdt,
      name: "USD Tether",
      tiker: "usdt",
      value: USDTheter,
      action: setUsdt,
    },
    { img: btc, name: "Bitcoin", tiker: "btc", value: Bitcoin, action: setBtc },
    {
      img: eth,
      name: "Ethurium",
      tiker: "eth",
      value: Ethurium,
      action: setEth,
    },
    { img: link, name: "Link", tiker: "link", value: Link, action: setLink },
    { img: uni, name: "DAI", tiker: "uni", value: Dai, action: setDai },
    {
      img: doge,
      name: "Doge Coin",
      tiker: "doge",
      value: Doge,
      action: setDoge,
    },
  ];
  return (
    <>
      <HeaderNav />
      <Intro />
      <Partners />
      <VideoSection />
      <StackedSection />
      <Context.Provider
        value={{
          dataCrypto,
          USDTheter,
          setUsdt,
          Bitcoin,
          setBtc,
          Ethurium,
          setEth,
          Link,
          setLink,
          Dai,
          setDai,
          Doge,
          setDoge,
        }}
      >
        <Portfolio />
      </Context.Provider>
      <PreBuild />
      <CalculateSection />
      <FooterBanner />
      <Footer />
      <Privacy />
    </>
  );
};

export default App;
