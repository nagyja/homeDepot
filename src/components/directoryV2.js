import React, { Component } from 'react';

const Departments = ({ action, onActionSelect}) =>{
  const deptLinks = [
    {deptLink: "" , key: "D1", text: "Christmas Decorations", subMenu:[
        {subLink:"", text:"Christmas Trees"},
        {subLink:"", text:"Christmas Lights"},
        {subLink:"", text:"Outdoor Christmas Decorations"},
        {subLink:"", text:"Christmas Wreaths & Garland"},
        {subLink:"", text:"Indoor Christmas Decorations"},
        {subLink:"", text:"Christmas Ornaments & Tree Toppers"},
        {subLink:"", text:"Seasonal Decorations"},
        {subLink:"", text:"Halloween Decorations"},
        {subLink:"", text:"Fall & Harvest Decorations"},
        {subLink:"", text:"Party Supplies"},
        {subLink:"", text:"View All Holiday Decorations"},
        {subLink:"", text:"View All Christmas Decorations"}]
},
    {deptLink: "" , key: "D2", text: "Appliances", subMenu:[
        {subLink:"", text:"Appliance Special Buys"},
        {subLink:"", text:"Refrigerators"},
        {subLink:"", text:"Washers & Dryers"},
        {subLink:"", text:"Dishwashers"},
        {subLink:"", text:"Ranges"},
        {subLink:"", text:"Microwaves"},
        {subLink:"", text:"Range Hoods"},
        {subLink:"", text:"Wall Ovens"},
        {subLink:"", text:"Cooktops"},
        {subLink:"", text:"Kitchen Packages"},
        {subLink:"", text:"Vacuum Cleaners & Floor Care"},
        {subLink:"", text:"Small Applian"},
        {subLink:"", text:"Heating, Cooling & Air Quality"},
        {subLink:"", text:"Water Heaters"},
        {subLink:"", text:"Garbage Disposals"},
        {subLink:"", text:"View All Appliances"}]    
},
    {deptLink: "" , key: "D3", text: "Bath & Faucets", subMenu:[
        {subLink:"", text:"Bath Faucet & Hardware Collections"},
        {subLink:"", text:"Bathroom Faucets"},
        {subLink:"", text:"Batroom Vanities"},
        {subLink:"", text:"Bathtubs"},
        {subLink:"", text:"Shower & Shower Doors"},
        {subLink:"", text:"Medicine Cabinets"},
        {subLink:"", text:"Toilets"},
        {subLink:"", text:"Bathroom Cabinets & Storage"},
        {subLink:"", text:"Bathroom Sinks"},
        {subLink:"", text:"Bathroom Hardware"},
        {subLink:"", text:"Bathroom Mirrors"},
        {subLink:"", text:"Exhaust Fans"},
        {subLink:"", text:"Bathroom Cleaners"},
        {subLink:"", text:"Bath Towels & Decor"},
        {subLink:"", text:"View All Bath & Faucets"}]
},
    {deptLink: "" , key: "D4", text: "Blinds & Window Treatments", subMenu:[
        {subLink:"", text:"Blinds"},
        {subLink:"", text:"Shades"},
        {subLink:"", text:"Plantation Shutters"},
        {subLink:"", text:"Curtains & Drapery"},
        {subLink:"", text:"Curtain Rods & Hardware"},
        {subLink:"", text:"Window Scarves & ValanceS"},
        {subLink:"", text:"Window Film"},
        {subLink:"", text:"view All Blinds & Window Treatments"}]
},
    {deptLink: "" , key: "D5", text: "Builders Materials", subMenu:[
        {subLink:"", text:"Lumber & Composites"},
        {subLink:"", text:"Fencing"},
        {subLink:"", text:"Decking"},
        {subLink:"", text:"Drywall"},
        {subLink:"", text:"Doors & Windows"},
        {subLink:"", text:"Roofing & Gutters"},
        {subLink:"", text:"Siding"},
        {subLink:"", text:"Insulation"},
        {subLink:"", text:"Concrete, Cement & Masonry"},
        {subLink:"", text:"Ceilings"},
        {subLink:"", text:"Builders Hardware"},
        {subLink:"", text:"Fasteners"},
        {subLink:"", text:"Moulding & Millwork"}]
},
    {deptLink: "" , key: "D6", text: "Decor & Furniture", subMenu:[
        {subLink:"", text:"Rooms We Love"},
        {subLink:"", text:"Furniture"},
        {subLink:"", text:"Matresses"},
        {subLink:"", text:"Wall Decor & Mirrors"},
        {subLink:"", text:"Wallpaper & Borders"},
        {subLink:"", text:"Home Accents"},
        {subLink:"", text:"Bedding & Bath"},
        {subLink:"", text:"Lugage & Travel Accessories"},
        {subLink:"", text:"Rugs"},
        {subLink:"", text:"Lighting & Ceiling Fans"},
        {subLink:"", text:"Holiday Decorations"},
        {subLink:"", text:"View All Decor & Furniture"}]
},
    {deptLink: "" , key: "D7", text: "Doors & Windows", subMenu:[
        {subLink:"", text:"Exterior Doors"},
        {subLink:"", text:"Front Doors"},
        {subLink:"", text:"Interior & Closet Doors"},
        {subLink:"", text:"Windows"},
        {subLink:"", text:"Blinds & Window Treatments"},
        {subLink:"", text:"Exterior Shutters"},
        {subLink:"", text:"Awnings"},
        {subLink:"", text:"Skylights"},
        {subLink:"", text:"Garage Goors & Accessories"},
        {subLink:"", text:"Related Categories"},
        {subLink:"", text:"View All Doors & Windows"}]
},
    {deptLink: "" , key: "D8", text: "Electrical", subMenu:[
        {subLink:"", text:"Wire"},
        {subLink:"", text:"Light Bulbs"},
        {subLink:"", text:"Home Security & Surveillance"},
        {subLink:"", text:"Boxes, Conduit & Fittings"},
        {subLink:"", text:"Smart Home"},
        {subLink:"", text:"Circuit Breaker & Panels"},
        {subLink:"", text:"Extension Cords & Surge Protectors"},
        {subLink:"", text:"Home Electronics"},
        {subLink:"", text:"Wall Plate & Jacks"},
        {subLink:"", text:"Electrical Tools & Accessories"},
        {subLink:"", text:"Generators"},
        {subLink:"", text:"Dimmers, Switches & Outlets"},
        {subLink:"", text:"Fire Safety"},
        {subLink:"", text:"Household Batteries"},
        {subLink:"", text:"Related Categories"},
        {subLink:"", text:"View All Electrical"}]
},
    {deptLink: "" , key: "D9", text: "Flooring & Area Rugs", subMenu:[
        {subLink:"", text:"Area Rugs & Mats"},
        {subLink:"", text:"Carpet & Carpet Tile"},
        {subLink:"", text:"Tile"},
        {subLink:"", text:"Vinyl Flooring"},
        {subLink:"", text:"Laminate Flooring"},
        {subLink:"", text:"Hardwood Flooring"},
        {subLink:"", text:"Flooring Tools & Materials"},
        {subLink:"", text:"Floor Cleaning Products"},
        {subLink:"", text:"Related Categories"},
        {subLink:"", text:"View All Flooring & Area Rugs"}]
},
    {deptLink: "" , key: "D10", text: "Hardware", subMenu:[
        {subLink:"", text:"Cabinet & Furniture Hardware"},
        {subLink:"", text:"Chain & Rope"},
        {subLink:"", text:"Door Knobs & Hardware"},
        {subLink:"", text:"Garage Door Hardware"},
        {subLink:"", text:"Gate Hardware"},
        {subLink:"", text:"Keys & Accessories"},
        {subLink:"", text:"Mailboxes, Posts & Addresses"},
        {subLink:"", text:"Metal Sheerts & Rods"},
        {subLink:"", text:"Safety & Secutrity"},
        {subLink:"", text:"Screws, Nails & Anchors"},
        {subLink:"", text:"Sign, Letter & Numbers"},
        {subLink:"", text:"Specialty Hardware"},
        {subLink:"", text:"Tie-Down Straps & Bungees"},
        {subLink:"", text:"Weather Stripping"},
        {subLink:"", text:"Window Hardware"},
        {subLink:"", text:"iew All Hardware"},
        {subLink:"", text:""}]
},
    {deptLink: "" , key: "D11", text: "Heating & Cooling", subMenu:[
        {subLink:"", text:"Heaters"},
        {subLink:"", text:"Thermostats"},
        {subLink:"", text:"Air Quality"},
        {subLink:"", text:"Water Heaters"},
        {subLink:"", text:"Air Filters"},
        {subLink:"", text:"HVAC Parts & Supplies"},
        {subLink:"", text:"Air Conditioners & Coolers"},
        {subLink:"", text:"Fireplaces"},
        {subLink:"", text:"Ventilation"},
        {subLink:"", text:"Outdoor Heating"},
        {subLink:"", text:"Ceiling Fans"},
        {subLink:"", text:"Portable Fans"},
        {subLink:"", text:"View All Heating & Cooling"}]
},
    {deptLink: "" , key: "D12", text: "Kitchen & Kitchenware", subMenu:[
        {subLink:"", text:"Kitchen Cabinets"},
        {subLink:"", text:"Kitchen Sinks"},
        {subLink:"", text:"Kitchen Faucets"},
        {subLink:"", text:"Kitchen Counterops"},
        {subLink:"", text:"Garbade Disposals"},
        {subLink:"", text:"Small Appliances"},
        {subLink:"", text:"Cooking & Food Preparation"},
        {subLink:"", text:"Kitchen Storage & Organization"},
        {subLink:"", text:"Carts, Islands & Utility Tables"},
        {subLink:"", text:"Tabletop & Bar"},
        {subLink:"", text:"Cleaning Supplies"},
        {subLink:"", text:"Kitchenwar Shop"},
        {subLink:"", text:"Related Categories"},
        {subLink:"", text:"View All Kitchen & Kitchenware"}]
},
    {deptLink: "" , key: "D13", text: "Lawn & Garden", subMenu:[
        {subLink:"", text:"Garden Plants & Flowers"},
        {subLink:"", text:"Trees & Bushes"},
        {subLink:"", text:"Lawn Care"},
        {subLink:"", text:"Lawn Mowers"},
        {subLink:"", text:"Garden Club"},
        {subLink:"", text:"Landscaping"},
        {subLink:"", text:"Outdoor Power Equipmen"},
        {subLink:"", text:"Garden Tools"},
        {subLink:"", text:"Pots & Planters"},
        {subLink:"", text:"Watering & Irrigation"},
        {subLink:"", text:"Insects & Pest Control"},
        {subLink:"", text:"Fencing"},
        {subLink:"", text:"Greenhouses"},
        {subLink:"", text:"Sheds, Garages & Outdoor Storage"},
        {subLink:"", text:"View All Lawn & Garden"}]
},
    {deptLink: "" , key: "D14", text: "Lighting & Ceiling", subMenu:[
        {subLink:"", text:"Ceiling Fans & Accessories"},
        {subLink:"", text:"Outdoor Lighting"},
        {subLink:"", text:"Ceiling Lights"},
        {subLink:"", text:"Hanging Lights"},
        {subLink:"", text:"Bathroom Lighting"},
        {subLink:"", text:"LED Light Fixtures"},
        {subLink:"", text:"Commercial Lighting"},
        {subLink:"", text:"Under Cabinet Lighting"},
        {subLink:"", text:"Light Bulbs"},
        {subLink:"", text:"Indoor Lighting Accessories"},
        {subLink:"", text:"Lamps & Shade"},
        {subLink:"", text:"View All Lighting & Ceiling Fans"}]
},
    {deptLink: "" , key: "D15", text: "Outdoor Living", subMenu:[
        {subLink:"", text:"Patio Furniture"},
        {subLink:"", text:"Grills & Grill Accessories"},
        {subLink:"", text:"Outdoo Power Equipment"},
        {subLink:"", text:"Fencing"},
        {subLink:"", text:"Playsets & Recreation"},
        {subLink:"", text:"Decking"},
        {subLink:"", text:"Sheds & Outdoor Storage"},
        {subLink:"", text:"Gazebos"},
        {subLink:"", text:"Pergolas"},
        {subLink:"", text:"Outdoor Heating"},
        {subLink:"", text:"Pools & Pool Supplies"},
        {subLink:"", text:"Hot Tubs & Saunas"},
        {subLink:"", text:"View All Outdoor Living"}]
},
    {deptLink: "" , key: "D16", text: "Paint", subMenu:
        {subLink:"", text:"Interior Paint"},
        {subLink:"", text:"Exterior Paint"},
        {subLink:"", text:"Primers"},
        {subLink:"", text:"Paint Sprayers"},
        {subLink:"", text:"Paint Tools & Supplie"},
        {subLink:"", text:"Spray Paint"},
        {subLink:"", text:"Craft & Art Supplies"},
        {subLink:"", text:"Exterior Stains"},
        {subLink:"", text:"Interior Stains"},
        {subLink:"", text:"Concrete & Garage Floor Paint"},
        {subLink:"", text:"Waterproofing & Sealers"},
        {subLink:"", text:"Caulk & Sealants"},
        {subLink:"", text:"Tape, Glue & Epoxy"},
        {subLink:"", text:"Shop Top Brands"},
        {subLink:"", text:"Related Categories"},
        {subLink:"", text:"View All Paint"}]
},
    {deptLink: "" , key: "D17", text: "Plumbing", subMenu:[
        {subLink:"", text:"Water Heaters"},
        {subLink:"", text:"Parts & Repair"},
        {subLink:"", text:"Pipes & Fittings"},
        {subLink:"", text:"Valve"},
        {subLink:"", text:"Plubming Tools"},
        {subLink:"", text:"Pumps"},
        {subLink:"", text:"Drain Openers"},
        {subLink:"", text:"Kitchen Faucets"},
        {subLink:"", text:"Bath Faucets & Showerheads"},
        {subLink:"", text:"Related Categories"},
        {subLink:"", text:"View All Plubming"}]
},
    {deptLink: "" , key: "D18", text: "Storage & Organization", subMenu:[
        {subLink:"", text:"Closet Storage "},
        {subLink:"", text:"Garage Storage"},
        {subLink:"", text:"Shed, Garage & Outdoor Storage"},
        {subLink:"", text:"Kitchen Storage"},
        {subLink:"", text:"Laundry Room Storage"},
        {subLink:"", text:"Moving Supplies"},
        {subLink:"", text:"Cleaning"},
        {subLink:"", text:"Shelves & Shelf Brackets"},
        {subLink:"", text:"Cube Storage & Accessories"},
        {subLink:"", text:"Storage Bins & Totes"},
        {subLink:"", text:"Home Storage Hooks"},
        {subLink:"", text:"Office Storage & Organization"},
        {subLink:"", text:"Lockers"},
        {subLink:"", text:"Safes"},
        {subLink:"", text:"Craft Storage"},
        {subLink:"", text:"View All Storage & Organization"}]
},
    {deptLink: "" , key: "D19", text: "Tools", subMenu:[
        {subLink:"", text:"Power Tools"},
        {subLink:"", text:"Hand Tools"},
        {subLink:"", text:"Air Compressor & Air Tools"},
        {subLink:"", text:"Outdoor Power Tools"},
        {subLink:"", text:"Tool Storage"},
        {subLink:"", text:"Power Tool Accessories"},
        {subLink:"", text:"Automotive"},
        {subLink:"", text:"Apparel, Workwear & Safety gear"},
        {subLink:"", text:"Welding & Soldering"},
        {subLink:"", text:"Wet/Dry Vacuums"},
        {subLink:"", text:"View All Tools"}]
}];
  //assign id to mapped elements    
  const mappedDept = deptLinks.map((dept)=>
      <a href={dept.deptLink} key={dept.key} title={dept.text} onClick={()=>onActionSelect(action)}>{dept.text}</a>
  );

  return(
    <div id="Departments" className="dropdown">
      <div className="dropbtn">All Departments</div>
      <div className="dropdown-content">{mappedDept}</div>
      <div className="drop-right1-content">{subMenu}</div>
      <div className="drop-right2-content">{subSubMenu}</div>
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
    <ul><a href={rm.roomLink} key= {rm.text} title={rm.text} onClick={()=>onActionSelect(action)}>{rm.text}</a></ul>
  );
  return(
    <div id="ByRoom" className="dropdown">
      <div className="dropbtn">Shop By Room</div>
      <div className="dropdown-content">{mappedRoom}</div>
    </div>
  );}
const DIY = ({ action, onActionSelect}) => {
  const diyLinks = [
    {diyLink: "" , text: "Paint Ideas" },
    {diyLink: "" , text: "Appliance Upgrades" },
    {diyLink: "" , text: "Outdoor Ideas" },
    {diyLink: "" , text: "All DIY Projects" },
    {diyLink: "" , text: "How to Videos" }
  ];

  const mappedDIY = diyLinks.map((diy)=>
    <ul><a href={diy.diyLink} key= {diy.text} title={diy.text} onClick={()=>onActionSelect(action)}>{diy.text}</a></ul>
  );
  return(
    <div id="DIY" className="dropdown">
      <div className="dropbtn">DIY Projects & Ideas</div>
      <div className="dropdown-content">{mappedDIY}</div>
    </div>
  );}
const Service = ({ action, onActionSelect}) => {
  const serviceLinks = [
    {serviceLink: "" , text: "Exterior Home Installation" },
    {serviceLink: "" , text: "Flooring Installation" },
    {serviceLink: "" , text: "Doors & Windows" },
    {serviceLink: "" , text: "All Services" },
  ];

  const mappedService = serviceLinks.map((srv)=>
    <ul><a href={srv.serviceLink} key= {srv.text} title={srv.text} onClick={()=>onActionSelect(action)}>{srv.text}</a></ul>
  );
  return(
    <div id="HomeService" className="dropdown">
      <div className="dropbtn">Home Services</div>
      <div className="dropdown-content">{mappedService}</div>
    </div>
  );}



export default class Directory extends React.Component{
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