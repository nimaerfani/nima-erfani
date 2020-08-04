import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import SocialLinks from "./social-links"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      resume: file(name: { eq: "resume" }) {
        name
        id
        publicURL
      }
      myPic: file(relativePath: { eq: "nima.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <footer>
      <div
        id="Footer"
        className="pb-4 pt-4"
        style={{
          backgroundColor: "var(--dark-slate-gray)",
          color: "white",
        }}
      >
        <Container fluid>
          <Row className="justify-content-center">
            <Col
              className="px-4 text-center"
              xs={12}
              sm={7}
              lg={4}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <SocialLinks />
              <br />
              <h3>Thank you for visiting!</h3>

              <p>
                If you have any questions or would like references, feel
                encouraged to contact me any way most convenient for you.
              </p>

              <p>
                To view a PDF version of this page, go{" "}
                <a
                  href={data.resume.publicURL}
                  target="blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                .
              </p>

              <p>
                Have suggestions or a need to to troll me? You're still welcome
                to contact me.
              </p>
            </Col>
            <Col
              xs={12}
              sm={5}
              lg={4}
              className="d-flex align-items-center justify-content-center px-4"
            >
              <div style={{ width: "100%" }}>
                <Image
                  fluid={data.myPic.childImageSharp.fluid}
                  className="img-thumbnail"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
