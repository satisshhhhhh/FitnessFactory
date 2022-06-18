import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';

import Logo from  '../assets/images/MyProjectLogo.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="20px" alignItems="center" px="10px" pt="24px">
        <img src={Logo} alt="logo" />
        <Typography variant="h6"x  >
        Made with ❤️ by Satish Panchal
        </Typography>
        <Box mb="20px" style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}} width="240px">
          <a style={{color:"black"}} href="http://www.github.com/satisshhhhhh" target="_blank"><GitHub fontSize="large"/></a>
          <a style={{color:"blue"}} href="https://www.linkedin.com/in/satish-panchal-26221b203/" target="_blank"><LinkedIn fontSize="large" /></a>
          <a style={{color:"purple"}} href="https://www.instagram.com/satisshhhhhh/" target="_blank"><Instagram fontSize="large" /></a>
        </Box>
      </Stack>
    </Box>
  )
}

export default Footer