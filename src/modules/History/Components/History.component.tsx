import React from "react"
import { Box, Button, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { MyInput, PhoneInput } from '../../../Components'
import type { IProduct } from '../../../typesScript/product'
import { CardComponent } from './'

interface IProps {
  users?: {
    _id: string
    products: IProduct[]
    totalPrice: string
  }[] | []
  isSubmit: boolean
}

const HistoryComponent: React.FC<IProps> = ({ users, isSubmit }) => {
  return <Container maxWidth="xl">
    <Box marginTop={6} padding={2}>
      <Paper elevation={5} sx={{ padding: '20px' }}>
        <Paper elevation={5} sx={{ padding: '20px' }}>
          <Box maxWidth={'360px'} margin={'0 auto'} padding={'20px'}>
            <MyInput name='order' label="Order" />
            <MyInput name='email' label="email" />
            <PhoneInput name='phone' />
            <Stack direction='row' justifyContent='flex-end' >
              <Button type='submit' variant="outlined">Submit</Button>
            </Stack>
          </Box>
        </Paper>
        {
          isSubmit && <Paper elevation={5} sx={{ padding: '20px', marginTop: '20px', maxHeight: '50vh', overflowY: 'auto' }}>
            {
              users && users?.length !== 0 ?
                users.map(i => <Paper elevation={3} sx={{ padding: '20px', margin: '30px 0' }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                      {i.products.map((item, index) => <CardComponent key={index} product={item} />)}
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Stack alignItems='center' justifyContent='center' height='100%'>
                        <Typography variant="h6">Total Price: ${i.totalPrice}</Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Paper>)
                :
                <Typography variant="h5" padding={2}>Nothing found</Typography>
            }
          </Paper>
        }
      </Paper>
    </Box>
  </Container>
}

export default HistoryComponent