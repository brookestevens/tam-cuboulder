import React, { useEffect} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ClassSearch from "../components/classSearch"

function CoursesPage(){  
    return (
      <Layout>
        <SEO title="Courses" />
        <h2>Courses</h2>
        <ClassSearch/>
      </Layout>
    );
}

export default CoursesPage;