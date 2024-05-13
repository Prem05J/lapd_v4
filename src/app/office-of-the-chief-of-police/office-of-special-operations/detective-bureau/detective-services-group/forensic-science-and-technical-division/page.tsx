"use client"
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './forensic.module.css'
import global from "../../../../../global.module.css"
import { Container, Typography, useMediaQuery } from '@mui/material'
import LaunchIcon from '@mui/icons-material/Launch'
import image1 from '../../../../../../../public/Images/Gabriel-Gnanapragasam.png'
import image2 from '../../../../../../../public/Images/Kristina-Takeshita.png'

const InsideLap = () => {
    const tab = useMediaQuery('(max-width:768px)');
    const mob = useMediaQuery('(max-width:576px)');
    return (
        <>
            <Box className={styles.bg}>
                <Container>
                    <Grid container className={styles.blockspace}>
                        <Grid item xs={12} sm={9} md={5} lg={9} className={global.fadeInUp}>
                            <Typography sx={{ fontSize: mob ? "38px" : tab ? "40px" : "62px", lineHeight: "1.1", fontWeight: "bold", marginBottom: '30px' }}>Forensic Science Division</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Container>
                <Box className={global.fadeInUp}>
                    <Grid container sx={{ marginTop: "60px" }} columnSpacing={5} rowSpacing={5}>
                        <Grid item xs={12} sm={5} md={5} xl={4}>
                            <Image src={image1} style={{ height: 'auto', maxWidth: '100%' }} alt='' />
                        </Grid>
                        <Grid item xs={12} sm={7} md={7}>
                            <Box sx={{ marginLeft: mob ? '0px' : tab ? '0px' : '100px'}}>                                 
                            <Typography sx={{ fontSize: '18px', color: '#0f212b' }}>
                                Rank: Police Administrator I
                            </Typography>
                            <Typography sx={{ fontSize: '18px', color: '#0f212b' }}>
                                Bureau/Division/Office: Forensic Science Division
                            </Typography>
                            <Typography sx={{ fontSize: '18px', color: '#0f212b', marginBottom: '30px' }}>
                                Email: N3367@lapd.online
                            </Typography>
                            <Typography sx={{ display: 'flex', fontSize: '18px', color: '#0f212b', marginBottom: '30px' }}>
                                <LaunchIcon sx={{ marginRight: '5px' }} /><Link href="https://www.lapdonline.org/command-staff/gnanapragasam-gabriel/" className={styles.innerLink1} target='_blank'>Gabriel Gnanapragasam</Link>
                            </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box className={global.fadeInUp}>
                    <Grid container sx={{ marginTop: "60px" }} columnSpacing={5} rowSpacing={5}>
                        <Grid item xs={12} sm={7} md={7}>
                            <Typography sx={{ fontSize: '18px', color: '#0f212b' }}>
                                Kristina Takeshita
                            </Typography>
                            <Typography sx={{ fontSize: '18px', color: '#0f212b' }}>
                                Rank: Chief Forensic Chemist II and Lab Director
                            </Typography>
                            <Typography sx={{ fontSize: '18px', color: '#0f212b' }}>
                                Bureau/Division/Office: Forensic Science Division
                            </Typography>
                            <Typography sx={{ fontSize: '18px', color: '#0f212b'}}>Email: v8485@lapd.online</Typography>
                        </Grid>
                        <Grid item xs={12} sm={5} md={5} xl={4}>
                            <Image src={image2} style={{ height: 'auto', maxWidth: '100%' }} alt='' />
                        </Grid>
                    </Grid>
                </Box>
                <Box className={global.fadeInUp}>
                    <Grid container sx={{ marginTop: "60px" }} columnSpacing={5} rowSpacing={5}>

                        <Grid item xs={12} sm={6}  md={6} lg={6}>
                            <Box sx={{ backgroundColor: "#ebf4f7", padding: "50px" }}>
                                <Typography sx={{ fontSize: mob ? '22px': tab ? '23px' :'26px', fontWeight: 'bold', color: '#0f212b' }}>Forensic Science Division</Typography>
                                <ul className={styles.aboutul}>
                                    <li><Typography sx={{display: 'flex'}}><LaunchIcon sx={{ color: 'black', marginRight: '10px'}} /><Link href="https://www.lapdonline.org/forensic-science-division-history/" target='_blank'>Forensic Science Division</Link></Typography></li>
                                    <li><Typography sx={{display: 'flex'}}><LaunchIcon sx={{ color: 'black', marginRight: '10px'}} /><Link href="https://www.lapdonline.org/about-the-fsd-criminalistics-laboratory/" target='_blank'>About the FSD Criminalistics Laboratory</Link></Typography></li>
                                    <li><Typography sx={{display: 'flex'}}><LaunchIcon sx={{ color: 'black', marginRight: '10px'}} /><Link href="https://www.lapdonline.org/field-investigation-unit/" target='_blank'>Field Investigation Unit</Link></Typography></li>
                                    <li><Typography sx={{display: 'flex'}}><LaunchIcon sx={{ color: 'black', marginRight: '10px'}} /><Link href="https://www.lapdonline.org/firearm-analysis-unit/" target='_blank'>Firearm Analysis Unit</Link></Typography></li>
                                    <li><Typography sx={{display: 'flex'}}><LaunchIcon sx={{ color: 'black', marginRight: '10px'}} /><Link href="https://www.lapdonline.org/narcotics-analysis-unit/" target='_blank'>Narcotics Analysis Unit</Link></Typography></li>
                                    <li><Typography sx={{display: 'flex'}}><LaunchIcon sx={{ color: 'black', marginRight: '10px'}} /><Link href="https://www.lapdonline.org/serology-dna-unit/" target='_blank'>Serology / DNA Unit</Link></Typography></li>
                                    <li><Typography sx={{display: 'flex'}}><LaunchIcon sx={{ color: 'black', marginRight: '10px'}} /><Link href="https://www.lapdonline.org/toxicology-unit/" target='_blank'>Toxicology Unit</Link></Typography></li>
                                    <li><Typography sx={{display: 'flex'}}><LaunchIcon sx={{ color: 'black', marginRight: '10px'}} /><Link href="https://www.lapdonline.org/trace-analysis-unit/" target='_blank'>Trace Analysis Unit</Link></Typography></li>
                                    <li><Typography sx={{display: 'flex'}}><LaunchIcon sx={{ color: 'black', marginRight: '10px'}} /><Link href="https://www.lapdonline.org/office-of-the-chief-of-police/office-of-special-operations/detective-bureau/detective-services-group/forensic-science-and-technical-division/quality-assurance-unit/" target='_blank'>Quality Assurance Unit</Link></Typography></li>

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