import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particles-config";

export const ParticlesBackground = () => {
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  const particlesOptions = particlesConfig("#00b8ba");

  return <Particles options={particlesOptions} init={particlesInit} />;
};
