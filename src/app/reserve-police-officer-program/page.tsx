"use client"
import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import global from "../global.module.css"
import Grid  from '@mui/material/Grid'
import { Container } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import styles from "../candidate-advancement-program/styles.module.css"
import Link from 'next/link'

const ReservePolice = () => {
    const mobile = useMediaQuery('(max-width: 576px)');

  return (
    <div>
       <Box sx={{ display: 'flex', padding: '35px 0px', flexDirection: 'column', background: '#0f212b' }}>
          <Container>
            <Grid container>
                <Grid item xs={12} lg={8}>
                <Typography className={global.fadeInUp} sx={{ color: '#fff',lineHeight:"1.1", margin: '0px 0px 10px', fontSize: mobile ? '40px' : '62px', fontWeight: '700' }}>Join the LAPD Reserve Corps
</Typography>
                </Grid>
                </Grid>
      
                </Container>

               
         </Box>

<Container className={global.fadeInUp}>
         <Box sx={{marginTop:"60px"}}>
            <Grid container>
                <Grid item xs={12} sm={11} md={11} lg={7.5}>
                <Typography className={styles.linkText} sx={{fontSize:"18px"}}>
            Start the process of becoming a Los Angeles Reserve Police Officer by attending an orientation at the City 
            of Los Angeles Personnel Dept. For more information, visit the Los Angeles Police Reserve Foundation website
             <Link href="https://laprf.org/become-a-reserve/" target='_blank'>www.LAPDreserve.com</Link> or call a recruiter at <Link href="">(213) 486-6000</Link>.
            </Typography>
                </Grid>

            </Grid>
           
         </Box>
         </Container>
        </div>
  )
}

export default ReservePolice