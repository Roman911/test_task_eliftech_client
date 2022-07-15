import React from "react"
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material'
import { Check } from '@mui/icons-material'
import { IProduct } from '../../../typesScript/product'

type Props = {
  item: IProduct
  handleClick: () => void
  isActive: boolean
}

const CardComponent: React.FC<Props> = ({ item, isActive, handleClick }) => {
  const { name, description, price, img } = item

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
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Stack>
      <CardActions sx={{ justifyContent: 'space-between', padding: '10px 20px' }}>
        <Typography variant="h5" >{`$${price}`}</Typography>
        <Button onClick={handleClick} variant="outlined" endIcon={isActive && <Check color="success" />}>Add to cart</Button>
      </CardActions>
    </Card>
  </Grid>
}

export default CardComponent