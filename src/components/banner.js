import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SocialLinks from "./social-links"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "macbook-flower.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600) {
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
    <div
      style={{
        position: "relative",
        textAlign: "center",
        padding: "0",
        overflow: "hidden",
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
      </div>
    </div>
  )
}

export default Banner
