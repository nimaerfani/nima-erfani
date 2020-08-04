import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"

const Experience = () => {
  return (
    <section>
      <Container id="Experience">
        <h2>Experience</h2>
        <Row>
          <Col xs={12} lg={5}>
            <h3>
              Business Systems Analyst Co-op
              <br />
              Fraser Health Authority
            </h3>
            <p>Sep. 2018 – Dec. 2018</p>
            <p>
              My duties all stemmed from the day-to-day operation of
              Intrahealth's Profile aEMR (ambulatory Electronic Medical Records)
              system. Tasks included writing scripts, creating queries to find
              specific patient data, attending numerous meetings concerning
              support of current users and implementation of the system at new
              clinics.
            </p>
          </Col>
          <Col xs={12} lg={5}>
            <h3>
              Software Developer Co-op
              <br />
              Stemcell Technologies
            </h3>
            <p>Sep. 2017 – Apr. 2018</p>
            <p>
              During my time at Stemcell, I worked with the development team to
              create a web application used by the shipping department to place
              shipping orders with FedEx through FedEx Web Services.{" "}
              <Link to="#fedexProject">Click here</Link> for technical details
              about the project.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Experience
