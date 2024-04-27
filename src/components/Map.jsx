import React, { useState, useEffect} from 'react';
import ReactMapGL, { FullscreenControl, GeolocateControl, NavigationControl } from 'react-map-gl';

function Map() {
  const [viewState, setViewState] = useState({
    // longitude: 80.0,
    // latitude: 13.0,
    // zoom: 9.5
    longitude: -73,
    latitude: 42,
    zoom: 7.5
  });

  const [start, setStart] = useState([-73, 42]);
  const [end, setEnd] = useState([-73, 42.4]);
  const[coords, setCoords] = useState([])
  useEffect(() => {
    getRoute();
  }, []);

  const getRoute = async () => {
    try {
      const response = await fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=pk.eyJ1Ijoic2hhc2h3YXRzaGFydiIsImEiOiJjbHY4OHF3ZGUwa2JhMmtqenowdmhrbGVvIn0.NpsjO1I7IOAIhINELdtbdg`);
      const data = await response.json();
      const coords = data.routes[0].geometry.coordinates
      console.log(coords);
      setCoords([coords]);
    } catch (error) {
      console.error('Error fetching route:', error);
    }
  };

  return <ReactMapGL
  {...viewState}
  onMove={evt => setViewState(evt.viewState)}
  mapStyle='mapbox://styles/mapbox/standard'
  mapboxAccessToken='pk.eyJ1Ijoic2hhc2h3YXRzaGFydiIsImEiOiJjbHY4OHF3ZGUwa2JhMmtqenowdmhrbGVvIn0.NpsjO1I7IOAIhINELdtbdg'
  style = {{width:"100vw", height:"100vh"}}
  >
    <Source>
    <Layer/>
    </Source>
    
    <GeolocateControl/>
    <FullscreenControl/>
    <NavigationControl/>
  </ReactMapGL>;
}

export default Map;
