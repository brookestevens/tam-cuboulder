import PropTypes from "prop-types"
import React from "react"


function SideMenu(props){

    const styles = {
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '20%',
        padding: '1.5em'
    };
    // to = "#id-name" 
    return(
        <div className="header-links-flex" style={styles} >
            {props.links.map( i => (
                <a className="header-links" style={{color: 'white'}} href={`#${i}-id`}> {i} </a>
            ))}
        </div>
    );
}

SideMenu.propTypes = {
    links: PropTypes.array
}

export default SideMenu;