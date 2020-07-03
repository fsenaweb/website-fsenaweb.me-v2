import React, {useEffect, useState} from 'react';
import PagePortfolio from "../components/Portfolio";

import Layout from "../components/layout"
import SEO from "../components/seo"

const Portfolio = () => {
  return (
    <Layout>
      <SEO title="Portfólio"/>
      <PagePortfolio />
    </Layout>
  );
};

export default Portfolio;
