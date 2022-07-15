import React from "react"
import { Paper, Stack, Typography } from '@mui/material'

type Props = {
  item: {
    shop: string
    img: string
  }
  handleClick: (shop: string) => void
}

const MarketComponent: React.FC<Props> = ({ item: {shop, img}, handleClick }) => {
  return <Paper onClick={() => handleClick(shop)} elevation={6} sx={{cursor: 'pointer'}}>
    <Stack direction='row' spacing={2} alignItems='center' padding={2} >
      <img src={`./img/${img}`} alt="" width='40px' />
      <Typography variant="h6">
        { shop }
      </Typography>
    </Stack>
  </Paper>
}

export default MarketComponent