// Include the Main React Dependencies
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Include Major Subcomponents
import Heading from "./header";
import Footer from "./footer";
//import Landing from "./components/landing";
//import Howto from "./howto";
//import Results from "./results";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
     	landing: true,
    	howTo: false,
    	result: false,
    	iframe: false
    };
  }

  //functions
  //  const Content
  //<Content/>
  //<Footer/>
    

  render() {

    return (
      <div>
      	<Heading
      		onActionSelect = {action => locationSet(action)}
      	/>
        <div id="footing"> 
      	 <Footer/>
        </div> 
      </div>
    );
  }
}


// Displays the contents in the div class .container of index.html
// Note: ReactDOM takes two parameters ( contents and the location)
ReactDOM.render(<App />, document.querySelector(".container"));