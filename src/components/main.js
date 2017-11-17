// Include React as a dependency
import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";


// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;
// import Header from "header";
// import Footer from "footer";
// import Section from "section";


// Create the Main component
class Main extends Component{
  render() {
    return (
      // We can only render a single div. So we need to group everything inside of this main-container one
      <div className="main-container">
        <div className="container">
            I love home depot
        </div>
      </div>
    );
  }
};

// Export the module back to the route
module.exports = Main;

//<Header/>
//          <Section/>
//          {/* Here we will deploy the sub components Search, Results, or Video */}
//          {/* These sub-components are getting passed as this.props.children */}
//          {this.props.children}

//          <Footer/>   


// //
// import Categories from "./components/categories";
// import Specials from "./components/specials";
// import Trending from "./components/trending";
// import Recommended from "./components/recommended";



// class App extends Component {
//   render(){
//     return(
//       <div>
//         <Header/>
//       </div>
//       <div>
//         <Main/>
//       </div>
//       <div>
//         <Footer/>
//       </div>
//     );
//   }
// ReactDOM.render(<App />, document.querySelector(".container"));