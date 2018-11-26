import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'

import moment from 'moment'
import croonersPin from '../images/Pin.png'

class MapComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: {},
    }
  }

  createPin = () => {
    return L.icon({
      iconUrl: croonersPin,
      iconSize: [38, 30],
      iconAnchor: [16, 29],
      popupAnchor: [-3, -76],
    })
  }

  render() {
    if (typeof window !== 'undefined') {
      return (
        <Map
          center={[54.375758, -7.352028]}
          zoom={5.5}
          style={{
            height: '600px',
            marginBottom: '6%',
            width: '100vw',
            marginLeft: 'calc(-50vw + 49%)',
          }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.props.node.map(node => {
            return (
              <Marker
                position={[node.location.lat, node.location.lon]}
                icon={this.createPin()}
                key={node.location.lat}
              >
                <Popup>
                  <strong>{node.theatreName}</strong>
                  <p>{moment(node.date).format('Do MMMM YYYY')}</p>
                  <a
                    href={node.website}
                    target="about_blank"
                    style={{
                      backgroundColor: 'red',
                      color: 'white',
                      textAlign: 'center',
                      padding: '0.5em 0.75em',
                      maxWidth: '60%',
                      height: '35%',
                      margin: '10px',
                      textDecoration: 'none',
                      border: '1px solid red',
                      textTransform: 'uppercase',
                    }}
                  >
                    Book Now
                  </a>
                </Popup>
              </Marker>
            )
          })}

          <div id="map" />
        </Map>
      )
    }
    return null
  }
}

export default MapComponent
