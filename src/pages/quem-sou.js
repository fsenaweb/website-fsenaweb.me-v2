import React from 'react';
import About from './../components/About'

import Layout from "../components/layout"
import SEO from "../components/seo"

const QuemSou = () => {
  return (
    <Layout>
      <SEO title="Quem sou" />
      <About/>
    </Layout>
  );
};

export default QuemSou;
