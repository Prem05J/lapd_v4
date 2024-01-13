'use client'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import Link from 'next/link'
import LaunchIcon from '@mui/icons-material/Launch';
import useMediaQuery from '@mui/material/useMediaQuery'
import { Grid } from '@mui/material'
import global from "../../global.module.css"
import Container from '@mui/material/Container'

const JoinTeam = () => {
  const mobile = useMediaQuery('(max-width: 576px)');
  return (
    <>
      <Box sx={{ display: 'flex', padding: '25px', flexDirection: 'column', background: '#0f212b' }}>
        <Container>
         
        <Typography sx={{  color: '#fff', fontSize: mobile ? '18px' : '22px' }} className={global.fadeInUp}>Become a Police Officer, Candidate Advancement Program (CAP), Rehires</Typography>
        <Typography className={global.fadeInUp} sx={{ color: '#fff', fontSize: mobile ? '30px' : '62px', fontWeight: '700' }}>Join LAPD</Typography>
        <Link className={global.fadeInUp} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} href='https://www.joinlapd.com/'>
          <LaunchIcon sx={{ fontSize: 'large', color: '#fff', marginRight: '5px' }} />
          <Typography sx={{  color: "#7DDFFF", fontSize: "16px", textTransform: "none", '&:hover': { color: "#fff" } }}>Join the LAPD</Typography>
        </Link>
       
        </Container>
      </Box>


         <Container fixed>
      <Grid container sx={{marginTop:"60px"}}>
        <Grid item xs={12} sm={10} md={6}>
          <Box className={global.fadeInUp} sx={{ padding: '45px', background: '#ebf4f7'}}>
            <Typography sx={{ fontSize: '26px', fontWeight: '700', marginBottom: '20px' }}>Join the LAPD</Typography>
            <ul style={{listStyleType: 'none', paddingLeft: '0'}}>
              <li style={{margin: '15px 0px'}}>
                <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} href='https://www.joinlapd.com/?gclid=Cj0KCQjwpImTBhCmARIsAKr58cwW4uEGHtkyefbch7M0wVxtCxlVnWcyZs3_pXwIwytkGXzycl4W8PMaAlXwEALw_wcB' target="_blank">
                  <LaunchIcon sx={{ fontSize: 'large', color: '#000', marginRight: '5px' }} />
                  <Typography sx={{ padding: '0px 0px 0xp 20px', color: "#e73f15", fontSize: "16px", textTransform: "none", '&:hover': { color: "#798c96" } }}>Become a Sworn Officer</Typography>
                </Link>
              </li>
              <li style={{margin: '15px 0px'}}>
                <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} href='/candidate-advancement-program/'>
                   <Typography sx={{ padding: '0px 0px 0xp 20px', color: "#e73f15", fontSize: "16px", textTransform: "none", '&:hover': { color: "#798c96" } }}>Candidate Advancement Program (CAP)</Typography>
                </Link>
              </li>
              <li style={{margin: '15px 0px'}}>
                <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} href='https://personnel.lacity.gov/index.html' target="_blank">
                  <LaunchIcon sx={{ fontSize: 'large', color: '#000', marginRight: '5px' }} />
                  <Typography sx={{ padding: '0px 0px 0xp 20px', color: "#e73f15", fontSize: "16px", textTransform: "none", '&:hover': { color: "#798c96" } }}>City of Los Angeles Personnel Department</Typography>
                </Link>
              </li>
              <li style={{margin: '15px 0px'}}>
                <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} href='http://per.lacity.org/' target="_blank">
                  <LaunchIcon sx={{ fontSize: 'large', color: '#000', marginRight: '5px' }} />
                  <Typography sx={{ padding: '0px 0px 0xp 20px', color: "#e73f15", fontSize: "16px", textTransform: "none", '&:hover': { color: "#798c96" } }}>Civilian Employment Opportunities</Typography>
                </Link>
              </li>
              <li style={{margin: '15px 0px'}}>
                <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} href='href="http://per.lacity.org/' target="_blank">
                  <LaunchIcon sx={{ fontSize: 'large', color: '#000', marginRight: '5px' }} />
                  <Typography sx={{ padding: '0px 0px 0xp 20px', color: "#e73f15", fontSize: "16px", textTransform: "none", '&:hover': { color: "#798c96" } }}>Rehired Candidates</Typography>
                </Link>
              </li>
              <li style={{margin: '15px 0px'}}>
                <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} href='/reserve-police-officer-program'>
                <Typography sx={{ padding: '0px 0px 0xp 20px', color: "#e73f15", fontSize: "16px", textTransform: "none", '&:hover': { color: "#798c96" } }}>Reserve Corps</Typography>
                </Link>
              </li>
              
            </ul>
          </Box>
        </Grid>
      </Grid>
      </Container>
    </>
  )
}

export default JoinTeam