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
        case "core":
            results = results.filter( i => i.node.relationships.field_category.name === "Core" );
            break;
        case "fe":
            results = results.filter( i => i.node.relationships.field_category.name === "Focus Elective" );
            break;
        case "cpt":
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

    function handleClick(e){
      let val = e.currentTarget.value;
      setSort(val);
      document.querySelectorAll('.sort-button').forEach( i => {
        if(i.classList.length === 2 ){
          i.classList.remove("current-sort");
        }
        if(val === i.value){
          i.classList.add("current-sort");
        }

      });

    }

    return (
      <Layout link="Courses">
        <SEO title="Next Semester"/>
        <h2> {getTitle()} </h2>
        <h3> Sort Classses </h3>
        <div className = "sort-buttons" >
          <button value= "core" className = "sort-button current-sort" onClick = {(e) => handleClick(e) }> Core </button>
          <button value= "fe" className = "sort-button" onClick = {e => handleClick(e) } > Focus Electives </button>
          <button value= "cpt" className = "sort-button" onClick = {e => handleClick(e) } > CPT </button>
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