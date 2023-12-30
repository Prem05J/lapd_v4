'use client'
import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import global from "../global.module.css"
import useMediaQuery from '@mui/material/useMediaQuery'
import Grid  from '@mui/material/Grid'
import faq from "./faq.module.css"
import Link from 'next/link'

const Faq = () => {

    const mobile = useMediaQuery('(max-width: 576px)');

  return (
    <div>
        <Box sx={{ display: 'flex', padding: '32px 5%', flexDirection: 'column', background: '#0f212b' }}>
            <Typography className={global.fadeInUp} sx={{fontSize:"22px",color:"#fff",fontWeight:'bold'}}>Frequently Asked Questions</Typography>
                <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 10px', fontSize: '62px', fontWeight: '700' }}>FAQ&apos;s</Typography>
            </Box>

           <Box className={global.fadeInUp}  sx={{padding:"60px 3% 5% 5%"}}>
            <Grid container>
                <Grid item xs={12} sm={12} md={8} lg={5}>
                <Typography sx={{fontWeight:"bold",fontSize:"38px"}}>For most of your Frequently Asked Questions, please choose from one of the options below.</Typography>
                </Grid>
              </Grid>

             <Grid container sx={{marginTop:"40px"}} rowSpacing={5} columnSpacing={5}>
                   <Grid item xs={12} sm={12} md={6} lg={3.5}>
                    <Box sx={{backgroundColor:"#ebf4f7",padding:"40px 20px 40px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>Frequently Asked Questions (FAQs)</Typography>
                       <Typography className={faq.linkText} sx={{fontSize:"18px"}} ><span className={faq.spanDash}></span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link href="#">Frequently Asked Questions (FAQs)</Link> </Typography>
              </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={3.5}>
                    <Box sx={{backgroundColor:"#ebf4f7",padding:"40px 20px 40px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>Entertainment Trademark Unit FAQ&apos;s</Typography>
                       <Typography className={faq.linkText} sx={{fontSize:"18px"}} ><span className={faq.spanDash}></span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link href="#">Filming with the LAPD, Documentary, TV &nbsp; Shows, Reality, Fees, etc.</Link> </Typography>
              </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={3.5}>
                    <Box sx={{backgroundColor:"#ebf4f7",padding:"40px 20px 40px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>Missing Persons FAQ</Typography>
                       <Typography className={faq.linkText} sx={{fontSize:"18px"}} ><span className={faq.spanDash}></span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link href="#">Missing</Link> </Typography>
              </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={3.5}>
                    <Box sx={{backgroundColor:"#ebf4f7",padding:"40px 20px 40px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>Traffic FAQ</Typography>
                       <Typography className={faq.linkText} sx={{fontSize:"18px"}} ><span className={faq.spanDash}></span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link href="#">Traffic FAQ</Link> </Typography>
              </Box>
                  </Grid>
                </Grid>
                </Box>
          
        </div>
  )
}

export default Faq