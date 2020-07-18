import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Experience = () => {
  return (
    <Container>
      <h4>Experience</h4>
      <Row className="text-justify">
        <Col xs={12} lg={5}>
          <header className="d-inline-block mt-2">
            <h6>
              Software Developer Co-op
              <br />
              Stemcell Technologies
            </h6>
            <p>From: Sep. 2017 – Apr. 2018</p>
          </header>
          <p>
            During my time at Stemcell, I worked with the development team to
            create a web application used by the shipping department to place
            shipping orders with FedEx through FedEx web services. This project
            was challenging yet rewarding, and I am thankful for having had the
            chance to complete it. Please see <b>HERE</b> for project details.
          </p>
        </Col>
        <Col xs={12} lg={5}>
          <header className="d-inline-block mt-2">
            <h6>
              Business Systems Analyst
              <br />
              Fraser Health Authority
            </h6>
            <p>From: Sep. 2018 – Dec. 2018</p>
          </header>
          <p>
            My duties all stemmed from the day to day operations of
            Intrahealth's Profile aEMR (ambulatory Electronic Medical Records)
            system. Tasks included writing scripts, creating queries to find
            specific patient data, attending many meetings concerning support of
            current users and implementation of the system at new sites.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Experience
