'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './safe.module.css'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Container } from '@mui/material'
import global from "../global.module.css"

const ConstitutionalPolicy = () => {
    const tab = useMediaQuery('(max-width:768px)');
    const mobile = useMediaQuery('(max-width:576px)');

    const [toggle, setToggle] = useState(false);

    return (
        <>
            {/* 1st block */}
            <Box className={styles.bg}>
                <Container>
                    <Grid container className={global.fadeInUp}>
                        <Grid item xs={11} sm={10} md={10} lg={8}>
                            <h1 className={styles.h1size}>Los Angeles Police Department Safe Place</h1>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <span className={styles.hline}></span><Link href="#" className={styles.insidelnk}><Typography>LAPD/ LGBTQ Information Section</Typography></Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* 2nd block */}

            <Container>
                <Box className={styles.wholeblock}>
                    <Box>
                        <Grid container className={global.fadeInUp}>
                            <Grid item sm={12} md={10} lg={8} className={styles.textstyl}>
                                <Typography sx={{ fontSize: mobile ? '30px' : '38px', lineHeight: '1.1', letterSpacing: '.3px', marginBottom: '22px', fontWeight: '700' }}>Our Mission:</Typography>
                                <Typography sx={{ fontSize: '18px' }}>The mission of the LAPD SAFE PLACE is to provide the Lesbian, Gay, Bisexual, Transgender, and Questioning (LGBTQ) community with signage and resources that provide easily accessible safety information.</Typography>

                                <Typography sx={{ fontSize: '18px', marginTop: '30px' }}>LAPD SAFE PLACE was modeled after the Seattle Police Department (SPD) program and is designed to further enhance the relationship between the LAPD, the LGBTQ community and local businesses by providing LAPD SAFE SPACE decals and signage to local businesses and organizations and encouraging those entities to clearly post them at the entrances to their premise as a symbol of safety for the victims of LGBTQ crime and a warning to those who commit those crimes. LAPD SAFE SPACE also provides an instant and easy link to LAPD and other LGBTQ resources. LGBTQ Safety Resource</Typography>
                                <Typography sx={{ fontSize: '18px', marginTop: '30px' }}>Intersectionality: The Los Angeles Police Department recognizes that social categories such as race, color, religion, ancestry, national origin, sexual orientation, mental, physical, or sensory handicap, homelessness, marital status, age, parental status, gender, class or political ideology and the associated discrimination and disadvantage that may occur to an individual and/or group is all interconnected and must be addressed collectively instead of separately.</Typography>

                                <Typography sx={{ fontSize: '18px', marginTop: '30px', fontWeight: '700' }}>PARTICIPATE IN LAPD SAFE PLACE</Typography>

                                <Typography sx={{ fontSize: '18px', marginTop: '30px' }}>Displaying the LAPD SAFE PLACE symbol at your premise carries some important responsibilities that will greatly assist in protecting Lesbian, Gay, Bisexual, Transgender, and Questioning (LGBTQ) victims of crime.</Typography>
                                <Typography sx={{ fontSize: '18px', marginTop: '30px' }}>These LGBTQ victims will recognize the LAPD SAFE PLACE symbol of safety that indicates your business, organization, school or premise is willing to assist and protect these victims. To make this concept effective the Los Angeles Police Department would like you to instruct your staff, employees, supervisors, managers, volunteers and counselors, etc. of the following protocol:</Typography>
                                <Typography sx={{ fontSize: '18px', marginTop: '30px' }}>* Please apply the LAPD SAFE PLACE decal outside the front entrance of your establishment, building, room, etc. (approx. 3-5 feet high, if possible). If there is no glass at your front entrance, the LAPD SAFE PLACE poster can be placed conspicuously inside your premise.</Typography>
                                <Typography sx={{ fontSize: '18px', marginTop: '30px' }}>* Please allow the victim(s) to enter and remain at your premises until Los Angeles Police arrive.</Typography>
                                <Typography sx={{ fontSize: '18px', marginTop: '30px' }}>* Please either call, or assist the victim(s) in calling <Link href="tel:911" className={styles.lnk}>911</Link>.</Typography>
                                <Typography sx={{ fontSize: '18px', marginTop: '30px' }}>Note: Group / Individual orientation for LAPD SAFE PLACE participation is available. Please e-mail Sergeant II Jules Sohn at <Link href="mailto:38156@lapd.online" className={styles.lnk}>38156@lapd.online</Link>.</Typography>
                                <Typography sx={{ fontSize: '18px', marginTop: '30px' }}>SAFE PLACE Decals are provided FREE of charge to anyone requesting them. These decals are specifically designed for businesses and organizations to post at or near the front entrance of their premise as a symbol of safety for victims of crimes and as a warning to criminals. Individuals are also welcome to request SAFE PLACE decals or posters by sending the below information to Senior Lead Officer Jules Sohn via e-mail.</Typography>

                                <Typography sx={{ fontSize: '18px', marginTop: '30px', fontWeight: '700' }}>Commitment Pledge</Typography>

                                <Typography sx={{ fontSize: '18px', marginTop: '30px' }}>By signing this commitment pledge I agree to use these decals for their intended purpose by posting them on my premise. I further agree to instruct my organization’s employees to assist the victim(s) and/or witness(es) to anti-LGBTQ crimes by calling the police on their behalf and allowing them to remain on my premise until police arrive.</Typography>




                                <Typography sx={{ fontSize: '18px', marginTop: '30px', fontWeight: '700' }}>Decal and Sign Request</Typography>
                                <Typography sx={{ fontSize: '18px', marginTop: '30px' }}>Please send the following information to Sergeant II Jules Sohn at <Link href="mailto:38156@lapd.online" className={styles.lnk}>38156@lapd.online</Link>.</Typography>
                                <Typography sx={{ fontSize: '18px', marginTop: '30px' }}>Name:</Typography>
                                <Typography sx={{ fontSize: '18px'}}>Business/Organization:</Typography>
                                <Typography sx={{ fontSize: '18px'}}>Address:</Typography>
                                <Typography sx={{ fontSize: '18px'}}>City, State and Zip Code:</Typography>

                                <Typography sx={{ fontSize: '18px', marginTop: '30px', fontWeight: '700' }}>LAPD LGBTQ OUTREACH PROGRAM</Typography>

                                <Typography sx={{ fontSize: '18px', marginTop: '30px' }}>The Los Angeles Police Department LGBTQ Liaison Officers work out of the LAPD Headquarters and is assigned to the Community Relationship Division.</Typography>

                                <Typography sx={{ fontSize: '18px', marginTop: '30px' }}>The LGBTQ Liaison Officer duties include:</Typography>

                                <Typography sx={{ fontSize: '18px', marginTop: '30px' }}>* Works closely with the LGBTQ community on a variety of community-related events and issues;</Typography>

                                <Typography sx={{ fontSize: '18px' }}>* Attends the LAPD LGBTQ Working Group Meetings;</Typography>
                                <Typography sx={{ fontSize: '18px' }}>* Coordinates in conjunction with the LAPD Recruitment Unit, LAPD’s participation in LGBTQ and Pride related events through the region;</Typography>
                                <Typography sx={{ fontSize: '18px' }}>* Works in conjunction with the Department’s Hate Crimes Coordinator to monitor all LGBTQ related hate crimes.</Typography>
                                <Typography sx={{ fontSize: '18px' }}>* Coordinates the LAPD LGBTQ Community Forums, the LGBTQ Community Police Academy, and numerous events to help build stronger relationships with the LGBTQ Community under the guidance of the Department LGBTQ Outreach Coordinator.</Typography>
                                <Typography sx={{ fontSize: '18px', marginTop: '30px' }}></Typography>
                               
                               
                                <Typography sx={{ fontSize: '18px', marginTop: '30px' }}>Contact the LAPD LGBTQ Liaison Officer:</Typography>
                                

                                <Typography sx={{ fontSize: '18px', marginTop: '30px' }}>The LAPD LGBTQ Liaison Officer is Sergeant II Jules Sohn can be contacted at:</Typography>

                                <Typography sx={{ fontSize: '18px', marginBottom: '30px'  }}><Link href="mailto:38156@lapd.online" className={styles.lnk}>38156@lapd.online</Link></Typography>
                                
                            </Grid>
                        </Grid>
                    </Box>

                </Box>



            </Container>
        </>
    )
}

export default ConstitutionalPolicy