'use client'
import React from 'react'
import { Box, Typography, Grid  } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery'
import contactImage1 from "../../../public/Images/2719-desktop-scaled.jpg";
import LaunchIcon from '@mui/icons-material/Launch';
import contactImage2 from "../../../public/Images/LAX-BOMB-SQUAD.jpg";
import contactStyle from "./styles.module.css"
import global from "../global.module.css"


const Contact = () => {

  const mobile = useMediaQuery('(max-width: 576px)');

  return (
    <Box>
        <Box sx={{padding:"2% 5%"}}>
       <Typography className={global.fadeInUp} sx={{fontSize:"22px"}}>
       Get in Touch with the LAPD
       </Typography>
       <Typography className={global.fadeInUp} sx={{fontWeight:'bold',fontSize:"62px"}}>
       Contact Us
       </Typography></Box>
       <Box sx={{display:"flex"}}>
        <Image className={contactStyle.image} src={contactImage1} alt="contact-image" />
        <Image className={contactStyle.image} src={contactImage2} alt="contact-image" />
       </Box>

       <Box className={global.fadeInUp} sx={{marginTop:"60px",margin:"60px 5% 50px 5%"}}>
        <Grid container columnSpacing={5} rowSpacing={5}>
            <Grid item xs={12} sm={12} md={6} lg={3.5}>
              <Box sx={{backgroundColor:"#ebf4f7",padding:"40px 20px 40px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
               <Typography sx={{fontSize:"26px",fontWeight:"bold"}}>Phone Numbers</Typography>
               <Typography className={contactStyle.linkText1} sx={{fontSize:"16px",fontWeight:"bold"}}>For Life-Threatening Emergencies <br />
                    <Link href="#">9-1-1</Link> </Typography>
              <Typography className={contactStyle.linkText1}><Link href="#">9-1-1 Use and Abuse</Link></Typography>
              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>For Terrorist Threats <br />
              <Link href="#">1-877-A-THREAT </Link>or 
              <Link href="">(1-877-284-7328)</Link></Typography>

              <Typography  sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>For Non-Emergency Police Response <br />
              <Link href="#">1-877-ASK-LAPD </Link>or 
              <Link href="">(1-877-275-5273)</Link></Typography>
              <Typography sx={{fontSize:"16px"}} >Press # 2 for Spanish</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={3.5}>
              <Box sx={{backgroundColor:"#ebf4f7",padding:"40px 20px 40px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
               <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>Email the LAPD</Typography>
               <Typography>In case of an emergency, telephone 911. An emergency is a situation that threatens human life or property and demands immediate attention. Please note due to a high volume of e-mails we receive on a daily basis there may be a delay in our response.
                 Although our goal is to accommodate all e-mails, they are answered based on available resources.</Typography>
                <Typography className={contactStyle.linkText2} sx={{fontSize:"16px"}} >For questions and comments, email:<br />
                     <Link href="#">contact.lapdonline@gmail.com</Link> </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={3.5}>
              <Box sx={{backgroundColor:"#ebf4f7",padding:"40px 20px 40px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
               <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>Addresses</Typography>
               <Typography>LAPD Headquarters <br/>
                   100 West 1st Street<br/>
                 Los Angeles, CA 90012</Typography>
                <Typography className={contactStyle.linkText2} sx={{fontSize:"18px"}} ><span className={contactStyle.spanDash}></span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link href="#"> Find Contact Info for Your Local  LAPD Police Station</Link> </Typography>
              </Box>
            </Grid>
        </Grid>

        <Grid container columnSpacing={5} rowSpacing={5} sx={{marginTop:"30px"}}>
            <Grid item xs={12} sm={12} md={6} lg={5}>
              <Box sx={{backgroundColor:"#ebf4f7",padding:"40px 20px 40px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
               <Typography sx={{fontSize:"26px",fontWeight:"bold"}}>Non-Emergency Crime Reporting & Hotlines</Typography>
               
              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>Abandoned Vehicles<br />
              <Link href="#">800-ABANDON</Link>or 
              <Link href="">(800-222-6366)</Link></Typography>

              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>Battered Women Hotline<br />
              <Link href="#">310-392-8381</Link> </Typography>

              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>Child Abuse<br />
              <Link href="#">800-540-4000</Link> </Typography>

              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>Lights And Noise<br />
              <Link href="#">888-524-2845</Link> </Typography>

              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>Los Angeles Rape Battered Hotline<br />
              <Link href="#">310-392-8381</Link> </Typography>

              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>Mothers Against Drunk Drivers (MADD)<br />
              <Link href="#">800-438-6233</Link> </Typography>

              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>Narcotic Drug Abuse<br />
              <Link href="#">800-252-6465</Link> </Typography>

              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>Narcotics Hotline<br />
              <Link href="#">800-662-BUST (2878)</Link> </Typography>

              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>Operation Clean Sweep (Graffiti)<br />
              <Link href="#">800-611-CITY (2489)</Link> </Typography>

              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>Rape Hotline<br />
              <Link href="#">626-793-3385</Link> </Typography>

              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>Runaway Hotline<br />
              <Link href="#">800-231-6946</Link> </Typography>

              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>Suicide Hotline<br />
              <Link href="#">877-727-4747</Link> </Typography>

              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>Terrorist Threats<br />
              <Link href="#">1-877-A-THREAT (284-7328)</Link> </Typography>

              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>24-Hour Anonymous Tip Line<br />
              <Link href="#">1-877-LAPD 24-7 </Link>or 
              <Link href="">(1-877-527-3247)</Link></Typography>

              
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={5}>
              <Box sx={{backgroundColor:"#ebf4f7",padding:"40px 20px 40px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
               <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>Get Service</Typography>
               <Typography className={contactStyle.linkText2} sx={{fontSize:"16px"}} >
                     <Link href="#">File a Police Report</Link>
                      </Typography>

                      <Typography className={contactStyle.linkText2} sx={{fontSize:"16px"}} >
                      <Link href="#">Request a Traffic Report</Link>
                      </Typography>
              </Box>

              <Box sx={{backgroundColor:"#ebf4f7",padding:"40px 20px 40px 40px",marginTop:"30px",display:"flex",flexDirection:"column",gap:"20px"}}>
               <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>Other Services</Typography>
               <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>General City Telephone Information<br />
              <Link href="#">213-485-2121</Link></Typography>
              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>Animal Regulations<br />
              <Link href="#">888-452-7381</Link></Typography>
              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>Bureau Of Street Services<br />
              <Link href="#">800-996-2489</Link></Typography>
              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>California Highway Patrol<br />
              <Link href="#">323-906-3434</Link></Typography>
              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>County Jail Information<br />
              <Link href="#">213-473-6100</Link></Typography>
              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>Department of Sanitation<br />
              <Link href="#">800-773-2489</Link></Typography>
              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>Department of Water And Power<br />
              <Link href="#">800-342-5397</Link></Typography>
              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>L.A. County Referral<br />
              <Link href="#">800-339-6993</Link></Typography>
              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>Legal Aid<br />
              <Link href="#">213-385-2202</Link></Typography>
              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>Parking Violations<br />
              <Link href="#">213-742-1884</Link></Typography>
              <Typography sx={{fontSize:"16px",fontWeight:"bold"}} className={contactStyle.linkText1}>TDD<br />
              <Link href="#">800-660-4026</Link></Typography>
              </Box>
            </Grid>

            
        </Grid>
       </Box>

       <Box sx={{ display: 'flex', padding: '32px 5%', flexDirection: 'column', background: '#0f212b' }}>
        <Grid container>
            <Grid item xs={12} sm={12}  md={7} lg={5}>
              <Typography sx={{fontSize:"26px",fontWeight:"bold",color:"#fff"}}>Additional Contacts</Typography>
            <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 20px', fontSize: mobile ? '30px' : '62px', fontWeight: '700' }}>
            Helpful Links and Information
          </Typography>
     
            </Grid>
        </Grid>
       
 
       </Box>

       <Box className={global.fadeInUp} sx={{marginTop:"60px",margin:"60px 5% 50px 5%"}}>
        <Grid container columnSpacing={5}>
       <Grid item xs={12} sm={12} md={6} lg={5}>
       <Box sx={{backgroundColor:"#ebf4f7",padding:"40px 20px 40px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
               <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>Actions & Information</Typography>
               <Typography className={contactStyle.linkText2} sx={{fontSize:"16px"}} >
                     <Link href="#">Employee Commendation</Link>
                      </Typography>

                      <Typography className={contactStyle.linkText2} sx={{fontSize:"16px"}} >
                      <Link href="#">Report Employee Misconduct</Link>
                      </Typography>

                      <Typography className={contactStyle.linkText2} sx={{fontSize:"16px"}} >
                      <Link href="#">LAPD Command Staff</Link>
                      </Typography>

                      <Typography className={contactStyle.linkText2} sx={{fontSize:"16px"}} >
                      <Link href="#">FAQ&rsquo;s </Link>
                      </Typography>
        </Box></Grid>

        <Grid item xs={12} sm={12} md={6} lg={5}>
       <Box sx={{backgroundColor:"#ebf4f7",padding:"40px 20px 40px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
               <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>External Resources</Typography>
            
           <Typography className={contactStyle.linkText2}>
             <Link href="#" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{color: 'black', marginRight: '10px'}}/>
             3-1-1 City-Wide Services Directory</Link></Typography>
             <Typography className={contactStyle.linkText2}>
             <Link href="#" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{color: 'black', marginRight: '10px'}}/>
             City of Los Angeles Telephone Directory- CityFone</Link></Typography>
          
        </Box></Grid>
        
        
        
        </Grid>



       </Box>
    </Box>
  )
}

export default Contact