import { About } from "./components/About";
// TODO: Validar si dejamos estos blurs o los quitamos
// import { BgBlurs } from "./components/BgBlurs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { ParticlesBackground } from "./components/ParticlesBackground";
import { Work } from "./components/Work";

function App() {
  return (
    <main>
      <ParticlesBackground />
      {/* <BgBlurs /> */}
      <Navbar />

      {/* Sections */}
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
