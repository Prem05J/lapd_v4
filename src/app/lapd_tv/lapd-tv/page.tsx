import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LaunchIcon from '@mui/icons-material/Launch'
import styles from "./styles.module.css"
import Image from 'next/image';
import LightBulb from "../../../../public/Icons/lightbulb.svg"
import global from "../../global.module.css"

const LapdTV = () => {
  return (
    <div>
        <Container>
        <Breadcrumbs sx={{marginTop:"30px"}}>
        <Typography sx={{color:"grey",fontSize:"14px"}}>News</Typography>
         <Link href="#" style={{textDecoration:"none"}}>
         <Typography sx={{color:"#000",fontSize:"14px"}}>LAPD TV</Typography>
        </Link>
        </Breadcrumbs>
        <Divider sx={{marginTop:"10px"}}/>

        <Box sx={{marginTop:"40px"}}>
            <Typography sx={{fontWeight:"bold",fontSize:"60px"}}>LAPD TV</Typography>
            <Typography sx={{fontSize:"18px",color:"grey"}}>November 9, 2023</Typography>
        </Box>

          <Grid container>
             <Grid item xs={12} sm={12} md={8}>

    <Divider sx={{marginTop:"70px"}}/>

       <Box  sx={{marginTop:"60px"}}>
    <Box>
    <Typography sx={{fontSize:"26px",fontWeight:"bold",textAlign:"center",marginBottom:"20px"}}>Chief&lsquo;s Message - December 2023</Typography>
    <iframe width="100%" height="415" src="https://www.youtube.com/embed/SIUb_Y3fVFk?si=B3k8gphjS90fe86L" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </Box>
</Box>
    </Grid>


        </Grid>

        <Grid container columnSpacing={5} rowSpacing={5} sx={{marginTop:"60px"}}>
            <Grid item xs={12} sm={6} md={6}>
               <Box>
               <Box sx={{backgroundColor:"#ebf4f7",padding:"40px 30px 40px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
                <Image src={LightBulb} alt="bulp-img"/>
                      <Typography  sx={{fontSize:"26px",fontWeight:"bold",lineHeight:"1.1"}}>Do you have any helpful information regarding this post?</Typography>
                      <Typography className={styles.listItem} sx={{fontSize:"16px"}}>Call us 24/7 at 1-877-LAPD-24-7 (<Link href="#">1-877-527-3247</Link>) to share any helpful information you have.</Typography>
                    <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>Wish to remain anonymous?</Typography>
                    <Typography className={styles.listItem} sx={{fontSize:"16px"}}>Call the L.A. Regional Crime Stoppers at 1-800-222-TIPS
                    (<Link href="#">800-222-8477</Link>) or submit an anonymous tip through our form.</Typography>
                    <Link href="javascript:;" style={{textDecoration:"none"}}><button style={{marginTop:"20px",display:"flex"}} className={global.contactBtn}>
                    <LaunchIcon sx={{ color: '#fff', marginRight: '10px' }} /> 
                <Typography sx={{ fontWeight: "bold",color:"#fff"}}>Submit an Anonymous Tip</Typography>
            </button></Link>
              </Box>
               </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
               <Box>
               <Box sx={{backgroundColor:"#ebf4f7",padding:"40px 30px 40px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>Related Links</Typography>
                      <ul className={styles.listItem}>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Chief&lsquo;s Messages Video Playlist</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Critical Incidents Briefing Video Playlist</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Surveillance Footage Video Playlist</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Public Service Announcements Video Playlist</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Behind the Scenes Video Playlist</Typography></Link></li>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>LAPD Up Close   </Typography></Link></li>
                     
                     

                     </ul>
              </Box>
               </Box>
            </Grid>
        </Grid>
        </Container>
        </div>
  )
}

export default LapdTV