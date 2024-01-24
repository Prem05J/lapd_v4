'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './internal.module.css'
import Typography from '@mui/material/Typography'
import LaunchIcon from '@mui/icons-material/Launch';
import useMediaQuery from '@mui/material/useMediaQuery'
import { Container } from '@mui/material'


const California = () => {

    const tab = useMediaQuery('(max-width:768px)');

    const [toggle, setToggle] = useState(false)
    return (
        <>

            {/* 1st block */}
            <Box className={styles.bg}>
                <Container>
                    <Grid container>
                        <Grid item xs={11} sm={10} md={7} lg={8}>
                            <Typography sx={{fontSize: tab ? "40px" : "62px",lineHeight:"1.1",fontWeight:"bold"}}>Internal Affairs Division</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* 2nd block */}
            <Container>

                <Box>
                    <Grid container>
                        <Grid item xs={12} sm={11} md={10} lg={8} className={styles.textstyl} >
                            <Typography style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '60px' }} >201 N. Figueroa Street, Suite 1600</Typography>
                            <Typography style={{ fontSize: '18px', fontWeight: 'bold' }} >Los Angeles, CA 90012</Typography>
                            <Typography style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '30px' }} >(800) 339-6868 24-hour toll free hotline</Typography>

                            <Typography style={{ fontSize: '18px' }}>Commanding Officer: <Link href="https://www.lapdonline.org/command-staff/shah-john/">Captain III John D. Shah</Link></Typography>
                            <Typography style={{ fontSize: '18px' }}>Assistant Commanding Officer: <Link href="https://www.lapdonline.org/command-staff/kelley-kirk/">Captain I Kirk Kelley</Link></Typography>

                            <Typography style={{ fontSize: '18px', marginTop: '30px' }} ><span style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '30px' }} >INTERNAL AFFAIRS DIVISION (IAD)</span> acts as the investigative arm of the Chief of Police (COP) with respect to employee misconduct.  (IAD) reports to the Commanding Officer of Professional Standards Bureau, (PSB). All complaints are reviewed by PSB to determine the appropriate investigative entity.</Typography>

                            <Typography sx={{ fontSize: '18px', marginTop: '30px' }}>
                                Internal Affairs Division is responsible for investigating complaints of misconduct of LAPD employees that are either administrative in nature, or have potential criminal elements associated with the complaints. Investigators assigned to IAD interview complainants, witnesses and accused employees, collect and preserve evidence, and ensure other investigative approaches are conducted or considered such as photographs, drawings, and record research.
                            </Typography>

                            <Typography sx={{ fontSize: "18px", marginTop: '30px' }}>
                                The completed complaint investigation is submitted to the Commanding Officers for review.  For criminal investigations, the completed investigation is also presented to the Justice System Integrity Division of the Los Angeles County District Attorney’s office.
                            </Typography>

                            <Typography sx={{ display: toggle ? 'none' : 'flex', alignItems: 'center', paddingTop: '30px' }}>
                                <span className={styles.hlinetwo}></span><Link href="javascript:;" className={styles.insidelnktwo} onClick={() => setToggle(true)}>Read More</Link>
                            </Typography>



                            {/* ==================================      TO BE HIDDEN     ==================================== */}
                            <Box className={`${toggle ? styles.readMoreView : styles.readMoreHide} ${styles.scale_up_left}`}>


                                <Typography sx={{ fontSize: "18px", marginTop: '30px'}}>
                                    Internal Affairs Division is comprised of six investigative sections, each led by an Officer-in-Charge (Lieutenant II) and an Assistant Officer-in-Charge (Detective III), with several investigators (Sergeants II and Detectives II).                                     </Typography>

                                    <Grid container>
              <Grid item sm={12} md={9.5} xl={8.5}>
                <ul className={styles.listBox}>
                  <li className={styles.list}>
                    <div className={styles.bullet}></div>
                    <Typography sx={{ fontSize: "18px" }}>Workplace Investigation Section I;</Typography>
                  </li>
                  <li className={styles.list}>
                    <div className={styles.bullet}></div>
                    <Typography sx={{ fontSize: "18px" }}>Workplace Investigation Section II;</Typography>
                  </li>
                  <li className={styles.list}>
                    <div className={styles.bullet}></div>
                    <Typography sx={{ fontSize: "18px" }}>Complaint Investigation Section – Central;</Typography>
                  </li>
                  <li className={styles.list}>
                    <div className={styles.bullet}></div>
                    <Typography sx={{ fontSize: "18px" }}>Complaint Investigation Section – South;</Typography>
                  </li>
                  <li className={styles.list}>
                    <div className={styles.bullet}></div>
                    <Typography sx={{ fontSize: "18px" }}>Complaint Investigation Section – Valley;</Typography>
                  </li>
                  <li className={styles.list}>
                    <div className={styles.bullet}></div>
                    <Typography sx={{ fontSize: "18px" }}>Complaint Investigation Section – West</Typography>
                  </li>

                </ul>
              </Grid>
            </Grid>


    



                                <Typography sx={{ display: toggle ? 'block' : 'flex', alignItems: 'center', marginBottom: '30px' }}>
                                    <span className={styles.hlinetwo} style={{ marginTop: '10px' }}></span><Link href="javascript:;" className={styles.insidelnktwo} onClick={() => setToggle(false)}>Read Less</Link>
                                </Typography>


                            </Box>

                        </Grid>
                    </Grid>
                </Box>



            </Container>




        </>
    )
}

export default California