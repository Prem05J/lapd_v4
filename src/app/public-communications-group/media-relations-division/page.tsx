'use client'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import Grid from '@mui/material/Grid';
import Styles from './style.module.css'
import global from "../../global.module.css"
import { Container } from '@mui/material';


const MediaRelationsDivision = () => {
    const mobile = useMediaQuery('(max-width: 576px)');
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <Box sx={{ display: 'flex', padding: '32px 0px', flexDirection: 'column', background: '#0f212b' }}>
                <Container>
                <Typography className={global.fadeInUp} sx={{ marginBottom: '5px', color: '#fff', fontSize: mobile ? '18px' : '22px', fontStyle: 'italic' }}>&quot; valor, preservation of life, extreme courage &quot;</Typography>
                <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 20px', fontSize: mobile ? '30px' : '62px', fontWeight: '700' }}>Media Relations Division</Typography>
                </Container>
                </Box>

            <Container>
            <Grid container className={global.fadeInUp}>
                <Grid item xs={12} sm={12} md={10}  xl={8} sx={{ paddingTop: '5%' }}>
                    <Box>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0', marginBottom: '0' }}>
                            <li style={{ margin: '3px 0px' }}><Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>Media Relations Division</Typography></li>
                            <li style={{ margin: '3px 0px' }}><Typography sx={{ fontSize: '18px' }}>100 West First St</Typography></li>
                            <li style={{ margin: '3px 0px' }}><Typography sx={{ fontSize: '18px' }}>Room 257-B</Typography></li>
                            <li style={{ margin: '3px 0px' }}><Typography sx={{ fontSize: '18px' }}>Los Angeles, CA 90012</Typography></li>
                            <li style={{ margin: '3px 0px' }}><Link href='tel:1-213-486-5910' style={{ textDecoration: 'none' }}><Typography sx={{ color: '#e73f15', fontSize: '18px', '&:hover': { color: '#798c96' } }}>213-486-5910</Typography></Link></li>
                        </ul>
                    </Box>
                    <Box sx={{ margin: '30px 0px' }}>
                        <Typography sx={{  fontSize: '18px' }}>
                            The Media Relations Division (MRD) of the Los Angeles Police Department fosters cooperation and mutual respect between the Department and the news media. The members of MRD are dedicated and highly trained individuals who understand the importance of using the media as a valuable resource to keep the public informed as to the Department&apos;s activities. In this regard, they realize that their role is to assist members of the media in completing the task of gathering information and reporting on news events impacting residents and visitors to the City of Los Angeles. The public&apos;s perception and image of the Department is largely dependent on the hard work of MRD.
                        </Typography>
                    </Box>
                    <Box>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0', marginBottom: '0' }}>
                            <li style={{ margin: '3px 0px' }}>
                                <Link href='#' style={{ textDecoration: 'none' }}><Typography sx={{ color: '#e73f15', fontSize: '18px', '&:hover': { color: '#798c96' } }}>Media Relations Handbook</Typography></Link>
                            </li>
                            <li style={{ margin: '3px 0px' }}>
                                <Link href='#' style={{ textDecoration: 'none' }}><Typography sx={{ color: '#e73f15', fontSize: '18px', '&:hover': { color: '#798c96' } }}>Press Pass Policy</Typography></Link>
                            </li>
                            <li style={{ margin: '3px 0px' }}>
                                <Link href='#' style={{ textDecoration: 'none' }}><Typography sx={{ color: '#e73f15', fontSize: '18px', '&:hover': { color: '#798c96' } }}>News Room</Typography></Link>
                            </li>
                        </ul>
                    </Box>


                    {/* ----------- Read More Button ------------  */}
                    <Box sx={{ display: toggle ? 'none' : 'flex', margin: '30px 0px', alignItems: 'center' }} onClick={() => setToggle(true)}>
                        <span style={{ width: '17px', height: '2px', background: '#000', position: 'absolute' }}></span>

                        <Link href='javascript:;' style={{ textDecoration: 'none', marginLeft: '25px' }}>
                            <Typography sx={{ color: '#e73f15', fontSize: '18px', '&:hover': { color: '#798c96' } }}>Read More
                            </Typography>
                        </Link>
                    </Box>

                    {/* ----------- Read More Content ------------  */}
                    <div>
                        <Box className={`${toggle ? Styles.Visible : Styles.Invisible} ${Styles.scale_up_left}`}>

                            <Box sx={{ padding: '43px 44px 43px 40px', background: '#ebf4f7', margin: '30px 0px' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '30px' }}>History of MRD</Typography>
                                <Typography sx={{ marginBottom: '30px', fontSize: '18px', lineHeight: '1.55' }}>
                                    Prior to the late 1950s, the Los Angeles Police Department had no central location from which members of the media could obtain information regarding the various newsworthy events in which the Department had played a part. As a result, individual members of the media and the Department were often parties to news gathering endeavors that resulted in hastily assembled, disjointed and often contradictory stories disseminated to the public.
                                </Typography>
                                <Typography sx={{ marginBottom: '30px', fontSize: '18px', lineHeight: '1.55' }}>
                                    Following a series of negative events involving the Department, which were reported by the media within traditional and accepted journalistic practices, a need was identified that involved providing the media with easy access to accurate information relative to Department activities. This need was acted upon and the eventual creation of the Media Relations Division (MRD) was the result.
                                </Typography>
                                <Typography sx={{ marginBottom: '30px', fontSize: '18px', lineHeight: '1.55' }}>
                                    In its present form, MRD fosters cooperation and mutual respect between the Department and the news media. The Police Department actively pursues, cultivates, and encourages an open and responsive relationship with the media; MRS is the vehicle by which it does so. As a world-famous capital, Los Angeles generates news with far-reaching interest. The resultant inquiries by worldwide media for specialized information and assistance concerning specific news assignments are routed to MRD for action. Certain other requests for assistance by motion picture/television writers, directors, producers, etc. may be handled by MRS personnel.
                                </Typography>
                            </Box>

                            <Box sx={{ margin: '60px 0px' }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '20px' }}>Facts About MRD</Typography>
                                <ul style={{ paddingLeft: '0', listStyleType: 'none' }}>
                                    <li className={Styles.bulletPoint}>
                                        <Typography sx={{ marginBottom: '10px', fontSize: '18px', lineHeight: '1.55', marginLeft: '20px' }}>
                                            MRD is staffed from 5:00 a.m. until 11:00 pm. Either the Officer in Charge or his or her assistant is available on a 24-hour daily basis to respond to serious major incidents to assist field commanders with the press corps.
                                        </Typography>
                                    </li>
                                    <li className={Styles.bulletPoint}>
                                        <Typography sx={{ marginBottom: '10px', fontSize: '18px', lineHeight: '1.55', marginLeft: '20px' }}>
                                            Liaison with all major media outlets regardless of language, cultural, or lifestyle orientation/affiliation is maintained by MRD.
                                        </Typography>
                                    </li>
                                    <li className={Styles.bulletPoint}>
                                        <Typography sx={{ marginBottom: '10px', fontSize: '18px', lineHeight: '1.55',  marginLeft: '20px' }}>
                                            News releases that include telephone contacts within the Department are issued by MRD to facilitate the dissemination of news citywide.
                                        </Typography>
                                    </li>
                                    <li className={Styles.bulletPoint}>
                                        <Typography sx={{ marginBottom: '10px', fontSize: '18px', lineHeight: '1.55',  marginLeft: '20px' }}>
                                            Press conferences are coordinated on a Department-wide basis.
                                        </Typography>
                                    </li>
                                    <li className={Styles.bulletPoint}>
                                        <Typography sx={{ marginBottom: '10px', fontSize: '18px', lineHeight: '1.55',  marginLeft: '20px' }}>
                                            MRD personnel are available to assist members of the public with questions about the Department if the information is not available on the web site.
                                        </Typography>
                                    </li>
                                    <li className={Styles.bulletPoint}>
                                        <Typography sx={{ marginBottom: '10px', fontSize: '18px', lineHeight: '1.55',  marginLeft: '20px' }}>
                                            Personnel from MRD can facilitate media interview access to Department employees and/or assist with gaining entry to police stations, the headquarters building or other locations housing police personnel and equipment.
                                        </Typography>
                                    </li>
                                    <li className={Styles.bulletPoint}>
                                        <Typography sx={{ marginBottom: '10px', fontSize: '18px', lineHeight: '1.55',  marginLeft: '20px' }}>
                                            Staffing for the City&apos;s Emergency Operations Center, Public Information Officer position is provided by MRD.
                                        </Typography>
                                    </li>
                                    <li className={Styles.bulletPoint}>
                                        <Typography sx={{ marginBottom: '10px', fontSize: '18px', lineHeight: '1.55',  marginLeft: '20px' }}>
                                            Providing information about how to obtain media passes which permit entry across police lines to report the news is a function of MRD.
                                        </Typography>
                                    </li>
                                    <li className={Styles.bulletPoint}>
                                        <Typography sx={{ marginBottom: '10px', fontSize: '18px', lineHeight: '1.55',  marginLeft: '20px' }}>
                                            MRD deploys officers who are proficient in foreign languages to assist the media and members of the Department or the public.
                                        </Typography>
                                    </li>
                                    <li className={Styles.bulletPoint}>
                                        <Typography sx={{ marginBottom: '10px', fontSize: '18px', lineHeight: '1.55',  marginLeft: '20px' }}>
                                            Complaints received from any Department source concerning the media, such as interfering with an investigation or destruction of evidence through contamination of a crime scene, are handled by MRD.
                                        </Typography>
                                    </li>
                                    <li className={Styles.bulletPoint}>
                                        <Typography sx={{ marginBottom: '10px', fontSize: '18px', lineHeight: '1.55',  marginLeft: '20px' }}>
                                            MRD provides local electronic media outlets with specialized material of general interest to the public for use during highly competitive “sweeps weeks” in which comparative determinations of the market share of the viewing public are ascertained.
                                        </Typography>
                                    </li>
                                    <li className={Styles.bulletPoint}>
                                        <Typography sx={{ marginBottom: '10px', fontSize: '18px', lineHeight: '1.55',  marginLeft: '20px' }}>
                                            Semi-annual meetings between the media and the Chief of Police are coordinated by MRD. The purpose of these meetings is to discuss problems in the spirit of mutual cooperation.
                                        </Typography>
                                    </li>
                                    <li className={Styles.bulletPoint}>
                                        <Typography sx={{ marginBottom: '10px', fontSize: '18px', lineHeight: '1.55',  marginLeft: '20px' }}>
                                            MRD provides training to sergeant, detective, and watch commander in-service schools on media relations. Specialized training for the media is available by request as is roll call training in media relations for Department personnel.
                                        </Typography>
                                    </li>

                                </ul>

                                <Box sx={{ display: 'flex', margin: '30px 0px', alignItems: 'center' }}>
                                    <span style={{ width: '17px', height: '2px', background: '#000', position: 'absolute' }}></span>
                                    <Link href='javascript:;' style={{ textDecoration: 'none', marginLeft: '25px' }}>
                                        <Typography sx={{ color: '#e73f15', fontSize: '18px', '&:hover': { color: '#798c96' } }} onClick={() => setToggle(false)}>Read Less
                                        </Typography>
                                    </Link>
                                </Box>

                            </Box>

                        </Box>
                        

                    </div>
                </Grid>
            </Grid>
            </Container>



        </>
    )
}

export default MediaRelationsDivision