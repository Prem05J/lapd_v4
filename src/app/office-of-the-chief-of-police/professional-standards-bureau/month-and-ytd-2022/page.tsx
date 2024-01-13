"use client"
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './inside.module.css'
import pdf from "../../../../../public/Icons/pdf-svg-icon.svg"
import global from "../../../global.module.css"
import Container from '@mui/material/Container'

const InsideLap = () => {
    return (
        <>
            <Box className={styles.bg}>
                <Container>
                <Grid container className={styles.blockspace}>
                    <Grid item xs={12} sm={12} md={10} lg={9} xl={8} className={global.fadeInUp}>
                        <h1 className={styles.h1size}>Month and YTD 2023</h1>
                    </Grid>
                </Grid>
                </Container>
            </Box>

            <Container>
            <Box className={global.fadeInUp} sx={{ marginBottom: '60px' }}>
                <Grid container sx={{marginTop:"60px"}} columnSpacing={5} rowSpacing={5}>

                    <Grid item xs={12} sm={6} >
                        <Box sx={{backgroundColor:"#ebf4f7",padding:"25px"}}>
                            <h2>Month and YTD 2023</h2>
                            <ul className={styles.aboutul}>
                                <li><Link href="javascript:;"><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Month and YTD November 2023</Link></li>
                                <li><Link href="javascript:;"><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Month and YTD October 2023</Link></li>
                                <li><Link href="javascript:;"><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Month and YTD September 2023</Link></li>
                                <li><Link href="javascript:;"><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Month and YTD August 2023</Link></li>
                                <li><Link href="javascript:;"><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Month and YTD July 2023</Link></li>
                                <li><Link href="javascript:;"><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Month and YTD June 2023</Link></li>
                                <li><Link href="javascript:;"><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Month and YTD May 2023</Link></li>
                                <li><Link href="javascript:;"><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Month and YTD April 2023</Link></li>
                                <li><Link href="javascript:;"><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Month and YTD March 2023</Link></li>
                                <li><Link href="javascript:;"><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Month and YTD Feb 2023</Link></li>
                                <li><Link href="javascript:;"><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Month and YTD Jan 2023</Link></li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Box sx={{backgroundColor:"#ebf4f7",padding:"25px"}}>
                            <h2>Month and YTD 2022</h2>
                            <ul className={styles.aboutul}>
                            <li><Link href="javascript:;"><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Month and YTD October 2022</Link></li>
                                <li><Link href="javascript:;"><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Month and YTD September 2022</Link></li>
                                <li><Link href="javascript:;"><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Month and YTD August 2022</Link></li>
                                <li><Link href="javascript:;"><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Month and YTD July 2022</Link></li>
                                <li><Link href="javascript:;"><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Month and YTD June 2022</Link></li>
                                <li><Link href="javascript:;"><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Month and YTD May 2022</Link></li>
                                <li><Link href="javascript:;"><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Month and YTD April 2022</Link></li>
                                <li><Link href="javascript:;"><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Month and YTD March 2022</Link></li>
                                <li><Link href="javascript:;"><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Month and YTD Feb 2022</Link></li>
                                <li><Link href="javascript:;"><Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} />Month and YTD Jan 2022</Link></li>
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