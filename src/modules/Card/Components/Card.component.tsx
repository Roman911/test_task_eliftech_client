import React from "react"
import { Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Stack, Typography } from '@mui/material'
import { Check } from '@mui/icons-material'
import { IProduct } from '../../../typesScript/product'

type Props = {
  item: IProduct
  handleClick: () => void
  handleClickInc: () => void
  handleClickDec: () => void
  isActive: boolean
  isCart?: boolean
  sum?: number
}

const CardComponent: React.FC<Props> = ({ item, isActive, handleClick, handleClickInc, handleClickDec, isCart, sum }) => {
  const { name, description, price, img } = item

  return <Grid item xs={12} sm={isCart ? 12 : 6} md={isCart ? 12 : 6} marginBottom={isCart ? 2 : 0}>
    <Card elevation={5}>
      <Stack direction='row' alignItems='center' >
        <CardMedia
          component="img"
          image={img}
          alt={name}
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
        {
          isCart ?
            <Stack direction='row' alignItems='center'>
              <Button onClick={handleClickDec} variant="text">-</Button>
              <Divider orientation="vertical" />
              <Typography variant="button">
                {sum}
              </Typography>
              <Divider orientation="vertical" />
              <Button onClick={handleClickInc} variant="text">+</Button>
            </Stack> :
            <Button onClick={handleClick} variant="outlined" endIcon={isActive && <Check color="success" />}>Add to cart</Button>
        }
      </CardActions>
    </Card>
  </Grid>
}

export default CardComponent