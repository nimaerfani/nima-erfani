import React from "react"
import { Container, Badge, Row, Col } from "react-bootstrap"

const Skills = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={10}>
          <h5>Technical Profile</h5>
          <p>
            My current focus is web development. I have experience with the
            following technologies:
          </p>
          <div>
            <Badge variant="dark">JavaScript</Badge>
            <Badge variant="dark">HTML/CSS</Badge>
            <Badge variant="dark">React</Badge>
            <Badge variant="dark">Bootstrap</Badge>
            <Badge variant="dark">React-bootstrap</Badge>
            <Badge variant="dark">Gatsby</Badge>
            <Badge variant="dark">Create-react-app</Badge>
            <Badge variant="dark">Git</Badge>
            <Badge variant="dark">Visual Studio Code</Badge>
            <Badge variant="secondary">Redux</Badge>
            <Badge variant="secondary">Express</Badge>
            <Badge variant="secondary">Firebase (Functions/Firestore)</Badge>
            <Badge variant="secondary">Outsystems Platform</Badge>
            <Badge variant="dark">C</Badge>
            <Badge variant="dark">Python</Badge>
            <Badge variant="dark">Java</Badge>
            <Badge variant="dark">SQL</Badge>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Skills
