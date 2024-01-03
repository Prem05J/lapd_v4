'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery'
import trainingStyle from "./training.module.css"
import Grid from '@mui/material/Grid'
import global from "../global.module.css"

const Training = () => {
  const mobile = useMediaQuery('(max-width: 576px)');

  return (
    <div>
      <Box sx={{ display: 'flex', padding: '32px 5%', flexDirection: 'column', background: '#0f212b' }}>
        
       <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 20px', fontSize: mobile ? '30px' : '62px', fontWeight: '700' }}>
       Training Division
       </Typography>
       <Link  style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} href='https://www.joinlapd.com/'>
        <Box className={global.fadeInUp} sx={{display:"flex",gap:"10px",alignItems:"center"}}>
       <span style={{ height: "2px", width: "20px", opacity: ".9", backgroundColor: "#fff", marginLeft: "10px" }}></span>
          <Typography sx={{ padding: '0px 0px 0xp 20px', color: "#7DDFFF", fontSize: "16px", textTransform: "none", '&:hover': { color: "#fff" } }}>Commanding Officer - Captain Christopher M. Zine</Typography>
          </Box>
        </Link>

      </Box>
      <Box className={global.fadeInUp} sx={{display:"flex",flexDirection:"column",paddingTop:"2%",padding:"5%"}}>
       <Grid container rowSpacing={5}>
        <Grid item xs={12} sm={12} md={12} lg={7} xl={5}>
        <Typography sx={{fontSize:"18px"}}>
        The mission of the Los Angeles Police Department’s (LAPD) Training Division is to provide state of the art, meaningful, realistic, and relevant training to in-service and recruit officers in order to 
        prepare them for field duty. Training Division has five major sections:
        </Typography>
          </Grid>
        
      
          </Grid>

          <Box sx={{marginTop:"20px"}}>
          <ul className={trainingStyle.listBox}>
            <li className={trainingStyle.list}>
              <Box className={trainingStyle.bullet}></Box>
              <Typography sx={{fontSize:"18px"}}>Basic Course Training Section</Typography>
              </li>
              <li className={trainingStyle.list}>
              <Box className={trainingStyle.bullet}></Box>
              <Typography sx={{fontSize:"18px"}}>Firearms Training Section</Typography>
              </li>
              <li className={trainingStyle.list}>
              <Box className={trainingStyle.bullet}></Box>
              <Typography sx={{fontSize:"18px"}}>Field Operations Training Section</Typography>
              </li>
              <li className={trainingStyle.list}>
              <Box className={trainingStyle.bullet}></Box>
              <Typography sx={{fontSize:"18px"}}>In-Service Training Section</Typography>
              </li>
              <li className={trainingStyle.list}>
              <Box className={trainingStyle.bullet}></Box>
              <Typography sx={{fontSize:"18px"}}>Support Section</Typography>
              </li>
          </ul>
          </Box>
        
        

       
         
      

      </Box>
    </div>
  )
}

export default Training