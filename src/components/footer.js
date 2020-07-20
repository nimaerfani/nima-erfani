import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "./social-links"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      resume: file(name: { eq: "resume" }) {
        name
        id
        publicURL
      }
    }
  `)
  return (
    <footer>
      <div
        className="text-center pb-4"
        style={{
          backgroundColor: "var(--dark-slate-gray)",
          color: "white",
          opacity: "0.9",
        }}
      >
        <SocialLinks />
        <div className="d-inline-flex justify-content-center align-items-center p-4">
          <div className="d-inline-block" style={{ fontSize: "2rem" }}>
            <i class="fas fa-file-pdf"></i>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
