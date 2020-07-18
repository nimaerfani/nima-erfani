import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Projects = () => {
  return (
    <Container>
      <h4>Projects</h4>
      <Row>
        <Col xs={12} lg={10}>
          <div>
            <h6>Cabana Tan</h6>
            <p>
              I created a SPA for a local tanning salon using React, Create
              React App, React Router, Bootstrap and React-Bootstrap. React
              Helmet and React Snap were added to boost SEO. Currently, the
              salon has the highest-ranked website on Google when searching for
              “victoria tanning salon”. You can visit the site at cabanatan.ca
            </p>
          </div>
          <div>
            <h6>Online Resume</h6>
            <p>
              I Used Gatsby with Bootstrap and React Bootstrap for creating my
              online resume. See it on my Github Pages and see the code repo on
              my Github.
            </p>
          </div>
          <div>
            <h6>FedEx Shipping Application</h6>
            <p>
              I created a web application for placing shipping orders with FedEx
              through FedEx web services. The project encompassed the entire
              software development lifecycle. I utilized the Outsystems
              platform, C#, Bootstrap and JavaScript for the project.
            </p>
          </div>
          <div>
            <h6>Adanced Encryption Standard</h6>
            <p>
              I implemented AES using Java for my Security Engineering course.
              The algorithm had a 256-bit key for encryption.
            </p>
          </div>
          <div>
            <h6>Roomba Robot</h6>
            <p>
              I collaborated with a classmate to create a priority-based
              real-time operating system (RTOS) using C for RTOS course. The
              RTOS managed the processes running on an Arduino which controlled
              the function of a remote-controlled Roomba robot.
            </p>
          </div>
          <div>
            <h6>Day Trading App</h6>
            <p>
              I created a Python application with two classmates for day trading
              stocks as part of a project for my scalability course. The
              application read commands from multiple users, sent user commands
              to a transaction server, and used a document-oriented database to
              store information.
            </p>
          </div>
          <div>
            <h6>Wes Bos Online Course</h6>
            <p>
              I completed an online course called by Wes Bos called "React for
              Beginners". The aim of the course was to introduce React
              fundamentals by creating an interactive restaurant menu. The
              course utilized React, Firebase (database), create-react-app and
              other useful tools.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Projects
