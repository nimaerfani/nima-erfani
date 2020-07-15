import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Experience = () => {
  const data = useStaticQuery(graphql`
    query {
      imgStemcell: file(relativePath: { eq: "stemcell.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          original {
            height
            width
          }
        }
      }

      imgFraser: file(relativePath: { eq: "fraser3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          original {
            height
            width
          }
        }
      }
    }
  `)
  return (
    <Container>
      <h5>Experience</h5>
      <Row>
        <Col xs={12} lg={5}>
          <div className="d-inline-block">
            <h6>Software Developer Co-op - Stemcell Technologies</h6>
            <p>From: Sep. 2017 – Apr. 2018</p>
          </div>
          <div
            className="d-inline-block"
            style={{ width: "30%", float: "right" }}
          >
            <Img fluid={data.imgStemcell.childImageSharp.fluid} />
          </div>
          <p>
            During my time at Stemcell, I worked with the development team to
            create a web application used by the shipping department to place
            shipping orders with FedEx through FedEx web services. This project
            was challenging yet rewarding, and I am thankful for having had the
            chance to complete it.
          </p>
        </Col>
        <Col xs={12} lg={5}>
          <div className="d-inline-block">
            <h6>Business Systems Analyst - Fraser Health Authority</h6>
            <p>From: Sep. 2018 – Dec. 2018</p>
          </div>
          <div
            className="d-inline-block"
            style={{ width: "30%", float: "right" }}
          >
            <Img fluid={data.imgFraser.childImageSharp.fluid} />
          </div>

          <p>
            My duties all stemmed from the day to day operations of
            Intrahealth's Profile aEMR (ambulatory Electronic Medical Records)
            system. It was a great experience seeing the operations side of a
            system that has gone into production. Many meetings later and I can
            say it was truly a great experience.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Experience
