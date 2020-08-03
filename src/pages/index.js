import React, { useState } from "react"

import ScrollTracker from "../components/scroll-tracker"
import Banner from "../components/banner"
import Nav from "../components/nav"
import SEO from "../components/seo"
import Education from "../components/education"
import Skills from "../components/technical-profile"
import Experience from "../components/experience"
import Projects from "../components/projects"
import Footer from "../components/footer"

const IndexPage = () => {
  const [section, setSection] = useState("")

  return (
    <>
      <SEO title="Welcome!" />
      <ScrollTracker section={section} setSection={setSection}>
        <Banner />
        <Nav section={section} setSection={setSection} />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </ScrollTracker>
    </>
  )
}

export default IndexPage
