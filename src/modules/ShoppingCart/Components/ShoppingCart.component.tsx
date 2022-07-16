import React from "react"
import { Controller, useFormContext } from "react-hook-form"
import { Box, Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import { IProduct } from '../../../typesScript/product'
import { Card } from '../../'

type Props = {
  totalPrice: number
  products: {
    product: IProduct,
    sum: number
  }[] | []
}

const ShoppingCartComponent: React.FC<Props> = ({ products, totalPrice }) => {
  const { control, formState: { errors } } = useFormContext()

  return <Box marginTop={6} padding='20px'>
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} sm={12} md={6}>
        <Paper elevation={5} sx={{ padding: '20px' }}>
          <Controller
            name={'address'}
            control={control}
            render={({ field }) => <TextField
              {...field}
              label="Address"
              variant="outlined"
              error={!!errors['address']}
              sx={{ width: '100%', margin: '10px 0' }}
            />}
          />
          <Controller
            name={'email'}
            control={control}
            render={({ field }) => <TextField
              {...field}
              label="Email"
              variant="outlined"
              error={!!errors['email']}
              sx={{ width: '100%', margin: '10px 0' }}
            />}
          />
          <Controller
            name={'phone'}
            control={control}
            render={({ field }) => <TextField
              {...field}
              label="Phone"
              variant="outlined"
              error={!!errors['phone']}
              sx={{ width: '100%', margin: '10px 0' }}
            />}
          />
          <Controller
            name={'name'}
            control={control}
            render={({ field }) => <TextField
              {...field}
              label="Name"
              variant="outlined"
              error={!!errors['name']}
              sx={{ width: '100%', margin: '10px 0' }}
            />}
          />
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