import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import "../components/components css.css";

const Footer = () => {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "#eba92a" }}
    >
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <MDBBtn
            outline
            color="#523857 "
            floating
            className="m-1"
            href="mailto:tinaa.bayat@gmail.com"
            target="_blank"
            role="button"
          >
            <MDBIcon far icon="envelope" />
          </MDBBtn>

          <MDBBtn
            outline
            color="#523857 "
            floating
            className="m-1"
            href="https://www.linkedin.com/in/tina-bayat-27844b261/"
            target="_blank"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            outline
            color="#523857 "
            floating
            className="m-1"
            href="https://github.com/tbayat"
            target="_blank"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)", color: "#1c3948 " }}
      >
        © 2023 Copyright:Tina Bayat
      </div>
    </MDBFooter>
  );
};

export default Footer;
