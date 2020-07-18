import React from "react"
import { Link } from "gatsby"

import Banner from "../components/banner"
import Nav from "../components/nav"
import SEO from "../components/seo"
import Education from "../components/education"
import Skills from "../components/technical-profile"
import Experience from "../components/experience"
import Projects from "../components/projects"
import Footer from "../components/footer"

const IndexPage = () => (
  <>
    <SEO title="Welcome!" />
    <Banner />
    <Nav />
    <Education />
    <Skills />
    <Experience />
    <Projects />
    <Footer />
  </>
)

export default IndexPage
