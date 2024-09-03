"use client"
import {
    APIProvider,
    Map,
    AdvancedMarker,
    InfoWindow,
    Pin,
} from '@vis.gl/react-google-maps'
import {useState } from 'react';


const GMap = () => {
    const position = { lat: 39.3438, lng: -76.5844 };
    const [open, setOpen] = useState(false)
    const mapKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY !== undefined ? process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY : ""
    const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID !== undefined ? process.env.NEXT_PUBLIC_GOOGLE_MAP_ID : ""
    return (
        <div className='w-full h-full'>
            <APIProvider apiKey={mapKey}>
                <Map defaultZoom={16} center={position} mapId={mapId}>
                    <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                    <Pin background={"grey"} borderColor={'blue'} glyphColor={'yellow'} />
                    {open && <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                        <h1>Welcome to Morgan State University</h1>
                        </InfoWindow>}
                    </AdvancedMarker>


                </Map>
            </APIProvider>
        </div>
    )
}

export default GMap
