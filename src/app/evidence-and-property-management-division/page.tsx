'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import styles from './evidence.module.css'
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
                            <Typography sx={{fontSize: tab ? "40px" : "62px",lineHeight:"1.1",fontWeight:"bold"}}>Evidence and Property Management Division</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* 2nd block */}
            <Container>

                <Box>
                    <Grid container>
                        <Grid item xs={12} sm={11} md={10} lg={8} className={styles.textstyl} >
                            <Typography style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '60px' }} >180 N. Los Angeles Street</Typography>
                            <Typography style={{ fontSize: '18px', fontWeight: 'bold' }} >B Level</Typography>
                            <Typography style={{ fontSize: '18px', fontWeight: 'bold' }} >Los Angeles, CA 90012</Typography>
                            <Typography style={{ fontSize: '18px', fontWeight: 'bold' }} >213-356-3710</Typography>


                            <Typography style={{ fontSize: '18px', marginTop: '30px' }} >
                                The mission of Evidence and Property Management Division is to serve the Los Angeles Police Department by maintaining physical chain of custody, accountability, and detailed documentation for booked evidence and property from the time of booking until adjudication of the case when articles are released or disposed.  They review, correct, and approve related reports for acceptance and processing and then receive, analyze, and assess evidence and property for proper containerization and secure physical storage.
                            </Typography>

                            <Typography style={{ fontSize: '18px', marginTop: '30px' }} >They address the specific needs of evidence and property handling for the processing of narcotics, currency, firearms, hazardous materials, biological evidence and high-value articles. The Commanding Officer of Evidence and Property Management Division is <strong>Police Administrator Betty Collins.</strong></Typography>

                            <Typography style={{ fontSize: '18px', marginTop: '30px' }} >Evidence and Property Management Division serves the 21 geographic divisions of the Los Angeles Police Department as well as the following outside agencies:
                                
                            </Typography>
                            <Typography style={{ fontSize: '18px', marginBottom: '30px' }}>California Highway Patrol; California State University Police; Los Angeles County Public Safety Police; Los Angeles Community College District Police; Los Angeles Housing Authority Police; Los Angeles Unified School District Police; Los Angeles Department of Airports Police; Los Angeles Port Warden; Los Angeles Department of Transportation Investigation Division; Los Angeles Department of General Services Security Police Division; Los Angeles Department of Recreation and Park Rangers; and the University of Southern California Campus Police.</Typography>

                        </Grid>
                    </Grid>
                </Box>


            </Container>




        </>
    )
}

export default California