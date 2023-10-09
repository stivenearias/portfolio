import { About } from "./components/About";
// TODO: Validar si dejamos estos blurs o los quitamos
// import { BgBlurs } from "./components/BgBlurs";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { ParticlesBackground } from "./components/ParticlesBackground";
import { Skills } from "./components/Skills";
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
      <Skills />
      <Work />
      <Contact />
    </main>
  );
}

export default App;
