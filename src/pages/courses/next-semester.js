import React, { useState, useEffect } from "react"
import { graphql } from 'gatsby'
import ArrowDown from "../../images/arrow-down-black.png"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "../../styles/page.css"

function CourseTitle(props){
  const[clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(!clicked);
  }

  function detailsModal() {
    console.log(props.details);
    return (
      <div className="course-details">
        <table className="details-table">
          <tbody>
            <tr>
              <th>Instructor</th>
              <th>Meeting Times </th>
              <th>Days </th>
              <th>Room</th>
              <th>Category</th>
            </tr>
            <tr>
              <td> {props.details.field_instructor} </td>
              <td> {props.details.field_meeting_pattern} </td>
              <td> {props.details.field_days.value} </td>
              <td> {props.details.field_room} </td>
              <td> {props.details.relationships.field_category.name} </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }


  return(
    <React.Fragment>
    <div className="course-title next-sem-courses">
      <h3> {props.name} - {props.section} </h3>
      <img src={ArrowDown} alt="show-more-arrow" width="25" height="25" onClick={() => handleClick()} />
    </div>
    {clicked ? detailsModal() : null}
    </React.Fragment>
  );
}

function NextSemesterPage({ data }) {
  const [sort, setSort] = useState("");

  function getTitle() {
    let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();
    //Dates are set for the NEXT semester
    if (month < 5) {
      return "Fall " + ++year;
    }
    else if (month > 7 && month <= 12) {
      return "Spring " + ++year;
    }
    else {
      return "Summer " + year;
    }
  }

  function renderSortedCourses() {
    let results = data.allNodeCourse.edges;
    switch (sort) {
      case "core":
        results = results.filter(i => i.node.relationships.field_category.name === "Core");
        break;
      case "fe":
        results = results.filter(i => i.node.relationships.field_category.name === "Focus Elective");
        break;
      case "cpt":
        results = results.filter(i => i.node.relationships.field_category.name === "CPT");
        break;
      default:
        break;
    }

    return (
      <React.Fragment>
      {results.map(i => (
        <CourseTitle name = {i.node.title} section = {i.node.field_course_section} details = {i.node} />
      ))}
      </React.Fragment>
    );
  }

  function handleClassSort(e) {
    let val = e.currentTarget.value;
    setSort(val);
    document.querySelectorAll('.sort-button').forEach(i => {
      if (i.classList.length === 2) {
        i.classList.remove("current-sort");
      }
      if (val === i.value) {
        i.classList.add("current-sort");
      }

    });

  }

  return (
    <Layout link="Courses">
      <SEO title="Next Semester" />
      <h2> {getTitle()} </h2>
      <h3> Sort Classses </h3>
      <div className="sort-buttons" >
        <button value="core" className="sort-button current-sort" onClick={(e) => handleClassSort(e)}> Core </button>
        <button value="fe" className="sort-button" onClick={e => handleClassSort(e)} > Focus Electives </button>
        <button value="cpt" className="sort-button" onClick={e => handleClassSort(e)} > CPT </button>
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