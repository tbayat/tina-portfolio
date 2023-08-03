import { Container, Row, Col } from "react-bootstrap";
const Certificates = [
  {
    field: "Introduction to Front-End Development",
    description: "Coursera Certified by Meta",
    URL: "http://www.coursera.org/account/accomplishments/certificate/MTW8ZFR5CVC3",
    date: "January 2023",
  },
  {
    field: "Programming With JavaScript",
    description: "Coursera Certified by Meta",
    URL: "http://www.coursera.org/account/accomplishments/certificate/YK54Y5BYLTAY",
    date: "February 2023",
  },
  {
    field: "HTML and CSS in depth",
    description: "Coursera Certified by Meta",
    URL: "https://coursera.org/verify/PJRVZU3R8BH3",
    date: "February 2023",
  },
  {
    field: "Version Control",
    description: "Coursera Certified by Meta",
    URL: "https://coursera.org/verify/9C95AE7TV8V4",
    date: "February 2023",
  },
  {
    field: "Foundations: Data, Data, Everywhere",
    description: "Coursera Certified by Google",
    URL: "https://coursera.org/verify/X98CNXZKEKZ6",
    date: "June 2023",
  },
];

const CertificateList = () => {
  return (
    <Container>
      <Row>
        {Certificates.map((certificate, index) => (
          <Col key={index} sm={6} md={12} lg={12} className="mb-4">
            <h5>
              <a href={certificate.URL}>{certificate.field} </a>({" "}
              {certificate.date} ){" "}
            </h5>
            <h6>{certificate.description}</h6>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CertificateList;
