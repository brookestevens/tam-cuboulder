import React, { useState } from "react"

function Footer(){
    const[search, setSearch] = useState("");

    function handlePress(c){
        if(c === 13) window.location = `https://www.colorado.edu/search?cse=${search}&op=Search`;
    }

    return(
        <footer className = "footer-tam">
            <hr/>
            <div className="footer-tam-links">
                <div>
                    <h3> Technology, Arts, & Media</h3>
                    <ul>
                        <li>Atlas Institute</li>
                        <li>University of Colorado Boulder</li>
                        <li>Legal & Trademarks</li>
                        <li> © Regents of University Colorado Boulder</li>
                    </ul>
                </div>
                <div>
                    <h3> Contact Us </h3>
                    <ul>
                        <li> Email: tamprogram@colorado.edu</li>
                        <li> Call: 303-735-4834</li>
                        <li> <a href="https://www.facebook.com/TechnologyArtsMedia"> Facebook </a> </li>
                        <li> <a href="https://twitter.com/tam_cu" > Twitter </a> </li>
                    </ul>
                </div>
                <div>
                    <h3> Find Us</h3>
                    <ul>
                        <li>ATLAS Building, Suite 235</li>
                        <li>320 UCB</li>
                        <li>Boulder, CO 80309-0320</li>
                    </ul>
                </div>
                <div>
                    <h3> CU </h3>
                    <ul>
                        <li> Home </li>
                        <li>A to Z | Campus Map</li>
                    </ul>
                    <input 
                        type = "text" 
                        value = {search} 
                        onChange = {e => setSearch(e.target.value.replace(' ', '+'))}
                        onKeyDown = {e => handlePress(e.keyCode)} 
                        placeholder = "Search CU-Boulder"
                    />
                </div>
            </div>
        </footer>
    );
}

export default Footer;