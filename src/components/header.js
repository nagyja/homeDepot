import React, { Component } from 'react';
import SearchBar from "search_bar";
import DropDowns from "dropdowns";
import Logo from "logo";

const Header = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Row>
              <TaskLinkRow/>
            </Row>
            <Row>
              <Logo/>
              <Store/>
              <SearchBar/>
              <Account/>
              <Cart/>
            </Row>
            <Row>
              <DropDowns/>
            </Row>
            <Row>
              <MessageBand/>
            </Row>
          </div>
        </div>
      </nav>
    );
  }
}


const TaskLinkRow = React.createClass({
  render(){
    return(
      <ul>
        {props.taskLink.map((task)=>
        <div href={task.taskLinks} title={task.text}>{task.text}</div>
        )}
      </ul>
    )
  }
})
const taskLink = [
  {taskLinks: "//www.homedepot.com/l/" , text: "Store Finder" },
  {taskLinks: "//www.homedepot.com/c/tool_and_truck_rental" , text: "Truck &amp; Tool Rental" },
  {taskLinks: "https://www.homedepot.com/c/professional_contractor" , text: "For the Pro" },
  {taskLinks: "//www.homedepot.com/c/Gift_Cards" , text: "Gift Cards" },
  {taskLinks: "//www.homedepot.com/c/Credit_Center" , text: "Credit Services" },
  {taskLinks: "https://secure2.homedepot.com/account/view/list/summary" , text: "My List" },
  {taskLinks: "https://secure2.homedepot.com/account/view/order/tracking" , text: "Track Order" },
  {taskLinks: "//www.homedepot.com/c/customer_service" , text: "Help" }
];

const Logo = React.createClass({

})

const Store = React.createClass({

})

const SearchBar = React.createClass({

})

const Account = React.createClass({
  render(){
    return(
      <div><strong>My Account</strong></div>
    )
  }
})  

const Cart = React.createClass({
  render(){
    return(
      <div>
         <a href = "https://www.homedepot.com/mycart/home">Cart | {cartCount} 
          <img src="../public/assets/cart.png"/>
        </a>
      </div>
    )
  }
})

const DropDowns = React.createClass({

})

const MessageBand = React.createClass({
  render(){
    return(
      <div className="col-lg-12" style=padding:10px;padding-right:200px;padding-left:200px;background-color:#f96302;>
        <a  href="http://www.homedepot.com/c/About_Your_Online_Order" style="text-align:center;">
          <strong>Free Shipping On Most Orders of $45 or More ></strong>
        </a>  
      </div>
    )
  }
}) 

export default Header;