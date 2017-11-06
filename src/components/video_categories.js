import React, { Component } from "react";
//import VideoCategoryItem from "./video_category_item";
const selectableCategory = document.getElementById('VideoCategories');

const VideoCategories = ({ category, onCategorySelect}) =>{
	
	const vidCat = [
		{category:"Appliances"},
		{category:"Bath"},
		{category:"Decor"},
		{category:"DIYS Projects"},
		{category:"Doors & Windows"},			
		{category:"Electrical"},
		{category:"Flooring"},
		{category:"Get it Installed"},
		{category:"Heating and Cooling"},
		{category:"Holiday"},
		{category:"Kitchen"},
		{category:"Lawn and Garden"},
		{category:"Lighting"},
		{category:"Lumber/Building Materials"},
		{category:"Outdoor Living"},
		{category:"Paint"},
		{category:"Smarter Home"},
		{category:"Storage"},
	];
	

	function SelectCategory(category){
		$('.vidCategory').click(function(e) {
		var txt = $(e.target).text();
	    $('ul').removeClass('active');
	    $(this).addClass('active');
	  	console.log(txt);
	  	onCategorySelect(txt);
	    });
	}

	const vidCatList = vidCat.map((v)=>
		<ul className="vidCategory" key={v.category} onClick={()=>SelectCategory(category)} >{v.category}</ul>
	);

	return(
		<div className="col-md-3 list-group" id="VideoCategories">
			<div id="catHeader" ><strong>Categories</strong></div>
				{vidCatList}		
       	</div>
    );

}

export default VideoCategories;


























