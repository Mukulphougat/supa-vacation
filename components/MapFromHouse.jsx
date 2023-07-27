"use client"
import {Map} from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MapFromHouse(){
    const handleClick=(event)=>{
        console.log(event.lngLat.lng+" "+event.lngLat.lat)
    }
    return (
        <div className={"w-1/2 my-12 flex flex-col justify-around border-2 border-transparent max-h-screen rounded-xl"}>
                <Map
                    initialViewState={{
                        longitude: 76.706637,
                        latitude: 28.900605,
                        zoom: 3.5
                    }}
                    mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
                    mapStyle="mapbox://styles/mukulphougat/clhdlw3nw015701prhs5l56kq"
                    onClick={(event)=>handleClick(event)}
                >

                </Map>
        </div>
    )
}