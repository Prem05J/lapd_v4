'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React from 'react'
import Link from 'next/link'
import styles from './fire.module.css'
import LaunchIcon from '@mui/icons-material/Launch';
import { Container } from '@mui/material'

const page = () => {
    return (
        <>
            <Box className={styles.bg}>
                <Container>
                <Grid container>
                    <Grid item xs={11} sm={10} md={7} lg={8}>
                        <h4 className={styles.h4size}>Fireworks complaints are accepted within the city limits of Los Angeles only. Incidents occuring in other areas should be reported to the law enforcement agency for that area. LAPD will not forward complaints to other agencies.</h4>
                        <h1 className={styles.h1size}>Fireworks Complaints</h1>
                        <Box sx={{ display: 'flex', alignItems: 'center',marginTop:"20px" }}>
                            <LaunchIcon sx={{ color: '#fff' }} />     <Link href="#" className={styles.insidelnk}>To make complaints, please click here.</Link>
                        </Box>
                    </Grid>
                </Grid>
                </Container>
            </Box>

            <Container>
            <Box>
                <Grid container sx={{marginTop:"50px"}}>
                    <Grid item xs={10} sm={10} md={10} lg={9}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <LaunchIcon sx={{ color: '#000000' }} /><Link href="#" className={styles.lnk}><h1 className={styles.h1size}>My Safe: LA Fireworks</h1> </Link>
                        </Box>
                        <Box>
                            <Grid container sx={{marginTop:"50px"}}>
                                <Grid item xs={12} sm={12} >
                                    <iframe style={{ marginBottom: '30px' }}  src="https://www.youtube.com/embed/Qabu5BZxBjM?si=cZie51eM18vASDRe" title="YouTube video player" className={styles.you} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

                                </Grid>

                            </Grid>
                            <Grid container>
                                <Grid item xs={12} sm={12}  >
                                    <iframe style={{ marginBottom: '30px' }} src="https://www.youtube.com/embed/54ldN1e2gkM?si=-26it_ytK5FgWHUT" title="YouTube video player" className={styles.you} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

                                </Grid>

                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            </Container>
        </>
    )
}

export default page