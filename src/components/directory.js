import React, { Component } from 'react';
import SubMenu from "./subMenu";


 const Departments = ({ action, onActionSelect}) =>{
  const deptLinks = [
    {deptLink: "" , key: "Seasonal", text: "Christmas Decorations"},
    {deptLink: "" , key: "Appliances", text: "Appliances"},
    {deptLink: "" , key: "Bath", text: "Bath & Faucets"},
    {deptLink: "" , key: "Blinds", text: "Blinds & Window Treatments"},
    {deptLink: "" , key: "Builders", text: "Builders Materials"},
    {deptLink: "" , key: "Decor", text: "Decor & Furniture"},
    {deptLink: "" , key: "Door", text: "Doors & Windows"},
    {deptLink: "" , key: "Electrical", text: "Electrical"},
    {deptLink: "" , key: "Flooring", text: "Flooring & Area Rugs"},
    {deptLink: "" , key: "Hardware", text: "Hardware"},
    {deptLink: "" , key: "Heating", text: "Heating & Cooling"},
    {deptLink: "" , key: "Kitchen", text: "Kitchen & Kitchenware"},
    {deptLink: "" , key: "Lawn", text: "Lawn & Garden"},
    {deptLink: "" , key: "Lighting", text: "Lighting & Ceiling"},
    {deptLink: "" , key: "Outdoor", text: "Outdoor Living"},
    {deptLink: "" , key: "Paint", text: "Paint"},
    {deptLink: "" , key: "Plumbing", text: "Plumbing"},
    {deptLink: "" , key: "Storage", text: "Storage & Organization"},
    {deptLink: "" , key: "Tools", text: "Tools"}
  ];
  //assign id to mapped elements    
    const mappedDept = deptLinks.map((dept)=>
        <a href={dept.deptLink} key={dept.text} title={dept.text} onHover={()=>onMappedSubDeptHover({dept.key})} onClick={()=>onActionSelect(action)}>{dept.text}</a>
      );
      return(
        <div id="Departments" className="dropdown">
          <div className="dropbtn">All Departments</div>
          <div className="dropdown-content">{mappedDept}
          <SubMenu/></div>
        </div>
      );
    }

  const ByRoom = ({ action, onActionSelect}) => {
    const roomLinks = [
        {roomLink: "" , text: "Bathrooms" },
        {roomLink: "" , text: "Bedroom" },
        {roomLink: "" , text: "Living Room" },
        {roomLink: "" , text: "Kitchen" },
        {roomLink: "" , text: "Dining" },
        {roomLink: "" , text: "Patio" },
        {roomLink: "" , text: "Latest Looks" },
        {roomLink: "" , text: "Workshop" }
    ];

    const mappedRoom = roomLinks.map((rm)=>
        <ul><a href={rm.roomLink} key= {rm.text} title={rm.text} onHover={()=>onMappedSubDeptHover({rm.key})} onClick={()=>onActionSelect(action)}>{rm.text}</a></ul>
      );
      return(
        <div id="ByRoom" className="dropdown">
          <div className="dropbtn">Shop By Room</div>
          <div className="dropdown-content">{mappedRoom}
          <SubMenu/></div>
        </div>
      );
    }

  const DIY = ({ action, onActionSelect}) => {
    const diyLinks = [
        {diyLink: "" , text: "Paint Ideas" },
        {diyLink: "" , text: "Appliance Upgrades" },
        {diyLink: "" , text: "Outdoor Ideas" },
        {diyLink: "" , text: "All DIY Projects" },
        {diyLink: "" , text: "How to Videos" }
    ];

    const mappedDIY = diyLinks.map((diy)=>
        <ul><a href={diy.diyLink} key= {diy.text} title={diy.text} onHover={()=>onMappedSubDeptHover({diy.key})} onClick={()=>onActionSelect(action)}>{diy.text}</a></ul>
      );
      return(
        <div id="DIY" className="dropdown">
          <div className="dropbtn">DIY Projects & Ideas</div>
          <div className="dropdown-content">{mappedDIY}
          <SubMenu/></div>
        </div>
      );
    }

  const Service = ({ action, onActionSelect}) => {
    const serviceLinks = [
        {serviceLink: "" , text: "Exterior Home Installation" },
        {serviceLink: "" , text: "Flooring Installation" },
        {serviceLink: "" , text: "Doors & Windows" },
        {serviceLink: "" , text: "All Services" },
    ];

  const mappedService = serviceLinks.map((srv)=>
        <ul><a href={srv.serviceLink} key= {srv.text} title={srv.text} onHover={()=>onMappedSubDeptHover({srv.key})} onClick={()=>onActionSelect(action)}>{srv.text}</a></ul>
    );
      return(
        <div id="HomeService" className="dropdown">
          <div className="dropbtn">Home Services</div>
          <div className="dropdown-content">{mappedService}
          <SubMenu/></div>
        </div>
      );
  }

export default class Directory extends React.Component{
    constructor (props){
        super(props);
        this.state = {mainMenu: new key}
    }

    onMappedSubDeptHover(){
        this.setState({
            mainMenu: new key
        })
    }

	render(){
		return(
			<div id="Directory">
				<Departments/>
				<ByRoom/>
				<DIY/>
				<Service/>
				<a id="Offers" className="dropdown dropbtn" href="https://www.homedepot.com/c/Savings_Center">Specials & Offers</a>
				<a id="Local" className="dropdown dropbtn" href="http://localad.homedepot.com">Local Ad</a>
			</div>

		)
	}	
}