'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './organization.module.css'
import pdf from '../../../public/pdf.png'
import pdf1 from '../../../public/Icons/icon-pdf-white.svg'
import global from "../global.module.css"
import Typography from '@mui/material/Typography'
import LaunchIcon from '@mui/icons-material/Launch';
import { Container } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'


const OrganizationChat = () => {

    const mobile = useMediaQuery('(max-width: 576px)');


    return (
        <>
            {/* 1st block */}
            <Box className={styles.bg}>
                <Container>
                <Grid container className={styles.blockspace}>
                    <Grid item xs={11} sm={10} md={12} className={global.fadeInUp}>
                        <Typography sx={{fontSize: mobile ? "40px" : "62px",fontWeight:"bold"}}>LAPD Organization Chart</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Image src={pdf1} alt='pdf' style={{ height: '25px', width: '25px' }} /><Link href="javascript:;" className={styles.insidelnk}><Typography>LAPD Organization Flow Chart</Typography></Link>
                        </Box>
                    </Grid>
                </Grid>
                </Container>
            </Box>
            {/* 2nd block */}


            <Container>
            <Box className={`${styles.wholeblock} ${global.fadeInUp}`}>
                <Box>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={10} lg={7} xl={8} className={styles.bluecard}>
                            <Typography>The Los Angeles Police Department is one of the largest and most innovative law enforcement agencies in the world. It is responsible for providing police service to an area encompassing 468 square miles and 21 community areas, representing approximately over 4 million residents as of 2023.</Typography>
                            <Typography sx={{ marginTop: '30px' }}>The Board of Police Commissioners oversees all operations of the LAPD. For more information about any office of the LAPD, click the name of the office you are interested in below. You may also click the charts below to view the full LAPD Organizational Chart or the Organizational Chart for the City of Los Angeles.</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>


            {/*====================================== lg & md view ================================================*/}

            <Box className={styles.lg} sx={{marginTop:"30px"}}>
                <Grid container className={global.fadeInUp} columnSpacing={5} rowSpacing={5}>

                    {/*====================================== Left side ================================================*/}

                    <Grid item sm={6} md={6} lg={6}>
                        <Box className={styles.linkbox}>
                            <h2>Board of Police Commissioners</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Board of Police Commissioners</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Office of the Chief of Police</Link></li>
                            </ul>
                        </Box>
                        <Box className={styles.linkbox} sx={{ marginTop: '40px' }}>
                            <h2>Community Safety Partnership Bureau</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Community Safety Partnership Bureau</Link></li>
                            </ul>
                        </Box>
                        <Box className={styles.linkbox} sx={{ marginTop: '40px' }}>
                            <h2>Professional Standards Bureau</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Internal Affairs Division (IAD)</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Force Investigation Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Special Operations Division</Link></li>
                            </ul>
                        </Box>
                        <Box className={styles.linkbox} sx={{ marginTop: '40px' }}>
                            <h2>Administrative Services Bureau</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Commanding Officer</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Support Services Group</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Communications Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Custody Services Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Motor Transport Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Records and Identification Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Evidence and Property Management Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Facilities Management Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Fiscal Group</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Personnel Division</Link></li>
                            </ul>
                        </Box>

                        <Box className={styles.linkbox} sx={{ marginTop: '40px' }}>
                            <h2>Detective Bureau</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Detective Bureau</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>COMPSTAT</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Detective Services Group</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Robbery-Homicide Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Juvenile Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Gang and Narcotics Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Commercial Crimes Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Detective Support and Vice Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Forensic Science Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Technical Investigation Division</Link></li>
                            </ul>
                        </Box>
                        <Box className={styles.linkbox} sx={{ marginTop: '40px' }}>
                            <h2>Information Technology Bureau</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Application Development and Support Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>ECCCS Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Information Technology Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Innovation Management Division </Link></li>
                            </ul>
                        </Box>


                        <Box className={styles.linkbox} sx={{ marginTop: '40px' }}>
                            <h2>Personnel Division</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Personnel Division</Link></li>
                            </ul>
                        </Box>

                        <Box className={styles.linkbox} sx={{ marginTop: '40px' }}>
                            <h2>Specialized Units</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Air Support Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Art Theft Detail</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Gang and Narcotics Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>K-9 Unit</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Metropolitan Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Mounted Unit</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Off-Road Enforcement</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Specialized Enforcement Section (Motors & Commercial Enforcement)</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>S.W.A.T.</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Underwater Dive Unit</Link></li>
                            </ul>
                        </Box>

                    </Grid>



                    {/*====================================== Right side ================================================*/}


                    <Grid item sm={6} md={6} lg={6} >
                        <Box className={styles.linkbox}>
                            <h2>Chief of Staff</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Commanding Officer</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Employee Relations Group</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Public Communications Group</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Media Relations Division</Link></li>

                            </ul>
                        </Box>
                        <Box className={styles.linkbox} sx={{ marginTop: '40px' }}>
                            <h2>Office of Constitutional Policing & Policy</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Commanding Officer</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Audit Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Diversity, Equity, & Inclusion</Link></li>
                            </ul>
                        </Box>

                        <Box className={styles.linkbox} sx={{ marginTop: '40px' }}>
                            <h2>Office of Support Services</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Director, Office of Support Services</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Behavioral Science Services</Link></li>
                            </ul>
                        </Box>

                        <Box className={styles.linkbox} sx={{ marginTop: '40px' }}>
                            <h2>Training Bureau</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Commanding Officer</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Training Bureau (TB)</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Recruitment and Employment Division</Link></li>
                            </ul>
                        </Box>

                        <Box className={styles.linkbox} sx={{ marginTop: '40px' }}>
                            <h2>Office of Special Operations</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Office of Special Operations</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Counter-Terrorism and Special Operations Bureau</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Major Crimes Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Emergency Services Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Metropolitan Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Air Support Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Security Services Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Transit Service Bureau</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Transit Services Group</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Transit Services Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Traffic Group</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Central Traffic Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>South Traffic Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>West Traffic Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Valley Traffic Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Underwater Dive Unit</Link></li>
                            </ul>
                        </Box>
                        <Box className={styles.linkbox} sx={{ marginTop: '40px' }}>
                            <h2>Office of Operations</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Office of Operations</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Central Bureau</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Central Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Rampart Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Hollenbeck Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Northeast Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Newton Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>South Bureau</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>77th Street Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Southwest Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Harbor Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Southeast Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>South Bureau Homicide Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>West Bureau</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Hollywood Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Wilshire Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>West Los Angeles Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Olympic Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Pacific Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Valley Bureau</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Van Nuys Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>West Valley Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>North Hollywood Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Foothill Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Devonshire Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Mission Division</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Topanga Division</Link></li>
                            </ul>
                        </Box>
                    </Grid>

                </Grid>
            </Box>



            {/*====================================== xs view ================================================*/}


            <Box className={styles.xs}>
                <Box>
                    <Grid container className={global.fadeInUp} columnSpacing={5} rowSpacing={5}>

                        <Grid item xs={12} >
                            <Box className={styles.linkbox}>
                                <h2>Board of Police Commissioners</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Board of Police Commissioners</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Office of the Chief of Police</Link></li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item xs={12} >
                            <Box className={styles.linkbox}>
                                <h2>Chief of Staff</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Commanding Officer</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Employee Relations Group</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Public Communications Group</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Media Relations Division</Link></li>

                                </ul>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>

                <Box sx={{marginTop:"40px"}}>
                    <Grid container className={global.fadeInUp} columnSpacing={5} rowSpacing={5}>

                        <Grid item xs={12}>
                            <Box className={styles.linkbox}>
                                <h2>Community Safety Partnership Bureau</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Community Safety Partnership Bureau</Link></li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box className={styles.linkbox}>
                                <h2>Office of Constitutional Policing & Policy</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Commanding Officer</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Audit Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Diversity, Equity, & Inclusion</Link></li>
                                </ul>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{marginTop:"40px"}}>
                    <Grid container className={global.fadeInUp} columnSpacing={5} rowSpacing={5}>

                        <Grid item xs={12}>
                            <Box className={styles.linkbox}>
                                <h2>Professional Standards Bureau</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Internal Affairs Division (IAD)</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Force Investigation Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Special Operations Division</Link></li>
                                </ul>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{marginTop:"40px"}}>
                    <Grid container className={global.fadeInUp} columnSpacing={5} rowSpacing={5}>

                        <Grid item xs={12} >
                            <Box className={styles.linkbox}>
                                <h2>Office of Support Services</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Director, Office of Support Services</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Behavioral Science Services</Link></li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item xs={12} >
                            <Box className={styles.linkbox}>
                                <h2>Administrative Services Bureau</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Commanding Officer</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Support Services Group</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Communications Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Custody Services Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Motor Transport Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Records and Identification Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Evidence and Property Management Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Facilities Management Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Fiscal Group</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Personnel Division</Link></li>
                                </ul>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>


                <Box sx={{marginTop:"40px"}}>
                    <Grid container className={global.fadeInUp} columnSpacing={5} rowSpacing={5}>

                        <Grid item xs={12} >
                            <Box className={styles.linkbox}>
                                <h2>Training Bureau</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Commanding Officer</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Training Bureau (TB)</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Recruitment and Employment Division</Link></li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item xs={12} >
                            <Box className={styles.linkbox}>
                                <h2>Office of Special Operations</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Office of Special Operations</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Counter-Terrorism and Special Operations Bureau</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Major Crimes Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Emergency Services Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Metropolitan Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Air Support Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Security Services Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Transit Service Bureau</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Transit Services Group</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Transit Services Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Traffic Group</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Central Traffic Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>South Traffic Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>West Traffic Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Valley Traffic Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Underwater Dive Unit</Link></li>
                                </ul>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>


                <Box sx={{marginTop:"40px"}}>
                    <Grid container className={global.fadeInUp} columnSpacing={5} rowSpacing={5}>

                        <Grid item xs={12} >
                            <Box className={styles.linkbox}>
                                <h2>Detective Bureau</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Detective Bureau</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>COMPSTAT</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Detective Services Group</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Robbery-Homicide Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Juvenile Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Gang and Narcotics Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Commercial Crimes Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Detective Support and Vice Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Forensic Science Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Technical Investigation Division</Link></li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item xs={12} >
                            <Box className={styles.linkbox}>
                                <h2>Information Technology Bureau</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Application Development and Support Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>ECCCS Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Information Technology Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Innovation Management Division </Link></li>
                                </ul>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
                <Box sx={{marginTop:"40px"}}>
                    <Grid container className={global.fadeInUp} columnSpacing={5} rowSpacing={5}>

                        <Grid item xs={12} >
                            <Box className={styles.linkbox}>
                                <h2>Office of Operations</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Office of Operations</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Central Bureau</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Central Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Rampart Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Hollenbeck Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Northeast Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Newton Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>South Bureau</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>77th Street Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Southwest Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Harbor Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Southeast Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>South Bureau Homicide Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>West Bureau</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Hollywood Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Wilshire Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>West Los Angeles Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Olympic Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Pacific Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Valley Bureau</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Van Nuys Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>West Valley Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>North Hollywood Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Foothill Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Devonshire Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Mission Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Topanga Division</Link></li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item xs={12} >
                            <Box className={styles.linkbox}>
                                <h2>Personnel Division</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Personnel Division</Link></li>
                                </ul>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{marginTop:"40px"}}>
                    <Grid container className={global.fadeInUp} columnSpacing={5} rowSpacing={5}>

                        <Grid item xs={12} >
                            <Box className={styles.linkbox}>
                                <h2>Specialized Units</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Air Support Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Art Theft Detail</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Gang and Narcotics Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>K-9 Unit</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Metropolitan Division</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Mounted Unit</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Off-Road Enforcement</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Specialized Enforcement Section (Motors & Commercial Enforcement)</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>S.W.A.T.</Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Underwater Dive Unit</Link></li>
                                </ul>
                            </Box>
                        </Grid>


                    </Grid>
                </Box>
            </Box>

            </Container>

        </>
    )
}

export default OrganizationChat