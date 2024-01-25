"use client"
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React from 'react'
import Link from 'next/link'
import styles from './air.module.css'
import global from "../../../global.module.css"
import { Container, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import LaunchIcon from '@mui/icons-material/Launch'


const InsideLap = () => {

    const tab = useMediaQuery('(max-width:768px)');
    const mobile = useMediaQuery('(max-width:576px)');

    return (
        <>
            <Box className={styles.bg}>
                <Container>
                    <Grid container className={styles.blockspace}>
                        <Grid item xs={12} sm={12} md={10} lg={8} xl={8} className={global.fadeInUp}>
                            <Typography sx={{ fontSize: mobile ? "20px" : tab ? "20px" : "22px", lineHeight: "1.1", marginBottom: '15px' }} >Air Operations, Patrol Support, Largest Municipal Airborne Law Enforcement Operation</Typography>
                            <Typography sx={{ fontSize: mobile ? "38px" : tab ? "40px" : "62px", lineHeight: "1.1", fontWeight: "bold" }}>Air Support Division</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
                                <LaunchIcon sx={{ color: '#fff' }} /> <Typography><Link href="https://www.lapdonline.org/command-staff/lopez-james/" target="_blank" className={styles.insidelnk}>Captain James Lopez</Link></Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Container>
                <Grid container>
                    <Grid item xs={12} sm={11} md={10} lg={8}>
                        <Typography style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '60px' }} >555 Ramirez St. Space 475</Typography>
                        <Typography style={{ fontSize: '18px', fontWeight: 'bold' }} >Los Angeles, California 90012</Typography>
                        <Typography style={{ fontSize: '18px', fontWeight: 'bold' }} >213-485-2600</Typography>

                        <Typography style={{ fontSize: '18px', marginTop: '30px' }} >
                            The Los Angeles Police Department’s airborne law enforcement program began with one helicopter in 1956. Today, the Air Support Division (ASD) is the largest municipal airborne law enforcement operation in the world, and boasts the nation’s largest rooftop heliport.
                        </Typography>
                    </Grid>
                </Grid>

                <Box className={global.fadeInUp}>
                    <Grid container sx={{ marginTop: "60px", marginBottom:'30px' }} columnSpacing={4} rowSpacing={4}>

                        <Grid item xs={12} sm={6} lg={6} >

                            <Box sx={{ backgroundColor: "#ebf4f7", padding: "50px 0px 30px 50px" }}>
                                <Typography sx={{ fontSize: mobile ? "22px" : tab ? '23px' : '26px', fontWeight: '700', marginBottom: '20px', letterSpacing: '-.11px', lineHeight: '1.23' }}>About Air Support</Typography>
                                <ul className={styles.aboutul}>
                                    <li><Typography><Link href="https://www.lapdonline.org/office-of-the-chief-of-police/office-of-special-operations/air-support-division/air-support-mission-statement/" target="_blank">Air Support Mission Statement</Link></Typography></li>
                                    <li><Typography><Link href="https://www.lapdonline.org/office-of-the-chief-of-police/office-of-special-operations/air-support-division/air-support-missions/" target="_blank">Air Support Missions</Link></Typography></li>
                                    <li><Typography><Link href="https://www.lapdonline.org/office-of-the-chief-of-police/office-of-special-operations/air-support-division/history-of-the-air-support-division/" target="_blank">History of the Air Support Division</Link></Typography></li>

                                </ul>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} >
                            <Box sx={{ backgroundColor: "#ebf4f7",  padding: "50px 0px 30px 50px"  }}>
                                <Typography sx={{ fontSize: mobile ? "22px" : tab ? '23px' : '26px', fontWeight: '700', marginBottom: '20px', letterSpacing: '-.11px', lineHeight: '1.23' }}>Air support links:</Typography>
                                <ul className={styles.aboutul}>
                                    <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{marginRight: '10px'}}/><Typography><Link href="http://www.alea.org/" target="_blank">Airborne Public Safety Association</Link></Typography></li>
                                    <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{marginRight: '10px'}}/><Typography><Link href="http://www.rotor.com/" target="_blank">Helicopter Association International</Link></Typography></li>
                                    <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{marginRight: '10px'}}/><Typography><Link href="http://www.justhelicopters.com/" target="_blank">Just Helicopters</Link></Typography></li>

                                </ul>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default InsideLap