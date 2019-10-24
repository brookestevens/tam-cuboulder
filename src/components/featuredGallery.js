import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function FeaturedGallery(){
    const data = useStaticQuery(graphql`
    {
        allNodeFeaturedWork {
        edges {
            node {
            title
            field_name
            field_class_name
            body {
                value
            }
            field_project_link {
                uri
            }
            relationships {
                field_project_picture {
                uri {
                    url
                }
                }
            }
            }
        }
        }
    }
    `)
    return(
        <React.Fragment>
        <h2> Featured Projects </h2>
        <p> Work submitted by students. See all of the projects <a href="/featured-work"> here </a> 
            and submit your own work <a href="/resources/submit"> here </a> </p>
        <div id="featured-works">
            {data.allNodeFeaturedWork.edges.map( i => (
                <div className = "featured-project" >
                    <img src={i.node.relationships.field_project_picture.uri.url} width="300" height="300" alt="student submitted project"/>
                    <h3>{i.node.title}</h3>
                    <p>{i.node.field_name}</p>
                </div>
            ))}
        </div>
        </React.Fragment>
    );
}


export default FeaturedGallery;