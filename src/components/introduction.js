import React from "react"
import Img from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"

const Introduction = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "nima.jpg" }) {
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
      <Row>
        <Col xs={12} sm={4} md={3} lg={3}>
          <div>
            <Img
              fluid={data.placeholderImage.childImageSharp.fluid}
              className="img-thumbnail"
            />
          </div>
        </Col>
        <Col xs={12} sm={8} md={7} lg={6}>
          <div>
            <p>AAAAAaaasdhsdfhasfhasj fhaskfhakfhakfhaksfhakdsfh</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Introduction
