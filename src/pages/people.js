import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/page.css"

function PeoplePage(){
    return(
        <React.Fragment>
        <Layout link="People">
          <SEO title="People"/>
          <h2>People</h2>
        </Layout>
      </React.Fragment>
    );
}

export default PeoplePage;