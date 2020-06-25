import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hability from "../components/Hability";
import Repository from "../components/Repository";
import Publication from "../components/Publication";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hability/>
    <Repository/>
    <Publication />
  </Layout>
)

export default IndexPage
