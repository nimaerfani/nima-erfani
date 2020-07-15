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
      <div className="text-center">
        <div>Gmail Facebook LinkedIn</div>
        <div>
          <a
            href={data.resume.publicURL}
            target="blank"
            rel="noopener norefferer"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
