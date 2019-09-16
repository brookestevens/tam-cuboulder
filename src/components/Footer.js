import React from "react"

function Footer(){
    return(
        <footer style={{backgroundColor: 'black' , color: 'grey'}}>
            <div style={{ padding: '1em', display: 'flex', justifyContent: 'space-between'}} className="footer-tam-links">
                <div>
                    <h3> Technology Arts and Media</h3>
                    <p> stuff</p>
                </div>
                <div>
                    <h3> Contact Us </h3>
                    <p> stuff</p>
                </div>
                <div>
                    <h3> Find Us</h3>
                    <p> stuff</p>
                </div>
            </div>    
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
    );
}

export default Footer;