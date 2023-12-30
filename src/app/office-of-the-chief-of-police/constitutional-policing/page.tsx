import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import LaunchIcon from '@mui/icons-material/Launch';
import styles from "./constitutional.module.css";
import pdf from '../../../../public/Icons/pdf-svg-icon.svg'
import global from "../../global.module.css"

const Constitutional = () => {
    return (
        <>
            {/* 1st block */}
            <Box className={styles.bg}>
                <Grid container className={styles.blockspace}>
                    <Grid item xs={11} sm={10} md={7} lg={6} className={global.fadeInUp}>
                        <h1 className={styles.h1size}>Office of Constitutional Policing and Policy</h1>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <span className={styles.hline}></span><Link href="#" className={styles.insidelnk}>Commanding Officer - Police Administrator Lizabeth Rhodes</Link>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            {/* 2nd block */}
            <Box className={`${styles.wholeblock} ${global.fadeInUp}`}>
            <Box>
                <Grid container>
                    <Grid item sm={10} md={10} lg={5} className={styles.textstyl}>
                        <h2>Office of Constitutional Policing and Policy (OCPP) Public Website</h2>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                            <span className={styles.hlinetwo}></span><Link href="#" className={styles.insidelnktwo}>Read More</Link>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container>
                    <Grid item sm={10} md={10} lg={5} className={styles.textstyl} sx={{marginTop: '50px'}}>
                        <Typography>Following the discovery and disclosure of the Rampart Area Corruption Incident by the Los Angeles Police Department, the
                             <Link href="#">United States Department of Justice (DOJ)</Link>notified the City of Los Angeles that it intended to file a civil suit alleging that the Department was engaging in a pattern or practice of excessive force, false arrests and unreasonable searches and seizures.</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '30px' , paddingTop: '30px'}}>
                            <span className={styles.hlinetwo}></span><Link href="#" className={styles.insidelnktwo}>Read More</Link>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            </Box>
            <Box>
                <Grid container className={global.fadeInUp}>

                    <Grid item sm={6} md={6} lg={6} className={styles.gridscardpadone}>
                        <Box className={styles.linkbox}>
                            <h2>Use Of Force Year End Review</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />2021 Use of Force - Year End Report</Link></li>
                                <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />2020 Use Of Force - Year End Review</Link></li>
                                <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />2019 End of Year Report Crime & Initiatives</Link></li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item sm={6} md={6} lg={6} className={styles.gridscardpadtwo}>
                        <Box className={styles.linkbox}>
                            <h2>About the LAPD</h2>
                            <ul className={styles.aboutul}>
                            <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Arrestees with Mental Illness</Link></li>
                                <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Effective Encounters with Mentally Ill Persons</Link></li>
                                <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Office of the Inspector General - Categorical Use of Force</Link></li>
                            </ul>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
            <Box>
                <Grid container className={global.fadeInUp}>

                    <Grid item sm={6} md={6} lg={6} className={styles.gridscardpadone}>
                        <Box className={styles.linkbox}>
                            <h2>Consent Decree Mental Illness, Final Report, Harvard Study</h2>
                            <ul className={styles.aboutul}>
                            <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Consent Decree City Compliance Report</Link></li>
                                <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Final Consent Decree</Link></li>
                                <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Harvard Study - LAPD Under a Consent Decree</Link></li>                            </ul>
                        </Box>
                    </Grid>
                    <Grid item sm={6} md={6} lg={6} className={styles.gridscardpadtwo}>
                        <Box className={styles.linkbox}>
                            <h2>Final Report Mac Arthur Park Incident</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Final Report on Mac Arthur Park Incident</Link></li>
                                <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Final Report Mac Arthur Incident - Spanish</Link></li>
                            </ul>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container className={global.fadeInUp}>

                    <Grid item sm={6} md={6} lg={6} className={styles.gridscardpadone}>
                        <Box className={styles.linkbox}>
                            <h2>Miscellaneous Consent Decree Reports</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{color: 'black', marginRight: '10px'}}/>Federal judge lifts LAPD consent decree</Link></li>
                                <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Motor Vehicle and Pedestrian Stop Data</Link></li>
                                <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Pedestrian and Motor Vehicle Post-Stop Data Analysis Report</Link></li>      
                                <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Summary of Department Response to Lodestar Report</Link></li>
                                <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Training the 21st Century Police Officer - RAND Report</Link></li>      
                            </ul>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            </>
        )
    }

export default Constitutional