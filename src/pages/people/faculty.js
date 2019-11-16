import React, { useEffect } from 'react';
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {graphql} from "gatsby";
import "../../styles/page.css"

function FacultyPage({data}){
  useEffect(() => {
    for(let i =0; i < data.allNodeFacultyMember.edges.length; i++){
      var doc = new DOMParser().parseFromString(data.allNodeFacultyMember.edges[i].node.body.value, "text/html");
      doc = doc.querySelector('body');
      document.getElementById(`desc-${data.allNodeFacultyMember.edges[i].node.drupal_internal__nid}`).appendChild(doc);
    }
  });
  return(
      <React.Fragment>
      <Layout link="People">
        <SEO title="Faculty"/>
        <h2> Faculty </h2>
        {data.allNodeFacultyMember.edges.map( i => (
          <div key={i.node.title} className="faculty-container" >
            <img src={i.node.relationships.field_photo.uri.url} 
              alt="tam instructor" height="200" width="200"/>
            <div className="faculty-content" >  
            <h3>{i.node.title} - {i.node.field_member_title} </h3>
            <p> Email: {i.node.field_people_email} </p>
            <p> Office Hours: {i.node.field_office_hours ? i.node.field_office_hours : "n/a"}</p>
            <div id={`desc-${i.node.drupal_internal__nid}`}>
            </div>
            <hr/>
            </div>
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
          drupal_internal__nid
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