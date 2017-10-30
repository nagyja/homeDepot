import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";

import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import VideoCategories from "./components/video_categories";

class Video extends Component {
	constructor(props) {
    	super(props);

	    this.state = {
	      videos: [],
	      selectedVideo: null,
	      selectedCategory: "Appliances"
	  	};
    }

    render() {
    	return (
	      	<div>
	        	<VideoDetail video={this.state.selectedVideo} />
	          	<VideoCategories
	        		onCategorySelect={selectedCategory => this.setState({selectedCategory})} 
	        	/>
	        	<VideoList
	        		category={this.state.selectedCategory}
	         	 	onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
	          		videos={this.state.videos}
	        	/>
	      	</div>
	    );
	}
};


export default Video;











//row1:
	//Video Player
	//Category/Title/Description/Link/Social
//row2:
	//Category List
	//Video List
//Video List