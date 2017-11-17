import React, { Component } from 'react';

class SearchBar extends Component { //extends react based component, requiring {Component} as part of the React import.
  constructor (props){
    super(props);
    this.state = { term: ' What can we help you find today?'};
  }

  

  render() {

    return (
      <div className="search-bar">  
        <input type="text" value = {this.state.term} onChange = {event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;