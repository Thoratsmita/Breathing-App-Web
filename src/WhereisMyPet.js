import React, { Component, useState } from 'react'
import GoogleMapReact from 'google-map-react';
import {HologramLocationAPI, trialAPI} from './coreAPIcalls/hologramAPIcalls';
import AsyncTypeahead from 'react-bootstrap-typeahead';
import { map } from 'lodash';



const AnyReactComponent = ({ text }) => (
    <div style={{
      color: 'white', 
      background: 'grey',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
      {text}
    </div>
  );

class WhereisMyPet extends Component {
    static defaultProps = {
      center: {
        lat: 30.45,
        lng: 80.43
      },
      zoom: 11
    };

    componentDidMount(){
      <HologramLocationAPI/> ? console.log("HologramLocationAPI worked in WhereisMyPet") : console.log("HologramLocationAPI not worked in WhereisMyPet");
    }
  
    render() {
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '80vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBuhUomyWxQBTEeyXUr_7xvq5kU_ghUxE0" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat= {30.453425}
              lng={80.433225}
              text="My pet"
            />
          </GoogleMapReact>
        </div>
      );
    }
  }



/*class WhereisMyPet extends Component {

  componentDidMount(){
    map = new window.google.maps.Map(document.getElementById(map),{
      center: {lat: -6.226996, lng: 106.819894},
      zoom: 10,
      zoomControl: true,
      zoomControlOptions: {
       position: window.google.maps.ControlPosition.RIGHT_CENTER
      },
      scrollwheel: false,
      streetViewControl: false,
      mapTypeControl: false,
      mapTypeId: "roadmap"
     });
    }

    _handleSearch(query) {
      if (!query) {
        return;
      }
      fetch(`https://nominatim.openstreetmap.org/search.php?q=${query}&polygon_geojson=1&format=json`)
        .then(resp => resp.json())
        .then(data => {
          let filterGeoJsonType = data.filter(function(data){
            return data.geojson.type === "MultiPolygon" || data.geojson.type === "Polygon"
          });
          this.setState({options: filterGeoJsonType});
        });
    }

  render(){
    return <AsyncTypeahead
    align="justify"
    multiple
    selected={this.state.selected}
    labelKey="display_name"
    onSearch={_.debounce(this._handleSearch.bind(this), 2000)}
    options={this.state.options}
    placeholder="Search city, ex: tomang or jakarta selatan..."
    renderMenuItemChildren={(option, props, index) => (
        <div onClick={this._onSelectOptions.bind(this, option)}>
          <span>{option.display_name}</span>
      </div>
    )}/>
  }
}*/
  

export default WhereisMyPet;