'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './special.module.css'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Container } from '@mui/material'


const California = () => {

  const tab = useMediaQuery('(max-width:768px)');

  const [toggle, setToggle] = useState(false)
  return (
    <>

      {/* 1st block */}
      <Box className={styles.bg}>
        <Container>
          <Grid container>
            <Grid item xs={11} sm={10} md={7} lg={8}>
              <Typography sx={{fontSize: tab ? "40px" : "62px",lineHeight:"1.1",fontWeight:"bold"}}>Special Operations Division (SOD)</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* 2nd block */}
      <Container>

        <Box>
          <Grid container>
            <Grid item xs={12} sm={11} md={10} lg={8} className={styles.textstyl} >
              <Typography style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '60px' }} >201 N. Figueroa Street</Typography>
              <Typography style={{ fontSize: '18px', fontWeight: 'bold' }}>Suite 1600</Typography>
              <Typography style={{ fontSize: '18px' }}>Los Angeles, CA 90012</Typography>
              <Typography style={{ fontSize: '18px', marginBottom: '30px' }}>(800) 339-6868 24-hour toll free hotline</Typography>


              <Typography style={{ fontSize: '18px' }}>Commanding Officer:</Typography>
              <Typography style={{ fontSize: '18px', marginBottom: '30px' }}><Link href="https://www.lapdonline.org/command-staff/wyma-demian-f/">Captain II Demian Wyma</Link></Typography>

              <Typography style={{ fontSize: '18px' }}>Special Operations Division (SOD) reports to the Commanding Officer of <Link href="https://www.lapdonline.org/office-of-the-chief-of-police/professional-standards-bureau/">Professional Standards Bureau</Link>.   SOD is responsible for conducting integrity audits designed to evaluate Department employees’ conduct during potentially at-risk behavior.</Typography>


              <Typography sx={{ fontSize: "18px", marginTop: '30px' }}>
                SOD is comprised of the Ethics Enforcement Section, Internal Surveillance Unit, and other supporting units.
              </Typography>

            </Grid>
          </Grid>
        </Box>

      </Container>

    </>
  )
}

export default California