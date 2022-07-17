import React from "react"
import { Paper, Stack, Typography } from '@mui/material'

type Location = {
  lat: number
  lng: number
}

type Props = {
  item: {
    shop: string
    img: string
    location: Location
  }
  handleClick: ({ shop, location }: { shop: string, location: Location }) => void
  isActive: boolean | string | null
}

const MarketComponent: React.FC<Props> = ({ item: { shop, location, img }, handleClick, isActive }) => {
  const active = (isActive === false) ? 0.5 : 1

  return <Paper onClick={() => handleClick({ shop, location })} elevation={6} sx={{ cursor: 'pointer', opacity: active }}>
    <Stack direction='row' spacing={2} alignItems='center' padding={2} >
      <img src={`./img/${img}`} alt="" width='40px' />
      <Typography variant="h6">
        {shop}
      </Typography>
    </Stack>
  </Paper>
}

export default MarketComponent