'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './crime.module.css'
import crime from "../../../../../../public/Images/crime_map_image.jpg"
import LaunchIcon from '@mui/icons-material/Launch';
import Typography from '@mui/material/Typography'


const CrimeMapping = () => {
    const [toggle, setToggle] = useState(false);


    return (
        <>
            <Box className={styles.bg}>
                <Grid container className={styles.blockspace}>
                    <Grid item xs={11} sm={10} md={7} lg={6}>
                        <h4 className={styles.h4size}>up-to-date crime statistics for neighborhoods throughout Los Angeles</h4>
                        <h1 className={styles.h1size}>Crime Mapping and COMPSTAT</h1>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <span className={styles.hline}></span><Link href="#" className={styles.insidelnk}>COMPSTAT Division</Link>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container className={styles.blockspace}>
                    <Grid item lg={7}>
                        <Typography>
                            <Image src={crime} alt='' style={{ float: 'left', width: '300px', height: '205px', margin: '0px 20px 20px 0px' }} /> Get up-to-date crime statistics for neighborhoods throughout Los Angeles. Being informed about crime in your community is the first step in preventing future occurrences. <Link href="#" className={styles.lnk}>Go to Crime Mapping</Link>.
                        </Typography>
                        <Typography sx={{ marginTop: '30px' }}>To view only the crimes reported by the Los Angeles Police Department: Click on the Crime Mapping Agencies tab, then click the drop down arrow in the Only show crime reported by window and select Los Angeles Police, CA, and then click the Agencies tab again to maximize the page view.</Typography>
                        <Typography sx={{ marginTop: '30px' }}> The Los Angeles Police Department will directly feed its crime data to the Omega Group to ensure that each crime is reported accurately on the site. The records themselves are also put through an exclusive data scrubbing process that works to locate each crime incident geographically, to a hundred block. A link to the crime maps can be found by clicking on Crimemapping in the left navigation.</Typography>

                        <Typography sx={{ display: toggle ? 'none' : 'flex', alignItems: 'center', marginBottom: '30px', paddingTop: '30px' }}>
                            <span className={styles.hlinetwo}></span><Link href="javascript:;" className={styles.insidelnktwo} onClick={() => setToggle(true)}>Read More</Link>
                        </Typography>
                        <Box className={`${toggle ? styles.readMoreView : styles.readMoreHide} ${styles.scale_up_left}`}>
                            <Typography sx={{ marginTop: '30px' }}>Once on the Crimemapping.com site, users can “filter” crimes from a list of law enforcement agencies that provide data to the site, and click on Part One crimes for specific information such as the date and time each crime occurred. Important links are also provided, as well a feature that allows users to view crime trends and subscribe to receive free Crime Alerts via e-mail when new activity occurs in their area.</Typography>
                            <Typography sx={{ marginTop: '30px' }}>The Los Angeles Police Department provides the public with easy access, for current crime information through our free crime mapping service to view Part I crimes.</Typography>
                            <Typography sx={{ display: toggle ? 'block' : 'flex', alignItems: 'center', marginBottom: '30px', paddingTop: '30px' }}>
                    <span className={styles.hlinetwo} style={{ marginTop: '10px' }}></span><Link href="javascript:;" className={styles.insidelnktwo} onClick={() => setToggle(false)}>Read Less</Link>
                </Typography>
                        </Box>

                    </Grid>
                </Grid>

            </Box>


            <Box>
                <Grid container sx={{ padding: '30px 0 0' }} className={styles.fadeInUp}>

                    <Grid item sm={6} md={6} lg={6} className={styles.gridscardpadone}>
                        <Box className={styles.linkbox}>
                            <h2>City-Wide Crimes Statistics and City-Wide Traffic Statistics</h2>
                            <ul className={styles.aboutul}>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">City-Wide Crimes Statistics</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">City-Wide Traffic Statistics</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Central Traffic Division Statistics</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">South Traffic Division Statistics</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Valley Traffic Division Statistics</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">West Traffic Division Statistics</Link></li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item sm={6} md={6} lg={6} className={styles.gridscardpadtwo}>
                        <Box className={styles.linkbox}>
                            <h2>Hate Crimes</h2>
                            <ul className={styles.aboutul}>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Hate Crimes by Bias</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Hate Incidents by Bias</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Hate Crimes & Incidents by Category</Link></li>
                            </ul>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
            <Box>
                <Grid container sx={{ padding: '0px 0 0' }} className={styles.fadeInUp}>

                    <Grid item sm={6} md={6} lg={6} className={styles.gridscardpadone}>
                        <Box className={styles.linkbox}>
                            <h2>Current Citywide Crime Statistics - Central Bureau</h2>
                            <ul className={styles.aboutul}>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Operations Central Bureau</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Central Crime Statistics</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Hollenbeck Crime Statistics</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Newton Crime Statistics</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Northeast Crime Statistics</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Rampart Crime Statistics</Link></li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item sm={6} md={6} lg={6} className={styles.gridscardpadtwo}>
                        <Box className={styles.linkbox}>
                            <h2>Current Citywide Crime Statistics - South Bureau</h2>
                            <ul className={styles.aboutul}>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Operations South Bureau</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">77th Street Crime Statistics</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Harbor Crime Statistics</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Southeast Crime Statistics</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Southwest Crime Statistics</Link></li>
                            </ul>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
            <Box>
                <Grid container sx={{ padding: '0px 0 0' }} className={styles.fadeInUp}>

                    <Grid item sm={6} md={6} lg={6} className={styles.gridscardpadone}>
                        <Box className={styles.linkbox}>
                            <h2>Current Citywide Crime Statistics - West Bureau</h2>
                            <ul className={styles.aboutul}>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Operations West Bureau</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Hollywood Crime Statistics</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Olympic Crime Statistics</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Pacific Crime Statistics</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">West LA Crime Statistics</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Wilshire Crime Statistics</Link></li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item sm={6} md={6} lg={6} className={styles.gridscardpadtwo}>
                        <Box className={styles.linkbox}>
                            <h2>Current Citywide Crime Statistics - Valley Bureau</h2>
                            <ul className={styles.aboutul}>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Operations Valley Bureau</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Devonshire Crime Statistics</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Foothill Crime Statistics</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Mission Crime Statistics</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">North Hollywood Crime Statistics</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Topanga Crime Statistics</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Van Nuys Crime Statistics</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">West Valley Crime Statistics</Link></li>

                            </ul>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
            <Box>
                <Grid container sx={{ padding: '0px 0 0' }} className={styles.fadeInUp}>

                    <Grid item sm={6} md={6} lg={6} className={styles.gridscardpadone}>
                        <Box className={styles.linkbox}>
                            <h2>Crime Mapping (listed numerically by divisions) Central Division - Harbor Division</h2>
                            <ul className={styles.aboutul}>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Central Division</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Rampart Division</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Southwest Division</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Hollenbeck Division</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Harbor Division</Link></li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item sm={6} md={6} lg={6} className={styles.gridscardpadtwo}>
                        <Box className={styles.linkbox}>
                            <h2>Crime Mapping (listed numerically by divisions) Hollywood Division - West Valley Division</h2>
                            <ul className={styles.aboutul}>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Hollywood Division</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Wilshire Division</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">West Los Angeles Division</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Van Nuys Division</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">West Valley Division</Link></li>
                            </ul>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
            <Box>
                <Grid container sx={{ padding: '0px 0 0' }} className={styles.fadeInUp}>

                    <Grid item sm={6} md={6} lg={6} className={styles.gridscardpadone}>
                        <Box className={styles.linkbox}>
                            <h2>Crime Mapping (listed numerically by divisions) Northeast Division - North Hollywood Division</h2>
                            <ul className={styles.aboutul}>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Northeast Division</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">77th Street Division</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Newton Division</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Pacific Division</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">North Hollywood Division</Link></li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item sm={6} md={6} lg={6} className={styles.gridscardpadtwo}>
                        <Box className={styles.linkbox}>
                            <h2>Crime Mapping (listed numerically by divisions) Foothill Division - Topanga Division</h2>
                            <ul className={styles.aboutul}>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Foothill Division</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Devonshire Division</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Southeast Division</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Mission Division</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Olympic Division</Link></li>
                                <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="#">Topanga Division</Link></li>
                            </ul>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}

export default CrimeMapping


