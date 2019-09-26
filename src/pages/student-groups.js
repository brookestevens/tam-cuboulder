import React, { useEffect, useState} from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/page.css"

function StudentGroupsPage({data}){
  const [description, setDescription] = useState([]);

  useEffect( () => {
    //set state of just descriptions
        let doc = new DOMParser();
        let arr = [];
        for(let i = 0; i<data.allNodeStudentGroup.nodes.length; i++){
            //console.log(data.allNodeStudentGroup.nodes[i].body.value);
            doc = new DOMParser().parseFromString(data.allNodeStudentGroup.nodes[i].body.value, 'text/html').querySelector('body > p').innerHTML;
            arr.push(doc);
        }
        setDescription([...description, ...arr ]);
        console.log("added descriptions");
  }, []);
  if(description.length === 0){
    return <p> Loading Groups...</p>
  }
  else{
    return (
        <Layout link={null}>
            <SEO title="Student Groups" />
            <h2>Student Groups</h2>
            {data.allNodeStudentGroup.nodes.map( i => (
                <div key={i.title}>
                    <h3> {i.title} </h3>
                    <p> Meeting Times: {i.field_meeting_times}</p>
                    <p> {i.field_student_leader} </p>
                    <p> {i.field_student_group_email} </p>
                    <p> {description[data.allNodeStudentGroup.nodes.indexOf(i)]}</p>
                    <a href= {i.field_more_info}> More Information </a> 
                    <hr/>
                </div>
            ))}
        </Layout>
    );
  }

}

export const query = graphql`
  {
    allNodeStudentGroup {
      nodes {
        body {
          value
        }
        title
        field_meeting_times
        field_more_info
        field_student_group_email
        field_student_leader
      }
    }
  }
`

export default StudentGroupsPage;
