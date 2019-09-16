import PropTypes from "prop-types"
import React from "react"

function SideMenu(){
    return(
        <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
        </div>
    );
}

export default SideMenu;