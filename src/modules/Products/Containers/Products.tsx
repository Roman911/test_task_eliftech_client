import React from "react"
import { useQuery } from '@apollo/client'
import { Box, Grid, Paper } from '@mui/material'
import { PRODUCTS } from './queries'
import { ProductCard } from '../Components'

const arr = ['1', '2', '3', '4', '5', '6', '7', '8']

const Products: React.FC = () => {
  const { loading, error, data } = useQuery(PRODUCTS, { variables: { shop: "mc Donalds" } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  console.log(loading, data)

  return <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {arr.map(i => <ProductCard key={i} />)}
  </Grid>
}

export default Products