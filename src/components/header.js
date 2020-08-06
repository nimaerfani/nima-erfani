import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SocialLinks from "./social-links"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "macbookflower.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
          original {
            height
            width
          }
        }
      }
    }
  `)

  return (
    <header>
      <div
        id="Banner"
        style={{
          position: "relative",
          textAlign: "center",
          padding: "0",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0.7rem",
            zIndex: 1,
            width: "100%",
          }}
        >
          <p style={{ fontFamily: "Menlo" }}>"Hello, World!"</p>
        </div>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        <div
          style={{
            position: "absolute",
            top: "44%",
            width: "100%",
            margin: "0",
          }}
        >
          <h1>Nima Erfani</h1>
          <SocialLinks />
        </div>
      </div>
    </header>
  )
}

export default Header
