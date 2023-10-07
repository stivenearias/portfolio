import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particles-config";

export const ParticlesBackground = () => {
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  return <Particles options={particlesConfig} init={particlesInit} />;
};
