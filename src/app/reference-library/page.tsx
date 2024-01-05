'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import global from "../global.module.css"
import Link from 'next/link'
import LaunchIcon from '@mui/icons-material/Launch'
import useMediaQuery from '@mui/material/useMediaQuery'
import Grid  from '@mui/material/Grid'
import styles from "./reference.module.css"
import Image from 'next/image'
import pdf from "../../../public/Icons/pdf-svg-icon.svg"
import { Container } from '@mui/material'


const ReferenceLibrary = () => {

    const mobile = useMediaQuery('(max-width: 576px)');
    
  return (
    <div>
        <Box sx={{ display: 'flex', padding: '32px 5%', flexDirection: 'column', background: '#0f212b' }}>
          <Container>
        <Typography sx={{ marginBottom: '8px', color: '#fff', fontSize: mobile ? '18px' : '22px' }} className={global.fadeInUp}>Historical Documents and Internal Reports</Typography>
        <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 20px', fontSize: mobile ? '30px' : '62px', fontWeight: '700' }}>Reference Library</Typography>
        <Link className={global.fadeInUp} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} href='https://www.joinlapd.com/'>
          <LaunchIcon sx={{ fontSize: 'large', color: '#fff', marginRight: '5px' }} />
          <Typography sx={{ padding: '0px 0px 0xp 20px', color: "#7DDFFF", fontSize: "16px", textTransform: "none", '&:hover': { color: "#fff" } }}>Public Records are available via the City Clerk website</Typography>
        </Link>
        </Container>
        </Box>

        <Container>
        <Box className={global.fadeInUp} >
            <Grid container sx={{marginTop:"40px"}} rowSpacing={5} columnSpacing={5}>

                   <Grid item xs={12} sm={6}>
                    <Box sx={{backgroundColor:"#ebf4f7",padding:"30px 30px 30px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>Los Angeles Police Department Manual</Typography>
                      <Typography sx={{fontSize:"20px",fontWeight:"bold"}}>Updated 01/26/2023</Typography>
                       <Typography className={styles.listItem} sx={{fontSize:"18px"}} ><Link href="javascript:;">2022 LAPD Manual 4th Quarter</Link> </Typography>
                      </Box>
                   </Grid>
              
                  <Grid item xs={12} sm={6} >
                    <Box sx={{backgroundColor:"#ebf4f7",padding:"30px 30px 30px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>Critical Incident Videos</Typography>
                      <Typography className={styles.listItem} sx={{fontSize:"18px"}} ><Link href="javascript:;">Critical Incident Videos</Link> </Typography>
                   </Box>
                  </Grid>

                  <Grid item xs={12} sm={6} >
                    <Box sx={{backgroundColor:"#ebf4f7",padding:"30px 30px 0px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>2022 Use of Force Year End Review</Typography>
                      <ul className={styles.listItem}>
                             <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} /><Typography>2022 Use of Force - Year End Report</Typography></Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} /><Typography>2022 Use of Force - Year End Report Executive Summary</Typography></Link></li>
                           
                        </ul>
                          </Box> 
                  </Grid>
               
                  <Grid item xs={12} sm={6} >
                    <Box sx={{backgroundColor:"#ebf4f7",padding:"40px 30px 40px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>Administrative, Directives and Special Orders</Typography>
                      <Typography sx={{fontSize:"20px",fontWeight:"bold"}}>Updated 07/26/2023</Typography>
                      <ul className={styles.listItem}>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Administrative</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Directives and Notices</Typography></Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Special Orders</Typography></Link></li>
                        </ul>
              </Box>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Box sx={{backgroundColor:"#ebf4f7",padding:"30px 30px 0px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>Reference Library & Historical Documents</Typography>
                      <ul className={styles.listItem}>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} /><Typography>2021 Use of Force - Year End Report</Typography></Link></li>
                            <li><Typography><Link href="javascript:;">A Crisis of Trust</Link></Typography></li>
                            <li><Typography><Link href="javascript:;">Audits</Link></Typography></li>
                            <li><Typography><Link href="javascript:;">Cadet Program Review</Link></Typography></li>
                            <li><Typography><Link href="javascript:;">Categorical Use of Force</Link></Typography></li>
                            <li><Typography><Link href="javascript:;">Community Inquiries on Crowd Management, Intervention, and Control</Link></Typography></li>
                            <li><Typography><Link href="javascript:;">Community Inquiries on LAPD Training & Practice</Link></Typography></li>
                            <li><Typography><Link href="javascript:;">Historical Docs & Internal Reports</Link></Typography></li>
                            <li><Typography><Link href="javascript:;">Information on How to File a Complaint</Link></Typography></li>
                            <li><Typography><Link href="javascript:;">Undocumented Immigrants</Link></Typography></li>
                        </ul>
                  </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{display:"flex",flexDirection:"column",gap:"30px"}}>
                    <Box sx={{backgroundColor:"#ebf4f7",padding:"30px 30px 0px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>Strategic Plan & Goals</Typography>
                      <ul className={styles.listItem}>
                             <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} /><Typography>2021 - 2023 Strategic Plan</Typography></Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} /><Typography>2019 - 2021 Strategic Plan</Typography></Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} /><Typography>2020 LAPD After Action Report</Typography></Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} /><Typography>2020 Crime Stats</Typography></Link></li>
                        </ul>
                     </Box>

              <Box sx={{backgroundColor:"#ebf4f7",padding:"30px 30px 0px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>2021 Use of Force Year End Review</Typography>
                      <ul className={styles.listItem}>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} /><Typography>Senate / Assembly Bills and Reports</Typography></Link></li>
                             <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>California Assembly Bill 481 - Use of Equipment</Typography></Link></li>
                            <li><Link href="javascript:;"><Typography>Peace/Custodial Officer Disclosable Docs SB 1421/SB 16</Typography></Link></li>
                            <li><Link href="javascript:;"><Typography>Policies/Procedures and Training SB 978</Typography></Link></li>
                            <li><Link href="javascript:;"><Typography>Senate Bill (SB) 230</Typography></Link></li>
                        </ul>
              </Box></Box>
                  </Grid>
                 
               </Grid>
        </Box>
        </Container>
    </div>
  )
}

export default ReferenceLibrary