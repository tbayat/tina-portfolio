import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/components css.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CertificateList from "../components/certificates";
const Certificate = () => {
  return (
    <div style={{ margin: 0, backgroundColor: "white", padding: "10px" }}>
      <Container
        id="certificate"
        className="shadow-lg p-3 mb-5 bg-body rounded"
      >
        <Row>
          <Col>
            <h2>Certificates</h2>
            <CertificateList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Certificate;
