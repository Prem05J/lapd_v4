'use client'
import React from 'react'
import styles from "./mission.module.css"
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import Image from 'next/image'
import topImage1 from "../../../public/Images/lapd_topimage1.jpg"
import topImage2 from "../../../public/Images/lapd_topimage2.jpg"
import Link from 'next/link'


const MissionVision = () => {

    const mobile = useMediaQuery('(max-width: 576px)');

    return (
        <div>
            <Box sx={{ display: 'flex', padding: '32px 5%', flexDirection: 'column', background: '#0f212b' }}>
                <Grid container>
                    <Grid item xs={11} sm={10} lg={6} >
                        <Typography className={styles.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 20px', fontSize: mobile ? '34px' : '3vw', fontWeight: '700' }}>Our Commitment to the  People of Los Angeles</Typography>
                    </Grid>

                </Grid>
            </Box>


            <Grid container sx={{ padding: "50px 5% 0% 5%" }}>
                <Grid item xs={12} sm={9} lg={5}>
                    <Box>
                        <Typography sx={{ fontSize: "34px", fontWeight: "700" }}>
                            The Los Angeles Police Department is committed to serving the community while protecting the rights of all persons.
                        </Typography>
                        <Typography sx={{ fontSize: "18px", marginTop: "30px" }}>
                            Consistent with this commitment, the Department’s Vision, Mission and Core Values, in concert with the Law Enforcement Code of Ethics and the Department’s Management Principles, reflect the guiding philosophy of the Los Angeles Police Department.
                        </Typography>
                        <Box sx={{ backgroundColor: "#ebf4f7", padding: "5% 5% 5% 5%", marginTop: "30px" }}>
                            <Typography sx={{ fontStyle: "italic", fontSize: "18px" }}>It is the vision of the Los Angeles Police Department to, as closely as possible, achieve a City free from crime and public disorder.</Typography>
                        </Box>
                        <ul className={styles.listItem}>
                            <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>LAPD Badge Description</Link></li>
                            <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Motto</Link></li>
                            <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Mission Statement</Link></li>
                            <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Core Values</Link></li>
                            <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Management Principles</Link></li>
                        </ul>
                    </Box>
                </Grid>


            </Grid>

            <Box sx={{ display: "flex", marginTop: "60px" }} >
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} className={styles.bag}>
                        <Image className={styles.lapdImage} src={topImage1} alt="top-image1" />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                        <Image className={styles.lapdImage} src={topImage2} alt="top-image1" />
                    </Grid>
                </Grid>
            </Box>

            <Grid container sx={{ padding: "50px 5% 0% 5%" }}>
                <Grid item xs={12} sm={9} lg={5}>
                    <Box>
                        <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>Our Mission Statement</Typography>
                        <Box sx={{ backgroundColor: "#ebf4f7", padding: "5% 5% 5% 5%", marginTop: "30px" }}>
                            <Typography sx={{ fontSize: "18px" }}>It is the mission of the Los Angeles Police Department to safeguard the lives and property of the people we serve, to reduce the incidence and fear of crime, and to enhance public safety while working with the diverse communities to improve their quality of life.</Typography>
                            <br />
                            <Typography sx={{ fontSize: "18px" }}>
                                Our mandate is to do so with honor and integrity, while at all times conducting ourselves with the highest ethical standards to maintain public confidence.
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ marginTop: "50px" }}>
                        <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>Our Guiding Philosophy</Typography>
                        <Box sx={{ backgroundColor: "#ebf4f7", padding: "5% 5% 5% 5%", marginTop: "30px" }}>
                            <Typography sx={{ fontSize: "18px" }}>Learn about the things guide and inspire our actions within the LAPD.</Typography>


                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid container columnSpacing={5} rowSpacing={5} sx={{ padding: "50px 5% 0% 5%" }}>
                <Grid item xs={12} sm={9} lg={5}>
                    <Box sx={{ backgroundColor: "#ebf4f7", padding: "5% 5% 5% 5%", marginTop: "30px" }}>
                        <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>I Want to Know</Typography>
                        <ul className={styles.listItem}>
                            <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>How do I find information for my academic research project?</Link></li>
                            <li><Link href="#" style={{ display: 'flex', alignItems: 'center' }}>Where can I find information on the history of the LAPD?</Link></li>

                        </ul>

                    </Box>
                </Grid>

                <Grid item xs={12} sm={9} lg={5}>
                    <Box className={styles.factslist} sx={{ backgroundColor: "#ebf4f7", padding: "5% 5% 5% 5%", marginTop: "30px" }}>
                        <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>Interesting Facts</Typography>
                        <Box>
                      <Box sx={{marginTop:"20px"}}>
                            <li> <Typography sx={{fontSize:"18px"}}>The City of Los Angeles is 468 square miles</Typography></li>
                            <li><Typography sx={{fontSize:"18px"}}>The LAPD was established in 1869</Typography></li>
                            <li><Typography sx={{fontSize:"18px"}}>The LAPD badge, motto, uniform and acronym are the Intellectual Property of the City of Los Angeles</Typography></li>
                            <li><Typography sx={{fontSize:"18px"}}> Venice Beach is the second largest tourist attraction in California, after Disneyland.</Typography></li>
                            <li><Typography sx={{fontSize:"18px"}}> The Los Angeles Police Academy was used for the 1932 Olympic Games pistol and rifle competitions </Typography></li>
                            <li><Typography sx={{fontSize:"18px"}}> The Los Angeles Police Academy remains a favorite of filmmakers, whose Academy Arches are recognizable around the world </Typography></li>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

            </Grid>





        </div>
    )
}

export default MissionVision
