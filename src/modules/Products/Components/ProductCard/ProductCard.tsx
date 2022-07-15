import React from "react"
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material'
import { Check } from '@mui/icons-material'
import { IProduct } from '../../../../typesScript/product'

type Props = {
  item: IProduct
  handleClick: (product: IProduct) => void
}

const ProductCard: React.FC<Props> = ({ item, handleClick }) => {
  const [ isActive, setActive ] = React.useState(false)
  const { name, description, price, img } = item

  const click = () => {
    setActive(prev => !prev)
    handleClick(item)
  }

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
        <Button onClick={click} variant="outlined" disabled={ isActive } endIcon={isActive && <Check />}>Add to cart</Button>
      </CardActions>
    </Card>
  </Grid>
}

export default ProductCard