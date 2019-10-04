import React from 'react';
import {graphql} from 'gatsby';
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import "../../styles/page.css"

function FAQs({data}){
    return(
      <Layout link="Resources">
        <SEO title="FAQs"/>
        <h2> Frequently Asked Questions </h2>
        {data.allNodeQA.edges.map( i=>( 
          <React.Fragment key={i.node.title}>
            <h3> {i.node.title} </h3>
            <p> {i.node.body.value} </p>
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
        }
      }
    }
  }
`;
export default FAQs;