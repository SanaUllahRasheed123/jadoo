import Testimonials from "./components/Testimonials";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Banner1 from "./components/banner1";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
// import Swipper from "./components/Swipper";
// import slides from './mock.json'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Card1 />
      <Card2 />
      <Card3 />
      <Testimonials />
      <Banner1 />
      <NewsLetter />
      <Footer />
      {/* <Swipper slides= {slides} /> */}
    </div>
  );
};

export default App;
