'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './function.module.css'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Container } from '@mui/material'

const ConstitutionalPolicy = () => {
    const tab = useMediaQuery('(max-width:768px)');
    const [toggle, setToggle] = useState(false);

    return (
        <>
            {/* 1st block */}
            <Box className={styles.bg}>
                <Container>
                    <Grid container>
                        <Grid item xs={11} sm={10} md={10} lg={8}>
                            <Typography  sx={{fontSize: tab ? "40px" : "62px",lineHeight:"1.1",fontWeight:"bold"}}>Function and Role of the Board of Police Commissioners</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* 2nd block */}

            <Container>
                <Box className={styles.wholeblock}>
                    <Box>
                        <Grid container>
                            <Grid item sm={12} md={10} lg={8} sx={{ marginTop: '50px' }}>
                                <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>Los Angeles Police Commission</Typography>
                                <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>100 West First Street, Room 134</Typography>
                                <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>Los Angeles, CA 90012</Typography>
                                <Typography sx={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '30px' }}>213-236-1400</Typography>

                                <Typography sx={{ marginBottom: '30px', fontSize: '18px', lineHeight: '1.55' }}>
                                    Under the City Charter, the Board of Police Commissioners is the head of the Police Department. The Board sets overall policy while the Chief of Police manages the daily operations of the Department and implements the Board’s policies or policy direction and goals.
                                </Typography>
                                <Typography sx={{ marginBottom: '30px', fontSize: '18px', lineHeight: '1.55' }}>
                                    The Board of Police Commissioners, originally created in the 1920’s, is comprised of five civilians who donate their time to the City while maintaining their professional careers. They are appointed by the Mayor and confirmed by the City Council. The Commissioners serve a maximum of two five-year terms. The Commissioners routinely spend 25-50 hours per week on Commission business, and serve as the citizens’ voice in police affairs and as a means of ensuring more responsive and effective City government.
                                </Typography>
                                <Typography sx={{ display: toggle ? 'none' : 'flex', alignItems: 'center', marginBottom: '15px', paddingTop: '20px' }}>
                                    <span className={styles.hlinetwo}></span><Link href="javascript:;" className={styles.insidelnktwo} onClick={() => setToggle(true)}>Read More</Link>
                                </Typography>
                                <Box className={`${toggle ? styles.readMoreView : styles.readMoreHide} ${styles.scale_up_left}`}>
                                    <Typography sx={{ marginBottom: '15px', fontSize: '18px', lineHeight: '1.55' }}>
                                        The Commissioners’ concerns are reflective of the community-at-large, and their priorities include implementing recommended reforms, improving service to the public by the Department, reducing crime and the fear of crime, and initiating, implementing and supporting community policing programs.
                                    </Typography>
                                    <Typography sx={{ marginBottom: '30px', fontSize: '18px', lineHeight: '1.55' }}>
                                        The Board holds meetings every Tuesday, normally at 9:30 a.m. The meetings follow a published agenda consisting of various routine items of concern to the Department, as well as policy matters that may be of concern to the community. Each agenda includes a period for public comment, during which any member of the public may speak for up to two minutes on any topic within the Commission’s jurisdiction.</Typography>
                                    <Typography sx={{ marginBottom: '30px', fontSize: '18px', lineHeight: '1.55' }}>
                                        Watch Police Commission meetings every Tuesday at 2:00pm on Cityview, Channel 35, within the City of Los Angeles, or listen to the meetings live on Councilphone, 213-621-CITY, 310-471-CITY, 310-547-CITY, or 818-904-9450.
                                    </Typography>
                                    <Typography sx={{ display: toggle ? 'block' : 'flex', alignItems: 'center', marginBottom: '30px', paddingTop: '30px' }}>
                                        <span className={styles.hlinetwo} style={{ marginTop: '10px' }}></span><Link href="javascript:;" className={styles.insidelnktwo} onClick={() => setToggle(false)}>Read Less</Link>
                                    </Typography>

                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </>
    )
}

export default ConstitutionalPolicy