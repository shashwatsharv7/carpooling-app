// 1. geojson
const geojson = {
    "type":"FeatureCollection",
    "features":[{
        "type":"feature",
        "geometry":{
            "type":"LineString",
            "coordinates":[
                ...coords
            ]
        }
    }
]
}
//2. start and end point
const startPoint = {
    "type": "FeatureCollection",
    "features":[{
        "type":"feature",
        "geometry":{
                "type": "Point",
                "coordinates": [start]
            }
        }
    ]   
}
//3. endPoint
const endPoint ={
    "type": "FeatureCollection",
    "features" : [{
        "type": "feature",
        "geometry" : {
            "type":"Point",
            "coordinates":[end]
        }
    }
    ]
}

// Layer styles
const lineStyle = {
    id:'roadLayer',
    type: "line",
    layout:{
        "line-join":"round",
        "line-cap":"rount"
    },
    paint:{
        "line-color":"blue",
        "line-width":4,
        "line-opacity":0.75
    }
};

// endStyles
//
const layerEndpoint = {
    id: 'end',
    type: 'circle',
    source: {
        type: 'geojson',
        data: end
    },
    paint: {
        'circle-radius': 10, 
        'circle-color': '#f30'
    }
}

import Bike from '@mui/icons-material/DirectionsBike';
import Drive from '@musi/icone-material/DriveEta';
import Walk from '@mui/icons-material/DirectionsRun';



  mapboxAccessToken='pk.eyJ1Ijoic2hhc2h3YXRzaGFydiIsImEiOiJjbHY4OHF3ZGUwa2JhMmtqenowdmhrbGVvIn0.NpsjO1I7IOAIhINELdtbdg'
const json_data = await fetch('https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries-geojson&access_token=${pk.eyJ1Ijoic2hhc2h3YXRzaGFydiIsImEiOiJjbHY4OHF3ZGUwa2JhMmtqenowdmhrbGVvIn0.NpsjO1I7IOAIhINELdtbdg}');
                                                                                                                                
