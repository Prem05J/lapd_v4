'use client'
import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LaunchIcon from '@mui/icons-material/Launch';
import useMediaQuery from '@mui/material/useMediaQuery'
import Link from 'next/link';
import styles from "./detectivesupport.module.css";
import global from "../../../../global.module.css"
import { Container } from '@mui/material'

const DetectiveSupport = () => {

    const mobile = useMediaQuery('(max-width: 576px)');

    return (

        <>
            <Box sx={{ display: 'flex', padding: '32px 5%', flexDirection: 'column', background: '#0f212b' }}>
                <Container>
                    <Grid container>
                        <Grid item lg={7}>
                            <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 20px', fontSize: mobile ? '30px' : '62px', fontWeight: '700', lineHeight: '1.1', letterSpacing: '-1.15px', }}>Detective Support and Vice Division</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Container>
                <Box className={global.fadeInUp} sx={{ paddingTop: '5%' }}>
                    <Box>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0px 0px 20px 0px' }}>
                            <li><Typography className={styles.typograpy_list}>100 West First Street</Typography></li>
                            <li><Typography className={styles.typograpy_list}>Los Angeles, CA 90012</Typography></li>
                            <li><Typography className={styles.typograpy_list}>213-486-0150</Typography></li>
                        </ul>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12} lg={8} xl={5}>
                                <Typography className={styles.para_style} sx={{ margin: '15px 0px 30px 0px' }}>
                                    Detective Support and Vice Division is composed of the following sections and units:
                                </Typography>
                                <Typography className={styles.para_style}>
                                    <Link href='https://www.lapdonline.org/police-commission/function-and-role-of-the-board-of-police-commissioners/' className={styles.anchor_link}>Detective Services Section</Link>
                                </Typography>
                                <Typography className={styles.para_style}>
                                    District Attorney Liaison Unit (213) 485-4216
                                </Typography>
                                <Typography className={styles.para_style}>
                                    City Attorney Liaison Unit (213) 978-8061
                                </Typography>
                                <Typography className={styles.para_style}>
                                    Traffic Court Liaison Unit (213) 485-3175
                                </Typography>
                                <Typography className={styles.para_style}>
                                    Court On-Call (213) 486-0987
                                </Typography>
                                <Typography className={styles.para_style}>
                                    Officer Check-In/Out Center (213) 485-4201
                                </Typography>


                                <Typography className={styles.para_style} sx={{ marginTop: '30px' }}>
                                    <u>Crisis Response Support Section</u>
                                </Typography>
                                <Typography className={styles.para_style}>
                                    Threat Management Unit (213) 996-1370
                                </Typography>
                                <Typography className={styles.para_style}>
                                    Mental Evaluation Unit (213) 486-0910
                                </Typography>
                                <Typography className={styles.para_style}>
                                    System-wide Mental Assessment Response Team (213) 486-0910
                                </Typography>
                                <Typography className={styles.para_style} sx={{ marginBottom: '30px' }}>
                                    Case Assessment Management Program (213) 486-0910
                                </Typography>

                                <Typography className={styles.para_style}>
                                    <Link href='' className={styles.anchor_link}>Special Enforcement Section</Link>
                                </Typography>
                                <Typography className={styles.para_style} sx={{ marginBottom: '30px' }}>
                                    Field Evaluators (213) 486-0910
                                </Typography>


                                <Typography className={styles.para_style}>
                                    <Link href='' className={styles.anchor_link}>Exploitation & Investigative Section</Link>
                                </Typography>
                                <Typography className={styles.para_style} sx={{ marginBottom: '30px' }}>
                                    Missing Persons Unit (213) 996-1800
                                </Typography>


                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default DetectiveSupport