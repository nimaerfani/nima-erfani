import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Education = () => {
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
    "Software testing",
    "Embedded systems",
    "Software systems scalability",
  ]

  return (
    <Container>
      <Row className="d-flex align-items-lg-center">
        <Col xs={12} lg={5}>
          <h4>Education</h4>
          <b>Bachelor of Software Engineering</b>
          <br />
          <b>University of Victoria, Grad. 2020</b>
          <p className="text-justify">
            I graduated UVic in summer of 2020 with a Bachelor of Software
            Engineering degree. Throughout my time at Uvic, I've had a broad
            range of experiences in software, working with different languages,
            systems, tools and people. I used low level languages like C, and
            high level languages like Python. I learned about different tools
            used by developers in the real world, like Git. Most importantly, I
            got to experience software in the real world while on co-op. At
            Stemcell I had the chace to experience every step of the software
            development lifecycle in developing their department's shipping
            application. In contrast, I experienced the operations side of an
            advanced software system in my role at Fraser Health where I was
            supporting an Electronic Medical Records system. Excited to see
            where this journey leads!
          </p>
        </Col>
        <Col xs={12} lg={5}>
          <b>Courses I've completed...</b>
          <ul>
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
