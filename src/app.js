// Include the Main React Dependencies
import React, { Component } from "react";
import ReactDOM from "react-dom";
// Grabs the Routes
import routes from "./config/routes";

// Renders the contents according to the route page
// Displays the contents in the div class .container of index.html
// Note how ReactDOM takes in two parameters (the contents and the location)
ReactDOM.render(routes, document.querySelector(".container"));