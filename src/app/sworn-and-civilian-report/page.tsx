'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './sworn.module.css'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Container } from '@mui/material'


const California = () => {

    const tab = useMediaQuery('(max-width:768px)');

    const [toggle, setToggle] = useState(false)
    return (
        <>

            {/* 1st block */}
            <Box className={styles.bg}>
                <Container>
                    <Grid container>
                        <Grid item xs={11} sm={10} md={7} lg={8}>
                            <Typography sx={{ fontSize: '22px', lineHeight: '1.27', fontStyle: 'italic' }}>Sworn Personnel by Rank, Gender, and Ethnicity Report (SPRGE)</Typography>
                            <Typography className={styles.h1size}>Sworn and Civilian Report</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* 2nd block */}
            <Container>

                <Box>
                    <Grid container>
                        <Grid item xs={12} sm={11} md={10} lg={7} className={styles.textstyl} >




                            <Typography sx={{ fontSize: "18px" , marginTop: '30px' }}>
                                The Los Angeles Police Department is comprised of a diverse sworn workforce.  The Department’s growth, as well as its gender and ethnic composition, can be tracked in the Sworn Personnel by Rank, Gender, and Ethnicity Report (SPRGE) which is updated every deployment period.  The Department strives to achieve a work force which, at all levels, reflects parity with the diverse communities it serves.
                            </Typography>

                            <Typography sx={{ fontSize: "18px", marginTop: '30px' }}><Link href="https://lapdonlinestrgeacc.blob.core.usgovcloudapi.net/lapdonlinemedia/Sept-2023-rpt13_PR91.pdf">Click here to view the SPRGE Report</Link></Typography>
                        </Grid>
                    </Grid>
                </Box>

            </Container>




        </>
    )
}

export default California