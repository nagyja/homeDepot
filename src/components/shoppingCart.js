import React, { Component } from 'react';

//replace "0 items" with a prop
export default class Cart extends React.Component{
	render(){
		return(
			<div id="cart">
				<strong>Cart</strong> <span id="cartVertLine"> | </span>  0 items
				<img src="../src/public/assets/shoppingCart.png" />
			</div>
		)
	}
}
