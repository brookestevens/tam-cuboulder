import React, { useEffect} from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

function AdvisingPage({data}){
  
  useEffect( () => {
    const doc = new DOMParser().parseFromString(data.allNodePage.nodes[0].body.value, "text/html").querySelector("body");
    document.getElementById("body-content").appendChild(doc);
  }, [])
  
  return (
    <Layout>
        <SEO title="Advising" />
        <h2>{data.allNodePage.nodes[0].title}</h2>
        <div id="body-content">
            {/* content loads here */}
        </div>
    </Layout>
  );
}

export const query = graphql`
query{
    allNodePage(filter: {drupal_internal__nid: {eq: 3}}) {
        nodes {
          title
          body {
            value
          }
        }
      }
}`;

export default AdvisingPage;