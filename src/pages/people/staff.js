import React from 'react';
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {graphql} from "gatsby";
import "../../styles/page.css";

function StaffPage({data}){
    return(
        <React.Fragment>
        <Layout link="People">
          <SEO title="Staff"/>
          <h2>Staff</h2>
          {data.allNodeFacultyMember.edges.map( i => (
            <div>
              <h3> {i.node.title} - {i.node.field_member_title} </h3>
              <p> Email : {i.node.field_people_email}</p>
              <p> Office Hours : {i.node.field_office_hours ? i.node.field_office_hours : "n/a" }</p>
              <p> {i.node.body.value} </p>
            </div>
          ))}
        </Layout>
      </React.Fragment>
    );
}
export const query = graphql`
  {
    allNodeFacultyMember(filter: {field_faculty_sub_menu: {eq: "Staff"}}) {
      edges {
        node {
          field_member_title
          field_office_hours
          field_people_email
          field_room_number
          title
          relationships {
            field_photo {
              uri {
                url
              }
            }
          }
          body {
            value
          }
        }
      }
    }
  }
`;
export default StaffPage;