'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Container } from '@mui/material'


const California = () => {

    const tab = useMediaQuery('(max-width:768px)');
    const mobile = useMediaQuery('(max-width:576px)');



    return (
        <>

            {/* 1st block */}
            <Box sx={{backgroundColor: '#0f212b', color: '#fff', padding:'32px 0px'}}>
                <Container>
                    <Grid container>
                        <Grid item xs={11} sm={10} md={7} lg={8}>
                            <Typography sx={{ fontSize: mobile ? "38px" : tab ? "40px" : "62px", lineHeight: "1.1", fontWeight: "bold" }}>K9 Unit</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* 2nd block */}
            <Container>

                <Box sx={{ marginBottom: '30px' }}>
                    <Grid container>
                        <Grid item xs={12} sm={11} md={10} lg={8}>
                            <Typography style={{ fontSize: mobile ? "30px" : tab ? "33px" : "38px", fontWeight: 'bold', marginTop: '60px', color: '#0f212b' }} >Mission Statement</Typography>

                            <Box sx={{ display: "flex", flexDirection: "column", marginTop: '15px', paddingBottom: "20px" }}>
                                <Typography sx={{ fontSize: '18px' }}>To support Department field and detective operations in the search of outstanding felony suspects, misdemeanor suspects armed with a firearm, lost and missing persons, and evidence.</Typography>

                                <Typography style={{ fontSize: mobile ? "30px" : tab ? "33px" : "38px", fontWeight: 'bold', marginTop: '30px', color: '#0f212b' }} >Function</Typography>

                                <Typography sx={{ fontSize: '18px', marginTop: '15px' }}>
                                    K9 teams respond to assist field and detective operations on a city-wide basis, seven days a week, 24 hours a day. K9 teams also assist with emergency calls for service including “officer needs help”, “assistance” or “back-up” calls.
                                </Typography>

                                <Typography style={{ fontSize: mobile ? "30px" : tab ? "33px" : "38px", fontWeight: 'bold', marginTop: '30px', color: '#0f212b' }} >Organization</Typography>

                                <Typography sx={{ fontSize: '18px', marginTop: '15px' }}>
                                    The K9 Platoon is one of the field platoons of Metropolitan Division, and as such is deployed at the direction of the Commanding Officer, Metropolitan Division. The K9 Platoon is supervised by a Lieutenant Officer-In-Charge, five K9 Sergeants, a K9 Chief Trainer, and 16 Police Officers as K9 handlers.
                                </Typography>

                                <Typography style={{ fontSize: mobile ? "30px" : tab ? "33px" : "38px", fontWeight: 'bold', marginTop: '30px', color: '#0f212b' }} >K9 Platoon History</Typography>

                                <Typography sx={{ fontSize: '18px', marginTop: '15px' }}>
                                    In November of 1979, two Los Angeles Police Department officers recognized an urgent need for specialized canine work in the City of Los Angeles. With fewer officers doing more work, personnel hours and money were being consumed by extensive searches for dangerous felony suspects who had concealed themselves. All too often these searches resulted in the suspects not being located. Community safety mandated that diligent efforts be made to locate these dangerous criminals. In April 1980, approval was given to train two search dogs for a pilot program within the West Bureau of the Police Department. The achievements of these two dogs were so astounding that, after two months, the one-year trial program was declared a total success. During its two decade-plus years of operation, an increasing demand for the unique services provided by the K9 Platoon has allowed it to gradually grow until the entire City now has rapid access to search dogs on a twenty-four hour basis.
                                </Typography>

                            </Box>


                        </Grid>
                    </Grid>
                </Box>


            </Container>




        </>
    )
}

export default California