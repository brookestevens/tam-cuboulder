import React from 'react';
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import "../../styles/page.css";

function CourseInventoryPage(){
    return(
        <Layout link="Courses">
          <SEO title="Course-inventory"/>
          <h2> Course Inventory </h2>
        </Layout>
    );
}

export default CourseInventoryPage;