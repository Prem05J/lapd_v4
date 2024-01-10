'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './office.module.css'
import Typography from '@mui/material/Typography'
import LaunchIcon from '@mui/icons-material/Launch';
import useMediaQuery from '@mui/material/useMediaQuery'
import { Container } from '@mui/material'
import global from "../../global.module.css"


const California = () => {

    const tab = useMediaQuery('(max-width:768px)');

    const [toggle, setToggle] = useState(false)
    return (
        <>

            {/* 1st block */}
            <Box className={styles.bg}>
                <Container>
                    <Grid container className={global.fadeInUp}>
                        <Grid item xs={11} sm={10} md={7} lg={8}>
                            <Typography className={styles.h1size}>Office of the Inspector General</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <LaunchIcon sx={{ color: '#fff' }} />  <Link href="#" className={styles.insidelnk}><Typography>Office of Inspector General web site</Typography></Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* 2nd block */}
            <Container>

                <Box>
                    <Grid container >
                        <Grid item xs={12} sm={11} md={10} lg={8} className={styles.textstyl} >
                            <Typography style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '60px' }} >Office of the Inspector General</Typography>
                            <Typography style={{ fontSize: '18px', fontWeight: 'bold' }} >350 South Figueroa Street, Suite 1002</Typography>
                            <Typography style={{ fontSize: '18px', fontWeight: 'bold' }} >Los Angeles, CA 90071</Typography>

                            <Box sx={{ display: "flex", flexDirection: "column", paddingBottom: "20px" }}>
                                <Typography><Link href="tel:213-893-6400">(213) 893-6400</Link></Typography>
                                <Typography><Link href="mailto:communityrelationsoig@lacity.org">communityrelationsoig@lacity.org</Link></Typography>

                            </Box>
                            <Typography sx={{ fontSize: "18px" }}>
                                The Office of the Inspector General (OIG) is an independent entity, established through a voter-approved amendment to the Los Angeles City Charter in 1995, charged with providing civilian oversight of the Los Angeles Police Department (LAPD or Department). The OIG supports the Board of Police Commissioners (BOPC) – a five-member civilian panel that acts as the head of the Department – and the public by providing information and analysis regarding the conduct and performance of the LAPD. The OIG is commonly referred to as the “eyes and ears” of the BOPC.
                            </Typography>

                            <Typography sx={{ display: toggle ? 'none' : 'flex', alignItems: 'center', paddingTop: '30px' }}>
                                <span className={styles.hlinetwo}></span><Link href="javascript:;" className={styles.insidelnktwo} onClick={() => setToggle(true)}>Read More</Link>
                            </Typography>

                            {/* ==================================      TO BE HIDDEN     ==================================== */}
                            <Box className={`${toggle ? styles.readMoreView : styles.readMoreHide} ${styles.scale_up_left}`}>


                                <Typography style={{ marginTop: '30px' }} className={styles.ptag}>
                                    The mission of the OIG is to:
                                </Typography>

                                <ul className={styles.disc}>
                                    <li>
                                        <Typography sx={{ marginBottom: '12px', color: 'black', fontSize: '18px' }}>(1) provide strong, independent, and effective oversight of the LAPD;</Typography>
                                    </li>
                                    <li>
                                        <Typography sx={{ marginBottom: '12px', color: 'black', fontSize: '18px' }}>(2) ensure that all LAPD employees act with honesty, dignity, and respect toward the public; and</Typography>
                                    </li>
                                    <li>
                                        <Typography sx={{ marginBottom: '12px', color: 'black', fontSize: '18px' }}>(3) conduct community outreach to educate the public about the OIG, the BOPC, and the LAPD.</Typography>
                                    </li>
                                </ul>


                                <Typography style={{ marginTop: '30px' }} className={styles.ptag}>
                                    The position of Inspector General reports directly to the BOPC and is completely outside the chain-of-command of the Chief of Police (COP).
                                </Typography>


                                <Typography style={{ marginTop: '30px' }} className={styles.ptag}>
                                    The creation of the OIG was one of the major reform recommendations issued by the Christopher Commission, which examined the LAPD’s operations following the beating of Rodney King by officers in 1991. Among other things, the Christopher Commission recommended placing a civilian with no connection to the Department in a position to monitor, audit, and oversee the Department’s disciplinary system. Since its inception, the OIG’s authorities and responsibilities have expanded beyond simply the review of investigations into complaints of misconduct.
                                </Typography>
                                <Typography style={{ marginTop: '30px' }} className={styles.ptag}>
                                    The OIG now has the authority to initiate an audit or investigation into any aspect of the LAPD, and it has unfettered access to all Department records, facilities, databases, and personnel in order to complete its work effectively.
                                </Typography>



                                <Typography style={{ marginTop: '30px' }} className={styles.ptag}>
                                    In addition to its administrative support team, the OIG operates in four primary focus areas:
                                </Typography>

                                <ul className={styles.disc}>
                                    <li>
                                        <Typography sx={{ marginBottom: '12px', color: 'black', fontSize: '18px' }}>First, the OIG reviews and analyzes all serious uses of force by LAPD officers, including officer-involved shootings and other uses of force that result in death or hospitalization.</Typography>
                                    </li>

                                    <li>
                                        <Typography sx={{ marginBottom: '12px', color: 'black', fontSize: '18px' }}>Second, the OIG oversees the LAPD’s internal disciplinary process, monitoring various investigations into misconduct and acting as an intake point for complaints against LAPD employees.</Typography>
                                    </li>
                                    <li>
                                        <Typography sx={{ marginBottom: '12px', color: 'black', fontSize: '18px' }}>Third, the OIG conducts reviews and audits into a wide variety of the Department’s operations in order to ensure compliance with policy and the law, identify systemic issues of concern, and recommend corrective actions to the BOPC for its consideration.</Typography>
                                    </li>
                                    <li>
                                        <Typography sx={{ marginBottom: '12px', color: 'black', fontSize: '18px' }}>Finally, the OIG conducts community outreach to ensure that it is acting as an accessible and effective service to the public.</Typography>
                                    </li>
                                </ul>

                                <Typography style={{ marginTop: '30px' }} className={styles.ptag}>
                                The OIG is staffed by civilian professionals with diverse backgrounds relevant to the oversight of law enforcement. Staff experience includes investigations, audits, legal analysis, prior law enforcement, public policy, data analysis, and other areas of professional relevance. The current Inspector General is Mark P. Smith.
                                </Typography>

                                <Typography style={{ marginTop: '30px' }} className={styles.ptag}>
                                For more information about the OIG, click <Link href="https://www.oig.lacity.org/">here</Link> for their website.
                                </Typography>



                                <Typography sx={{ display: toggle ? 'block' : 'flex', alignItems: 'center', marginBottom: '30px' }}>
                                    <span className={styles.hlinetwo} style={{ marginTop: '10px' }}></span><Link href="javascript:;" className={styles.insidelnktwo} onClick={() => setToggle(false)}>Read Less</Link>
                                </Typography>


                            </Box>
                            {/* ==================================      TO BE HIDDEN     ==================================== */}

                        </Grid>
                    </Grid>
                </Box>


            </Container>




        </>
    )
}

export default California