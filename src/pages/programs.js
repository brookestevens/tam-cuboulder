import React from 'react';
import SideMenu from '../components/SideMenu';
import Layout from "../components/layout";
import SEO from "../components/seo";

function ProgramsPage(){
    const links = ['Major', 'Minor'];
    return(
        <React.Fragment>
        <SideMenu links={links}/>
        <Layout>
          <SEO title="Programs"/>
          <h2>Programs</h2>

        </Layout>
      </React.Fragment>
    );
}

export default ProgramsPage;