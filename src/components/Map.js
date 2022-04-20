import React, { useState } from 'react'
import ReactMapGL, { Marker ,Popup} from 'react-map-gl';
import mapdata from './Maplist'
import getcenter from 'geolib/es/getCenter'
import { GiPositionMarker } from "react-icons/gi";

function Map() {
    const[clicklocation, setclicklocation] = useState({})


    const coor = mapdata.map(result => ({
        longitude: result.long,
        latitude: result.lat
    }))
    const center = getcenter(coor)
    console.log('mapdata', center)
    const [viewport, setViewport] = useState(
        {
            latitude: center.latitude,
            longitude: center.longitude,
            zoom: 8
        }
    )
    return (
        <ReactMapGL
            {...viewport}
            width="100%"
            height="100%"
            mapStyle="mapbox://styles/sannu/cks3izxgr3ity17mvlfirh0j2"
            onViewportChange={(viewport) => setViewport(viewport)}
            mapboxApiAccessToken="pk.eyJ1Ijoic2FubnUiLCJhIjoiY2tzM2I4M3l5MmJqNTJubjhwOG91NmFuaSJ9.7MAi4ftcrgluTqz8CtlSQA"
        >

            {
                mapdata.map((result) => (
                    <div key={result.lat}>
                        <Marker
                            longitude={result.long}
                            latitude={result.lat}
                            offsetLeft={-20}
                            offsetRight={-10}
                        >
                            
                            <GiPositionMarker role="img" aria-label='push-in' onClick={()=>setclicklocation(result)} style={{color:'red',fontSize:'30px'}}/>

                        </Marker>
                        {
                            clicklocation.lat === result.lat ? 
                            <Popup
                            onClose={()=>setclicklocation({})}
                            closeOnClick={true}
                            longitude={result.long}
                            latitude={result.lat}
                            >
                                {result.title}

                            </Popup>:null
                        }

                    </div>

                ))
            }


        </ReactMapGL>
    )
}

export default Map
