'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import global from "../../global.module.css"
import useMediaQuery from '@mui/material/useMediaQuery'
import Grid  from '@mui/material/Grid'
import Link from 'next/link'
import LaunchIcon from '@mui/icons-material/Launch'
import styles from "./styles.module.css"
import Image from 'next/image'
import pdf from "../../../../public/Icons/pdf-svg-icon.svg"
import { Container } from '@mui/material'


const SiteOfInterest = () => {

    const mobile = useMediaQuery('(max-width: 576px)');

  return (
    <div>
       <Box sx={{ display: 'flex', padding: '32px 0px', flexDirection: 'column', background: '#0f212b' }}>
        <Container>
        <Grid container>
            <Grid item xs={12} sm={12} lg={8}>
            <Typography className={global.fadeInUp} sx={{ marginBottom: '8px', color: '#fff', fontSize: mobile ? '18px' : '22px' }} >The following lists Web sites that are related to either the City of Los Angeles, the LAPD, or crime prevention agencies.</Typography>
            <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 20px', fontSize: mobile ? '30px' : '62px', fontWeight: '700' }}>Sites of Interest</Typography>
            </Grid>
        </Grid>
        </Container>
      </Box>

    <Container>
      <Box className={global.fadeInUp}>
      <Grid container sx={{marginTop:"40px"}} rowSpacing={5} columnSpacing={5}>

      <Grid item xs={12} sm={6}  >
                    <Box sx={{backgroundColor:"#ebf4f7",padding:"40px 30px 40px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>City of Los Angeles</Typography>
                     
                      <ul className={styles.listItem}>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Building and Safety Department</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>City Attorney</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>City Council</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>City Charter, Rules & Codes</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>City of Los Angeles</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Fire Department</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Los Angeles Police Foundation</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Los Angeles Police Historical Society</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Los Angeles Police Memorial Foundation</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Los Angeles Police Relief Association</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Mayor&lsquo;s Office</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Pipe Band</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Police Commission</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Police Federal Credit Union</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Police Protective League</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>The Parker Foundation</Typography></Link></li>  
                        </ul>
              </Box>
        </Grid>

        <Grid item xs={12} sm={6} >
            <Box sx={{display:"flex",flexDirection:"column",gap:"30px"}}>
            <Box sx={{backgroundColor:"#ebf4f7",padding:"40px 30px 30px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>County of Los Angeles</Typography>
                     
                      <ul className={styles.listItem}>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>District Attorney&apos;s Office</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>LASD Inmate Information Center - Inmate Search</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Los Angeles County Sheriff&apos;s (LASD) Department</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Megan&aposs Law Sex Offender Locations Map on the Internet</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Peace Officers Association of Los Angeles County (POALAC)</Typography></Link></li>
                    </ul>
              </Box>

              <Box sx={{backgroundColor:"#ebf4f7",padding:"40px 30px 30px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>State of California</Typography>
                     
                      <ul className={styles.listItem}>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Attorney General</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>California Highway Patrol</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Department of Corrections</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Department of Motor Vehicles</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Governor&apos;s Office of Criminal Justice</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Legislative and Legal Information</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Office of Criminal Justice Planning</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Office of Emergency Services</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>State of California</Typography></Link></li>
                     
                        </ul>
              </Box>
            </Box>
                   
        </Grid>

        <Grid item xs={12} sm={6}  className={styles.gridBox}>
                    <Box sx={{backgroundColor:"#ebf4f7",padding:"40px 30px 40px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>Federal Law Enforcement Agencies</Typography>
                     
                      <ul className={styles.listItem}>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Drug Enforcement Agency</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Federal Bureau of Investigation</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>FBI Internet Fraud Center</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Interpol</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>National Executive Institue Associates (NEIA) / Major Cities Chiefs (MCC)</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>United States Department of Homeland Security</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>United States Marshals</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>United States Secret Service</Typography></Link></li>

                     </ul>
              </Box>
        </Grid>

        <Grid item xs={12} sm={6} >
                    <Box sx={{backgroundColor:"#ebf4f7",padding:"40px 30px 40px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>Other Law Enforcement Agencies</Typography>
                     
                      <ul className={styles.listItem}>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Arcadia, California Police Department</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Downey, California Police Department</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Gardena, California Police Department</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Glendale, California Police Department</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>New York City Police Department</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Pasadena, California Police Department</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Redondo Beach, California Police Department</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>San Gabriel, California Police Department</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>South Pasadena, California Police Department</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Santa Monica, California Police Department</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Simi Valley, California Police Department</Typography></Link></li>

                     </ul>
              </Box>
        </Grid>

        <Grid item xs={12} sm={6}  className={styles.gridBox1}>
                    <Box sx={{backgroundColor:"#ebf4f7",padding:"40px 30px 40px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>Criminal Justice Research and Other Legal Information</Typography>
                     
                      <ul className={styles.listItem}>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Bureau of Justice Assistance</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Bureau of Justice Statistics</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Criminal Justice Statistics</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Federal Bureau of Investigation, Uniform Crime Reports</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Federal Legal Information</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Federal Legislative Information</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Justice Planning</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>National Criminal Justice Reference Service (NIJ)</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} /><Typography>Winston Settlement Agreement </Typography></Link></li>

                     </ul>
              </Box>
        </Grid>

      </Grid>
        </Box>
        </Container>


        </div>
  )
}

export default SiteOfInterest