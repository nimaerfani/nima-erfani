import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Education = props => {
  let courses = [
    { "Software development methods": "SENG 265" },
    { "Computer architecture": "CSC 230" },
    { "Human-computer interaction": "SENG 310" },
    { "Software architecture and design": "SENG 299" },
    { "Algorithms and data structures": "CSC 225" },
    { "Fundamentals of programming": "CSC 111" },
    { "Communication networks": "CENG 460" },
    { "Operating systems": "CSC 360" },
    { "Database systems": "CSC 370" },
    { "Security engineering": "SENG 360" },
    { "Real-time systems": "CSC 460" },
    { "Software testing": "SENG 275" },
    { "Embedded systems": "SENG 440" },
    { "Software systems scalability": "SENG 468" },
    { "Requirements Engineering": "SENG 321" },
  ]

  courses = courses.sort((a, b) => {
    let [_a, _b] = [
      JSON.stringify(a).split(":")[1].split(" ")[1],
      JSON.stringify(b).split(":")[1].split(" ")[1],
    ]
    if (_a > _b) return 1
    if (_a < _b) return -1
    return 0
  })

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
              while on co-op. At Stemcell I had the chace to experience every
              step of the software development lifecycle in developing their
              department's shipping application. In contrast, I experienced the
              operations side of an advanced software system in my role at
              Fraser Health where I was supporting an Electronic Medical Records
              system. Excited to see where this journey leads!
            </p>
          </Col>
          <Col xs={12} lg={5}>
            <p>Courses I've completed include...</p>
            <ul>
              {courses.map((value, index) => (
                <li key={index}>
                  {JSON.stringify(value)
                    .replace(/"/g, " ")
                    .replace(/{/g, "")
                    .replace(/}/g, "")
                    .replace(/:/g, "–")}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Education
