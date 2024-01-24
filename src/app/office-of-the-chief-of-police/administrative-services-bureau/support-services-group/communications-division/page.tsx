'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './communication.module.css'
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
                        <Grid item xs={11} sm={10} >
                            <Typography sx={{fontSize: '22px', lineHeight: '1.27', letterSpacing: '-.25px', fontStyle: 'italic'}}>9-1-1, emergency calls, police, fire, paramedic, etc.</Typography>
                            <Typography sx={{fontSize: tab ? "40px" : "62px",lineHeight:"1.1",fontWeight:"bold"}}>Communications Division</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* 2nd block */}
            <Container>

                <Box>
                    <Grid container>
                        <Grid item xs={12} sm={11} md={10} lg={8} className={styles.textstyl} >
                            <Typography style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '60px' }} >100 North Los Angeles Street</Typography>
                            <Typography style={{ fontSize: '18px', fontWeight: 'bold' }} >Los Angeles, California 90012</Typography>
                            <Typography style={{ fontSize: '18px', fontWeight: 'bold' }} >213-978-6585</Typography>
                            <Typography style={{ fontSize: '18px', fontWeight: 'bold' }} >Fax: 213-978-6595</Typography>


                            <Typography style={{ fontSize: '18px', marginTop: '30px' }} >Communications Division serves as a support entity for the entire Los Angeles Police Department. Communications Division’s Valley and Metropolitan Dispatch Centers are the Public Safety Answering Point (PSAP) for the City of Los Angeles.</Typography>

                            <Box sx={{ display: "flex", flexDirection: "column",marginTop: '30px', paddingBottom: "20px" }}>
                                <Typography sx={{ fontSize: '18px'}}>As the PSAP, Communications Division has the responsibility to staff and answer, on a 24-hour basis, the telephones upon which calls for service are received. This includes 911 emergency calls (police, fire, and paramedic). Communications Division handles only police related calls for the City. When a 911 call for the Los Angeles Fire Department is received, the caller is connected with the Fire Department.<Link href="https://www.lapdonline.org/command-staff/valois-raymond/"> Raymond Valois</Link> is the Commanding Officer of Communications Division.</Typography>
                            </Box>


                        </Grid>
                    </Grid>
                </Box>
                
                <Box  sx={{marginTop:"30px"}}>
                <Grid container columnSpacing={5} rowSpacing={5}>

                    <Grid item sm={7} md={7} lg={7}>

                        <Box className={styles.linkbox} sx={{ marginTop: '30px', marginBottom: '30px' }}>
                            <Typography sx={{fontSize: '26px', fontWeight: 'bold', margin: '20px 0px 20px 20px'}}>About Communications Division</Typography>
                            <ul className={styles.aboutul} style={{margin: '0px 0px 20px 20px'}}>
                                <li><Typography><Link href="https://www.lapdonline.org/office-of-the-chief-of-police/administrative-services-bureau/support-services-group/communications-division/communications-division-mission-statement/" style={{ display: 'flex', alignItems: 'center',fontSize: '16px' }}>Communications Division Mission Statement</Link></Typography></li>
                                <li><Typography><Link href="https://www.lapdonline.org/office-of-the-chief-of-police/administrative-services-bureau/support-services-group/communications-division/communications-divisions-role/" style={{ display: 'flex', alignItems: 'center' }}>Communications Division&lsquo;s Role</Link></Typography></li>
                                <li><Typography><Link href="https://www.lapdonline.org/office-of-the-chief-of-police/administrative-services-bureau/support-services-group/communications-division/cd-department-command-post/" style={{ display: 'flex', alignItems: 'center' }}>The Department of Operations Center (DOC)</Link></Typography></li>
                                <li><Typography><Link href="https://www.lapdonline.org/office-of-the-chief-of-police/administrative-services-bureau/support-services-group/communications-division/history-of-communications-dispatch-centers/" style={{ display: 'flex', alignItems: 'center' }}>History of Communications Dispatch Centers</Link></Typography></li>

                            </ul>
                        </Box>

                    </Grid>

                </Grid>
            </Box>


            </Container>




        </>
    )
}

export default California