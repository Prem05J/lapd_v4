'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './organization.module.css'
import pdf from '../../../public/pdf.png'
import pdf1 from '../../../public/Icons/icon-pdf-white.svg'
import global from "../global.module.css"
import Typography from '@mui/material/Typography'
import LaunchIcon from '@mui/icons-material/Launch';
import { Container } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'


const OrganizationChat = () => {

    const mobile = useMediaQuery('(max-width: 576px)');


    return (
        <>
            {/* 1st block */}
            <Box className={styles.bg}>
                <Container className={global.fadeInUp}>
                <Grid container className={styles.blockspace}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography sx={{fontSize: mobile ? "35px" : "62px",fontWeight:"bold"}}>LAPD Organization</Typography>

                    </Grid>
                </Grid>
                </Container>
            </Box>
            {/* 2nd block */}


            <Container>



            {/*====================================== lg & md view ================================================*/}

            <Box  sx={{marginTop:"30px"}}>
                <Grid container className={global.fadeInUp} columnSpacing={5} rowSpacing={5}>

                    {/*====================================== Left side ================================================*/}

                    <Grid item sm={6} md={6} lg={6}>

                        <Box className={styles.linkbox} sx={{ marginTop: '30px', marginBottom: '30px' }}>
                            <h2>Goals, Command Staff, Core Values, Org Chart</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="https://lapdonlinestrgeacc.blob.core.usgovcloudapi.net/lapdonlinemedia/2021/12/Strategic-Plan-2021-to-2023.pdf" target="_blank" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Chief&lsquo;s Goals</Typography></Link></li>
                                <li><Link href="/office-of-the-chief-of-police/" style={{ display: 'flex', alignItems: 'center' }}><Typography>Office of the Chief of Police</Typography></Link></li>
                                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Typography>LAPD Command Staff</Typography></Link></li>
                                <li><Link href="/lapd-organization-chart/" style={{ display: 'flex', alignItems: 'center' }}><Typography>LAPD Organization Chart</Typography></Link></li>
                                <li><Link href="/our-motto-mission-statement-core-values/" style={{ display: 'flex', alignItems: 'center' }}><Typography>Motto Mission Statement & Core Values</Typography></Link></li>
                                <li><Link href="/end-of-watch-broadcast-parker-center-tuesday-january-15-2013/" style={{ display: 'flex', alignItems: 'center' }}><Typography>End of Watch Broadcast Parker Center</Typography></Link></li>
                             </ul>
                        </Box>



                    </Grid>


                </Grid>
            </Box>


            </Container>

        </>
    )
}

export default OrganizationChat