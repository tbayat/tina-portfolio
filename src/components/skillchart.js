import { Container, Row, Col, ProgressBar } from "react-bootstrap";
const skills = [
  { name: "JavaScript", percentage: 60 },
  { name: "HTML/CSS", percentage: 80 },
  { name: "React", percentage: 50 },
  { name: "Git", percentage: 70 },
  { name: "Bootstrap", percentage: 60 },
  { name: "Python", percentage: 50 },
  { name: "Sql", percentage: 70 },
  // Add more skills as needed
];

const SkillsChart = () => {
  return (
    <Container>
      <Row>
        {skills.map((skill, index) => (
          <Col key={index} sm={6} md={12} lg={12} className="mb-4">
            <h5>{skill.name}</h5>
            <ProgressBar
              animated
              now={skill.percentage}
              style={{ height: "16px", borderRadius: "20px" }}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SkillsChart;
