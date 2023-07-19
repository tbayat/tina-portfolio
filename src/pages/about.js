import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/components css.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SkillsChart from "../components/skillchart";

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
                Passionate about delivering exceptional user experiences and
                driving business growth, I have a diverse background in both
                computer engineering and business management. With 6+ years of
                experience working directly with clients as a business analyst,
                I have honed my skills in aligning their needs with strategic
                business objectives. This unique combination of technical
                expertise and business acumen allows me to design and develop
                impactful solutions that drive results. In addition to my
                business analyst experience, I am confident in my technical
                abilities. I am proficient in Python, JavaScript, JSX, HTML/CSS,
                SQL and React and I have a solid understanding of version
                control using Git. My technical skills, coupled with my
                analytical mindset, enable me to effectively communicate with
                development teams and stakeholders to ensure successful project
                delivery. As an entry-level front-end developer, I am eager to
                leverage my experience as a business analyst and continue to
                grow professionally. I am driven by the opportunity to create
                intuitive and engaging user interfaces that meet both user needs
                and business objectives. With my strong problem-solving skills
                and ability to collaborate effectively, I am confident in my
                ability to contribute to your organization's success. Overall, I
                bring a unique blend of business analyst experience and
                technical expertise, making me a valuable asset in delivering
                exceptional user experiences while driving business growth.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
