import React from "react"
import { Container, Badge, Row, Col } from "react-bootstrap"

const SkillBadge = props => {
  return (
    <Badge pill variant={props.variant} className="p-3 m-2">
      {props.children}
    </Badge>
  )
}

const Skills = () => {
  const Languages = ["JavaScript", "HTML/CSS", "SQL", "Python", "C", "Java"]
  const Tools = [
    "Git",
    "React",
    "Bootstrap",
    "React Bootstrap",
    "Create React App",
    "Gatsby",
    "Express",
    "Outsystems platform",
    "Firebase*",
    "Microsoft Office**",
    "Visual Studio Code",
  ]
  return (
    <Container>
      <Row>
        <Col xs={12} lg={10}>
          <h4>Technical Profile</h4>
          <p>
            In the course of my studies, co-ops and independent projects, I've
            worked with or am actively working with the following languages and
            tools.
          </p>
          <div style={{ fontSize: "1.5rem", textAlign: "center" }}>
            {Languages.map((value, index) => (
              <SkillBadge variant="primary">{value}</SkillBadge>
            ))}
            <br />
            {Tools.map((value, index) => (
              <SkillBadge variant="secondary">{value}</SkillBadge>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Skills
