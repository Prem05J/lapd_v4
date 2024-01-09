'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './traffic.module.css'
import Typography from '@mui/material/Typography'
import LaunchIcon from '@mui/icons-material/Launch';
import useMediaQuery from '@mui/material/useMediaQuery'
import Container from '@mui/material/Container'
import Img1 from "../../../../../../public/Icons/pdf-svg-icon.svg"
import global from "../../../../global.module.css"



const TrafficGroup = () => {

    const tab = useMediaQuery('(max-width:768px)');

    return (
        <>

            {/* 1st block */}
            <Box className={styles.bg}>
                <Container className={global.fadeInUp}>
                    <Grid container className={styles.blockspace}>
                        <Grid item xs={12} sm={10} md={7} lg={7}>
                            <Typography sx={{ fontSize: '22px', marginBottom: '8px', lineHeight: '1.27', letterSpacing: '-.25px' }}> organizational function of all traffic divisions</Typography>
                            <Typography className={styles.h1size}>Traffic Group
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <LaunchIcon sx={{ color: '#fff' }} />  <Link href="#" className={styles.insidelnk}><Typography>Commander Valenzuela- Commanding Officer</Typography></Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* 2nd block */}
            <Container>

                <Box className={global.fadeInUp}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={10} lg={8} className={styles.textstyl} >
                            <Typography style={{ fontSize: '26px', fontWeight: 'bold' }} className={styles.typoleft}>
                                Traffic Group oversees the organization function of all traffic divisions and is responsible for specialized traffic related duties.
                            </Typography>

                            <Typography style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '30px' }}>
                                Traffic Group is comprised of the following:
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>


                <Box className={global.fadeInUp} sx={{ margin: tab ? '20px 0px' : '60px 0px' }}>
                    <Grid container columnSpacing={3} rowSpacing={7}>

                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ background: '#ebf4f7', padding: '24px', height: '70%' }}>
                               
                                    <Typography sx={{ marginBottom: '15px', fontSize: '20px', lineHeight: '24px', fontWeight: '700' }}>Specialized Enforcement Section:</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <span className={styles.hlinetwo}></span>
                                        <Link href="#" style={{ marginLeft: '25px' }} className={styles.lnk}><Typography>Motorcycle Training Unit</Typography></Link>
                                    </Box>
                              
                            </Box>
                        </Grid>


                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ background: '#ebf4f7', padding: '24px', height: '70%' }}>
                                <Typography sx={{ marginBottom: '15px', fontSize: '20px', lineHeight: '24px', fontWeight: '700' }}>Multi-Disciplinary Collision Investigation Team MCIT</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }} className={styles.lnk}>
                                        <Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px', marginBottom: tab ? '25px' : '25px' }} />
                                        <Typography>Multi-Disciplinary Collision Investigation Team MCIT</Typography></Link>
                                </Box>
                            </Box>
                        </Grid>


                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ background: '#ebf4f7', padding: '24px', height: '70%' }}>
                                <Typography sx={{ marginBottom: '15px', fontSize: '20px', lineHeight: '24px', fontWeight: '700' }}>Pursuit Review Unit</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <span className={styles.hlinetwo}></span>
                                    <Link href="#" style={{ marginLeft: '25px' }} className={styles.lnk}><Typography>Pursuit Review Unit</Typography></Link>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ background: '#ebf4f7', padding: '24px', height: '70%' }}>
                                <Typography sx={{ marginBottom: '15px', fontSize: '20px', lineHeight: '24px', fontWeight: '700' }}>Traffic Analytical Unit</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <span className={styles.hlinetwo}></span>
                                    <Link href="#" style={{ marginLeft: '25px' }} className={styles.lnk}><Typography>Traffic Analytical Unit</Typography></Link>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ background: '#ebf4f7', padding: '24px', height: '85%' }}>
                                <Typography sx={{ marginBottom: '15px', fontSize: '20px', lineHeight: '24px', fontWeight: '700' }}>Vision Zero
                                </Typography>
                                <Typography>
                                    Click Memorial Map to see traffic deaths in Los Angeles. If you know someone who was the victim of a traffic fatality, please email visionzero@lacity.org to create a digital memorial.
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                    <LaunchIcon sx={{ width: '20px', padding: '0px 10px 20px 0px' }} />
                                    <Link href='javacsript:;' className={styles.lnk}>
                                       <Typography> Vision Zero - High Injury Network</Typography>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>


                <Box className={global.fadeInUp}>
                    <Grid container>
                        <Grid item xs={12} sm={11} md={10} lg={8} sx={{ paddingTop: '30px' }} className={styles.textstyl} >
                            <Typography style={{ fontSize: '22px', marginBottom: '8px' }}>
                                The Los Angeles Police department is divided into four geographic areas:
                            </Typography>

                            <Typography style={{ fontSize: '22px', marginBottom: '8px' }}>
                                Central Bureau, South Bureau, West Bureau, , and Valley Bureau.
                            </Typography>
                            <Typography style={{ fontSize: '22px', marginBottom: '60px' }}>
                                These bureaus are each patrolled by a traffic division which is responsible for the investigation of traffic collisions and traffic-related crimes. In addition to investigation, each division also educates the community, enforces traffic laws, and does outreach work.
                            </Typography>

                        </Grid>
                    </Grid>
                </Box>

                <Box className={global.fadeInUp}>
                    <Grid container>

                        <Grid item xs={12} sm={6}  className={styles.gridscardpadone}>
                            <Box className={styles.linkbox}>
                                <h2>Traffic Divisions</h2>
                                <ul className={styles.aboutul}>
                                    <li style={{ display: 'flex' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Central Traffic Division</Link></li>
                                    <li style={{ display: 'flex' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>South Traffic Division</Link></li>
                                    <li style={{ display: 'flex' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Valley Traffic Division</Link></li>
                                    <li style={{ display: 'flex' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>West Traffic Division</Link></li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <Box className={styles.linkbox}>
                                <h2>Resources</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Motor Garage Liaison</Link></li>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Specialized Enforcement Section (SES)</Link></li>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Traffic Safety Resources</Link></li>
                                </ul>
                            </Box>

                        </Grid>
                    </Grid>
                </Box>

                <Box className={global.fadeInUp} sx={{ padding: '60px 0px' }}>
                    <Grid container>

                        <Grid item xs={12} sm={6}  className={styles.gridscardpadone}>
                            <Box className={styles.linkbox}>
                                <h2>FAQ&lsquo;s</h2>

                                <ul className={styles.aboutul}>
                                    <li ><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Abandoned and Impounded Vehicle Questions</Link></li>
                                    <li style={{ display: 'flex' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>DMV SR1</Link></li>
                                    <li style={{ display: 'flex' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Don&lsquo;t be a Victim of Bandit tow</Link></li>
                                    <li style={{ display: 'flex' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Marsy&lsquo;s Law English</Link></li>
                                    <li style={{ display: 'flex' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Official Police Garage</Link></li>
                                    <li ><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Parking Enforcement/Citation Questions</Link></li>
                                    <li ><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>File a Traffic Accident Report (Misd/Minor injury involved ONLY)</Link></li>
                                    <li ><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Request a copy of your accident report</Link></li>
                                    <li ><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Traffic Citation Questions</Link></li>
                                    <li ><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Traffic Collision Questions</Link></li>

                                </ul>
                            </Box>

                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <Box className={styles.linkbox}>
                                <h2>Crime Statistics</h2>

                                <ul className={styles.aboutul}>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>COMPSTAT City Wide</Link></li>
                                </ul>
                            </Box>

                        </Grid>
                    </Grid>
                </Box>
            </Container>

        </>
    )
}

export default TrafficGroup