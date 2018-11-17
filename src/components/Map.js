import React, { Component } from 'react'
import L from 'leaflet'
import moment from 'moment'
import croonersPin from '../images/Pin.png'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: {},
    }
  }
  componentDidMount() {
    this.initiateMap()
  }

  createPin = () => {
    return L.icon({
      iconUrl: croonersPin,
      iconSize: [38, 30],
      iconAnchor: [16, 29],
      popupAnchor: [-3, -76],
    })
  }

  createPopup = singleNode => {
    return `<strong>${singleNode.theatreName}</strong>
    <p>${moment(singleNode.date).format('Do MMMM YYYY')}</p>
    <a href=${singleNode.website} target="about_blank"
    style="background-color: red;
    color: white;
    text-align: center;
    padding: 0.5em 0.75em;
    max-width: 60%;
    height: 35%;
    margin: 10px;
    text-decoration: none;
    border: 1px solid red;
    text-transform: uppercase;">Book Now</a>`
  }

  initiateMap = () => {
    const { edges } = this.props
    const map = L.map('map', {
      center: [54.375758, -7.352028],
      zoom: 5.5,
      scrollWheelZoom: false,
    })
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    const node = edges.map(edge => edge.node)
    const icon = this.createPin()
    node.forEach(singleNode => {
      L.marker([singleNode.location.lat, singleNode.location.lon], { icon })
        .bindPopup(this.createPopup(singleNode))
        .addTo(map)
    })
  }

  render() {
    return (
      <div
        id="map"
        style={{
          height: '600px',
          marginBottom: '6%',
          width: '100vw',
          marginLeft: 'calc(-50vw + 49%)',
        }}
      />
    )
  }
}

export default Map
