import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../styles/page.css"

function PeoplePage(){
    return(
        <React.Fragment>
        <Layout link="Resources">
          <SEO title="Resources"/>
          <h2>Resources</h2>
        </Layout>
      </React.Fragment>
    );
}

export default PeoplePage;