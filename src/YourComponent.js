import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import Geocode from "react-geocode";
import  './YourComponent.css';
import StoreList from './StoreList';
import data from './store_directory.json';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


export  class YourComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      stores: []
    };
    this.onListClick = this.onListClick.bind(this);
    
  }
 
  onMarkerClick = (props, marker, e) =>
  this.setState({
    count: this.state.count +1,
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true,
    stores: this.state.stores.concat([{id: this.state.count , name: props.name}])
  });
  
  onListClick(props) {
    var filteredItems =  this.state.stores.filter(function (store) {
      return (store.name !== props.name);
    });
    this.setState({
      stores: filteredItems
    });
}

getGeocode(Address) {
	Geocode.fromAddress(Address).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log({'lat':lat,'long':lng});
    },
    error => {
      console.error(error);
    }
  );
}
  render() { 
    return (   
    <div >       
      <Container>
        <Row>
        <Col  md="auto">
            <ul className='theList'>
              <StoreList stores={this.state.stores} func={this.onListClick}/>
            </ul>
          </Col>
          <Col  md="auto">
              <Map google={this.props.google}
                  initialCenter={{lat:  19.51, lng: -99.32}}
                  style={{width: '50%', height: '80%'}}
                  className={'map'}
                  zoom={10}>
              {data.map(storesList => 
                  <Marker onClick={this.onMarkerClick}
                              name={storesList.Name}
                              title={storesList.Name}
                              position={{lat:storesList.lat,lng:storesList.lng}} />)}
                </Map>
          </Col>
         
          
          
        </Row>
      </Container>            
           
    </div>
    
     
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A')
})(YourComponent)