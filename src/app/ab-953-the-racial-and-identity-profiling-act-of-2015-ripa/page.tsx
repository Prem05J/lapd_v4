'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery'
import trainingStyle from "./training.module.css"
import Grid from '@mui/material/Grid'
import global from "../global.module.css"
import Img from "../../../public/Images/LAPD-Racial-and-Identity-Profiling-Act.jpg"
import styles from "./training.module.css"
import LaunchIcon from '@mui/icons-material/Launch'
import pdf from "../../../public/Icons/pdf-svg-icon.svg"
import { Container, TableContainer } from '@mui/material'


const Training = () => {
  const mobile = useMediaQuery('(max-width: 576px)');

  return (
    <div>
      <Box sx={{ display: 'flex', padding: '32px 5%', flexDirection: 'column', background: '#0f212b' }}>
        <Container>
        <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 10px', fontSize: mobile ? '30px' : '22px', fontStyle: 'italic' }}>
          Stop Data Information
        </Typography>
        <Grid container>
          <Grid item xs={12} lg={8}>
          <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 10px', fontSize: mobile ? '30px' : '62px', fontWeight: '700', lineHeight: '1.1' }}>
          AB 953: The Racial and Identity Profiling Act of 2015 (RIPA)
        </Typography>
          </Grid>
        </Grid>
      
        <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center',marginTop:"20px" }} href='https://www.joinlapd.com/'>
          <Box className={global.fadeInUp} sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <span style={{ height: "2px", width: "20px", opacity: ".9", backgroundColor: "#fff", marginLeft: "10px" }}></span>
            <Typography sx={{ padding: '0px 0px 0xp 20px', color: "#7DDFFF", fontSize: "16px", textTransform: "none", '&:hover': { color: "#fff" } }}>Diversity, Equity, and Inclusion Division</Typography>
          </Box>
        </Link>
        </Container>
           </Box>


      <Container>
      <Box className={global.fadeInUp} sx={{ display: "flex", flexDirection: "column", paddingTop: "60px"}}>
        <Grid container rowSpacing={5}>
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <Typography sx={{ fontSize: "20px", marginBottom: '30px', lineHeight: '1.55' }}>
              <Image src={Img} alt="LAPD-Racial-and-Identity-Profiling-Act" style={{ float: 'left', margin: '5px 20px 20px 0px' }} />The California legislature passed Assembly Bill 953 in 2015 (AB-953). Known as the Racial and Identity Profiling Act (RIPA), this legislation requires all law enforcement agencies in the state to “collect perceived demographic and other detailed data regarding pedestrian and traffic stops”. The data is not to be collected from identification like a passport or driver’s license. Rather, the data is based upon the officer’s perception of the person they stopped. The Racial and Identity Profiling Act requires California’s law enforcement agencies to collect this information on all “stops” and report this information to the California Department of Justice (DOJ).
            </Typography>
            <Typography sx={{ fontSize: "18px" }}>
              The Los Angeles Police Department’s Community RIPA Dashboard furthers our commitment to transparency and accountability. The Community RIPA Dashboard provides a robust data platform, which includes RIPA data and information that is more specific to the varied communities within the City of Los Angeles. In some of our communities, actual and perceived inequitable policing practices erode the public’s trust and challenge the legitimacy of law enforcement. Transparency further nurtures and reinforces relationships with our diverse communities and can be used to share enforcement action information and communicate engagement efforts. At the same time, the platform will facilitate engaging with the community more deeply, allowing for their feedback to drive policing priorities and enforcement policies.
            </Typography>
          </Grid>
        </Grid>


        <Box className={global.fadeInUp} >
          <Grid container sx={{ marginTop: "60px" }} rowSpacing={5} columnSpacing={5}>

            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Box sx={{ backgroundColor: "#ebf4f7", padding: "30px 30px 30px 40px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <Typography sx={{ fontSize: "26px", fontWeight: "bold" }}>RIPA Dashboard Link & Tutorials</Typography>
                <ul className={styles.listItem}>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>View RIPA Dashboard </Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>RIPA Dashboard Guide</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>RIPA Dashboard Video Tutorial</Typography></Link></li>
                </ul>
              </Box>
              <Box sx={{ backgroundColor: "#ebf4f7", padding: "30px 30px 0px 40px", display: "flex", flexDirection: "column", gap: "20px", marginTop: '30px' }}>
                <Typography sx={{ fontSize: "26px", fontWeight: "bold" }}>RIPA Stop Data</Typography>
                <ul className={styles.listItem}>
                  <ul className={styles.listItem}>
                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>California Department of Justice</Typography></Link></li>
                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>City of Los Angeles Data Portal</Typography></Link></li>
                  </ul>
                </ul>
              </Box>
            </Grid>



            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Box sx={{ backgroundColor: "#ebf4f7", padding: "30px 30px 30px 40px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <Typography sx={{ fontSize: "26px", fontWeight: "bold" }}>LAPD Policies & Procedures</Typography>
                <ul className={styles.listItem}>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>LAPD Policies Regarding RIPA Data Collection Link </Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>LAPD Pretext Policy </Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>LAPD Biased Policing Policy</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>LAPD Handcuffing Policy</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'flex-start' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>LAPD Training Bulletin- Contacts with the Public Legal Considerations</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'flex-start' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>LAPD Training Bulletin- Contacts with the Public Procedural Justice</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>California RIPA Regulations</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Diversity, Equity, and Inclusion Commitment</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Diversity, Equity, and Inclusion Mission</Typography></Link></li>

                </ul>              </Box>
            </Grid>


          </Grid>
        </Box>




      </Box>
      </Container>
    </div>
  )
}

export default Training