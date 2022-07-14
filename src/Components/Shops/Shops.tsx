import React from "react"
import { Box, Drawer, Paper, Stack, Typography } from '@mui/material'
import mcLogo from '../../assets/mc.jpg'
import kfcLogo from '../../assets/kfc.jpg'

const Shops: React.FC = () => {
  return <Drawer
    variant="permanent"
    anchor="left"
  >
    <Box sx={{width: '260px', padding: '68px 20px'}}>
      <Typography variant="h5" textAlign='center' marginBottom={2}>
        Shops:
      </Typography>
      <Stack spacing={2}>
        <Paper elevation={6}>
          <Stack direction='row' spacing={2} alignItems='center' padding={2} >
            <img src={mcLogo} alt="" width='40px' />
            <Typography variant="h6">Mc Donny</Typography>
          </Stack>
        </Paper>
        <Paper elevation={6}>
          <Stack direction='row' spacing={2} alignItems='center' padding={2} >
            <img src={kfcLogo} alt="" width='40px' />
            <Typography variant="h6">KFC</Typography>
          </Stack>
        </Paper>
        <Paper elevation={6}>
          <Stack direction='row' spacing={2} alignItems='center' padding={2} >
            <img src={kfcLogo} alt="" width='40px' />
            <Typography variant="h6">KFC</Typography>
          </Stack>
        </Paper>
        <Paper elevation={6}>
          <Stack direction='row' spacing={2} alignItems='center' padding={2} >
            <img src={kfcLogo} alt="" width='40px' />
            <Typography variant="h6">KFC</Typography>
          </Stack>
        </Paper>
        <Paper elevation={6}>
          <Stack direction='row' spacing={2} alignItems='center' padding={2} >
            <img src={kfcLogo} alt="" width='40px' />
            <Typography variant="h6">KFC</Typography>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  </Drawer>
}

export default Shops