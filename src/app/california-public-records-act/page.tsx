'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './california.module.css'
import Typography from '@mui/material/Typography'
import LaunchIcon from '@mui/icons-material/Launch';
import useMediaQuery from '@mui/material/useMediaQuery'


const California = () => {

    const tab = useMediaQuery('(max-width:768px)');

    const [toggle, setToggle] = useState(false)
    return (
        <>

            {/* 1st block */}
            <Box className={styles.bg}>
                <Grid container className={styles.blockspace}>
                    <Grid item xs={11} sm={10} md={7} lg={7}>
                        <h1 className={styles.h1size}>California Public Records Act</h1>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <LaunchIcon sx={{ color: '#fff' }} />  <Link href="#" className={styles.insidelnk}>California Public Records Act (CPRA)</Link>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            {/* 2nd block */}

            <Box>
                <Grid container>
                    <Grid item xs={12} sm={11} md={10} lg={7} className={styles.textstyl} >
                        <h3 style={{ fontSize: '26px', fontWeight: 'bold' }} className={styles.typoleft}>What is the California Public Records Act?</h3>

                        <Typography className={styles.bottom}><span><Link href="#">CPRA Manual</Link></span></Typography>
                        <Typography className={styles.bottom}><span><Link href="#">Admin Order 4, 2019</Link></span></Typography>
                        <Typography className={styles.bottom}><span><Link href="#">2022 CPRA Inspection Report</Link></span></Typography>
                        <Typography className={styles.bottom}><span><Link href="#">2021 CPRA Inspection Report</Link></span></Typography>
                        <Typography className={styles.bottom}><span><Link href="#">2020 CPRA Inspection Report</Link></span></Typography>
                        <Typography className={styles.bottom}><span><Link href="#">Winston Settlement</Link></span></Typography>

                        <Typography className={styles.ptag}>In 1968, the California Legislature enacted the California Public Records Act (CPRA) under Government Code (GC) sections 6250-6270. In its findings and declarations, mindful of the right of individuals’ privacy, the Legislature declared it was the public’s right to access information concerning the peoples business.</Typography>
                        <h4 style={{ marginBottom: '8px', fontSize: '22px', fontWeight: '400', lineHeight: '1.27', letterSpacing: '-.25px' }} className={styles.spaceleft}>Types of records are available? </h4>
                        <Typography className={styles.ptag}>The law requires law enforcement agencies to provide information the public has the right to know and at the same time, to withhold information if the release would jeopardize an individual’s right to privacy.</Typography>
                        <Typography className={styles.ptag}>Certain records or portions of records are subject to privacy laws and/or other exemptions and are rarely ever available for viewing. All agency records not exempted by law are otherwise available.</Typography>


                        <Typography sx={{display: toggle ? 'none' : 'flex', alignItems: 'center', marginBottom: '30px', marginLeft: tab ?'20px' : '80px', paddingTop: '30px'}}>
                            <span className={styles.hlinetwo}></span><Link href="javascript:;" className={styles.insidelnktwo} onClick={() => setToggle(true)}>Read More</Link>
                        </Typography>

                        {/* ==================================      TO BE HIDDEN     ==================================== */}
                        <Box className={`${toggle?styles.readMoreView:styles.readMoreHide} ${styles.scale_up_left}`}>


                            <h4 style={{ marginBottom: '8px', fontSize: '22px', fontWeight: '400', lineHeight: '1.27', letterSpacing: '-.25px' }} className={styles.spaceleft}>Records Exempt from Public Requests</h4>
                            <Typography className={styles.ptag}>Items that are exempt, subject to Government Code (GC) 6254, and will likely be redacted are:</Typography>

                            <Typography className={styles.ptag1}>● Identifying juvenile information </Typography>
                            <Typography className={styles.ptag1}>● Identifying victim information associated with crimes to Penal Code Sections 261,264,264.1,273a,273d,286,288 or 289 </Typography>
                            <Typography className={styles.ptag1}>● Confidential informant identifying information</Typography>
                            <Typography className={styles.ptag1}>● Criminal offender record information</Typography>
                            <Typography className={styles.ptag1}>● Information that may endanger the safety of a witness or the other person</Typography>
                            <Typography className={styles.ptag1}>● Information that may jeopardize an investigation, related investigation or law enforcement proceeding</Typography>
                            <Typography className={styles.ptag1}>● Any portion of the report that reflects analysis, recommendation or conclusion of the investigating officer</Typography>
                            <Typography className={styles.ptag1}>● Information that may disclose investigative techniques</Typography>
                            <Typography className={styles.ptag1}>● Information that may deprive a person of a fair trial</Typography>
                            <Typography className={styles.ptag1}>● Preliminary drafts, notes, or memorandums which are not retained in the ordinary course of business</Typography>
                            <Typography className={styles.ptag1}>● Records pertaining to pending litigation to which the city is a party until the litigation is adjudicated or settled</Typography>
                            <Typography className={styles.ptag1}>● Personnel, medical or similar files</Typography>
                            <Typography className={styles.ptag1}>● Follow ups to initial investigation</Typography>


                            <h3 style={{ fontSize: '26px', fontWeight: 'bold' }} className={styles.typoleft}>Be Aware</h3>
                            <Typography className={styles.ptag}>Prompt access to public records is required by the CPRA (Government Code 6253). The 10– day period mentioned in the act is not a legal deadline for producing records. The 10-days allows the agency to review records, if it is not clear that they are public records. As soon as a determination is made, it will be at that time the records shall be released.</Typography>
                            <Typography className={styles.ptag}>The rights under the CPRA provide for the inspection of public records or to obtain copies of identifiable records, it does not compel the agency to create lists or reports in response to the request.</Typography>
                            <Typography className={styles.ptag}>Under Government Code 6253(b), Agencies may charge for the “direct costs” for providing copies of an identifiable record.</Typography>
                            <Typography className={styles.ptag}>Public records requests for information from the Los Angeles Police Department can be obtained from the Discovery Section by submitting a California Public Records Act (CPRA) request below.</Typography>
                            <Typography className={styles.ptag}>You will want to include the following information to ensure the scope of the request is understood and clear enough for personnel to determine if we have the records you are requesting.</Typography>

                            <ul className={`${styles.disc} ${styles.spaceleft}`}>
                                <li>
                                    <Typography sx={{ marginBottom: '12px', color: 'black', fontStyle: 'italic', fontSize: '18px' }}>The date(s) of the record</Typography>
                                </li>
                                <li>
                                    <Typography sx={{ marginBottom: '12px', color: 'black', fontStyle: 'italic', fontSize: '18px' }}>The subject of the record</Typography>
                                </li>
                                <li>
                                    <Typography sx={{ marginBottom: '12px', color: 'black', fontStyle: 'italic', fontSize: '18px' }}>A clear and specific description of the record</Typography>
                                </li>
                                <li>
                                    <Typography sx={{ marginBottom: '12px', color: 'black', fontStyle: 'italic', fontSize: '18px' }}>Any additional information that helps staff identify the record
                                    </Typography>
                                </li>
                                <li>
                                    <Typography sx={{ marginBottom: '12px', color: 'black', fontStyle: 'italic', fontSize: '18px' }}>Your complete contact information, so that we may notify you when your request is available
                                    </Typography>
                                </li>
                            </ul>

                            <Typography sx={{display: toggle ? 'block' : 'flex', alignItems: 'center', marginBottom: '30px', marginLeft: tab ?'20px' : '80px', paddingTop: '30px'}}>
                                <span className={styles.hlinetwo} style={{marginTop: '10px'}}></span><Link href="javascript:;" className={styles.insidelnktwo} onClick={() => setToggle(false)}>Read Less</Link>
                            </Typography>
                        </Box>
                        {/* ==================================      TO BE HIDDEN     ==================================== */}

                    </Grid>
                </Grid>
            </Box>





            {/* ================================================================= recreate ================================================= */}



            <Box sx={{ margin: tab ? '20px 50px' : '100px 70px' }}>
                <Grid container columnSpacing={3} rowSpacing={7}>

                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{ background: '#ebf4f7', padding: '24px', height: '70%' }}>
                            <Box sx={{}}>
                                <Typography sx={{ marginBottom: '15px', fontSize: '20px', lineHeight: '24px', fontWeight: '700' }}>CPRA Manual</Typography>
                                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                    <LaunchIcon sx={{ width: '20px', padding: '0px 5px 0px 0px' }} />
                                    <Link href='javacsript:;' className={styles.hoveLink}>
                                        CPRA Manual
                                    </Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>


                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{ background: '#ebf4f7', padding: '24px', height: '70%' }}>
                            <Typography sx={{ marginBottom: '15px', fontSize: '20px', lineHeight: '24px', fontWeight: '700' }}>Admin Order 4, 2019</Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                <LaunchIcon sx={{ width: '20px', padding: '0px 5px 0px 0px' }} />
                                <Link href='javacsript:;' className={styles.hoveLink}>
                                    Admin Order 4, 2019
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>


                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{ background: '#ebf4f7', padding: '24px', height: '70%' }}>
                            <Typography sx={{ marginBottom: '15px', fontSize: '20px', lineHeight: '24px', fontWeight: '700' }}>2022 CPRA Inspection Report</Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                <LaunchIcon sx={{ width: '20px', padding: '0px 5px 0px 0px' }} />
                                <Link href='javacsript:;' className={styles.hoveLink}>
                                    2022 CPRA Inspection Report
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{ background: '#ebf4f7', padding: '24px', height: '70%' }}>
                            <Typography sx={{ marginBottom: '15px', fontSize: '20px', lineHeight: '24px', fontWeight: '700' }}>2021 CPRA Inspection Report</Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                <LaunchIcon sx={{ width: '20px', padding: '0px 5px 0px 0px' }} />
                                <Link href='javacsript:;' className={styles.hoveLink}>
                                    2021 CPRA Inspection Report
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{ background: '#ebf4f7', padding: '24px', height: '70%' }}>
                            <Typography sx={{ marginBottom: '15px', fontSize: '20px', lineHeight: '24px', fontWeight: '700' }}>2020 CPRA Inspection Report</Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                <LaunchIcon sx={{ width: '20px', padding: '0px 5px 0px 0px' }} />
                                <Link href='javacsript:;' className={styles.hoveLink}>
                                    2020 CPRA Inspection Report
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{ background: '#ebf4f7', padding: '24px', height: '70%' }}>
                            <Typography sx={{ marginBottom: '15px', fontSize: '20px', lineHeight: '24px', fontWeight: '700' }}>Winston Settlement</Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                <LaunchIcon sx={{ width: '20px', padding: '0px 5px 0px 0px' }} />
                                <Link href='javacsript:;' className={styles.hoveLink}>
                                    Winston Settlement
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
            </Box>

            {/* ================================================== section ================================================ */}

            {/*====================================== lg & md view  im looking================================================*/}

            <Box>
                <Grid container>

                    {/*====================================== Left side ================================================*/}

                    <Grid item xs={12} sm={6} md={3} sx={{marginTop:"40px"}} className={styles.gridscardpadone}>
                        <Box className={styles.linkbox}>
                            <h2>Im Looking for...</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Categorical Use of Force (archive)</Link></li>
                                <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Clearance letters (travel/adoption)</Link></li>
                                <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Crime reports (victim only)</Link></li>


                                <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Current Crime Statistics</Link></li>
                                <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}> Current Crime Statistics</Link></li>
                                <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>LAPD News Releases</Link></li>
                                <li style={{ display: 'flex' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Los Angeles Open Data (DataLA)</Link></li>
                                <li style={{ display: 'flex' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>State of California - Dept. of Justice</Link></li>
                                <li style={{ display: 'flex' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>California Public Records Act (CPRA)</Link></li>
                            </ul>
                        </Box>


                    </Grid>

                </Grid>
            </Box>



            {/*====================================== xs view ================================================*/}



        </>
    )
}

export default California