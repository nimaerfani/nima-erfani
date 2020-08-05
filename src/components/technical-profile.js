import React from "react"
import { Container, Badge, Row, Col } from "react-bootstrap"

const SkillBadge = ({ children }) => {
  return (
    <Badge
      pill
      className="p-3 m-2 bg-dark"
      style={{ color: "var(--light-yellow)" }}
    >
      {children}
    </Badge>
  )
}

const Skills = () => {
  const Languages = ["JavaScript", "HTML & CSS", "Python", "C", "SQL"]
  const Tools = [
    "Git",
    "React",
    "Bootstrap",
    "React Bootstrap",
    "Create React App",
    "Gatsby",
    "Express",
    "Outsystems platform",
    "Firebase",
    "Microsoft Office",
    "Visual Studio Code",
    "RegEx",
  ]

  return (
    <section>
      <span
        style={{ display: "block", backgroundColor: "var(--light-steel-blue)" }}
      >
        <Container id="Technical Profile">
          <Row>
            <Col xs={12} lg={10}>
              <h2>Technical Profile</h2>
              <p>
                In the course of my studies, co-ops and independent projects,
                I've worked with, or am actively working with the following
                languages and tools:
              </p>
              <div style={{ fontSize: "1.5rem", textAlign: "center" }}>
                {Languages.map((value, index) => (
                  <SkillBadge>{value}</SkillBadge>
                ))}
                <hr />
                {Tools.map((value, index) => (
                  <SkillBadge>{value}</SkillBadge>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </span>
    </section>
  )
}

export default Skills
