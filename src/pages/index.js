import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hability from "../components/Hability";
import Repository from "../components/Repository";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hability/>
    <Repository/>
  </Layout>
)

export default IndexPage
