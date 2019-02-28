import React, { Component } from 'react';
import './Main.css';


class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <input type="text" placeholder="Search.." name="search" className="search"
             onChange={this.props.searched} />
      </div>
    );
  }
}

export default Search