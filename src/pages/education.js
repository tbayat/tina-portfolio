import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/components css.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EducationList from "../components/educationlist";

const Education = () => {
  return (
    <div style={{ margin: 0, backgroundColor: "white", padding: "10px" }}>
      <Container id="education" className="shadow-lg p-3 mb-5 bg-body rounded">
        <Row>
          <Col>
            <h2>Education</h2>
            <EducationList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Education;
