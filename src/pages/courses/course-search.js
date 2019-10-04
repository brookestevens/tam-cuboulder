import React, { useEffect, useState} from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ClassSearch from "../../components/classSearch"
import "../../styles/page.css"

function CoursesPage(){
    return (
      <React.Fragment>
        <Layout link="Courses">
          <SEO title="Course-Search"/>
          <h2>Course Search Tool</h2>
          <ClassSearch/>
        </Layout>
      </React.Fragment>
    );
}

export default CoursesPage;