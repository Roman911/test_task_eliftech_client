import React from "react"
import { GoogleMap } from '@react-google-maps/api'
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete"
import { Box, Button, Stack, Typography } from '@mui/material'
import { useTypedSelector } from '../../../../hooks'
import { GoogleMapsComponents, PlacesComponent } from '../../Components'

type LatLngLiteral = google.maps.LatLngLiteral
type DirectionsResult = google.maps.DirectionsResult
type MapOptions = google.maps.MapOptions

const GoogleMaps: React.FC = () => {
  const { location } = useTypedSelector(state => state.shop)
  const [settlement, setSettlement] = React.useState<LatLngLiteral>()
  const [directions, setDirections] = React.useState<DirectionsResult>()
  const mapRef = React.useRef<GoogleMap>()
  const center = React.useMemo<LatLngLiteral>(() => {
    if (settlement) {
      return settlement
    } else {
      return { lat: 50.449851, lng: 30.524150 }
    }
  }, [settlement])
  const options = React.useMemo<MapOptions>(() => ({
    disableDefaultUI: true,
    clickableIcons: false
  }), [])

  const { value, setValue, suggestions: { status, data }, clearSuggestions } = usePlacesAutocomplete()

  const handleSelect = async (val: string) => {
    setValue(val, false)
    clearSuggestions()

    const result = await getGeocode({ address: val })
    const { lat, lng } = getLatLng(result[0])
    setSettlement({ lat, lng })
  }

  const handleClick = React.useCallback((event: any) => {
    const location = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    }
    setSettlement(location)
  }, [])

  const fethcDirections = () => {
    if (!settlement) return;

    const service = new google.maps.DirectionsService()
    service.route(
      {
        origin: location,
        destination: settlement,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === 'OK' && result) {
          setDirections(result)
        }
      }
    )
  }

  const onLoad = React.useCallback((map: any) => (mapRef.current = map), [])

  return <Box>
    <PlacesComponent value={value} setValue={setValue} status={status} data={data} handleSelect={handleSelect} />
    <GoogleMapsComponents
      options={options}
      center={center}
      onLoad={onLoad}
      location={location}
      settlement={settlement}
      handleClick={handleClick}
      directions={directions}
    />
    <Stack direction='row' justifyContent='space-between' marginTop={1}>
      <Typography variant="h6">
        {directions && directions.routes[0].legs[0].duration?.text}
      </Typography>
      <Button onClick={() => fethcDirections()} variant="outlined">Direction</Button>
    </Stack>
  </Box>
}

export default React.memo(GoogleMaps)