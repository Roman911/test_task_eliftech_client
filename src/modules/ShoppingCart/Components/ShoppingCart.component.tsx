import React from "react"
import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material'
import { IProduct } from '../../../typesScript/product'
import { Card } from '../../'
import { MyInput, PhoneInput } from '../../../Components'

type Props = {
  totalPrice: number
  products: {
    product: IProduct,
    sum: number
  }[] | []
}

const ShoppingCartComponent: React.FC<Props> = ({ products, totalPrice }) => {
  return <Box marginTop={6} padding='20px'>
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} sm={12} md={6}>
        <Paper elevation={5} sx={{ padding: '20px' }}>
          <MyInput name='address' label="Address" />
          <MyInput name='email' label='Email' />
          <PhoneInput name='phone' />
          <MyInput name='name' label="Name" />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Paper elevation={5} sx={{ padding: '20px' }}>
          <Box maxHeight='70vh' sx={{ overflowY: 'auto', padding: '0 10px' }}>
            {
              products.map(i => <Card key={i.product._id} item={i.product} isCart={true} sum={i.sum} />)
            }
          </Box>
          <Stack direction='row' justifyContent='space-between' marginTop={2}>
            <Typography variant="h5" >
              Total Price: ${totalPrice}
            </Typography>
            <Button type='submit' variant="contained">submit</Button>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  </Box>
}

export default ShoppingCartComponent