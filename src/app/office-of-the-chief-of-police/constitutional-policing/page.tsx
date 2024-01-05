'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './constitutional.module.css'
import pdf from "../../../../public/Icons/pdf-svg-icon.svg"
import Typography from '@mui/material/Typography'
import LaunchIcon from '@mui/icons-material/Launch';
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
                    <Grid item xs={11} sm={10} md={10} lg={8}>
                        <h1 className={styles.h1size}>Office of Constitutional Policing and Policy</h1>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <span className={styles.hline}></span><Link href="#" className={styles.insidelnk}>Commanding Officer - Police Administrator Lizabeth Rhodes</Link>
                        </Box>
                    </Grid>
                </Grid>
                </Container>
            </Box>
            {/* 2nd block */}

            <Container>
            <Box className={styles.wholeblock}>
                <Box>
                    <Grid container>
                        <Grid item sm={12} md={10} lg={7} className={styles.textstyl}>
                            <h2>Office of Constitutional Policing and Policy (OCPP) Public Website</h2>
                            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                                <span className={styles.hlinetwo}></span><Link href="#" className={styles.insidelnktwo}>Read More</Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Grid container>
                        <Grid item sm={12} md={10} lg={7} className={styles.textstyl} sx={{ marginTop: '50px' }}>
                            <Typography sx={{ marginBottom: '30px' }}>Following the discovery and disclosure of the Rampart Area Corruption Incident by the Los Angeles Police Department, the <Link href="#">United States Department of Justice (DOJ)</Link>notified the City of Los Angeles that it intended to file a civil suit alleging that the Department was engaging in a pattern or practice of excessive force, false arrests and unreasonable searches and seizures.</Typography>

                            <Typography sx={{ display: toggle ? 'none' : 'flex', alignItems: 'center', marginBottom: '30px', paddingTop: '20px' }}>
                                <span className={styles.hlinetwo}></span><Link href="javascript:;" className={styles.insidelnktwo} onClick={() => setToggle(true)}>Read More</Link>
                            </Typography>
                            <Box className={`${toggle ? styles.readMoreView : styles.readMoreHide} ${styles.scale_up_left}`}>
                                <Typography sx={{ marginBottom: '30px' }}>When the Department satisfied the Consent Decree requirements, the Consent Decree was officially lifted. Since that time, OCPP has assumed various responsibilities and organization structures which evolved into its current iteration. The Director of the OCPP is the highest-ranking civilian within the Los Angeles Police Department.</Typography>

                                <Box>
                                    <Typography sx={{ fontSize: '18px', fontWeight: 'bolder', marginBottom: '30px', lineHeight: '1.55', fontStyle: 'italic' }}>THE MISSION OF THE OFFICE OF CONSTITUTIONAL POLICING AND POLICY.</Typography>

                                    <Typography sx={{ marginBottom: '30px' }}>The Office of Constitutional Policing and Policy’s priority is to assist LAPD personnel by supporting effective, constitutional policing through policies, procedures, analysis, advice, guidance, and other essential information. To further enhance this portion of the mission, OCPP created the Policy Analysis and Development Unit (PADU), a Diversity, Equity, and Inclusion (DEI) Group, Audit Division, Grants Section, and Ombuds Section.</Typography>

                                    <Typography sx={{ marginBottom: '30px' }}>The PADU’s primary mission is to develop policies and procedures, analyze and review upcoming local, state and federal legislation. The Diversity Equity Inclusion Group’s mission is to create, promote, and foster cultural competency in policing; to embrace diversity, equity, and inclusivity by enacting formal, transparent, and progressive policy that safeguards every employee and community members’ rights.</Typography>

                                    <Typography sx={{ marginBottom: '30px' }}>Audit Division was established to conduct Department audits which identifies issues, recommends improvements, and promotes accountability. This will safeguard Department personnel and the City of Los Angeles against lawsuits and claims when they arise and seeks to proactively mitigate risks that cause physical, organizational, or financial harm through the Department Risk Management and Harm Reduction Strategy.</Typography>

                                    <Typography sx={{ marginBottom: '30px' }}>In addition, the OCPP oversees the Grants Section and the Ombuds Section. The Grant Section is responsible for approving grant expenditures, coordinating payment invoices and ensuring timely processing of all grant applications. The Ombuds Section is responsible for the Alternative Dispute Resolution (ADR) Program, which provides assistance to Department employees in dealing with internal conflict and disputes.</Typography>

                                    <Typography sx={{ fontSize: '18px', fontWeight: 'bolder', marginBottom: '30px', lineHeight: '1.55', fontStyle: 'italic' }}>RESPONSIBILITIES</Typography>
                                    <Typography>⬝ Leads the development of LAPD’s policies and procedures;</Typography>
                                    <Typography>⬝ Manages the Department’s legal affairs and risk management initiatives;</Typography>
                                    <Typography>⬝ Administers internal auditing and compliance programs;</Typography>
                                    <Typography>⬝ Communicates with and advises the Chief of Police;</Typography>
                                    <Typography>⬝ Provides legal and policy advice to various boards (e.g. Use of Force Review Board) and the Chief of Police concerning the adjudication of Officer Involved Shootings and other Categorical uses of force, Internal Affairs investigations, and other complex personnel matters;</Typography>
                                    <Typography>⬝ Serves as the Department Risk Manager;</Typography>
                                    <Typography>⬝ Chairs the Risk Management Executive Committee;</Typography>
                                    <Typography>⬝ Provides leadership and oversight for subordinate commands;</Typography>
                                    <Typography>⬝ Build awareness, solutions, and leadership for racial justice by collaborating and generating transformative ideas, information, and experiences; and,</Typography>
                                    <Typography sx={{ marginBottom: '30px' }}>⬝ Creates, promotes, and foster cultural competency in policing; to safeguards every employee and community members’ rights.</Typography>

                                    <Typography sx={{ fontSize: '18px', fontWeight: 'bolder', marginBottom: '30px', lineHeight: '1.55', fontStyle: 'italic' }}>SPECIAL DUTIES.</Typography>

                                    <Typography>⬝ Ethics Coordinator for the Department;</Typography>
                                    <Typography>⬝ Academic Research and Partnerships Coordinator;</Typography>
                                    <Typography>⬝ Adjudication of complaints involving high-level command staff or other instances where chain of command conflicts of interest arises;</Typography>
                                    <Typography>⬝ Department-wide Gang Enforcement Detail Extension and Financial Disclosure Coordinator;</Typography>
                                    <Typography>⬝ Conduct audits and inspection as directed by the Chief of Police and the Board of Police Commissioners;</Typography>
                                    <Typography>⬝ Reviewing all new directives and orders to assess risk and auditing/inspecting responsibility; and,</Typography>
                                    <Typography>⬝ Prepare periodic reports to the Police Commission, Chief of Police, and the Directors of Offices.</Typography>


                                    <Typography sx={{ display: toggle ? 'block' : 'flex', alignItems: 'center', marginBottom: '30px', paddingTop: '30px' }}>
                                        <span className={styles.hlinetwo} style={{ marginTop: '10px' }}></span><Link href="javascript:;" className={styles.insidelnktwo} onClick={() => setToggle(false)}>Read Less</Link>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>





            {/* ===================================Desktop & tab ===================================== */}

            <Box className={styles.lg}>
                <Box sx={{paddingTop:"60px"}}>
                    <Grid container>

                        <Grid item sm={6} md={6} lg={6} className={styles.gridscardpadone}>
                            <Box className={styles.linkbox}>
                                <h2>Use Of Force Year End Review</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />2021 Use of Force - Year End Report</Link></li>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />2020 Use Of Force - Year End Review</Link></li>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />2019 End of Year Report Crime & Initiatives</Link></li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item sm={6} md={6} lg={6} className={styles.gridscardpadtwo}>
                            <Box className={styles.linkbox}>
                                <h2>Use of Force Information</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />Arrestees with Mental Illness</Link></li>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />Effective Encounters with Mentally Ill Persons</Link></li>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />Office of the Inspector General - Categorical Use of Force</Link></li>
                                </ul>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
                <Box>
                    <Grid container>

                        <Grid item sm={6} md={6} lg={6} className={styles.gridscardpadone}>
                            <Box className={styles.linkbox}>
                                <h2>Consent Decree Mental Illness, Final Report, Harvard Study</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />Consent Decree City Compliance Report</Link></li>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />Final Consent Decree</Link></li>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />Harvard Study - LAPD Under a Consent Decree</Link></li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item sm={6} md={6} lg={6} className={styles.gridscardpadtwo}>
                            <Box className={styles.linkbox}>
                                <h2>Final Report Mac Arthur Park Incident</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />Final Report on Mac Arthur Park Incident</Link></li>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />Final Report Mac Arthur Incident - Spanish</Link></li>
                                </ul>
                            </Box>

                            <Box className={styles.linkbox} sx={{ marginTop: '40px' }}>
                                <h2>Miscellaneous Consent Decree Reports</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Federal judge lifts LAPD consent decree</Link></li>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />Motor Vehicle and Pedestrian Stop Data</Link></li>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />Pedestrian and Motor Vehicle Post-Stop Data Analysis Report</Link></li>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />Summary of Department Response to Lodestar Report</Link></li>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />Training the 21st Century Police Officer - RAND Report</Link></li>
                                </ul>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
            {/* ======================================== Mob ========================================== */}
            <Box className={styles.xs}>
                <Box>
                    <Grid container>

                        <Grid item xs={12} className={styles.gridscardpadone}>
                            <Box className={styles.linkbox}>
                                <h2>Use Of Force Year End Review</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />2021 Use of Force - Year End Report</Link></li>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />2020 Use Of Force - Year End Review</Link></li>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />2019 End of Year Report Crime & Initiatives</Link></li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item xs={12} className={styles.gridscardpadtwo}>
                            <Box className={styles.linkbox}>
                                <h2>Use of Force Information</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />Arrestees with Mental Illness</Link></li>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />Effective Encounters with Mentally Ill Persons</Link></li>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />Office of the Inspector General - Categorical Use of Force</Link></li>
                                </ul>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
                <Box>
                    <Grid container>

                        <Grid item xs={12} className={styles.gridscardpadone}>
                            <Box className={styles.linkbox}>
                                <h2>Consent Decree Mental Illness, Final Report, Harvard Study</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />Consent Decree City Compliance Report</Link></li>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />Final Consent Decree</Link></li>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />Harvard Study - LAPD Under a Consent Decree</Link></li>
                                </ul>
                            </Box>
                        </Grid>
                        <Grid item xs={12} className={styles.gridscardpadtwo}>
                            <Box className={styles.linkbox}>
                                <h2>Final Report Mac Arthur Park Incident</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />Final Report on Mac Arthur Park Incident</Link></li>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />Final Report Mac Arthur Incident - Spanish</Link></li>
                                </ul>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ marginBottom: '50px' }}>
                    <Grid container>

                        <Grid item xs={12} className={styles.gridscardpadone}>
                            <Box className={styles.linkbox}>
                                <h2>Miscellaneous Consent Decree Reports</h2>
                                <ul className={styles.aboutul}>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Federal judge lifts LAPD consent decree</Link></li>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />Motor Vehicle and Pedestrian Stop Data</Link></li>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />Pedestrian and Motor Vehicle Post-Stop Data Analysis Report</Link></li>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />Summary of Department Response to Lodestar Report</Link></li>
                                    <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '25px', width: '25px', marginRight: '10px' }} />Training the 21st Century Police Officer - RAND Report</Link></li>
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

export default ConstitutionalPolicy