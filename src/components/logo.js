import React, { Component } from 'react';

const logoPanels = [
	{key:"one", link: "https://www.homedepot.com/", image: "../public/assets/homedepot-logo.png", text:""}, //home depot logo
	{key:"two", link: "https://www.homedepot.com/c/professional_contractor", image: "../public/assets/truck_Pro.png", text:"PRO"},	//Pro
	{key:"three", link: "https://www.homedepot.com/c/diy_projects_and_ideas", image: "../public/assets/suv_DIY.png", text:" DIY"},//DIY
	{key:"four", link: "https://www.homedepot.com/services/", image: "../public/assets/car_Live.png", text:"LIVE"},	//Live
	{key:"five", link: "https://www.homedepot.com/c/Savings_Center", image: "../public/assets/orange.png", text:""},
	{key:"six", link: "localhost:8080", image: "../public/assets/homedepot-logo.png", text:""}
];

const mappedLogoCube= logoPanels.map((panel)=>
	<div className={panel.key} key={panel.key}><a className="logoImgPanel" href={panel.link} target="_blank"><h3 className="logo_textbox"><strong>{panel.text}</strong></h3><img src={panel.image}/></a></div>
);

export default class Logo extends React.Component{
	render(){
		return(
			<div id="logo">
				<div id="shape">
					{mappedLogoCube}
				</div>
			</div>
		)
	}
}


