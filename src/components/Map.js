import React, { Component } from 'react'
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import styled from 'styled-components'
import moment from 'moment'
import croonersPin from '../images/Pin.png'

const MapWrapper = styled.div`
  @media screen and (max-width: 575px) {
    display: hidden;
  }
`

class MapComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: {},
    }
  }

  createPin = () => {
    // return L.icon({
    //   iconUrl: croonersPin,
    //   iconSize: [38, 30],
    //   iconAnchor: [16, 29],
    //   popupAnchor: [-3, -76],
    // })
  }

  render() {
    return (
      <Map center={[54.375758, -7.352028]} zoom={5.5}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.props.node.map(node => {
          return (
            <Marker
              position={[node.location.lat, node.location.lon]}
              //   icon={this.createPin()}
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
        <MapWrapper>
          <div
            id="map"
            style={{
              height: '600px',
              marginBottom: '6%',
              width: '100vw',
              marginLeft: 'calc(-50vw + 49%)',
            }}
          />
        </MapWrapper>
      </Map>
    )
  }
}

export default MapComponent
