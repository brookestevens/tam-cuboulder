import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/page.css"

function ProgramsPage(){
    return(
        <React.Fragment>
        <Layout link="Programs">
          <SEO title="Programs"/>
          <h2>Programs</h2>
        </Layout>
      </React.Fragment>
    );
}

export default ProgramsPage;