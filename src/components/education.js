import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Education = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "uvic.jpg" }) {
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

  const courses = [
    "Software development methods",
    "Computer architecture",
    "Human-computer interaction",
    "Software architecture and design",
    "Algorithms and data structures",
    "Fundamentals of programming",
    "Communication networks",
    "Operating systems",
    "Database systems",
    "Security engineering",
    "Design and analysis of real-time systems",
    "Requirements engineering",
    "Embedded systems",
    "Software systems scalability",
  ]

  return (
    <Container>
      <h5>Education</h5>
      <Row>
        <Col lg={4}>
          <div style={{ maxWidth: "50%" }}>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
          <p>
            I graduated from the University of Victoria Summer of 2020. <br />
            -Was first admitted into uvic engineering program <br />
            -was introducted to programming with C <br />
            -Then began working with higher level languages like javascript and
            python
            <br />
            -I like doing web development so I stuck with web development.{" "}
            <br />
            -My first co-op was a job developing a shipping application to be
            used for shipping items with fedEx.
            <br />
            -since then I've been learning about web development on my own.
            Front end and back end
            <br />
            Tools I've learned: React, Bootstrap, Gatsby, Firebase...
          </p>
        </Col>
        <Col xs={12} lg={6}>
          <h6>Courses</h6>
          <ul style={{ columns: 2, columnGap: "10%" }}>
            {courses.map((value, index) => {
              return <li>{value}</li>
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Education
