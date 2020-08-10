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
              Software Developer Co-op
              <br />
              Stemcell Technologies
            </h3>
            <p>Sep. 2017 – Apr. 2018</p>
            <p>
              I worked with the shipping staff and the dev team manager to
              create a web application used by the shipping department to place
              shipping orders with FedEx. Tasks included:
            </p>

            <ul>
              <li>
                Completing training course in order to learn about Outsystems
                low-code platform
              </li>
              <li>
                Meeting with shipping staff to gather business requirements and
                domain knowledge
              </li>
              <li>Interface design and prototyping</li>
              <li>
                Meeting regularly with stakeholders to give progress updates and
                solicit feedback
              </li>
              <li>
                Designing and implementing a back-end based on business
                requirements
              </li>
              <li>
                Creating and executing test cases to ensure functional
                requirements are met
              </li>
            </ul>

            <p>
              <Link to="#fedexProject">Click here</Link> for technical details
              about the project.
            </p>
          </Col>
          <Col xs={12} lg={5}>
            <h3>
              Business Systems Analyst Co-op
              <br />
              Fraser Health Authority
            </h3>
            <p>Sep. 2018 – Dec. 2018</p>
            <p>
              I worked on implementation and support of Intrahealth's Profile
              aEMR (ambulatory Electronic Medical Records) system. Tasks
              included:
            </p>

            <ul>
              <li>
                Meeting with clients to gather requirements for implementing
                Profile at new clinics
              </li>
              <li>
                Meeting with users to solicit feedback, suggestions and requests
                concerning Profile
              </li>
              <li>
                Working with senior business analysts and project manager to
                gather business requirements and analyze business processes
              </li>
              <li>
                Making changes in a development in preparation for production
              </li>
              <li>Creating queries to find specific patient data</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Experience
