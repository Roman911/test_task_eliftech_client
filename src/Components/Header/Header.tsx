import React from "react"
import { Link, useLocation } from "react-router-dom"
import { Box, Container, Tab, Tabs } from '@mui/material'
import { linksItem } from './links'

//type Props = {
  //handleChange: (event: React.SyntheticEvent, newValue: number) => void
  //value: number
//}

const Header: React.FC = () => {
  const { pathname } = useLocation()
  const [value, setValue] = React.useState(0)

  const links = linksItem.map(i => {
    return <Tab key={i.id} label={i.label} component={Link} to={i.path} />
  })

  React.useEffect(() => {
    linksItem.forEach(i => {
      if(i.path === pathname) setValue(i.id)
    })
  }, [pathname])

  return <Box sx={{ width: '100%', position: 'fixed', top: 0, left: 0, background: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Container maxWidth="xl">
        <Tabs value={value} aria-label="lab API tabs example">
          { links }
        </Tabs>
      </Container>
    </Box>
  </Box>
}

export default Header