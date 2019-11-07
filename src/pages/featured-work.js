import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

function FeaturedPage({data}) {
    return (
        <Layout link={null}>
            <SEO title="Featured Works" />
            <h2 id="featured-title" > Featured Projects</h2>
            <p id="featured-desc"> Student submitted projects. If you would like to submit your own project
                to be displayed on the site go  <a href="/resources/submit"> here </a>
            </p>
            <hr/>
            <div id="featured-gallery">
                {data.allNodeFeaturedWork.edges.map(i => (
                    <div className="card">
                        <img src={i.node.relationships.field_project_picture.uri.url} height="300" width="300"/>
                        <div className="card-content">
                            <h3 onClick = { () => window.location = i.node.field_project_link.uri }> {i.node.title} </h3>
                            <p> <strong> Class: </strong> {i.node.field_class_name} </p>
                            <p> <strong> {i.node.field_name} </strong> {i.node.body.value} </p>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export default FeaturedPage;

export const query = graphql`
  {
    allNodeFeaturedWork(filter: {status: {eq: true}}) {
      edges {
        node {
          body {
            value
          }
          title
          relationships {
            field_project_picture {
              uri {
                url
              }
            }
          }
          field_project_link {
            uri
          }
          field_name
          field_class_name
        }
      }
    }
  }
`


