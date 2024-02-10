import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Feature";
import LandingPage from "./components/LandingPage";
import Marque from "./components/Marque";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      <Eyes />
      <Featured />
    </div>
  );
}

export default App;
