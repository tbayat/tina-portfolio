import { Container, Row, Col } from "react-bootstrap";
const educations = [
  {
    field: "International Business Management",
    degree: "M.Sc.",
    university: "Ershad Damavand University, Tehran, Iran",
    startdate: "2018",
    enddate: "2021",
  },
  {
    field: "Computer Engineering - Hardware",
    degree: "B.Sc.",
    university:
      "Islamic Azad University of Tehran Central Branch, Tehran, Iran",
    startdate: "2011",
    enddate: "2016",
  },
];

const EducationList = () => {
  return (
    <Container>
      <Row>
        {educations.map((education, index) => (
          <Col key={index} sm={6} md={12} lg={12} className="mb-4">
            <h5>
              {education.degree} In {education.field} ( {education.startdate}-
              {education.enddate} ){" "}
            </h5>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EducationList;
