import React from "react"
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material'
import { IProduct } from '../../../../typesScript/product'

type Props = {
  item: IProduct
}

const ProductCard: React.FC<Props> = ({ item: { name, description, price, img } }) => {
  return <Grid item xs={12} sm={6} md={6}>
    <Card elevation={5}>
      <Stack direction='row' alignItems='center' >
        <CardMedia
          component="img"
          image={img}
          alt="Біг Мак"
          sx={{ maxWidth: '40%' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { name }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { description }
          </Typography>
        </CardContent>
      </Stack>
      <CardActions sx={{ justifyContent: 'space-between', padding: '10px 20px' }}>
        <Typography variant="h5" >{ `$${price}` }</Typography>
        <Button variant="outlined">Add to cart</Button>
      </CardActions>
    </Card>
  </Grid>
}

export default ProductCard