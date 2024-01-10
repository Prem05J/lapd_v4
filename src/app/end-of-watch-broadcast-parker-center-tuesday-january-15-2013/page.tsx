'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Container } from '@mui/material'


const California = () => {

    const tab = useMediaQuery('(max-width:768px)');
    const mobile = useMediaQuery('(max-width:576px)');

    
    return (
        <>

            {/* 1st block */}
            <Box sx={{backgroundColor:"#0f212b",padding:"35px 0px",color:"#fff"}}>
                <Container>
                    <Grid container>
                        <Grid item xs={11} sm={10} md={7} lg={8}>
                            <Typography sx={{fontSize: tab ? "49px" : mobile? "38px" : '62px',lineHeight:"1.1",fontWeight:"bold"}}>End of Watch Broadcast Parker Center Tuesday, January 15, 2013</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* 2nd block */}
            <Container>

                <Box>
                    <Grid container>
                        <Grid item xs={12} sm={11} md={10} lg={8}>




                            <Typography sx={{ fontSize: "18px", marginTop: '60px' }}>
                                All units, this is an end of watch broadcast for Parker Center, the former ‘Police Administration Building’, located at 150 North Los Angeles Street, official headquarters of the Los Angeles Police Department for over 50 years.                            </Typography>
                            <Typography sx={{ fontSize: "18px", marginTop: '30px' }}>
                                During more than five decades of operation, the iconic Parker Center came to be one of the most high profile landmarks of Los Angeles, its sleek mid-century exterior known around the world as home to the LAPD. In media and popular culture, the building was featured in countless fictional and non-fictional television series and film projects. It also served as a backdrop for live news broadcasts virtually day and night, instantly recognized as LAPD headquarters by local, national, and international audiences.
                            </Typography>


                            <Typography sx={{ fontSize: "18px", marginTop: '30px' }}>
                                Over the years, the men and women of the Los Angeles Police Department came to regard the structure as a time-worn, burnished symbol of the LAPD’s best. In 2009, most of the Department moved to its new headquarters on First Street, just south of City Hall. Now, with the recent departure from Parker Center of the last remaining police personnel, the building is fully vacated and decommissioned as a Department facility.
                            </Typography>

                            <Typography sx={{ fontSize: "18px", marginTop: '30px' }}>
                                It all began in December of 1952, when ground was broken for a new headquarters. At the time, the varied units of the LAPD were scattered in makeshift, inadequate office spaces throughout the downtown area. The new building was designed to increase operational efficiency by providing an integrated police headquarters under one roof.
                            </Typography>

                            <Typography sx={{ fontSize: "18px", marginTop: '30px' }}>
                                Construction commenced in 1953 with final hand-over of the completed building occurring in 1955. The actual cost of $6 million was $2 million less than originally projected.
                            </Typography>


                            <Typography sx={{ fontSize: "18px", marginTop: '30px' }}>
                                Its 398,000-square-foot area was laid out according to function, bringing related police activities together on the same floors. The eight-story building included all administrative offices and staff units, central detectives and patrol divisions, and the Traffic Bureau. The fourth floor comprised one of the nation’s largest and finest crime laboratories. A felony jail housed adult male prisoners in proximity to Detective Bureau, saving many hours in driving time to and from the Main jail. A fully functional public auditorium was included, as was a newly designed police radio and communications center, the Department’s nerve center for all routine communications and civil emergencies.
                            </Typography>

                            <Typography sx={{ fontSize: "18px", marginTop: '30px' }}>
                                In 1966, the building was named for the late Police Chief William H. Parker, following his untimely passing from a heart attack.
                            </Typography>

                            <Typography sx={{ fontSize: "18px", marginTop: '30px' }}>
                                In October 1971, a Los Angeles Police Memorial was constructed in front of the building to honor officers killed in the line of duty.
                            </Typography>

                            <Typography sx={{ fontSize: "18px", marginTop: '30px' ,marginBottom: '50px' }}>
                                Parker Center has served and protected the men and women of the Police Department with distinction for 54 years. Parker Center, on behalf of Chief Charlie Beck and all LAPD personnel, thank you for your steadfast service through more than half a century of the best and worst times in Los Angeles. You are now end of watch.
                            </Typography>


                        </Grid>
                    </Grid>
                </Box>

            </Container>




        </>
    )
}

export default California