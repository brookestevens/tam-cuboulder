import React,{useEffect} from 'react';
import {graphql} from 'gatsby';
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import "../../styles/page.css"

function FAQs({data}){
    // const [answers, setAnswers] = useState([]);
    useEffect(() => {
      for(let i=0; i< data.allNodeQA.edges.length; i++){
        var doc = new DOMParser().parseFromString(data.allNodeQA.edges[i].node.body.value, "text/html");
        doc = doc.querySelector('body');
        document.getElementById(`answer-${data.allNodeQA.edges[i].node.drupal_internal__nid}`).appendChild(doc);
      }
    },[data.allNodeQA.edges.length, data.allNodeQA.edges]);

    return(
      <Layout link="Resources">
        <SEO title="FAQs"/>
        <h2> Frequently Asked Questions </h2>
        {data.allNodeQA.edges.map( i=>( 
          <React.Fragment key={i.node.title}>
            <h3> {i.node.title} </h3>
            <div id={`answer-${i.node.drupal_internal__nid}`}> </div>
            <hr/>
          </React.Fragment>
        ))}
      </Layout>
    );
}

export const query = graphql`
  {
    allNodeQA {
      edges {
        node {
          body {
            value
          }
          title
          drupal_internal__nid
        }
      }
    }
  }
`

export default FAQs;