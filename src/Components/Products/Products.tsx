import React from "react"
import { Box, Grid, Paper } from '@mui/material'
import { ProductCard } from './'

const arr = ['1', '2', '3', '4', '5', '6', '7', '8']

const Products: React.FC = () => {
  return <Box padding='20px 20px 68px 320px'>
    <Paper elevation={5} sx={{ padding: '20px' }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {arr.map(i => <ProductCard key={i} />)}
      </Grid>
    </Paper>
  </Box>
}

export default Products