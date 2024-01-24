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
                                <li><Link href="/police-commission/function-and-role-of-the-board-of-police-commissioners/" style={{ display: 'flex', alignItems: 'center' }}><Typography>Board of Police Commissioners</Typography></Link></li>
                                <li><Link href="/office-of-the-chief-of-police/" style={{ display: 'flex', alignItems: 'center' }}><Typography>Office of the Chief of Police</Typography></Link></li>
                            </ul>
                        </Box>
                        <Box className={styles.linkbox} sx={{ marginTop: '40px' }}>
                            <h2>Community Safety Partnership Bureau</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="https://www.lapdcsp.org/" target='_blank' style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Community Safety Partnership Bureau</Typography></Link></li>
                            </ul>
                        </Box>
                        <Box className={styles.linkbox} sx={{ marginTop: '40px' }}>
                            <h2>Professional Standards Bureau</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="/office-of-the-chief-of-police/professional-standards-bureau/internal-affairs-division/" style={{ display: 'flex', alignItems: 'center' }}><Typography>Internal Affairs Division (IAD)</Typography></Link></li>
                                <li><Link href="/office-of-the-chief-of-police/professional-standards-bureau/force-investigations-division/" style={{ display: 'flex', alignItems: 'center' }}><Typography>Force Investigation Division</Typography></Link></li>
                                <li><Link href="/office-of-the-chief-of-police/professional-standards-bureau/special-operations-division/" style={{ display: 'flex', alignItems: 'center' }}><Typography>Special Operations Division</Typography></Link></li>
                            </ul>
                        </Box>
                        <Box className={styles.linkbox} sx={{ marginTop: '40px' }}>
                            <h2>Administrative Services Bureau</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Commanding Officer</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Support Services Group</Typography></Link></li>
                                <li><Link href="/office-of-the-chief-of-police/administrative-services-bureau/support-services-group/communications-division/" style={{ display: 'flex', alignItems: 'center' }}><Typography>Communications Division</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Custody Services Division</Typography></Link></li>
                                <li><Link href="/motor-transport-division/" style={{ display: 'flex', alignItems: 'center' }}><Typography>Motor Transport Division</Typography></Link></li>
                                <li><Link href="/records-and-identification-division-2/" style={{ display: 'flex', alignItems: 'center' }}><Typography>Records and Identification Division</Typography></Link></li>
                                <li><Link href="/evidence-and-property-management-division/" style={{ display: 'flex', alignItems: 'center' }}><Typography>Evidence and Property Management Division</Typography></Link></li>
                                <li><Link href="/facilities-management-division/" style={{ display: 'flex', alignItems: 'center' }}><Typography>Facilities Management Division</Typography></Link></li>
                                <li><Link href="/office-of-the-chief-of-police/administrative-services-bureau/fiscal-group/" style={{ display: 'flex', alignItems: 'center' }}><Typography>Fiscal Group</Typography></Link></li>
                                <li><Link href="/personnel-division/" style={{ display: 'flex', alignItems: 'center' }}><Typography>Personnel Division</Typography></Link></li>
                            </ul>
                        </Box>

                        <Box className={styles.linkbox} sx={{ marginTop: '40px' }}>
                            <h2>Detective Bureau</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Detective Bureau</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>COMPSTAT</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Detective Services Group</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Robbery-Homicide Division</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Juvenile Division</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Gang and Narcotics Division</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Commercial Crimes Division</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Detective Support and Vice Division</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Forensic Science Division</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Technical Investigation Division</Typography></Link></li>
                            </ul>
                        </Box>
                        <Box className={styles.linkbox} sx={{ marginTop: '40px' }}>
                            <h2>Information Technology Bureau</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Application Development and Support Division</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>ECCCS Division</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Information Technology Division</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Innovation Management Division </Typography></Link></li>
                            </ul>
                        </Box>


                        <Box className={styles.linkbox} sx={{ marginTop: '40px' }}>
                            <h2>Personnel Division</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Personnel Division</Typography></Link></li>
                            </ul>
                        </Box>

                        <Box className={styles.linkbox} sx={{ marginTop: '40px' }}>
                            <h2>Specialized Units</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Air Support Division</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Art Theft Detail</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Gang and Narcotics Division</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>K-9 Unit</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Metropolitan Division</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Mounted Unit</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Off-Road Enforcement</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Specialized Enforcement Section (Motors & Commercial Enforcement)</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>S.W.A.T.</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Underwater Dive Unit</Typography></Link></li>
                            </ul>
                        </Box>

                    </Grid>



                    {/*====================================== Right side ================================================*/}


                    <Grid item sm={6} md={6} lg={6} >
                        <Box className={styles.linkbox}>
                            <h2>Chief of Staff</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Commanding Officer</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Employee Relations Group</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Public Communications Group</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Media Relations Division</Typography></Link></li>

                            </ul>
                        </Box>
                        <Box className={styles.linkbox} sx={{ marginTop: '40px' }}>
                            <h2>Office of Constitutional Policing & Policy</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Commanding Officer</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Audit Division</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Diversity, Equity, & Inclusion</Typography></Link></li>
                            </ul>
                        </Box>

                        <Box className={styles.linkbox} sx={{ marginTop: '40px' }}>
                            <h2>Office of Support Services</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Director, Office of Support Services</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Behavioral Science Services</Typography></Link></li>
                            </ul>
                        </Box>

                        <Box className={styles.linkbox} sx={{ marginTop: '40px' }}>
                            <h2>Training Bureau</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Commanding Officer</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Training Bureau (TB)</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Recruitment and Employment Division</Typography></Link></li>
                            </ul>
                        </Box>

                        <Box className={styles.linkbox} sx={{ marginTop: '40px' }}>
                            <h2>Office of Special Operations</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Office of Special Operations</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Counter-Terrorism and Special Operations Bureau</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Major Crimes Division</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Emergency Services Division</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Metropolitan Division</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Air Support Division</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Security Services Division</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Transit Service Bureau</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Transit Services Group</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Transit Services Division</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Traffic Group</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Central Traffic Division</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>South Traffic Division</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>West Traffic Division</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Valley Traffic Division</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Underwater Dive Unit</Typography></Link></li>
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
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Board of Police Commissioners</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Office of the Chief of Police</Typography></Link></li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item xs={12} >
                            <Box className={styles.linkbox}>
                                <h2>Chief of Staff</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Commanding Officer</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Employee Relations Group</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Public Communications Group</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Media Relations Division</Typography></Link></li>

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
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Community Safety Partnership Bureau</Typography></Link></li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box className={styles.linkbox}>
                                <h2>Office of Constitutional Policing & Policy</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Commanding Officer</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Audit Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Diversity, Equity, & Inclusion</Typography></Link></li>
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
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Internal Affairs Division (IAD)</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Force Investigation Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Special Operations Division</Typography></Link></li>
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
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Director, Office of Support Services</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Behavioral Science Services</Typography></Link></li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item xs={12} >
                            <Box className={styles.linkbox}>
                                <h2>Administrative Services Bureau</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Commanding Officer</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Support Services Group</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Communications Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Custody Services Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Motor Transport Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Records and Identification Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Evidence and Property Management Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Facilities Management Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Fiscal Group</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Personnel Division</Typography></Link></li>
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
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Commanding Officer</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Training Bureau (TB)</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Recruitment and Employment Division</Typography></Link></li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item xs={12} >
                            <Box className={styles.linkbox}>
                                <h2>Office of Special Operations</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Office of Special Operations</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Counter-Terrorism and Special Operations Bureau</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Major Crimes Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Emergency Services Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Metropolitan Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Air Support Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Security Services Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Transit Service Bureau</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Transit Services Group</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Transit Services Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Traffic Group</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Central Traffic Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>South Traffic Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>West Traffic Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Valley Traffic Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Underwater Dive Unit</Typography></Link></li>
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
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Detective Bureau</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>COMPSTAT</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Detective Services Group</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Robbery-Homicide Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Juvenile Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Gang and Narcotics Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Commercial Crimes Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Detective Support and Vice Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Forensic Science Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Technical Investigation Division</Typography></Link></li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item xs={12} >
                            <Box className={styles.linkbox}>
                                <h2>Information Technology Bureau</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Application Development and Support Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>ECCCS Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Information Technology Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Innovation Management Division </Typography></Link></li>
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
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Office of Operations</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Central Bureau</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Central Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Rampart Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Hollenbeck Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Northeast Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Newton Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>South Bureau</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>77th Street Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Southwest Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Harbor Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Southeast Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>South Bureau Homicide Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>West Bureau</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Hollywood Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Wilshire Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>West Los Angeles Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Olympic Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Pacific Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Valley Bureau</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Van Nuys Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>West Valley Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>North Hollywood Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Foothill Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Devonshire Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Mission Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Topanga Division</Typography></Link></li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item xs={12} >
                            <Box className={styles.linkbox}>
                                <h2>Personnel Division</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Personnel Division</Typography></Link></li>
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
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Air Support Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Art Theft Detail</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Gang and Narcotics Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>K-9 Unit</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Metropolitan Division</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Mounted Unit</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Off-Road Enforcement</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Specialized Enforcement Section (Motors & Commercial Enforcement)</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>S.W.A.T.</Typography></Link></li>
                                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>Underwater Dive Unit</Typography></Link></li>
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