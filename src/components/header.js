import React, { Component } from 'react';

class Header extends Component { //extends react based component, requiring {Component} as part of the React import.
  
  constructor (props){
    super(props);
    this.state = { term: 'initial value'};
  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Row>
              <topRightLinks links={this.props.links}/>
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
            </Row>
          </div>
        </div>
      </nav>


    );
  }
}

export default Header;



var topRightLinks = React.createClass({
  render(){
    return(
      var topLinks = this.props.links.map(function(link){
        if(link.active){
          active = true;
        }


      <li></li>

    )
  }  
});

var Logo = React.createClass({
  render(){
    return (
      <a className="navbar-brand" href="/" src="/public/asets/homeDespotLogo" alt="The Home Despot"></a>
    ); 
  }  
});

var Store = React.createClass({
  render(){
    return(
    )
  }  
});

var SearchBar = React.createClass({
  render(){
    return(
      <div id="theSearchBar">
        value = {this.state.term}
        <input onChange = {event => this.setState({ term: event.target.value })} />
      </div>
    )
  }  
});

var Account = React.createClass({
  render(){
    return(

    )
  }  
});

var Cart = React.createClass({
  render(){
    return(
      <a className="" href="https://www.homedepot.com/mycart/home">Cart</a>
    )
  }  
});

var DropDowns = React.createClass({
  render(){
    return(
      var active = false;
      var links = this.props.links.map(function(link){
        if(link.active){
          active = true;
        }
        return (
          <NavLink linkTo={link.linkTo} text={link.text} active={link.active} />
        );
      });
      return (
        <li className={"dropdown " + (active ? "active" : "")}>
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            {this.props.text}
            <span className="caret"></span>
          </a>
          <ul className="dropdown-menu">
            {links}
          </ul>
        </li>
      );
    )
  }  
});

var shippingLink = React.createClass({
  render(){
    return(
      <div onClick={this.handleClick.bind(this)}>
        Free Shipping on Most Orders of $45 or More
      </div>
    )
  }  
});



//set data and links
var navbar = {};
navbar.brand = 
  {linkTo: "#", text: "Navigation"};
navbar.links = [
  {dropdown: true, text: "All Departments", links: [
    {linkTo: "#", text: "Dropdown Link 1"},
    {linkTo: "#", text: "Dropdown Link 2", active: true}
  ]},
  {dropdown: true, text: "Shop by Room", links: [
    {linkTo: "#", text: "Dropdown Link 1"},
    {linkTo: "#", text: "Dropdown Link 2", active: true}
  ]},
  {dropdown: true, text: "DIY Projects & Ideas", links: [
    {linkTo: "#", text: "Dropdown Link 1"},
    {linkTo: "#", text: "Dropdown Link 2", active: true}
  ]},
  {dropdown: true, text: "Home Services", links: [
    {linkTo: "#", text: "Dropdown Link 1"},
    {linkTo: "#", text: "Dropdown Link 2", active: true}
  ]},
  {linkTo: "https://www.homedepot.com/c/Savings_Center", text: "Special Offers"},
  {linkTo: "http://localad.homedepot.com/HomeDepotSD2/LocalAd?storeid=2398986#!/store/2398986/dynamicpages/1433?currentpagenumber=1", text: "Local Ad"},
];



















<div className="collapse navbar-collapse" id="navbar-collapse">
            <NavMenu links={this.props.links} />
          </div>

          <Row>
            <ul className="nav navbar-nav navbar-right" id="topRight">
              <li onClick={this.handleClick.bind(this)}>Store Finder</li>
              <li onClick={this.handleClick.bind(this)}>Truck & Tool Rental</li>
              <li onClick={this.handleClick.bind(this)}>For the Pro</li>
              <li onClick={this.handleClick.bind(this)}>Gift Cards</li>
              <li onClick={this.handleClick.bind(this)}>Credit Service</li>
              <li onClick={this.handleClick.bind(this)}>My List</li>
              <li onClick={this.handleClick.bind(this)}>Track Order</li>
              <li onClick={this.handleClick.bind(this)}>Help</li>
            </ul>
          </Row>
          <Row>
            <div>
              LOGO
            </div>
            <div>
              To see Inventory
            </div>
            <div id="theSearchBar">
              value = {this.state.term}
              <input onChange = {event => this.setState({ term: event.target.value })} />
            </div>
            <div>
              My ACCOUNT
            </div>
            <div>
              CART
            </div>
          </Row>
          <Row>
            <ul>
            </ul>
          </Row>
          
          <Row>
            <div onClick={this.handleClick.bind(this)}>
              shipping: 'Free Shipping on Most Orders of $45 or More'
            </div>
          </Row>
          
        </div>
      </nav>
    );
  }
}
      //TOP RIGHT LINK LIST
      //LOGO
      //CHOOSE STORE POPUP
      //SEARCH BAR
      //ACCOUNT
      //CART
      //LIST OF DROP DOWNS & LOCAL AD LINK
      //FREE SHIPPING LINK






















      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavBrand linkTo={this.props.brand.linkTo} text={this.props.brand.text} />
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <NavMenu links={this.props.links} />
          </div>
        </div>
      </nav>
    );
  }
});



//create constituant classes















     <div>Logo</div>

      <div>  
        value = {this.state.term}
        <input onChange = {event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}


