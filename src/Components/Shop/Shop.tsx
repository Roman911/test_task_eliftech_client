import React from "react"
import { Box, Drawer, Paper, Stack, Typography } from '@mui/material'
import { Markets, Products } from '../../modules'

const Shop: React.FC = () => {
  return <Box marginTop={6}>
    <Drawer
    variant="permanent"
    anchor="left"
  >
    <Box sx={{width: '260px', padding: '68px 20px'}}>
      <Typography variant="h5" textAlign='center' marginBottom={2}>
        Shops:
      </Typography>
      <Stack spacing={2}>
        <Markets />
      </Stack>
    </Box>
  </Drawer>
    <Box padding='20px 20px 68px 320px'>
      <Paper elevation={5} sx={{ padding: '20px' }}>
        <Products />
      </Paper>
    </Box>
  </Box>
}

export default Shop