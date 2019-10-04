import React from 'react';
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {graphql} from "gatsby";
import "../../styles/page.css"

function FacultyPage({data}){
    function renderDescription(id){
      const doc = new DOMParser().parseFromString(data.nodePage.body.value, "text/html").querySelector("body");
      document.getElementById(id).appendChild(doc);
    }
    return(
        <React.Fragment>
        <Layout link="People">
          <SEO title="Faculty"/>
          <h2> Faculty </h2>
          {data.allNodeFacultyMember.edges.map( i => (
            <div>
              <h3>{i.node.title} - {i.node.field_member_title} </h3>
              <p> Email: {i.node.field_people_email} </p>
              <p> Office Hours: {i.node.field_office_hours ? i.node.field_office_hours : "n/a"}</p>
              {/* <div className="id"> {renderDescription(id)} </div> */}
            </div>
          ))}
        </Layout>
      </React.Fragment>
    );
}

export const query = graphql`
  {
    allNodeFacultyMember(filter: {field_faculty_sub_menu: {eq: "Faculty"}}) {
      edges {
        node {
          field_member_title
          field_office_hours
          field_people_email
          title
          body {
            value
          }
          relationships {
            field_photo {
              uri {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default FacultyPage;