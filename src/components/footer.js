import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
        <div>
          <div className="d-inline-block p-4">
            <i class="fab fa-google fa-3x"></i>
          </div>
          <div className="d-inline-block p-4">
            <i class="fab fa-facebook-f fa-3x"></i>
          </div>
          <div className="d-inline-block p-4">
            <i class="fab fa-linkedin-in fa-3x"></i>
          </div>
          <div className="d-inline-flex justify-content-center align-items-center p-4">
            <div className="d-inline-block">
              <i class="fas fa-file-pdf fa-3x"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
