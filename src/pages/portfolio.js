import React, {useEffect} from 'react';
import PagePortfolio from "../components/Portfolio";

import Layout from "../components/layout"
import SEO from "../components/seo"

const Portfolio = () => {

  useEffect(() => {

    setTimeout(() => {
      window.scrollTo(0, 800)
    }, 700);

  }, [])

  return (
    <Layout>
      <SEO title="Portfólio"/>
      <PagePortfolio />
    </Layout>
  );
};

export default Portfolio;
