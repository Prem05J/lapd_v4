'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import global from "../global.module.css"
import { Container } from '@mui/material'
import Link from 'next/link'
import Grid  from '@mui/material/Grid'
import useMediaQuery from '@mui/material/useMediaQuery'
import LaunchIcon from '@mui/icons-material/Launch'
import styles from "./styles.module.css"
import Image from 'next/image'
import pdf from "../../../public/Icons/pdf-svg-icon.svg"

const UnsolvedMurder = () => {
    const mobile = useMediaQuery('(max-width: 576px)');

  return (
    <div>
        <Box sx={{ display: 'flex', padding: '32px 5%', flexDirection: 'column', background: '#0f212b' }}>
          <Container>
        <Grid container>
            <Grid item lg={9}>
            <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 20px', fontSize: mobile ? '30px' : '62px', fontWeight: '700',lineHeight:"1.1" }}>Unsolved Murders of LAPD Officers</Typography>
            </Grid>
         </Grid>
          </Container>
        </Box>

           <Container>
           <Box sx={{marginTop:"50px"}}>
            <Grid container rowSpacing={10}>
                <Grid item lg={7.5}>
                <Typography sx={{fontSize:"18px"}}>
                 The below listed cases are Officers of the Los Angeles Police Department that were murdered. These cases have not been solved and as of today, remain unsolved. 
                 If you have any information with regards to any of these cases, please contact the names on the bulletins.
                 </Typography>
             </Grid>

             <Grid item lg={6}>
             <Box sx={{backgroundColor:"#ebf4f7",padding:"40px 30px 40px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
                  <ul className={styles.listItem}>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Officer Fred Early</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} /><Typography>Officer Fred Early (pic)</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} /><Typography>Officer Michael Lee Edwards</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Officer Michael Lee Edwards (non-uniform)</Typography></Link></li>
                     </ul>
              </Box>
             </Grid>
            </Grid>
         
           </Box>
           </Container>
        
        </div>
  )
}

export default UnsolvedMurder