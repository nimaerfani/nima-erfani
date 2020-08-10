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
  const domainKnowledge = [
    "Software Development Life Cycle (SDLC)",
    "Agile development practices",
    "DevOps & Scrum",
    "Requirements gathering & documentation",
    "Software Testing Techniques",
    "Data visualization",
  ]

  const Tools = [
    "JavaScript",
    "HTML & CSS",
    "SQL",
    "Python",
    "Git",
    "React",
    "(React) Bootstrap",
    "Gatsby",
    "Outsystems platform",
    "Firebase w/ Express",
    "Microsoft Word",
    "Visual Studio Code",
  ]

  return (
    <section>
      <span
        style={{ display: "block", backgroundColor: "var(--light-steel-blue)" }}
      >
        <Container id="Skills">
          <Row>
            <Col xs={12} lg={10}>
              <h2>Skills</h2>
              <p>
                In the course of my studies, co-ops and independent projects,
                I've worked with, or am actively working with the following
                languages and tools:
              </p>
              <div className="text-center">
                {domainKnowledge.map((value, index) => (
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
