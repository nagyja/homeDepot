import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./components/header";
import Categories from "./components/categories";
import Specials from "./components/specials";
import Trending from "./components/trending";
import Recommended from "./components/recommended";
import Footer from "./components/footer";




class App extends Component {
	render(){
		return(
			<div>
				<Header/>
			</div>
			<div>
				<div></div>//Splash AD
				<div></div>//sale of day link
				<Categories/>
				<Specials/>
				<Trending/>
				<div></div>//Links
				<Recommended/>
			</div>
			<div>
				<Footer/>
			</div>
		);
	}
ReactDOM.render(<App />, document.querySelector(".container"));