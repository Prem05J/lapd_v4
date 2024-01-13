"use client"
import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import global from "../global.module.css"
import Grid  from '@mui/material/Grid'
import { Container } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import styles from "./styles.module.css"
import Link from 'next/link'

const CandidateAdvancement = () => {

    const mobile = useMediaQuery('(max-width: 576px)');

  return (
    <div>
        <Box sx={{ display: 'flex', padding: '35px 0px', flexDirection: 'column', background: '#0f212b' }}>
          <Container>
            <Grid container>
                <Grid item xs={12} lg={8}>
                <Typography className={global.fadeInUp} sx={{ color: '#fff',lineHeight:"1.1", margin: '0px 0px 10px', fontSize: mobile ? '40px' : '62px', fontWeight: '700' }}>Candidate Advancement Program (CAP)</Typography>
                </Grid>
                </Grid>
      
                </Container>

               
         </Box>

                 <Container>
                 <Grid container className={global.fadeInUp}>
                            <Grid item xs={12} lg={8}>
                    <Box sx={{marginTop:"60px"}}>
                    <Typography sx={{fontSize:"18px"}}>The Candidate Advancement Program (CAP) has the following purpose:</Typography>

            <Box className={styles.listbox}>

         
             <ul>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
                 <Typography sx={{fontSize:"18px"}}>Contacts the police department or local crime prevention organization for help in training members in home security and reporting skills and for information on local crime patterns</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
                 <Typography sx={{fontSize:"18px"}}>elects a coordinator and block captains who are responsible for organizing meetings and relaying information to members</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
           <Typography sx={{fontSize:"18px"}}>Recruits members, keeps up-to-date on new residents and makes special efforts to involve the elderly, working parents, and young people</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
           <Typography sx={{fontSize:"18px"}}>Works with local government and law enforcement to put up Neighborhood Watch signs, usually after at least 50 percent of all households in a neighborhood are enrolled</Typography>
             </li>
            
                    </ul>
           
                    </Box>
                  <Typography sx={{fontSize:"18px",marginTop:"60px"}}>All participants candidates must be in the police office selection  process for the City of Los Angeles. 
                    Those eligible to participate in this program are required to successfully pass the 
                    written portion of the examination.</Typography>
                   
                        <Typography sx={{marginTop:"40px",fontSize:"18px"}}>LA Mission College</Typography>
                        <Typography sx={{fontSize:"18px"}}>12890 Harding St.</Typography>
                        <Typography sx={{fontSize:"18px"}}>Sylmar, CA 91342</Typography>
                        <Typography sx={{fontSize:"18px",marginTop:"40px"}}>Tuesdays & Thursdays 6 pm to 9 pm</Typography>
                        <Typography className={styles.linktxt}>Call Public Safety Bureau if you require further information at <span style={{width:"18px",height:"2px",backgroundColor:"grey",marginBottom:"2px"}}></span> <Link  href="#">(213) 473-9060</Link>.</Typography>
                           
                    
                    </Box>
                    </Grid>
                        
                        </Grid>
                </Container>
        </div>
  )
}

export default CandidateAdvancement