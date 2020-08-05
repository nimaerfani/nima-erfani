import React, { useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SocialLinks from "./social-links"
import { isMobileOnly } from "react-device-detect"

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

  const HelloWorld = useRef(null)
  if (!isMobileOnly) {
    HelloWorld.current = (
      <div
        style={{
          fontSize: "1.2rem",
          marginTop: ".6rem",
          fontFamily: "Menlo",
        }}
      >
        "Hello, World!"
      </div>
    )
  }

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
          {HelloWorld.current}
        </div>
      </div>
    </header>
  )
}

export default Header
