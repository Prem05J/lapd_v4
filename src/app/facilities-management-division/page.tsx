'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './facilities.module.css'
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
                        <Grid item xs={12} sm={10} md={10} lg={8}>
                            <Typography sx={{ fontSize: '22px', lineHeight: '1.27', letterSpacing: '-.25px' }}><em>construction, maintenance, repair, renovation</em></Typography>
                            <Typography className='h1size' sx={{ fontSize: tab ? "40px" : "62px", lineHeight: "1.1", fontWeight: "bold" }}>Facilities Management Division</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* 2nd block */}

            <Container>
                <Box className={styles.wholeblock}>
                    <Box>
                        <Grid container>
                            <Grid item sm={12} md={10} lg={8} sx={{ marginTop: '20px' }}>
                                <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>Facilities Management Division</Typography>
                                <Typography sx={{ fontSize: '18px' }}>201 N. Figueroa Blvd., Suite 650</Typography>
                                <Typography sx={{ fontSize: '18px' }}>Los Angeles, CA 90012</Typography>
                                <Typography sx={{ fontSize: '18px', marginBottom: '30px' }}>213-482-7320</Typography>

                                <Typography sx={{ marginBottom: '30px', fontSize: '18px', lineHeight: '1.55' }}>
                                    The Facilities Management Division (FMD) is charged with overseeing the upkeep and maintenance of Department facilities, including surveillance, access control card reader systems, custodial repairs, landscaping and construction of new or renovation of existing facilities, as well as installation and maintenance of facility security systems to provide a safer and environmentally efficient work place for Department personnel. This is accomplished with FMD’s three sections; Maintenance, Security, and Planning and Construction.                                </Typography>
                                <Typography sx={{ marginBottom: '30px', fontSize: '18px', lineHeight: '1.55' }}>
                                    FMD also oversees the Department’s 75 owned and leased space locations and agreements for shared space. It is the mission of FMD to provide employees and the public with safe, serviceable, and comfortable working conditions that support the various operations of the Department and support the Department’s overall commitment to Community Policing.
                                </Typography>
                                <Typography sx={{ marginBottom: '30px', fontSize: '18px', lineHeight: '1.55' }}>
                                FMD takes a lead role in the Department’s sustainability efforts as they relate to energy, electric vehicle infrastructure and solar construction, planning and installation of electric vehicle (EV) chargers and solar to meet the Mayor’s Executive Directive No. 25, L.A.’s New Green Deal: Leading By Example.
                                </Typography>
                                <Typography sx={{ display: toggle ? 'none' : 'flex', alignItems: 'center', marginBottom: '15px', paddingTop: '20px' }}>
                                    <span className={styles.hlinetwo}></span><Link href="javascript:;" className={styles.insidelnktwo} onClick={() => setToggle(true)}>Read More</Link>
                                </Typography>
                                <Box className={`${toggle ? styles.readMoreView : styles.readMoreHide} ${styles.scale_up_left}`}>
                                    <Typography sx={{ marginBottom: '15px', fontSize: '18px', lineHeight: '1.55' }}>
                                    The Maintenance Section is staffed with Management Analysts who coordinate with designated staff at each facility to ensure employees assigned there are provided with a clean and safe environment in which to work. FMD staff coordinate with the Department of General Services to provide custodial services, construction, system repairs and maintenance. When a condition requiring attention is noted, FMD Maintenance Section is a one-stop-shop to rectify the issue.
                                    </Typography>
                                    <Typography sx={{ marginBottom: '30px', fontSize: '18px', lineHeight: '1.55' }}>
                                    The Planning and Construction Section is responsible for builds to existing property and projects related to new construction. When large construction projects, such as the building of new, or renovation of existing properties happens, FMD represents the Department’s interests and ensures work is done properly and in a timely manner, whether completed by City crews or private contractors. They also oversee and coordinate any Bureau, Area, Division or section-initiated projects such as additions or modifications to any property’s existing structure(s), electrical or plumbing system(s), parking area(s), and landscape.
                                    </Typography>
                                    <Typography sx={{ marginBottom: '15px', fontSize: '18px', lineHeight: '1.55' }}>The Security Section is responsible for the electronic access points (employee ID card readers), security cameras and video retrieval. The Security Section designs, maintains, trains, and troubleshoot the video management systems.</Typography>
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