<h1> Technology, Arts, & Media Department Site for the University of Colorado Boulder </h1>
</hr>
<h2> Drupal 8 | Gatsby | Heroku </h2>
<h3> Setup </h3>
<p> npm install && npm start </p>

## Directory Structure ##
<pre><code>
    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-config.js
    ├── static.json
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md
</code></pre>

<h3> static.json and gatsby-config.js * IMPORTANT * </h3>
<p> These files allow Gatsby to connect to the Drupal backend site and is needed by Heroku. The static.json file is for Heroku to proerly build the site and proxy an needed urls. In the gatsby-config.js file, configurations for development proxying and plugins are put here. 
</p>
<h3> Adding Pages </h3>
<p> 
Add pages to the src -> pages directory. You must name the file the name of the route that will appear in the menu. It us   how Gastby does routing. You may add a directory for nested routes 
</p>
<h3> Assets </h3>
<p>
Put all images in the src -> images directory 
</p>
<h3> Styles </h3> 
<p>
All of the stylesheets are in the src->styles directory and are written in plain css. There are no CSS preprocessors used and no modules installed to parse LESS or SASS, but can be added if desired!
</p>
<h3> Documentation </h3>
<p>
Check out the <a href = "https://www.gatsbyjs.org/"> Gatsby Documentation </a> to learn how to develop for it. Also check   out the <a href="https://reactjs.org/"> React Documentation </a> to learn more about React
</p>
