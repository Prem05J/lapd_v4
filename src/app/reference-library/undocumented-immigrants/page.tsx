'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import global from "../../global.module.css"
import Link from 'next/link'
import LaunchIcon from '@mui/icons-material/Launch'
import useMediaQuery from '@mui/material/useMediaQuery'
import Grid  from '@mui/material/Grid'
import styles from "./ondocument.module.css"


const OnDocument = () => {

    const mobile = useMediaQuery('(max-width: 576px)');

  return (
    <div>
        <Box sx={{ display: 'flex', padding: '32px 5%', flexDirection: 'column', background: '#0f212b' }}>
       <Grid container>
          <Grid item xs={12} md={8} lg={5}>
          <Typography className={global.fadeInUp} 
          sx={{ color: '#fff', margin: '0px 0px 20px', fontSize: mobile ? '40px' : '62px', fontWeight: '700' }}>
            Immigrant Victims of Crime</Typography>
          </Grid>
       </Grid>
        </Box>

        <Box className={global.fadeInUp}  sx={{padding:"40px 5% 40px 5%"}}>

        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={7} xl={5}>
                <Typography sx={{fontSize:"18px"}}>
                Los Angeles is proud to be a welcoming city and to embody the inclusive values that are the bedrock of our country. 
                In a welcoming home to all, cooperation
                 between the Los Angeles Police Department and the public it serves is a priority.
                </Typography>
            </Grid>
        </Grid>

         <Grid container sx={{marginTop:"30px"}}>
            <Grid item xs={12} sm={12} md={12} lg={7} xl={5}>
                <Typography sx={{fontSize:"18px"}}>
                The Los Angeles Police Department also recognizes that the Constitution of the United States guarantees 
                equal protection to all persons under its jurisdiction. With those principles at its core, it is the policy
                 of the Los Angeles Police Department that any resident, regardless of their status, deserves to feel safe,
                  protected, and free to seek justice when finding themselves a victim of a crime.
                </Typography>
            </Grid>
         </Grid>

                <Box sx={{display:"flex",flexDirection:"column",gap:"30px",marginTop:"30px"}}>
<Typography className={styles.linkText}><Link href="javascript:;">Mayor’s Executive Order 20</Link></Typography>
<Typography className={styles.linkText}><Link href="javascript:;">LAPD Federal Immigration Enforcement FAQ’s</Link></Typography>
<Typography className={styles.linkText}><Link href="javascript:;">En Español</Link></Typography>
<Typography className={styles.linkText}><Link href="javascript:;">Special Order 40</Link></Typography>
<Typography className={styles.linkText}><Link href="javascript:;">U and -T Visa</Link></Typography>
<Typography className={styles.linkText}><Link href="javascript:;">Chief Moore and Mayor Garcetti on immigration enforcement</Link></Typography>
<Typography className={styles.linkText}><Link href="javascript:;">Chief Moore and Mayor Garcetti on immigration fraud</Link></Typography>
              </Box>
        
             </Box>


    </div>
  )
}

export default OnDocument