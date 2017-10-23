import React, { Component } from 'react';

class SearchBar extends Component { //extends react based component, requiring {Component} as part of the React import.
  constructor (props){
    super(props);
    this.state = { term: 'initial value'};
  }

  render() {
    return (
      <div>  
        value = {this.state.term}
        <input onChange = {event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;