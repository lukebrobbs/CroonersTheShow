import React, { useState } from 'react';
import { APIProvider, Map, Marker, InfoWindow } from '@vis.gl/react-google-maps';
import croonersPin from '../images/Pin.png';
import Info from './InfoWindowContent';
import moment from 'moment';

const MapContainer = ({ node }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleMarkerClick = (tourDate) => {
    setSelectedPlace(tourDate);
  };

  const handleInfoWindowClose = () => {
    setSelectedPlace(null);
  };

  return (
    <APIProvider apiKey={process.env.GATSBY_GOOGLE_MAPS_API_KEY}>
      <Map
        zoom={6}
        center={{ lat: 52.578945, lng: -0.927839 }}
        gestureHandling={'greedy'}
        style={{ height: '600px', width: '100%' }}
        mapId={'YOUR_MAP_ID'} // You'll need to create a map style in Google Cloud Console
        onClick={() => setSelectedPlace(null)}
      >
        {node.map(tourDate => {
          if (moment(tourDate.date).isBefore()) return null;
          return (
            <Marker
              key={tourDate.theatreName}
              position={{
                lat: tourDate.location.lat,
                lng: tourDate.location.lon
              }}
              icon={{
                url: croonersPin,
                anchor: { x: 16, y: 29 },
                scaledSize: { width: 38, height: 30 }
              }}
              onClick={() => handleMarkerClick(tourDate)}
            />
          );
        })}

        {selectedPlace && (
          <InfoWindow
            position={{
              lat: selectedPlace.location.lat,
              lng: selectedPlace.location.lon
            }}
            onCloseClick={handleInfoWindowClose}
          >
            <Info
              title={selectedPlace.theatreName}
              date={selectedPlace.date}
              url={selectedPlace.website}
            />
          </InfoWindow>
        )}
      </Map>
    </APIProvider>
  );
};

export default MapContainer;
