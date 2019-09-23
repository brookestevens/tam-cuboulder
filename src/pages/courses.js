import React, { useEffect} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ClassSearch from "../components/classSearch"
import SideMenu from "../components/SideMenu"

function CoursesPage(){  
    const links = ['Summer', 'Spring', 'Fall 2019'];
    return (
      <React.Fragment>
        <SideMenu links={links}/>
        <Layout>
          <SEO title="Courses" />
          <h2>Courses</h2>
          <ClassSearch/>
        </Layout>
      </React.Fragment>
    );
}

export default CoursesPage;