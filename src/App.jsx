import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Partners from "./components/Partners/Partners";
import WhyPartner from "./components/WhyPartner/WhyPartner";
import Included from "./components/Included/Included";
import Studios from "./components/Studios/Studios";
import Cta from "./components/Cta/Cta";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Hero>
        <Header></Header>
      </Hero>
      <About></About>
      <Partners></Partners>
      <Included></Included>
      <Studios></Studios>
      <WhyPartner></WhyPartner>
      <Cta></Cta>
      <Footer></Footer>
    </div>
  );
}

export default App;
