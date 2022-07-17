import React from "react"
import { useLoadScript } from '@react-google-maps/api'
import { GoogleMaps } from './GoogleMaps'

const Google: React.FC = () => {
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_KAY || ''
  const { isLoaded } = useLoadScript({
    googleMapsApiKey,
    libraries: ['places']
  })

  if (!isLoaded) return <p>Loading...</p>

  return <GoogleMaps />
}

export default React.memo(Google)