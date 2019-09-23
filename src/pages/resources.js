import React from 'react';
import SideMenu from '../components/SideMenu';
import Layout from "../components/layout";
import SEO from "../components/seo";

function PeoplePage(){
    const links = ['Faculty', 'Staff'];
    return(
        <React.Fragment>
        <SideMenu links={links}/>
        <Layout>
          <SEO title="Resources"/>
          <h2>Resources</h2>

        </Layout>
      </React.Fragment>
    );
}

export default PeoplePage;