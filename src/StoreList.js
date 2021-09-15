import React, { Component } from 'react'
import Store from './Store'


class StoreList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      stores: []
    };
  }
  render () {
    return (
        <ul>
          <h1>MY FAVORITE STORES</h1>
          {this.props.stores.map(u => {
            return (
              <Store
                key={u.id}
                name={u.name}
                click={this.props.func}
              />
        
            );
          })}
        </ul>
    );
  }
}

export default StoreList;