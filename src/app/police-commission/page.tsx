'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography  from '@mui/material/Typography'
import Link from 'next/link'
import styles from "./policeComission.module.css"
import useMediaQuery from '@mui/material/useMediaQuery'
import LaunchIcon from '@mui/icons-material/Launch';
import Image from 'next/image'
import commissionImage from "../../../public/Images/BOPC-Image-large.jpg"
import pdf from "../../../public/Icons/pdf-svg-icon.svg"
import global from "../global.module.css"


const PoliceCommission = () => {

    const mobile = useMediaQuery('(max-width: 576px)');

    return (
        <>
            <Box sx={{ display: 'flex', padding: '32px 5%', flexDirection: 'column', background: '#0f212b' }}>
                <Typography className={global.fadeInUp} sx={{ marginBottom: '8px', color: '#fff', fontSize: mobile ? '20px' : '22px' }}>Under the City Charter, the Board of Police Commissioners is the head of  the <br /> Police Department.</Typography>
                <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 20px', fontSize: mobile ? '34px' : '60px', fontWeight: '700' }}>Police Commission</Typography>
            </Box>
            <Box className={global.fadeInUp} sx={{ marginTop: "50px", textAlign: "center", padding: "0% 1% 3% 3%" }}>
                <Grid container rowSpacing={7} sx={{ justifyContent: "space-evenly", textAlign: "left" }}>
                    <Grid item sm={11} md={6} lg={6} xl={4.1}>
                        <Typography sx={{ fontSize: "18px" }}>The Board of Police Commissioners serves as the head of the Los Angeles Police Department, functioning like a corporate board of directors, setting policies for the Department and overseeing its operations. The Board works in conjunction with the Chief of Police who acts as a chief executive officer and reports to the Board. There are five civilian members who make up the Board of Police Commissioners.
                        </Typography>

                        <Typography sx={{ fontSize: "18px", marginTop: "30px" }}>Commissioners are appointed by the <a className={styles.link} href="javascript:;"> Mayor:</a></Typography>
                        <Box sx={{ marginTop: "20px" }}>
                            <Typography sx={{ fontSize: "18px" }}>President, Dr. Erroll G. Southers</Typography>
                            <Typography sx={{ fontSize: "18px" }}>Vice President, Rasha Gerges Shields</Typography>
                            <Typography>Commissioner, William J. Briggs, II</Typography>
                            <Typography sx={{ fontSize: "18px" }}>Commissioner, Maria Lou Calanche</Typography>
                            <Typography sx={{ fontSize: "18px" }}>Commissioner, Fabian Garcia</Typography>
                        </Box>

                        <Box sx={{ marginTop: '30px' }}>
                            <Link className={styles.link} href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography sx={{ fontSize: "18px" }}>Federal judge lifts LAPD consent decree</Typography></Link></Box>

                    </Grid>
                    <Grid item sm={11} md={6} lg={6} xl={4.1}>

                        <Image className={styles.commissionImage} src={commissionImage} alt="commission-image" width={450} height={450} />
                    </Grid>
                </Grid>


            </Box>

            <Grid className={global.fadeInUp} container >
                <Box sx={{ display: 'flex', width: "100%", flexDirection: 'column', background: '#0f212b', padding: '32px 5%' }}>
                    <Grid item xs={11} sm={9} md={5}>
                        <Typography className={styles.fadeInUp} sx={{ marginBottom: '8px', color: '#fff', fontSize: mobile ? '35px' : '60px', fontWeight: 'bold', lineHeight: "1.2" }}>The Function and Role of the Board of Police Commissioners</Typography>
                        <Box className={styles.fadeInUp} sx={{ display: 'flex', alignItems: 'center', marginTop: "20px" }}>
                            <span className={styles.hline}></span><Link href="javascript:;" className={styles.insidelnk}>
                                Function and Role of the Board of Police Commissioners</Link>
                        </Box>
                    </Grid>

                </Box>

            </Grid>
 
              <Box className={global.fadeInUp} sx={{padding:"0% 5% 0% 5%"}}>
            <Box sx={{ paddingTop: "60px" }}>
                <Typography sx={{ fontSize: "18px" }}>For public comments, general inquiries, and concerns, email <a href='#' className={styles.link}>policecommission@lapd.online.</a></Typography>

                <Grid container columnSpacing={5} rowSpacing={3} sx={{marginTop:"80px"}}>
                    <Grid item xs={12} sm={6} md={6} lg={2.5}>
                        <Box className={styles.cardBox} sx={{ backgroundColor: "#ebf4f7", padding: "5% 22% 5% 5%", height: "200px" }}>
                            <Typography sx={{ fontSize: "22px", fontWeight: 'bold' }}>Office of the Executive Director</Typography>
                            <Box className={styles.fadeInUp}
                                sx={{ display: 'flex', alignItems: 'center', marginTop: "20px", gap: "20px" }}>
                                <span className={styles.hline1}></span><Link href="javascript:;" className={styles.link}>
                                    <Typography sx={{ fontSize: "18px" }}>Office of the Executive Director</Typography></Link>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={2.5}>
                        <Box className={styles.cardBox} sx={{ backgroundColor: "#ebf4f7", padding: "5% 22% 5% 5%", height: "200px" }}>
                            <Typography sx={{ fontSize: "22px", fontWeight: 'bold' }}>Commission Investigation Division</Typography>
                            <Box className={styles.fadeInUp} sx={{ display: 'flex', alignItems: 'center', marginTop: "20px", gap: "20px" }}>
                                <span className={styles.hline1}></span><Link href="javascript:;" className={styles.link}>
                                    <Typography sx={{ fontSize: "18px" }}>Commission Investigation Division</Typography></Link>
                            </Box>

                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={2.5}>
                        <Box className={styles.cardBox} sx={{ backgroundColor: "#ebf4f7", padding: "5% 22% 5% 5%", height: "200px" }}>
                            <Typography sx={{ fontSize: "22px", fontWeight: 'bold' }}>Office of the Inspector General</Typography>
                            <Box className={styles.fadeInUp} sx={{ display: 'flex', alignItems: 'center', marginTop: "20px", gap: "20px" }}>
                                <span className={styles.hline1}></span><Link href="javascript:;" className={styles.link}>
                                    <Typography sx={{ fontSize: "18px" }}>Office of the Inspector General</Typography></Link>
                            </Box>

                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={2.5}>
                        <Box className={styles.cardBox} sx={{ backgroundColor: "#ebf4f7", padding: "5% 22% 5% 5%", height: "200px" }}>
                            <Typography sx={{ fontSize: "22px", fontWeight: 'bold' }}>Commission Telephone/Address Directory</Typography>
                            <Box className={styles.fadeInUp} sx={{ display: 'flex', alignItems: 'center', marginTop: "20px", gap: "20px" }}>
                                <span className={styles.hline1}></span><Link href="javascript:;" className={styles.link}>
                                    <Typography sx={{ fontSize: "18px" }}>Commission Telephone/Address Directory</Typography></Link>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ marginTop: "60px" }}>
                <Typography sx={{ fontWeight: "700", fontSize: "28px" }}>Police Commission & Miscellaneous</Typography>
                <Box sx={{ marginTop: "20px" }}>
                    <table className={styles.table}>
                    <tbody>
                        <tr className={styles.row}>
                            <td className={styles.data}><Link className={styles.link} href="javascript:;"> <Typography>
                                Rules of the Police Commission</Typography></Link></td>

                        </tr>
                        <tr className={styles.row}>
                            <td className={styles.data}><Typography>Tow Truck Complaint Hotline <Link className={styles.link} href="javascript:;">323-680-4869</Link> 323-680-4-TOW (4869)</Typography></td>

                        </tr>
                        <tr className={styles.row}>
                            <td className={styles.data}>
                                <Link className={styles.link} href="javascript:;"><Typography>Policy Regarding Commission and Department Discussion Time Limits</Typography></Link>
                            </td> 
                            </tr>
                            </tbody>
                    </table>

                </Box>
            </Box>

            <Box sx={{marginTop:"60px"}}>
                <Grid container columnSpacing={5} rowSpacing={5}>
                    <Grid item sm={6} md={6} lg={6}>
                        <Box sx={{ backgroundColor: "#ebf4f7",padding:"3% 0% 3% 3%" }}>
                            <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>Meeting Agenda</Typography>
                            <ul className={styles.listItem}>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />December 26, 2023 - Cancelled</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Archives</Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />To receive Police Commission agendas as soon as they are released, please click here to subscribe</Link></li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Box sx={{ backgroundColor: "#ebf4f7",padding:"3% 0% 3% 3%" }}>
                        <ul className={styles.listItem}>
                            <li>
                            <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>Public Comments</Typography>
                            </li>
                            <li><Typography sx={{fontSize:"18px"}}>December 19, 2023 - No Public Comment Submitted</Typography></li>
                            <li><Link href="javascript:;">Archives</Link></li>
                        </ul>
                            
                            
                            
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <Box sx={{ backgroundColor: "#ebf4f7",padding:"3% 0% 3% 3%" }}>
                        <ul className={styles.listItem}>
                            <li>
                            <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>Categorical Use of Force</Typography>
                            </li>
                           
                            <li><Link href="javascript:;">Categorical Use of Force</Link></li>
                        </ul>
                            
                            
                            
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <Box sx={{ backgroundColor: "#ebf4f7",padding:"3% 0% 3% 3%" }}>
                        <ul className={styles.listItem}>
                            <li>
                            <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>Annual Use of Force - Year End Report</Typography>
                            </li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />2022 Use of Force - Year End Report</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />2022 Use of Force Executive Summary</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />2021 Use of Force - Year End Report</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />2021 Use of Force - Year End Report Executive Summary</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />2020 Use of Force - Year End Report</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />2019 Use of Force - Year End Report</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />2018 Use of Force Executive Summary - Year End Report</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />2018 Use of Force - Year End Report</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />2017 Use of Force - Year End Report</Link></li>
                        </ul>
                            
                            
                            
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <Box sx={{ backgroundColor: "#ebf4f7",padding:"3% 0% 3% 3%" }}>
                        <ul className={styles.listItem}>
                            <li>
                            <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>Police Permit Review Panel</Typography>
                            </li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Role and Function of the Police Permit Review Panel</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Special Event Permit Applicant Instructions and Application [PDF]</Link></li>
                           
                        </ul>
                            
                            
                            
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <Box sx={{ backgroundColor: "#ebf4f7",padding:"3% 0% 3% 3%" }}>
                        <ul className={styles.listItem}>
                            <li>
                            <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>Additional Information and Web Links</Typography>
                            </li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>Police Commission Hearing Examiners</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Application for Police Commission Hearing Examiner</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />LA Police Commission Twitter</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />LA Police Commission YouTube</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Los Angeles Superior Court – Small Claims Advisor</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />State of California, Department of Consumer Affairs</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Fundraising Campaign or Special Event Form</Link></li>
                           
                        </ul>
                            
                            
                            
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                    <Box sx={{ backgroundColor: "#ebf4f7",padding:"3% 0% 3% 3%" }}>
                        <ul className={styles.listItem}>
                            <li>
                            <Typography sx={{ fontWeight: "bold", fontSize: "26px" }}>Policies</Typography>
                            </li>
                            <li>
                                <Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Assembly Bill 48</Link>
                            </li>
                            <li>
                                <Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Auto License Plate Reader</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Band on No - Knock Warrants</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />CalGang Data Entry</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Carotid Restraint Hold</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Consent to Search Advisement</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Drone Guidelines</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Hate Crime Policy</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />LGBTQ+  Transportation of Arrestees</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Monetary Donations Policy</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Photo Comparison Technology</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Positional Asphyxia - Established</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Procurement and Use of Military Equipment Notice</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Reporting Incidents Motivated by Hatred or Prejudice - Revised</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Social Media Policy</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Use of Force Policy Revised</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Video Release Policy</Link></li>
                           
                        </ul>
                            
                            
                            
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box sx={{display:"flex",flexDirection:"column",gap:"30px"}}>
                        <Box sx={{ backgroundColor: "#ebf4f7",padding:"3% 0% 3% 3%" }}>
                        <ul className={styles.listItem}>
                            <li>
                            <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>Reform Measures</Typography>
                            </li>
                            
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />A Crisis of Trust</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />After Action Report</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Civil Unrest 2020</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />LAPD Protest Response</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Police Commission Update</Link></li>
                           
                        </ul>
                            
                            
                            
                        </Box>

                        <Box sx={{ backgroundColor: "#ebf4f7",padding:"3% 0% 3% 3%" }}>
                        <ul className={styles.listItem}>
                            <li>
                            <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>Reform Measures</Typography>
                            </li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />2022 CPRA Inspection</Link></li>
                            
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Community Safety Partnership</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Discipline Resulting from Out of Policy Officer Involved Shootings, 2015-2020</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Office of Inspector General - Board of Rights</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Racial and Identity Profiling Summary</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Racial and Identity Profiling Technical</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Review of Department Disciplinary and Complaint processes</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Stop Data Report Nov 2020</Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />Stop Data Report Oct 2020</Link></li>
                           
                        </ul>
                            
                            
                            
                        </Box>

                        </Box>

                    </Grid>
                </Grid>
            </Box>
            </Box>


        </>
    )
}

export default PoliceCommission