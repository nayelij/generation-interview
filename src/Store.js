import React, { Component } from 'react';


class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      stores: []
    };
  }

  render () {
    return (
     
      <li onClick={() => this.props.click(this.props)}
      key={this.props.key}>
        {this.props.name} 
      </li>
  
    );
  }
}

export default Store;