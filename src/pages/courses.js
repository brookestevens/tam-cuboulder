import React, { useEffect} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ClassSearch from "../components/classSearch"
import "../styles/page.css"

function CoursesPage(){  
    return (
      <React.Fragment>
        <Layout link="Courses">
          <SEO title="Courses" />
          <h2>Courses</h2>
          <ClassSearch/>
        </Layout>
      </React.Fragment>
    );
}

export default CoursesPage;