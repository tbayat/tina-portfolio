import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/components css.css";
import Navigation from "../components/navigation";
import { MDBIcon } from "mdb-react-ui-kit";

const Home = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <div className="sticky-top">
        <Navigation />
      </div>
      <div id="home">
        <div className="intro" style={{ zIndex: 2 }}>
          <h1>Tina Bayat</h1>
          <h2>Front-End Developer</h2>
          <a
            href="mailto:tinaa.bayat@gmail.com"
            target="_blank"
            className="me-4 text-reset"
          >
            <MDBIcon size="3x" far icon="envelope" />
          </a>
          <a
            href="https://www.linkedin.com/in/tina-bayat-27844b261/"
            target="_blank"
            className="me-4 text-reset"
          >
            <MDBIcon size="3x" fab icon="linkedin" />
          </a>
          <a
            href="https://github.com/tbayat"
            target="_blank"
            className="me-4 text-reset"
          >
            <MDBIcon size="3x" fab icon="github" />
          </a>
        </div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: { color: "#eba92a" },
            fpsLimit: 120,
            fullScreen: { zIndex: -1 },
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 0,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 200,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    </>
  );
};

export default Home;
