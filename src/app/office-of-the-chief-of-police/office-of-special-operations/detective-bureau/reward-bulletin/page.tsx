'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Container, Typography } from '@mui/material'
import global from "../../../../global.module.css"
import useMediaQuery from '@mui/material/useMediaQuery'
import Image from 'next/image'
import rewardImage1 from "../../../../../../public/Images/reward-alexander-marquise.jpg"
import rewardImage3 from "../../../../../../public/Images/reward-charles-porche.jpg"
import rewardImage4 from "../../../../../../public/Images/reward-marcelis-gude.jpg"
import rewardImage2 from "../../../../../../public/Images/rewards-justin-alexander-pitts.jpg"
import styles from "./styles.module.css"
import Link from 'next/link'
import LaunchIcon from '@mui/icons-material/Launch'

const RewardBulletin = () => {

    const mobile = useMediaQuery('(max-width: 576px)');

  return (
    <div>
        <Box sx={{ display: 'flex', padding: '32px 0px', flexDirection: 'column', background: '#0f212b' }}>
                <Container>
                    <Grid container className={global.fadeInUp}>
                        <Grid item xs={11} sm={11} lg={8} >
                            <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 20px', fontSize: mobile ? '34px' : '3vw', fontWeight: '700' }}>Reward Bulletins</Typography>
                        </Grid>

                    </Grid></Container>
            </Box>

            <Container className={global.fadeInUp}>
                <Grid container sx={{marginTop:"60px"}}>
                    <Grid item lg={7.5}>
                    <Typography sx={{fontSize:"18px"}}>
                The City of Los Angeles offers rewards for information leading to the identity, arrest and prosecution of 
                persons responsible for committing serious crimes including those which result in serious injury or death to
                 the involved victims. The Los Angeles Police Department is requesting your help in identifying the person or
                  persons responsible for these crimes. If you have any information please contact the listed detectives, the
                   Detective Information Desk, or the TTY number listed on the following reward publications.
                </Typography>
                <Typography sx={{fontSize:"18px",marginTop:"30px"}}>
                The payment of a reward must be approved by the Los 
                Angeles City Council after reviewing all documentation detailing a claimant’s cooperation and involvement justifies payment.
                </Typography>
                <Typography sx={{fontSize:"18px",marginTop:"30px"}}>
                It is important that the assigned detectives know you are responding to one of these reward offers. 
                Although every effort is made to remove reward bulletins that have expired, you should verify the reward offer
                 status when first contacting the detectives listed.
                </Typography>
                    </Grid>
                </Grid>

                 <Grid container columnSpacing={3} rowSpacing={5} sx={{marginTop:"70px"}}>
                 <Grid item xs={12} sm={6} md={4}>
            <Box sx={{display:"flex",flexDirection:"column",backgroundColor:"#ebf4f7",height:"100%"}}>
                    <Box sx={{textAlign:"center",backgroundColor:"#052942"}}>
                    <Image src={rewardImage1} alt="detective-image" className={styles.rewardImage}/>
                </Box>
                    <Box sx={{padding:"30px 30px 30px 40px",display:"flex",flexDirection:"column"}}>
                     <Typography sx={{fontSize:"24px",fontWeight:"bold"}}>Murder Victim</Typography>
                     <Typography sx={{marginTop:"20px"}}>Victims Name: <b>Marquise Corniche Alexander</b></Typography>
                     <Typography>Location of Crime:  5805 South</Typography>
                     <Typography>Crenshaw Boulevard</Typography>
                     <Typography>Date of Crime:  April 15, 2007</Typography>
                     <ul className={styles.listItem}>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Click for details</Typography></Link></li>
                      </ul>
                      </Box>
                </Box>
               
                 </Grid>
                 <Grid item xs={12} sm={6} md={4}>
            <Box sx={{display:"flex",flexDirection:"column",backgroundColor:"#ebf4f7",height:"100%"}}>
            <Box sx={{textAlign:"center",backgroundColor:"#052942"}}>
                    <Image src={rewardImage2} alt="detective-image" className={styles.rewardImage}/>
                </Box>
                    <Box sx={{padding:"30px 30px 30px 40px",display:"flex",flexDirection:"column"}}>
                     <Typography sx={{fontSize:"24px",fontWeight:"bold"}}>Murder Victim</Typography>
                     <Typography sx={{marginTop:"20px"}}>Victims Name: <b>Justin Pitts</b></Typography>
                     <Typography>Location of Crime:  843 W. 65th St.</Typography>
                     <Typography>Date of Crime:  April 19, 2015</Typography>
                     <ul className={styles.listItem}>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Click for details</Typography></Link></li>
                      </ul>
                      </Box>
                </Box>
               
                 </Grid>
                 <Grid item xs={12} sm={6} md={4}>
            <Box sx={{display:"flex",flexDirection:"column",backgroundColor:"#ebf4f7",height:"100%"}}>
            <Box sx={{textAlign:"center",backgroundColor:"#052942"}}>
                    <Image src={rewardImage3} alt="detective-image" className={styles.rewardImage}/>
                </Box>
                    <Box sx={{padding:"30px 30px 30px 40px",display:"flex",flexDirection:"column"}}>
                     <Typography sx={{fontSize:"24px",fontWeight:"bold"}}>Murder Victim</Typography>
                     <Typography sx={{marginTop:"20px"}}>Victims Name: <b>Porche Charles</b></Typography>
                     <Typography>Location of Crime:  2420 W. 62nd Street</Typography>
                 
                     <Typography>Date of Crime:  May 2, 2015</Typography>
                     <ul className={styles.listItem}>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Click for details</Typography></Link></li>
                      </ul>
                      </Box>
                </Box>
               
                 </Grid>
                 <Grid item xs={12} sm={6} md={4}>
            <Box sx={{display:"flex",flexDirection:"column",backgroundColor:"#ebf4f7",height:"100%"}}>
            <Box sx={{textAlign:"center",backgroundColor:"#052942"}}>
                    <Image src={rewardImage4} alt="detective-image" className={styles.rewardImage}/>
                </Box>
                    <Box sx={{padding:"30px 30px 30px 40px",display:"flex",flexDirection:"column"}}>
                     <Typography sx={{fontSize:"24px",fontWeight:"bold"}}>Murder Victim</Typography>
                     <Typography sx={{marginTop:"20px"}}>Victims Name: <b>Marcelis Gude</b></Typography>
                     <Typography>Location of Crime: 102nd Street and San</Typography>
                     <Typography>Pedro Street</Typography>
                     <Typography>Date of Crime: June 15, 2021</Typography>
                     <Typography className={styles.listItem1}><Link href="#">Click here for News Release</Link></Typography>
                     <ul className={styles.listItem}>
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Click for details</Typography></Link></li>
                      </ul>
                      </Box>
                </Box>
               
                 </Grid>
                 </Grid>
               
            </Container>
        </div>
  )
}

export default RewardBulletin