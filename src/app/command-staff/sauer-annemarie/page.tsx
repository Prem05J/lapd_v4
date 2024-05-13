'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './sauer.module.css'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Button, Container } from '@mui/material'
import { Breadcrumbs } from '@mui/material';
import Image from 'next/image'
import global from "../../global.module.css"
import image1 from '../../../../public/Images/detective_2.jpg'
import { Style } from '@mui/icons-material'

const California = () => {

    const tab = useMediaQuery('(max-width:768px)');
    const mob = useMediaQuery('(max-width:576px)');


    const [toggle, setToggle] = useState(false)
    return (
        <>

            {/* 1st block */}
            <Container>
                <Grid container>
                    <Grid item lg={12}>
                        <Breadcrumbs aria-label="breadcrumb" className={styles.breadtext} sx={{ padding: '10px 0px', zmarginTop: '30px', borderBottom: '1px solid #d0dade' }}>
                            <Typography sx={{ color: '#798c96' }}>
                                Your LAPD
                            </Typography>

                            <Typography sx={{ color: '#798c96' }}><Link href="https://www.lapdonline.org/lapd-command-staff">LAPD Command Staff</Link></Typography>
                        </Breadcrumbs>
                    </Grid>
                </Grid>


                <Box sx={{ marginBottom: '30px' }}>
                    <Typography sx={{ marginTop: '60px', fontSize: tab ? '20px' : '22px', color: '#0f212b' }}>LAPD Command Staff</Typography>
                    <Typography sx={{ fontSize: mob ? '39px' : tab ? '49px' : '62px', color: '#0f212b', fontWeight: 'bold', marginBottom: '72px' }}>Annemarie Sauer</Typography>


                    <Grid container sx={{ paddingBottom: '60px', borderBottom: '1px solid #d0dade' }}>
                        <Grid item xs={12} sm={3} md={3} lg={3} className={styles.textstyl} >
                            <Image src={image1} alt="" style={{ height: 'auto', maxWidth: '100%', marginBottom: mob ? '30px' : '0px' }} />
                        </Grid>

                        <Grid item xs={12} sm={9} md={9} lg={9} className={styles.lnkstyl} >
                            <Box sx={{ marginLeft: mob ? '0px' : '100px' }}>
                                <Typography style={{ fontSize: '18px', color: '#0f212b' }} ><strong>Rank:</strong> Police Administrator III</Typography>
                                <Typography style={{ fontSize: '18px', color: '#0f212b' }} ><strong>Bureau:</strong> Administrative Services Bureau</Typography>
                                <Typography style={{ fontSize: '18px', color: '#0f212b', marginBottom: ' 30px' }} ><strong>Email:</strong> <Link href="mailto:n5161@lapd.online">n5161@lapd.online</Link></Typography>

                                <Typography style={{ fontSize: mob ? '22px' : tab ? '23px' : '26px', fontWeight: 'bold', marginTop: '30px', color: '#0f212b' }} >Bio</Typography>
                                <Typography style={{ fontSize: '18px', marginTop: '30px', color: '#0f212b' }} ><strong>Police Administrator III Annemarie Sauer</strong> was born and raised in Los Angeles, California. She has worked for the City of Los Angeles since 1998. Prior to promoting to the LAPD, she spent most of her career working for the Office of the City Administrative Officer where she was responsible for the development, administration and oversight of various City budgets, including the Police, Fire and Housing departments. She also spent four years working for the Office of the Chief Legislative Analyst as a Legislative Analyst for the Los Angeles City Council where she staffed the Public Safety and Housing, Community and Economic Development committees.
                                </Typography>

                                <Typography style={{ fontSize: '18px', marginTop: '30px', color: '#0f212b' }} >
                                    Ms. Sauer was appointed to the Los Angeles Police Department in October 2015 as the Commanding Officer of Personnel Division. In July 2016, Ms. Sauer promoted to the rank of Police Administrator II and served as the Department’s Chief Financial Officer as the Commanding Officer of Fiscal Operations Division. With her promotion to Police Administrator III, Ms. Sauer serves as the Commanding Officer of Administrative Services Bureau where she is responsible for the oversight of Support Services Group, Fiscal Group, and the following divisions: Communications; Custody Services; Evidence and Property Management; Facilities Management; Motor Transport; Personal Division; and Records and Identification. She comes from a long line of civil servants, including both of her grandfathers, her father, and her husband, among others, who with Ms. Sauer collectively have provided more than 125 years of public service to the City of Angels.
                                </Typography>
                                <Typography style={{ fontSize: '18px', marginTop: '30px', color: '#0f212b' }} >
                                    Ms. Sauer earned her Bachelor’s Degree in Law and Society from UC Santa Barbara, as well as a Master’s Degree in Public Administration from California State University, Long Beach. She and her husband have two daughters who keep them very busy with all of their activities.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                {/* 3rd block */}
                <Grid container rowSpacing={3} columnSpacing={3} style={{padding: '40px 0px 40px 0px'}}>

                    <Grid item xs={12} sm={6} md={7} lg={7}>
                        <Box sx={{ backgroundColor: '#ebf4f7', padding: '45px' }}>
                            <Typography sx={{ fontSize: mob ? '22px' : tab ? '23px' : '26px', fontWeight: 'bold', color: '#0f212b' }}>Meet Your LAPD</Typography>
                            <Typography sx={{ fontSize: '18px', color: '#0f212b', margin: '20px 0px 20px 0px' }}>It is our mission to protect and to serve the people of the City of Los Angeles. It is our vision to achieve a City free from crime and public disorder.</Typography>
                            <Link href="https://www.lapdonline.org/lapd-command-staff/"> <button  className={global.contactBtn}>
                                        <Typography sx={{ fontWeight: "bold",color:"#fff" }}>TAKE A PEEK INSIDE YOUR LAPD</Typography>
                                    </button></Link>

                        </Box>

                    </Grid>


                    <Grid item xs={12} sm={6} md={5} lg={5}>
                        <Box sx={{ backgroundColor: '#ebf4f7', padding: '45px' }} className={styles.textstyl}>

                            <Typography sx={{ fontSize: mob ? '22px' : tab ? '23px' : '26px', fontWeight: 'bold', color: '#0f212b' }}>Helpful Links
                            </Typography>
                            <Typography sx={{marginTop: '10px'}}><Link href="https://www.lapdonline.org/lapd-organization-chart/">LAPD Organization Chart</Link></Typography>
                            <Typography sx={{marginTop: '10px'}}><Link href="https://www.lapdonline.org/training-division/join-the-team/rank-structure/">What is the rank structure of the LAPD?</Link></Typography>


                        </Box>
                    </Grid>

                </Grid>






            </Container>

            {/* 2nd block */}

        </>
    )
}

export default California