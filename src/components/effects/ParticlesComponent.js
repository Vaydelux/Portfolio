// src/components/ParticlesComponent.js
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "linear-gradient(9deg, #212170 0%, #062462 35%, #062663 40%, #183854 100%);",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "grab",
          },
          onHover: {
            enable: true,
            mode: 'none',
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 100,
          },
          repulse: {
            distance: 150,
          }
        },
      },
      particles: {
        color: {
          value: "#3e7b7a",
        },
        links: {
          color: "#fff",
          distance: 0,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 90,
        },
        opacity: {
          value: 0.6,
        },
        shape: {
          type: "triangle",
        },
        size: {
          value: { min: 2, max: 2 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id={props.id}
      init={particlesLoaded}
      options={options}
    />
  );
};

export default ParticlesComponent;
