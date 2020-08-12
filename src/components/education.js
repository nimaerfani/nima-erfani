import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Education = props => {
  let courses = [
    "Fundamentals of programming – CSC 111",
    "Algorithms and data structures – CSC 225",
    "Computer architecture – CSC 230",
    "Software development methods – SENG 265",
    "Software testing – SENG 275",
    "Software architecture and design – SENG 299",
    "Human-computer interaction – SENG 310",
    "Requirements Engineering – SENG 321",
    "Operating systems – CSC 360",
    "Security engineering – SENG 360",
    "Database systems – CSC 370",
    "Embedded systems – SENG 440",
    "Communication networks – CENG 460",
    "Real-time systems – CSC 460",
    "Software systems scalability – SENG 468",
  ]

  return (
    <section>
      <Container id="Education">
        <h2>Education</h2>
        <Row className="d-flex align-items-end">
          <Col xs={12} lg={5}>
            <h3>
              Bachelor of Software Engineering
              <br />
              University of Victoria, Grad. 2020
            </h3>
            <p>
              I graduated from UVic in summer of 2020 with a Bachelor of
              Software Engineering degree. Throughout my time at UVic, I've had
              a broad range of experiences in software, working with different
              languages, systems, tools and people. I used low-level languages
              like C, and high-level languages like Python. I learned about
              different tools used by developers in the real world, like Git.
              Most importantly, I got to experience software in the real world
              while on co-op. At Stemcell I had the chance to experience every
              step of the software development lifecycle in developing their
              department's shipping application. In contrast, I experienced the
              operations side of an advanced software system in my role at
              Fraser Health where I was supporting an electronic medical records
              system. Excited to see where this journey leads!
            </p>
          </Col>
          <Col xs={12} lg={5}>
            <p>Courses I've completed include...</p>
            {courses.map((value, index) => (
              <div className="d-flex ml-4">
                <div className="d-inline-block">
                  <i
                    class="fas fa-book-reader"
                    style={{ marginRight: "1rem" }}
                  />
                </div>
                <div style={{ display: "inline-block", maxWidth: "90%" }}>
                  {value}
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Education
