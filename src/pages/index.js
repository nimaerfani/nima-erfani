import React from "react"
import { Link } from "gatsby"

import Banner from "../components/banner"
import Nav from "../components/nav"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Welcome!" />
    <Nav />
    <Banner />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </>
)

export default IndexPage
