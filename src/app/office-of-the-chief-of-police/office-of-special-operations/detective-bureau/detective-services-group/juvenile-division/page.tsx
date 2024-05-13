"use client"
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React from 'react'
import Link from 'next/link'
import styles from './juvenile.module.css'
import global from "../../../../../global.module.css"
import { Container, Typography, useMediaQuery } from '@mui/material'
import LaunchIcon from '@mui/icons-material/Launch'


const InsideLap = () => {

    const tab = useMediaQuery('(max-width:768px)');
    const mobile = useMediaQuery('(max-width:576px)');
    return (
        <>
            <Box className={styles.bg}>
                <Container>
                    <Grid container className={styles.blockspace}>
                        <Grid item xs={12} sm={9} md={10} lg={8} xl={8} className={global.fadeInUp}>
                            <Typography sx={{ fontSize: mobile ? "20px" : tab ? "20px" : "22px", lineHeight: "1.1", marginBottom: '15px' }} >Juvenile Division (JUV) is responsible for juvenile narcotics enforcement, child abuse and child exploitation investigations, overseeing the Department&lsquo;s youth programs, and providing Department-wide juvenile advice, consulting, and training.</Typography>
                            <Typography sx={{ fontSize: mobile ? "38px" : tab ? "40px" : "62px", lineHeight: "1.1", fontWeight: "bold", marginBottom: '30px' }}>Juvenile Division</Typography>

                            <Typography sx={{ display: 'flex', alignItems: 'center' }}><span className={styles.hline}></span><Link href="https://www.lapdonline.org/command-staff/hwang-james/" className={styles.insidelnk}>Commanding Officer Captain James Hwang</Link></Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Container>
                <Box className={global.fadeInUp}>
                    <Grid container sx={{ marginTop: "60px" }} columnSpacing={5} rowSpacing={5}>

                        <Grid item xs={12} sm={12} lg={8}>
                            <Typography sx={{ fontSize: mobile ? '30px' : tab ? '33px' : '38px', fontWeight: 'bold', color: '#0f212b', marginBottom: '15px' }}> History of Juvenile Division</Typography>
                            <Typography sx={{ fontSize: '18px', color: '#0f212b', marginBottom: '30px' }}>
                                Prior to the early 1900’s, no real distinction was made between adults and minors under the law. Little interest was generated in attempting to curb juvenile delinquency, since law enforcement personnel dealt with minors in essentially the same manner as adults. Moreover, virtually nothing was being done by police agencies to protect children from abusive adults. No distinction was made between not “sparing the rod” and child abuse, between corporal punishment and battering.
                            </Typography>
                            <Typography sx={{ fontSize: '18px', color: '#0f212b', marginBottom: '30px' }}>
                                In 1909, Officer Leo Marden of the Los Angeles Police Department became interested in the particular needs and problems experienced by children. Officer Marden convinced his superiors that specialized juvenile programs and procedures were necessary if these young offenders were to be kept from becoming adult criminals. He was subsequently appointed as the first Juvenile Probation Officer, with instructions that he develop and implement these programs and procedures to handle juvenile matters on a Citywide basis.
                            </Typography>
                            <Typography sx={{ fontSize: '18px', color: '#0f212b', marginBottom: '30px' }}>
                                In 1910, <Link href="https://www.lapdonline.org/women-in-the-lapd/" className={styles.innerLink1} target='_blank'>Alice Stebbins Wells</Link>, the City’s first policewoman, joined Officer Marden. Juvenile Bureau, the Department’s first specialized juvenile function, became a reality. Over the years, changes in the juvenile justice system, and a growing awareness of the special needs and problems associated with the City’s children, have kept Juvenile Division flexible and always cognizant of current needs of the community.
                            </Typography>
                            <Typography sx={{ fontSize: '18px', color: '#0f212b' }}>
                                A succession of units was created within the Division in response to an ever-changing society: As juvenile crime became more sophisticated during the 1950’s and 1960’s, the Juvenile Narcotics Section and a School Burglary Unit were organized to keep pace. During the 1970’s and early 1980’s, emphasis turned toward issues of child abuse, child sexual exploitation, and the increasing incidence of drug trafficking in our schools – and corresponding units were created to deal with these problems. Today, Juvenile Division is composed of two basic sections: Operations Section and Child Protection Section.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box className={global.fadeInUp}>
                    <Grid container sx={{ marginTop: "60px" }} columnSpacing={5} rowSpacing={5}>

                        <Grid item xs={12} sm={6} >
                            <Box sx={{ backgroundColor: "#ebf4f7", padding: "25px" }}>
                                <h2>About the LAPD</h2>
                                <ul className={styles.aboutul}>
                                    <li><Typography><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Link href="javascript:;">Child Protection Section of the Juvenile Division</Link></Typography></li>
                                    <li><Typography><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Link href="javascript:;">Adults&lsquo; Questions</Link></Typography></li>
                                    <li><Typography><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Link href="javascript:;">Kids&lsquo; Questions</Link></Typography></li>
                                    <li><Typography><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Link href="javascript:;">Tips for Protecting Children from Online Offenders</Link></Typography></li>
                                    <li><Typography><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Link href="javascript:;">Safe Sleeping Information and Resources</Link></Typography></li>
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