"use client"
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React from 'react'
import Link from 'next/link'
import styles from './technical.module.css'
import global from "../global.module.css"
import { Container, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import LaunchIcon from '@mui/icons-material/Launch'


const InsideLap = () => {

    const tab = useMediaQuery('(max-width:768px)');
    const mobile = useMediaQuery('(max-width:576px)');

    return (
        <>
            <Box className={styles.bg}>
                <Container>
                    <Grid container className={styles.blockspace}>
                        <Grid item xs={12} sm={12} md={10} lg={8} xl={8} className={global.fadeInUp}>
                            <Typography sx={{ fontSize: mobile ? "38px" : tab ? "40px" : "62px", lineHeight: "1.1", fontWeight: "bold" }}>Technical Investigation Division</Typography>

                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Container>
                <Grid container>
                    <Grid item xs={12} sm={11} md={10} lg={8}>
                        <Typography style={{ fontSize: '18px', marginTop: '60px' }} >Rank: Police Administrator I</Typography>
                        <Typography style={{ fontSize: '18px' }} >Division: Technical Investigation Division</Typography>
                        <Typography style={{ fontSize: '18px' }} >Email: N1782@lapd.online</Typography>
                        <Typography className={styles.aboutul} style={{ display: 'flex', alignItems: 'center', marginTop: '40px' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Link href="https://www.lapdonline.org/command-staff/garcia-tatiana/" target="_blank">Tatiana A. Garcia</Link></Typography>

                    </Grid>
                </Grid>

                <Box className={global.fadeInUp}>
                    <Grid container sx={{ marginTop: "60px", marginBottom: '30px' }} columnSpacing={4} rowSpacing={4}>


                        <Grid item xs={12} sm={6} lg={6} >

                            <Box sx={{ backgroundColor: "#ebf4f7", padding: "30px 0px 30px 50px" }}>
                                <ul className={styles.aboutul}>
                                    <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Typography><Link href="https://www.lapdonline.org/electronics-unit/" target="_blank">Electronics Unit</Link></Typography></li>
                                    <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Typography><Link href="https://www.lapdonline.org/latent-prints-unit/" target="_blank">Latent Prints Unit</Link></Typography></li>
                                    <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Typography><Link href="https://www.lapdonline.org/photography-unit/" target="_blank">Photography Unit</Link></Typography></li>
                                    <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Typography><Link href="https://www.lapdonline.org/technical-investigation-division-history/" target="_blank">Technical Investigation Division History</Link></Typography></li>
                                    <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Typography><Link href="https://www.lapdonline.org/office-of-the-chief-of-police/office-of-special-operations/detective-bureau/detective-services-group/technical-investigation-division-tid/" target="_blank">Technical Investigation Division</Link></Typography></li>
                                    <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Typography><Link href="https://www.lapdonline.org/polygraph-unit/" target="_blank">Polygraph Unit</Link></Typography></li>
                                    <li style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ marginRight: '10px' }} /><Typography><Link href="https://www.lapdonline.org/technical-investigation-division/quality-assurance-unit/" target="_blank">Quality Assurance Unit</Link></Typography></li>
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