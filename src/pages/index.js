import React from "react"
import { Link } from "gatsby"

import Banner from "../components/banner"
import SideNav from "../components/side-nav"
import SEO from "../components/seo"
import Navbar from "../components/navbar"

const IndexPage = () => (
  <>
    <SEO title="Welcome!" />
    <Navbar />
    <SideNav />
    <Banner />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </>
)

export default IndexPage
