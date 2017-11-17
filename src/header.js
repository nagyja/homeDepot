import React, { Component } from 'react';
import Directory from "./components/directory";
import Logo from "./components/logo";
import Account from "./components/myAccount"
import Cart from "./components/shoppingCart";
import SearchBar from "./components/search_bar"

const TaskLinkRow = ({ action, onActionSelect}) =>{
  const taskLinks = [
    {taskLink: "//www.homedepot.com/l/" , text: "Store Finder" },
    {taskLink: "//www.homedepot.com/c/tool_and_truck_rental" , text: "Truck & Tool Rental" },
    {taskLink: "https://www.homedepot.com/c/professional_contractor" , text: "For the Pro" },
    {taskLink: "//www.homedepot.com/c/Gift_Cards" , text: "Gift Cards" },
    {taskLink: "//www.homedepot.com/c/Credit_Center" , text: "Credit Services" },
    {taskLink: "https://secure2.homedepot.com/account/view/list/summary" , text: "My List" },
    {taskLink: "https://secure2.homedepot.com/account/view/order/tracking" , text: "Track Order" },
    {taskLink: "//www.homedepot.com/c/customer_service" , text: "Help" }
  ];

  const mappedLinkRow = taskLinks.map((task)=>
    <a href={task.taskLink} key= {task.text} title={task.text} onClick={()=>onActionSelect(action)}>{task.text}</a>
  );

  return(
    <div id="TaskLinkRow">
      {mappedLinkRow}
    </div>
  );
}

const StoreLocation = ({setStoreLocation, onStoreSelect})=>{

  return (
    <div id="StoreLocation">
      <img src="../public/assets/location.png"/>
      <p>
        To See Inventory <br/><strong>Choose A Store</strong>
      </p>
    </div>
  );
}

const Heading = ({ action, onActionSelect}) =>{
        
    // const Logo = React.createClass({})
    // const Store = React.createClass({})
    // const SearchBar = React.createClass({})
    // const Account = React.createClass({
    //   return(
    //     <div><strong>My Account</strong></div>
    //   );
    // const Cart = React.createClass({
    //   return(
    //     <div>
    //       <a href = "https://www.homedepot.com/mycart/home">Cart | {cartCount} 
    //         <img src="../public/assets/cart.png"/>
    //       </a>
    //     </div>
    //   );
    // const DropDowns = React.createClass({})
    // const MessageBand = React.createClass({
    //   return(
    //     <div className="col-lg-12" style=padding:10px;padding-right:200px;padding-left:200px;background-color:#f96302;>
    //       <a  href="http://www.homedepot.com/c/About_Your_Online_Order" style="text-align:center;">
    //         <strong>Free Shipping On Most Orders of $45 or More ></strong>
    //       </a>  
    //     </div>
    //   );
    //<Logo/>
    //        <Store/>
    //        <SearchBar/>
    //        <Account/>
    //        <Cart/>
    //      <DropDowns/>
    //      <MessageBand/>

  return (
    <div id="Heading">
      <div >
        <div className="nav-header">
          <TaskLinkRow/>    
          <Logo/>
          <StoreLocation />
          <SearchBar/>
          <Account/>
          <Cart/>
          <Directory/>
        </div>
      </div>
      <div id="free2day"><strong>FREE 2-DAY DELIVERY</strong> thousands of online items eligible</div>
    </div>
  );
}


export default Heading;


 //onSearchTermChange={textSearch} 
//onStoreSelect={setStoreLocation}