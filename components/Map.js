import { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { getCenter } from 'geolib'
import Image from 'next/image'
import 'mapbox-gl/dist/mapbox-gl.css'

function MapReact({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({})
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }))

  const center = getCenter(coordinates)

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100vh',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  })

  return (
    <>
      <ReactMapGL
        mapStyle="mapbox://styles/mtrunzo/cl9b5n6wk003v14oynj26iu51"
        mapboxAccessToken={process.env.mapBox_key}
        {...viewport}
        onMove={(e) => setViewport(e.viewState)}
      >
        {searchResults.map((result) => (
          <div key={result.long}>
            <Marker longitude={result.long} latitude={result.lat}>
              <p
                role="img"
                onClick={() => setSelectedLocation(result)}
                className="cursor-pointer text-2xl animate-bounce"
                aria-label="push-pin"
              >
                📌
              </p>
            </Marker>
            {selectedLocation.long === result.long ? (
              <Popup
                onClose={() => setSelectedLocation({})}
                closeOnClick={false}
                latitude={result.lat}
                longitude={result.long}
              >
                <div className="flex flex-col items-center">
                  <p>{result.title}</p>
                  <p className="text-red-400 font-semibold text-md">
                    {result.total}
                  </p>
                </div>
              </Popup>
            ) : (
              false
            )}
          </div>
        ))}
      </ReactMapGL>
    </>
  )
}

export default MapReact
