import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Projects = () => {
  return (
    <Container>
      <h5>Projects</h5>
      <Row>
        <Col>
          <div>
            My website for Cabana Tan. Single page app created with
            create-react-app, Bootstrap/React-Bootstrap, React-Helmet and
            React-Snap for SEO (maybe IFrame?)
          </div>
          <div>
            This website, created with Gatsby, Bootstrap/React-Bootstrap,
            React-Helmet (see code here on my Github)
          </div>
          <div>
            At Stemcell, created a web application for placing shipping orders
            with FedEx through FedEx web services. Used the outsystems platform,
            C#, and JavaScript for custom front-end work.
          </div>
          <div>
            Completed Wes Bos's Course "React for Beginners" where React and
            Firebase are used to build an interactive menu application called
            "Catch of the Day"
          </div>
          <div>
            Completed a youtube course where a twitter-like social media
            application called "SocialApe" was built with React, Redux and
            Material-UI and create-react-app
          </div>
          <div>
            Impleted AES (Advanced Encryption Standard using Java for a school
            project in security engineering
          </div>
          <div>
            Created an classic style calculator (calculator) using plan JS and
            HTML/CSS using recursion
          </div>
          <div>
            I have done many group projects for my courses including:
            <ul>
              <li>
                Creating a real-time operating system using C for a roomba robot
                as part of a two-person group
              </li>
              <li>
                Creating a python application for day-trading as part of a group
                of three.
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Projects
