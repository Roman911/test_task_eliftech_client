import React from "react"
import { Box, Paper } from '@mui/material'
import { Products } from '../../modules'
import { Shops } from '../'

const Shop: React.FC = () => {
  return <Box marginTop={6}>
    <Shops />
    <Box padding='20px 20px 68px 320px'>
      <Paper elevation={5} sx={{ padding: '20px' }}>
        <Products />
      </Paper>
    </Box>
  </Box>
}

export default Shop