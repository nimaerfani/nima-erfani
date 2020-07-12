import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "macbook-flower.jpg" }) {
        childImageSharp {
          fluid {
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
      }}
    >
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          display: "flex",
          width: "100%",
          height: "50%",
          justifyContent: "center",
        }}
      >
        <div>
          <h4>Nima Erfani</h4>
          <h5>Hello World :)</h5>
        </div>
      </div>
    </div>
  )
}

export default Banner
