'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography  from '@mui/material/Typography'
import global from "../global.module.css"
import useMediaQuery from '@mui/material/useMediaQuery'
import Link from 'next/link'
import styles from "./Communications.module.css"

const PublicCommunication = () => {

  const mobile = useMediaQuery('(max-width: 576px)');
  
  return (
    <div>
      
      <Box sx={{ display: 'flex', padding: '32px 5%', flexDirection: 'column', background: '#0f212b' }}>
            <Typography className={global.fadeInUp} sx={{ marginBottom: '8px', fontStyle:"italic", color: '#fff', fontSize: mobile ? '20px' : '22px' }}>Integrity in all we say and do</Typography>
            <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 20px', fontSize: mobile ? '34px' : '60px', fontWeight: '700' }}>Public Communications <br />Group</Typography>
            </Box>

            <Box className={global.fadeInUp} sx={{display:"flex",flexDirection:"column",gap:"30px",marginTop:"60px",padding:"0% 5% 0% 5%"}}>
              <Box>
              <Typography sx={{fontSize:"18px",fontWeight:"bold"}}>100 West First Street</Typography>
              <Typography sx={{fontSize:"18px",fontWeight:"bold"}}>Room 466</Typography>
              <Typography sx={{fontSize:"18px",fontWeight:"bold"}}>Los Angeles, California 90012</Typography>
              <Typography sx={{fontSize:"18px",fontWeight:"bold"}}>213-486-5900</Typography>
              </Box>


               <Grid container>
                <Grid item xs={12} sm={12} md={9} lg={7}>
               <Typography sx={{fontSize:"18px"}}>The Public Communications Group (PCG) deals exclusively with matters related to the sharing of information 
                between the Department and the public it serves. The PCG goal is to ensure that open lines of communication 
                are maintained at all times with all segments of the greater Los Angeles community.</Typography>
              </Grid>
                  </Grid>

              <Grid container>
              <Grid item xs={12} sm={12} md={9} lg={7}>
               <Typography sx={{fontSize:"18px"}}>It is a well-established tenet of law enforcement that openness of communication is a major 
                building block in gaining the trust and confidence of the public. The organizational entities within PCG employ tried and proven methods to keep the Los Angeles public fully informed on the activities of its police department. One such method is by establishing and maintaining this web site. Here you can gain a tremendous understanding of virtually every aspect of the Department’s operations without leaving home, school or the library. Other PCG methods employed are more personal such as media interviews. In all cases the major thrust of PCG mission is to provide you, the public, 
                with information that is complete, accurate, and up-to-date.</Typography>
              </Grid>
              </Grid>

              <Grid container>
              <Grid className={styles.link} item xs={12} sm={12} md={9} lg={7}>
               <Typography sx={{fontSize:"18px"}}>The Public Communication Group is a primary organizational component of the
               <Link href="javascript:;"> Office of the Chief of Police</Link>. Its activities are directed by the Public Communications Group</Typography>
              </Grid>
              </Grid>

              <Grid container>
              <Grid  item xs={12} sm={12} md={9} lg={7}>
               <Typography sx={{fontSize:"18px"}}>The Media Relations Section of the Los Angeles Police Department fosters 
               cooperation and mutual respect between the Department and the news media. The members of MRS are dedicated and highly trained individuals who understand the importance of using the media as a valuable resource to keep the public informed as to the Department’s activities. In this regard, they realize that their role is to assist members of the media in completing the task of gathering information and reporting on news events impacting residents and visitors to the City of Los Angeles. 
               The public’s perception and image of the Department is largely dependent on the hard work of MRS.</Typography>
              </Grid>
              </Grid>

              
               <Typography className={styles.link}> <Link href="javascript:;">Media Relations Handbook</Link></Typography>
               <Typography className={styles.link}> <Link href="javascript:;">Press Pass Policy</Link></Typography>
               <Typography className={styles.link}> <Link href="javascript:;">News Room</Link></Typography>

               <Box sx={{display:"flex",flexDirection:"column",gap:"30px"}}>
                <Typography sx={{fontWeight:"bold",fontSize:"18px"}}>History of MRS</Typography>

                <Grid container>
              <Grid  item xs={12} sm={12} md={9} lg={7}>
               <Typography sx={{fontSize:"18px"}}>Prior to the late 1950s, the Los Angeles Police Department had no central
                location from which members of the media could obtain information regarding the various newsworthy events 
                in which the Department had played a part. As a result, individual members of the media and the Department 
                were often parties to news gathering endeavors that resulted in hastily assembled, disjointed and often 
                contradictory stories disseminated to the public.
              </Typography>

              <Typography sx={{fontSize:"18px",marginTop:"30px"}}>Following a series of negative events involving the Department, which were 
              reported by the media within traditional and accepted journalistic practices, a need was identified that involved 
              providing the media with easy access to accurate information relative to Department
               activities. This need was acted upon and the eventual creation of the Media Relations Section (MRS) was the result.
              </Typography>

              <Typography sx={{fontSize:"18px",marginTop:"30px"}}>In its present form, MRS fosters cooperation and mutual respect 
              between the Department and the news media. The Police Department actively pursues, cultivates, and encourages an open
               and responsive relationship with the media; MRS is the vehicle by which it does so. As a world-famous capital,
                Los Angeles generates news with far-reaching interest. The resultant inquiries by worldwide media for specialized 
                information and assistance concerning specific news assignments are routed to MRS for action. Certain other requests
                 for assistance by motion picture/television writers, directors, producers, etc. may be handled by MRS personnel.
              </Typography>

              </Grid>
                </Grid>
               </Box>

               <Box sx={{marginTop:"30px"}}>
                <Typography sx={{fontSize:"40px",fontWeight:"bold"}}>Facts About MRS</Typography>

                 <Grid  container>
                  <Grid item xs={12} sm={12} md={9} lg={7}>
                <ul className={styles.listBox}>
                 <li className={styles.list}>
                   <Box className={styles.bullet}></Box>
                     <Typography sx={{fontSize:"18px"}}>MRS is staffed from 5:00 a.m. until 11:00 p.m. Either the Officer in Charge or his or her assistant is
                      available on a 24-hour daily basis to respond to serious major incidents to assist field commanders with the press corps.</Typography>
                 </li>
              <li className={styles.list}>
              <Box className={styles.bullet}></Box>
              <Typography sx={{fontSize:"18px"}}>Liaison with all major
               media outlets regardless of language, cultural, or lifestyle orientation/affiliation is maintained by MRS.</Typography>
              </li>
              <li className={styles.list}>
              <Box className={styles.bullet}></Box>
              <Typography sx={{fontSize:"18px"}}>News releases that include telephone contacts within the Department are issued by MRS to facilitate the dissemination of news citywide.</Typography>
              </li>
              <li className={styles.list}>
              <Box className={styles.bullet}></Box>
              <Typography sx={{fontSize:"18px"}}>Press conferences are coordinated on a Department-wide basisPress conferences are coordinated on a Department-wide basis..</Typography>
              </li>
              <li className={styles.list}>
              <Box className={styles.bullet}></Box>
              <Typography sx={{fontSize:"18px"}}>MRS personnel are available to assist members of the public with questions about the Department if the information is not available on the web site.</Typography>
              </li>
              <li className={styles.list}>
              <Box className={styles.bullet}></Box>
              <Typography sx={{fontSize:"18px"}}>Personnel from MRS can facilitate media interview access to Department employees and/or assist with gaining entry to police stations, the headquarters 
              building or other locations housing police personnel and equipment.</Typography>
              </li>
              <li className={styles.list}>
              <Box className={styles.bullet}></Box>
              <Typography sx={{fontSize:"18px"}}>Staffing for the City’s Emergency
               Operations Center, Public Information Officer position is provided by MRS.</Typography>
              </li>
              <li className={styles.list}>
              <Box className={styles.bullet}></Box>
              <Typography className={styles.link } sx={{fontSize:"18px"}}>Providing information about how to obtain   <span style={{height:"2px",backgroundColor:"#000",width:"18px",position:"absolute",marginTop:"12px"}}></span> &nbsp;&nbsp;&nbsp;&nbsp;
              <Link href="javascript:;" className={styles.insidelnktwo}> media passes </Link> which permit entry
               across police lines to report the news is a function of MRS.</Typography>
              </li>
              <li className={styles.list}>
              <Box className={styles.bullet}></Box>
              <Typography sx={{fontSize:"18px"}}>MRS deploys officers who are proficient
               in foreign languages to assist the media and members of the Department or the public.</Typography>
              </li>
              <li className={styles.list}>
              <Box className={styles.bullet}></Box>
              <Typography sx={{fontSize:"18px"}}>Complaints received from any Department source concerning the media, such as interfering with an investigation or destruction of evidence through contamination of a crime scene, are handled by MRS.</Typography>
              </li>
              <li className={styles.list}>
              <Box className={styles.bullet}></Box>
              <Typography sx={{fontSize:"18px"}}>MRS provides local electronic media outlets with specialized material of general interest to the public for use during highly competitive “sweeps weeks” in which comparative determinations of the market share of the viewing public are ascertained.</Typography>
              </li>
              <li className={styles.list}>
              <Box className={styles.bullet}></Box>
              <Typography sx={{fontSize:"18px"}}>Semi-annual meetings between the media and the Chief of Police are coordinated by MRS. The purpose of these meetings is to discuss problems in the spirit of mutual cooperation.</Typography>
              </li>
              <li className={styles.list}>
              <Box className={styles.bullet}></Box>
              <Typography sx={{fontSize:"18px"}}>MRS provides training to sergeants, detectives, and watch commander in-service schools on media relations. Specialized training for the media is available by request as is roll call training in media relations for Department personnel.</Typography>
              </li>
          </ul>
                </Grid>
                </Grid>

              
              </Box>
              </Box>

    </div>
  )
}

export default PublicCommunication
