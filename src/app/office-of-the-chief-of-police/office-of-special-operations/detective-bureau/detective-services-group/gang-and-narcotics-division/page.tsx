'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './gang.module.css'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Container } from '@mui/material'


const California = () => {

    const tab = useMediaQuery('(max-width:768px)');
    const mobile = useMediaQuery('(max-width:576px)');

    const [toggle, setToggle] = useState(false)
    return (
        <>

            {/* 1st block */}
            <Box className={styles.bg}>
                <Container>
                    <Grid container>
                        <Grid item xs={11} sm={10} md={7} lg={8}>
                            <Typography sx={{ fontSize: '22px', lineHeight: '1.2', letterSpacing: '-.25' }}>NARCOTICS HOTLINE – 800-662-BUST (2878)</Typography>
                            <Typography className={styles.h1size} sx={{ fontSize: mobile ? "38px" : tab ? "40px" : "62px", lineHeight: "1.1", fontWeight: "bold" }}>Gang and Narcotics Division</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* 2nd block */}
            <Container>

                <Box sx={{ marginBottom: '30px' }}>
                    <Grid container>
                        <Grid item xs={12} sm={11} md={10} lg={7} className={styles.textstyl} >
                            <Typography style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '60px' }} >251 East Sixth Street, Suite 349</Typography>
                            <Typography style={{ fontSize: '18px', fontWeight: 'bold' }} >Los Angeles, California 90014</Typography>
                            <Typography style={{ fontSize: '18px', fontWeight: 'bold' }} >213-833-3700</Typography>

                            <Box sx={{ display: "flex", flexDirection: "column", marginTop: '30px', paddingBottom: "20px" }}>
                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    The deployment of the Los Angeles Police Department (LAPD) Gang and Narcotics Division (GND) is a revolutionary change in law enforcement strategy. The GND is one component of the LAPD Gang Initiatives 2009 “total solution” to combat the gang and drug problem in the City of Los Angeles. The consolidation of the Gang Operations Support Division and Narcotics Division into GND fosters greater efficiency and facilitates the rapid deployment of resources to identified crime problems.
                                </Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55', marginTop: '30px' }}>
                                    Since there is a nexus of guns, gangs, narcotics, and crime, the increased cooperation between experienced gang and narcotics investigators will result in more effective investigations, a quantifiable increase in arrests and a reduction in the crime rate. Joint operations between narcotics and gang detectives, in cooperation with other City entities and resources, will also be developed to abate chronic narcotic and gang locations. The GND will be focused on disrupting violent gangs with allied law enforcement agencies and expand the highly successful High Intensity Drug Trafficking Areas (HIDTA) Task Forces to reduce violent gang crime.
                                </Typography>


                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55', marginTop: '30px' }}>
                                    The mission of Gang and Narcotics Division is to disrupt violent street gangs and the means by which they support their lifestyle, including the manufacture, transportation, sale and use of illicit drugs, and sales of firearms in the greater Los Angeles area. Gang and Narcotics Division’s enforcement efforts also focus on street-level enforcement strategies to effect a reduction in Part I crimes, thereby resolving community problems and facilitating uniformed officer’s involvement.
                                </Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55', marginTop: '90px', fontWeight: 'bold' }}>
                                    GND ADMINSTRATIVE SECTION
                                </Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    Staff Services Detail
                                </Typography>
                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    Department Confidential Informant Coordinator
                                </Typography>
                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    Filing Detail
                                </Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    Logistics/Electronics Detail
                                </Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    Training Detail
                                </Typography>


                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55', marginTop: '30px', fontWeight: 'bold' }}>
                                    MAJOR ENFORCEMENT SECTION A
                                </Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    Staff Services Detail
                                </Typography>
                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    Department Confidential Informant Coordinator
                                </Typography>
                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    Complaint Detail
                                </Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    Training Detail
                                </Typography>


                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55', marginTop: '30px', fontWeight: 'bold' }}>
                                    MAJOR ENFORCEMENT SECTION B
                                </Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    HIDTA 44 Squad
                                </Typography>
                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    HIDTA 51 Squad
                                </Typography>
                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    HIDTA 52 Squad
                                </Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    Citywide Abatement Unit
                                </Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    Asset Forfeiture Investigative Detail
                                </Typography>



                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55', marginTop: '30px', fontWeight: 'bold' }}>
                                    MAJOR ENFORCEMENT SECTION C
                                </Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    LA IMPACT Group 4
                                </Typography>
                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    LA IMPACT Group 12 (Lab Squad)
                                </Typography>
                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    Cannabis Support Unit
                                </Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    Specialized Electronics and Safe Detail
                                </Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    K9 Squad
                                </Typography>



                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55', marginTop: '30px', fontWeight: 'bold' }}>
                                    GANG SUPPORT SECTION
                                </Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    Gang Unit/GSS Administrative Detail
                                </Typography>
                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    CCW Permit Coordinator
                                </Typography>
                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    US Marshals Apprehension Task Force
                                </Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    FBI Gang Task Force
                                </Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    USMS Foreign Prosecution Liaison Unit
                                </Typography>


                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55', marginTop: '30px', fontWeight: 'bold' }}>
                                    FUGITIVE WARRANT SECTION
                                </Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    FBI Fugitive Task Force
                                </Typography>
                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    FWS Bureau Support Teams
                                </Typography>
                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    Warrant Verification
                                </Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55' }}>
                                    Rendition
                                </Typography>


                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55', marginTop: '90px' }}>
                                    Useful Weblinks:
                                </Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55', marginTop: '30px' }}>
                                    Reporting the Diversion of Controlled Pharmaceuticals
                                </Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55', marginTop: '30px' }}>
                                    Currently, many problems associated with drug abuse are the result of legitimately made controlled substances being diverted from their lawful purpose to illicit use and drug trafficking. Many of the narcotics, depressants, and stimulants manufactured for legitimate medical use are subject to abuse and have, therefore, been brought under legal control.
                                </Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55', marginTop: '30px' }}>
                                    As a result, the Los Angeles Police Department has partnered up with the Drug Enforcement Administration (DEA) to prevent, detect, and investigate the diversion of controlled pharmaceuticals within the City of Los Angeles.
                                </Typography>


                                <Typography sx={{ fontSize: '18px', color: "#0f212b", lineHeight: '1.55', marginTop: '30px' }}>
                                    Diversion investigations involve, but are not limited to, physicians who sell prescriptions to drug dealers or abusers; pharmacists who falsify records and subsequently sell the drugs; employees who steal from inventory and falsify orders to cover illicit sales; individuals who obtain prescriptions through fraud and forgery; and individuals who commit armed robbery of pharmacies and drug distributors.
                                </Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", marginTop: '30px' }}>To report concerns, <Link href="https://www.deadiversion.usdoj.gov/" target='_blank'>click here</Link>–(diversion of prescription medications.) Or call the DEA at: 213 621- 6700.</Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", marginTop: '30px' }}>Additional information can be found at <Link href="http://www.dea.gov" target='_blank'>DEA’s website</Link></Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", marginTop: '30px' }}>Drug Abuse Warning Network (DAWN)</Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", marginTop: '30px' }}>Gives detailed information about substance abuse and admissions at participating hospitals.</Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", marginTop: '30px' }}><Link href="http://www.uclaisap.org/" target='_blank'>University of California, Los Angeles Integrated Substance Abuse</Link></Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", marginTop: '30px' }}>Extremely useful information about drug abuse, addiction, emerging research and treatment,</Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", marginTop: '30px' }}>The <Link href="https://www.drugabuse.gov/" target='_blank'>National Institute on Drugs and Addiction</Link> (NIDA)</Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", marginTop: '30px' }}>The NIDA has excellent resources for parents, teachers and children concerning drug abuse and addiction. Informational pamphlets for parents, teachers, and children are available for ordering free of charge.</Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", marginTop: '30px' }}><Link href="http://www.justthinktwice.com/stumbleweed/home.html" target='_blank'>“Stumble Weed Magazine,”</Link> concerns marijuana and use by young adults and preteens.</Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", marginTop: '30px' }}>Los Angeles City Attorney’s Office &quot;<Link href="https://ojjdp.ojp.gov/sites/g/files/xyckuh176/files/jjbulletin/9808/youth.html" target='_blank'>Fighting Gangs and Violence</Link>&quot;</Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", marginTop: '30px' }}><Link href="https://www.nationalgangcenter.gov/content/documents/project-tough.pdf" target='_blank'>Taking Out Urban Gang Headquarters (TOUGH) Program</Link></Typography>

                                <Typography sx={{ fontSize: '18px', color: "#0f212b", margin: '30px 0px 30px 0px' }}>The City Attorney’s Office’s TOUGH program focuses on abating nuisance properties involving extensive gang activity. Working with LAPD and other law enforcement agencies, the TOUGH program files lawsuits seeking aggressive and specifically tailored injunctive relief against property owners and gang members, including stay away orders, closure of properties, hiring of security guards, installation of video camera systems and other remedial improvements to the properties.</Typography>
                            </Box>


                        </Grid>
                    </Grid>
                </Box>


            </Container>




        </>
    )
}

export default California