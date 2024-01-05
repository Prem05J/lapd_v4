"use client"
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './inside.module.css'
import pdf from '../../../public/Icons/pdf-svg-icon.svg'
import global from "../global.module.css"
import { Container } from '@mui/material'

const InsideLap = () => {
    return (
        <>
            <Box className={styles.bg}>
                <Container>
                <Grid container className={styles.blockspace}>
                    <Grid item xs={12} sm={12} md={10} lg={9} xl={8} className={global.fadeInUp}>
                        <h4 className={styles.h4size}>&quot; It is the mission of the Los Angeles Police Department to safeguard the lives and property of the people we serve, to reduce the incidence and fear of crime, and to enhance public safety while working with the diverse communities to improve their quality of life. Our mandate is to do so with honor and integrity, while at all times conducting ourselves with the highest ethical standards to maintain public confidence. &quot;</h4>
                        <h1 className={styles.h1size}>Inside The LAPD</h1>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <span className={styles.hline}></span><Link href="javascript:;" className={styles.insidelnk}>Chief of Police Michel Moore</Link>
                        </Box>
                    </Grid>
                </Grid>
                </Container>
            </Box>

            <Container>
            <Box className={global.fadeInUp}>
                <Grid container sx={{marginTop:"60px"}} columnSpacing={5} rowSpacing={5}>

                    <Grid item xs={12} sm={6} >
                        <Box sx={{backgroundColor:"#ebf4f7",padding:"25px"}}>
                            <h2>About the LAPD</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;">Office of the Inspector General</Link></li>
                                <li><Link href="javascript:;">Police Commission</Link></li>
                                <li><Link href="javascript:;">LAPD Organization</Link></li>
                                <li><Link href="javascript:;">History of the LAPD</Link></li>
                                <li><Link href="javascript:;">Los Angeles Police Department Safe Place</Link></li>
                                <li><Link href="javascript:;">Professional Standards Bureau</Link></li>
                                <li><Link href="javascript:;">Saluting Our Heroes</Link></li>
                                <li><Link href="javascript:;">Sworn and Civilian Report</Link></li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Box sx={{backgroundColor:"#ebf4f7",padding:"25px"}}>
                            <h2>Resources</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Board of Inquiry Report [PDF] - Rampart Area Corruption Incident</Link></li>
                                <li><Link href="javascript:;">Sites of Interest</Link></li>
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