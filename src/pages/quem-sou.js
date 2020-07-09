import React, {useEffect} from 'react';
import About from './../components/About'

import Layout from "../components/layout"
import SEO from "../components/seo"

const QuemSou = () => {

  useEffect(() => {

    setTimeout(() => {
      window.scrollTo(0, 800)
    }, 700);

  }, [])

  return (
    <Layout>
      <SEO title="Quem sou"/>
      <About/>
    </Layout>
  );
};

export default QuemSou;
