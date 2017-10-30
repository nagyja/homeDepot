import React from "react";

const video_categories = props =>({
	return(
		{props.vidCat.map((vid)=>
    	<ul onClick={()=> onCategorySelect(selectedCategory)}>{vid.category}</ul>
    	)}
	)	
});


const vidCat = [
	{category:"Appliances"},
	{category:"Bath"},
	{category:"Decor"},
	{category:"Diy Projects"},
	{category:"Doors &amp; Windows"},
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
	{category:"Winterization"}
];

export default video_categories;































