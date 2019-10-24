import React, { useState} from "react"
import {graphql} from 'gatsby'
import ArrowDown from "../../images/arrow-down-black.png"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "../../styles/page.css"

function NextSemesterPage({ data }){
  const [sort, setSort] = useState("");
  
  function getTitle(){
      let date = new Date();
      let month = date.getMonth();
      let year = date.getFullYear();
      //Dates are set for the NEXT semester
      if( month < 5){
        return "Fall " + ++year;
      }
      else if(month > 7 && month <= 12){
        return "Spring " + ++year;
      }
      else{
        return "Summer " + year;
      }
  }

    function renderSortedCourses(){
      let results = data.allNodeCourse.edges;
      switch(sort){
        case "Core":
            results = results.filter( i => i.node.relationships.field_category.name === "Core" );
            break;
        case "FE":
            results = results.filter( i => i.node.relationships.field_category.name === "Focus Elective" );
            break;
        case "CPT":
             results = results.filter( i => i.node.relationships.field_category.name === "CPT" );
             break;
        default:
            break;
      }
      return(
        results.map( i => (
          <div className="course-title next-sem-courses">
            <h3> {i.node.field_course_section} - {i.node.title} </h3>
            <img src={ArrowDown} alt="show-more-arrow" width="25" height="25" />
          </div>
        ))
      );
    }

    return (
      <Layout link="Courses">
        <SEO title="Next Semester"/>
        <h2> {getTitle()} </h2>
        <h3> Sort Classses </h3>
        <div className = "sort-buttons" >
          <button className = "sort-button" onClick = {() => setSort("Core") }> Core </button>
          <button className = "sort-button" onClick = {() => setSort("FE") } > Focus Electives </button>
          <button className = "sort-button" onClick = {() => setSort("CPT") } > CPT </button>
        </div>
        {renderSortedCourses()}
      </Layout>
    );
}

export const query = graphql`
{
  allNodeCourse {
    edges {
      node {
        title
        field_days {
          value
        }
        field_course_section
        field_room
        field_meeting_pattern
        field_instructor
        field_enroll_limit
        relationships {
          field_category {
            name
          }
        }
      }
    }
  }
}
`


export default NextSemesterPage;