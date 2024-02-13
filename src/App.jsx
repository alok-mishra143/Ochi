import About from "./components/About";
import Cards from "./components/Cards";
import Eyes from "./components/Eyes";
import Featured from "./components/Feature";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Marque from "./components/Marque";
import Navbar from "./components/Navbar";
import ReadyTo from "./components/ReadyTo";

import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      {/* <ReadyTo /> */}

      <Footer />
    </div>
  );
}

export default App;
