'use client'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery'
import Styles from './style.module.css'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import pdf from '../../../public/Images/pdf-svg-icon.svg'
import LaunchIcon from '@mui/icons-material/Launch';
import { Container } from '@mui/material'

const Reportemployee = () => {
    const mobile = useMediaQuery('(max-width: 576px)');
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <Box sx={{ display: 'flex', padding: '32px 5%', flexDirection: 'column', background: '#0f212b' }}>
                <Container>
                    <Grid container>
                        <Grid item lg={7}>
                        <Typography sx={{ color: '#fff', margin: '0px 0px 20px', fontSize: mobile ? '28px' : '62px', fontWeight: '700',lineHeight:"1" }}>Report Employee Misconduct</Typography>
                        </Grid>
                </Grid>
                <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center',gap:"10px" }} href='/information-on-how-to-file-a-complaint'>
                <span style={{width:"18px",height:"2px",backgroundColor:"#fff",marginBottom:"2px"}}></span>
                    <Typography sx={{ padding: '0px 0px 0xp 20px', color: "#7DDFFF", fontSize: "16px", textTransform: "none", '&:hover': { color: "#fff" } }}>Information on How to File a Complaint</Typography>
                </Link>
                </Container>
            </Box>


            <Container>
            <Box sx={{ padding: '30px 0px' }}>
                <ul style={{ paddingLeft: '10px' }}>
                    <li>
                        <Typography className={Styles.paraStyle} ><Link href='https://www.lapdonline.org/contact-us/' className={Styles.linkHover}>Contact Us</Link></Typography>
                    </li>
                    <li>
                        <Typography className={Styles.paraStyle}><Link href='https://www.lapdonline.org/employee-commendation/' className={Styles.linkHover}>Commendations</Link></Typography>
                    </li>
                    <li>
                        <Typography className={Styles.paraStyle}><Link href='https://docs.google.com/forms/d/e/1FAIpQLSfWo1bwv7nLh3M4vpfObqBrvfUAPFeFcgIKzd0SU6dzxcVswA/viewform' className={Styles.linkHover}> Complaint Form</Link></Typography>
                    </li>
                </ul>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={8}>
                        <Typography sx={{ fontWeight: 'bold' }} className={Styles.paraStyle}>
                            QUALITY SERVICE IS YOUR RIGHT
                        </Typography>
                        <Typography className={Styles.paraStyle}>
                            The motto of the Los Angeles Police Department is “to protect and to serve.” The Department is dedicated to providing the finest police service possible. In order to provide quality service to the community, we need your assistance. This is your police department. We welcome your comments and encourage you to let us know about the quality of service you receive from our employees.
                        </Typography>
                        <Typography className={Styles.paraStyle}>
                            If you wish to commend the actions of employees of this Department, you may do so by clicking here, writing a letter to the captain of the station in your Area, or to the Chief of Police. Verbal commendations may also be given to any Department supervisor. If you believe the conduct of an employee was inappropriate, you may file an online complaint here.
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold' }} className={Styles.paraStyle}>
                            FILING A COMPLAINT OF POLICE MISCONDUCT
                        </Typography>
                        <Typography className={Styles.paraStyle}>
                            A complaint can be filed in person at any police facility in Los Angeles, Internal Affairs Group, the Police Commission, or the Office of the Inspector General. Although it is not required, the Department encourages community members to make these reports in person so a supervisor has an opportunity to do a thorough initial assessment of your complaint.
                        </Typography>
                        <Typography className={Styles.paraStyle}>
                            If you do not wish to report your complaint in person, you may obtain a “Complaint of Employee Misconduct” form from any police facility or City Council field office. Complaints may also be filed online by clicking here or on the button below.
                        </Typography>
                        <Typography className={Styles.paraStyle}>
                            If you prefer to make your complaint by phone, you may call our 24-hour toll free hotline at <Link href='tel:800-339-6868' className={Styles.linkHover}>(800) 339-6868</Link>.
                        </Typography>
                        <Typography className={Styles.paraStyle}>
                            Anonymous and third-party complaints are also accepted and will be investigated to the extent that sufficient information is provided. However, if you choose to not provide your contact information, the investigators will be unable to ask you follow-up questions that might be needed for a thorough, complete investigation.
                        </Typography>
                        <Typography className={Styles.paraStyle} sx={{ position: 'relative', display: toggle ? 'none' :'flex', alignItems: 'center' }} >
                            <span className={Styles.hyphen}></span>
                            <Link href="javascript:;" className={Styles.linkHover} style={{ marginLeft: '30px' }} onClick={() => setToggle(true)}>Read More</Link>
                        </Typography>


                        <Box className={`${toggle ? Styles.readMoreView : Styles.readMoreHide} ${Styles.scale_up_left}`}>
                            <Typography sx={{ fontWeight: 'bold' }} className={Styles.paraStyle}>
                                The Investigation Process
                            </Typography>
                            <Typography className={Styles.paraStyle}>
                                All complaints are reviewed by IAG before being assigned for investigation. However, not all complaints are investigated by IAG. Depending on the misconduct alleged, personnel complaints may be investigated by IAG investigators or at the divisional level. Complaints not investigated by IAG are assigned to the accused officer&rsquo;s division of assignment for investigation.
                            </Typography>
                            <Typography className={Styles.paraStyle}>
                                Your complaint will be investigated by a trained supervisor. The investigation may include interviews of witnesses and officers; a review of Department records, policies, and procedures; an inspection of medical records, photographs and other evidence; and legal analysis.
                            </Typography>
                            <Typography className={Styles.paraStyle}>
                                The investigation of a personnel complaint and subsequent actions (including the administration of discipline when warranted) are involved and time consuming processes. The amount of time they take depends on a number of factors and generally varies from several months to about a year. Once the process has been completed, you will be notified of the outcome in writing if you have provided your mailing address.
                            </Typography>
                            <Typography className={Styles.paraStyle}>
                                Mediation Program and Alternative Complaint Resolution Process
                                Some complaints are eligible to be resolved through Mediation or the Alternative Complaint Resolution (ACR) process rather than the traditional, fact-finding investigation. These alternative complaint procedures, which take place in an informal setting, were developed to resolve complaints through dialogue and with the intent to strengthen relations between the community and the LAPD.
                            </Typography>
                            <Typography className={Styles.paraStyle}>
                                Mediation is a form of confidential dispute resolution in which complainants and LAPD employees meet face-to-face with impartial mediators to discuss the alleged misconduct. The mediators are trained volunteers from the City Attorney&rsquo;s Office, and have no power to influence the outcome of the mediation.
                            </Typography>
                            <Typography className={Styles.paraStyle}>
                                Mediation is a form of confidential dispute resolution in which complainants and LAPD employees meet face-to-face with impartial mediators to discuss the alleged misconduct. The mediators are trained volunteers from the City Attorney&rsquo;s Office, and have no power to influence the outcome of the mediation.
                            </Typography>
                            <Typography className={Styles.paraStyle}>
                                Similarly, for the ACR process, the parties meet to resolve the complaint through a discussion. The conversation is facilitated by an LAPD supervisor, and the ACR process is also confidential.
                            </Typography>
                            <Typography sx={{ fontSize: '18px' }}>
                                If your complaint is determined to be appropriate for mediation or the ACR process, you will be notified. However, your participation would be completely voluntary.
                            </Typography>
                            <Typography className={Styles.paraStyle}>
                                -You may file an online complaint <Link href='https://docs.google.com/forms/d/e/1FAIpQLSfWo1bwv7nLh3M4vpfObqBrvfUAPFeFcgIKzd0SU6dzxcVswA/viewform' className={Styles.linkHover}>here</Link>
                            </Typography>

                            <Typography className={Styles.paraStyle} sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                <span className={Styles.hyphen}></span>
                                <Link href="javascript:;" className={Styles.linkHover} style={{ marginLeft: '30px' }} onClick={() => setToggle(false)}>Read Less</Link>
                            </Typography>

                        </Box>



                    </Grid>
                </Grid>

            </Box>
            </Container>



        </>
    )
}

export default Reportemployee