'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Container } from '@mui/material'
import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery'
import LaunchIcon from '@mui/icons-material/Launch';


<style>
     
</style>

const OfficeOperation = () => {
    const mobile = useMediaQuery('(max-width: 576px)');

  return (
    <div>
   <Box sx={{ display: 'flex', padding: '32px 5%', flexDirection: 'column', background: '#0f212b' }}>
                <Container>
                <Typography sx={{ color: '#fff', margin: '0px 0px 20px', fontSize: mobile ? '28px' : '62px', fontWeight: '700',lineHeight:"1" }}>Office of Operations</Typography>
                <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center',gap:"10px" }} href='/information-on-how-to-file-a-complaint'>
                <span style={{width:"18px",height:"2px",backgroundColor:"#fff",marginBottom:"2px"}}></span>
                    <Typography sx={{ padding: '0px 0px 0xp 20px', color: "#7DDFFF", fontSize: "16px", textTransform: "none", '&:hover': { color: "#fff" } }}>Assistant Chief Robert Marino</Typography>
                </Link>
                </Container>
            </Box>

            <Container>
                <Grid container sx={{marginTop:"70px"}}>
                    <Grid item lg={8}>
                    <Typography sx={{fontSize:"18px"}}>
                The Department’s general policing activities are managed through the Office of Operations (OO), which is responsible for a majority of the Department’s sworn personnel. In addition to South Bureau Homicide Division, LAX Field Services Division, and the
                 Department Homeless Coordinator, there are four Bureaus within OO, which are further divided into 21 geographic areas.
                </Typography>
                    </Grid>
               
                </Grid>


       <Link href="#" style={{textDecoration:"none"}}>
      <Typography sx={{fontSize:"18px",marginTop:"70px",color:"#e73f15","&:hover":{color:"#798c96"}}}>  Office of Operations Orders and Notices </Typography>
      </Link>
                
               
               
            </Container>
        </div>
  )
}

export default OfficeOperation