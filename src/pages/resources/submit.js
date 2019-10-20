import React from 'react';
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import "../../styles/page.css";
import FeaturedWorksUpload from "../../components/featuredWorksForm";

function FeaturedWorks(){
    return(
        <Layout link="Resources">
            <SEO title="Submit a Project"/>
            <h2>Submit a Project to be Featured</h2>
            <FeaturedWorksUpload/>
        </Layout>
    );
}

export default FeaturedWorks;