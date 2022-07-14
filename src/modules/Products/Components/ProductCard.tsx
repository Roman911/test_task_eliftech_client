import React from "react"
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material'
import bigMac from '../../../assets/BigMac.jpg'

const ProductCard: React.FC = () => {
  return <Grid item xs={12} sm={6} md={6}>
    <Card elevation={5}>
      <Stack direction='row' alignItems='center' >
        <CardMedia
          component="img"
          image={bigMac}
          alt="Біг Мак"
          sx={{ maxWidth: '40%' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Big Mac
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Two 100% beef patties, a slice of cheese, lettuce, onion and pickles. And the sauce. That unbeatable, tasty Big Mac® sauce. You know you want to.
          </Typography>
        </CardContent>
      </Stack>
      <CardActions sx={{ justifyContent: 'space-between', padding: '10px 20px' }}>
        <Typography variant="h5" >$4.99</Typography>
        <Button variant="outlined">Add to cart</Button>
      </CardActions>
    </Card>
  </Grid>
}

export default ProductCard