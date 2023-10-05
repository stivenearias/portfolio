import { About } from "./components/About";
import { BgBlurs } from "./components/BgBlurs";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { ParticlesBackground } from "./components/ParticlesBackground";
import { Work } from "./components/Work";

function App() {
  return (
    <main>
      <ParticlesBackground />
      <BgBlurs />
      <Navbar />

      {/* Sections */}
      <Home />
      <About />
      <Work />
      <Contact />
    </main>
  );
}

export default App;
