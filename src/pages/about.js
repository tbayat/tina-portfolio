import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/components css.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <>
      <div style={{ margin: 0, backgroundColor: "white", padding: "10px" }}>
        <Container
          id="about"
          className="shadow-lg p-3 mb-5 bg-body rounded"
          style={{ zIndex: 2 }}
        >
          <Row>
            <Col>
              <h2>My Story</h2>
              <p>
                Results-oriented and adaptable professional with 7 years of
                experience as a Business Analyst and Customer Advisor,
                complemented by self-directed study in front-end development.
                Enthusiastic for translating business requirements into
                technical solutions, with my new knowledge of web development
                technologies. Eager to transition into a role as a Junior Front
                End Developer, driven by a passion for creating visually
                appealing and user-friendly websites. Proven ability to learn
                quickly and apply knowledge effectively, as demonstrated by
                self-created websites showcasing newfound skills.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
