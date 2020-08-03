import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Projects = () => {
  return (
    <span
      style={{ display: "block", backgroundColor: "var(--light-steel-blue)" }}
    >
      <section>
        <Container id="Projects">
          <h2>Projects</h2>
          <Row>
            <Col xs={12} lg={10}>
              <div>
                <h3>Cabana Tan</h3>
                <p>
                  I created a SPA for a local tanning salon using React, Create
                  React App, React Router, Bootstrap and React-Bootstrap. React
                  Helmet and React Snap were added to boost SEO. Currently, the
                  salon has the highest-ranked website on Google when searching
                  for “victoria tanning salon”. You can visit the site at&nbsp;
                  <a
                    href="https://cabanatan.ca"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    cabanatan.ca
                  </a>
                </p>
              </div>
              <div>
                <h3>Online Resume</h3>
                <p>
                  I used Gatsby with Bootstrap and React Bootstrap for creating
                  this online resume. You can view the source code on my{" "}
                  <a href="https://github.com/nimaerfani/nima-erfani">
                    Github repo
                  </a>
                  .
                </p>
              </div>
              <div id="fedexProject">
                <h3>FedEx Shipping App</h3>
                <p>
                  I created a web application for placing shipping orders with
                  FedEx through FedEx Web Services. The project encompassed the
                  entire software development lifecycle. I utilized the
                  Outsystems platform for designing and implementing the
                  front-end, and C# for the back-end business logic. Bootstrap
                  and JavaScript were used for custom front-end work.
                </p>
              </div>
              <div>
                <h3>Remote-Controlled Roomba</h3>
                <p>
                  I collaborated with a classmate to create a remote-controlled
                  Roomba. The remote operator had the capability of directing
                  movement of the Roomba as well as a motor-mounted laser that
                  could be fired with a remote button. The project utilized C
                  for programming the Roomba and bluetooth for wireless
                  communication between the Roomba and the remote.
                </p>
              </div>
              <div>
                <h3>Day Trading App</h3>
                <p>
                  I created a Python application with two classmates for day
                  trading stocks as part of a project for my scalability course.
                  The application read commands from multiple users, sent user
                  commands to a transaction server, and used a document-oriented
                  database to store information.
                </p>
              </div>
              <div>
                <h3>Wes Bos Online Course</h3>
                <p>
                  I completed an online course by Wes Bos called "React for
                  Beginners". The aim of the course was to introduce React
                  fundamentals by creating an interactive restaurant menu. The
                  course utilized React, Firebase (database), create-react-app
                  and other useful tools.
                </p>
              </div>
              <div>
                <h3>AES</h3>
                <p>
                  I implemented the Advanced Encryption Standard algorithm using
                  Java for my security engineering course.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </span>
  )
}

export default Projects
