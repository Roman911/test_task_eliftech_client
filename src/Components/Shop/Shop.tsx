import React from "react"
import { Box } from '@mui/material'
import { Products, Shops } from '../'

const Shop: React.FC = () => {
  return <Box marginTop={6}>
    <Shops />
    <Products />
  </Box>
}

export default Shop