import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import croonersPin from '../images/Pin.png'
import Info from './InfoWindowContent'

export class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.onMapClicked = this.onMapClicked.bind(this)
  }

  onMarkerClick = (props, marker, e) => {
    props.map.setCenter(marker.getPosition())
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })
  }

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={6}
        style={{
          height: '600px',
          width: '100%',
          position: 'relative',
        }}
        initialCenter={{
          lat: 52.578945,
          lng: -0.927839,
        }}
        styles={[
          {
            featureType: 'all',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#000000' }],
          },
          {
            featureType: 'administrative',
            elementType: 'geometry.fill',
            stylers: [{ color: '#000000' }],
          },
          {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#144b53' }, { lightness: 14 }, { weight: 1.4 }],
          },
          {
            featureType: 'landscape',
            elementType: 'all',
            stylers: [{ color: '#f7b300' }],
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#f7b300' }, { lightness: 5 }],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [{ color: '#f7b300' }],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#f7b300' }, { lightness: 25 }],
          },

          {
            featureType: 'water',
            elementType: 'all',
            stylers: [{ color: '#0067a6' }],
          },
        ]}
        onClick={this.onMapClicked}
      >
        {this.props.node.map(tourDate => (
          <Marker
            name={tourDate.theatreName}
            position={{
              lat: tourDate.location.lat,
              lng: tourDate.location.lon,
            }}
            date={tourDate.date}
            key={tourDate.theatreName}
            url={tourDate.website}
            onClick={this.onMarkerClick}
            icon={{
              url: croonersPin,
              anchor: new this.props.google.maps.Point(16, 29),
              scaledSize: new this.props.google.maps.Size(38, 30),
            }}
          />
        ))}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          style={{ color: 'black' }}
        >
          <Info
            title={this.state.selectedPlace.name}
            date={this.state.selectedPlace.date}
            url={this.state.selectedPlace.url}
          />
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
})(MapContainer)
