import React from "react"
import { GoogleMap, DirectionsRenderer } from '@react-google-maps/api'
import { Marker } from '@react-google-maps/api'

type Props = {
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions
  onLoad: any
  settlement?: google.maps.LatLngLiteral
  location: google.maps.LatLngLiteral
  handleClick: (event: any) => void
  directions?: google.maps.DirectionsResult
}

const GoogleMapsComponents: React.FC<Props> = ({ center, options, onLoad, location, settlement, handleClick, directions }) => {
  const [loc, setLoc] = React.useState<google.maps.LatLngLiteral | null>(null)
  React.useEffect(() => setLoc(location), [location])

  return <GoogleMap
    zoom={11}
    center={center}
    mapContainerStyle={{ width: '100%', height: '300px', marginTop: '10px' }}
    options={options}
    onLoad={onLoad}
    onClick={event => handleClick(event)}
  >
    {directions && <DirectionsRenderer directions={directions} />}
    {loc && <Marker position={loc} />}
    {settlement && <Marker position={settlement} />}
  </GoogleMap>
}

export default React.memo(GoogleMapsComponents)