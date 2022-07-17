import React from "react"
import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import type { IProduct } from '../../../../typesScript/product'

type Props = {
  product: IProduct
}

const CardComponent: React.FC<Props> = ({ product: { img, name, price } }) => {
  return <Card elevation={5} sx={{ marginBottom: '20px' }}>
    <Stack direction='row' alignItems='center' >
      <CardMedia
        component="img"
        image={img}
        alt={name}
        sx={{ maxWidth: '20%' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="h6" >{`Price $${price}`}</Typography>
      </CardContent>
    </Stack>
  </Card>
}

export default React.memo(CardComponent)