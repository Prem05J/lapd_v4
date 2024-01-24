'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './records.module.css'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Container } from '@mui/material'
import { Tulpen_One } from 'next/font/google'


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
                            <Typography sx={{fontSize: tab ? "40px" : "62px",lineHeight:"1.1",fontWeight:"bold"}}>Records and Identification Division</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* 2nd block */}
            <Container>

                <Box>
                    <Grid container>
                        <Grid item xs={12} sm={11} md={10} lg={8} className={styles.textstyl} >
                            <Typography style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '60px' }} >100 West 1st Street Room P1-731</Typography>
                            <Typography style={{ fontSize: '18px', fontWeight: 'bold' }} >Los Angeles, CA 90012</Typography>
                            <Typography style={{ fontSize: '18px' }} ><Link href="tel:213-486-8300">213-486-8300</Link></Typography>
                            <Typography style={{ fontSize: '18px' }} ><Link href="tel:213-486-8310">213-486-8310</Link></Typography>



                            <Typography style={{ fontSize: '18px', marginTop: '30px' }} >Records and Identification Division is a critical 24-hour, seven-days a week support function of the Department, providing records and information management systems and state-of-the-art identification services and technologies. The R&I Division manages the Department’s records retention program and is responsible for compiling, maintaining, and disseminating copies of Department records concerning crimes, arrests, pawned articles, traffic, property, firearms, securities, vehicles, boats and missing persons to law enforcement agencies, authorized outside agencies and citizens.</Typography>

                            <Box sx={{ display: "flex", flexDirection: "column", marginTop: '30px', paddingBottom: "20px" }}>
                                <Typography sx={{ fontSize: '18px' }}>R & I is also responsible for facilitating the capture of ink-rolled fingerprints for processing absentee bookings when subjects are transported to the Los Angeles County-University of Southern California Medical Center (LAC-USCMC), Los Angeles County Sheriff’s Department (LASD), and other hospitals. The Division is responsible for identifying arrestees and for analyzing and comparing friction ridge skins impressions in the Multi-Modal Biometric Identification System (MBIS). In addition to retrieving fingerprint images from MBIS and the Department of Justice database (DOJ) to conduct manual comparisons to booking records, pawn tickets, notary journals, department of motor vehicles driver’s license captured fingerprint Images, coroners’ fingerprints and other department approved fingerprinted documents. Comparison results are reported to requesting and investigating officers.</Typography>
                            </Box>


                        </Grid>
                    </Grid>
                </Box>

                <Box>
                    <Grid container columnSpacing={5} rowSpacing={5}>

                        <Grid item sm={7} md={7} lg={8} className={styles.textstyl}>

                            <Box className={styles.linkbox} sx={{ marginTop: '30px', marginBottom: '30px' }}>
                                <Typography sx={{ fontSize: '18px', margin: '20px 0px 20px 20px' }}><em style={{fontWeight: 'bold'}}>Effective March 27, 2020,</em> the R&I public counter located at the Police Administration Building, Room P1-137, will be closed to the public. Please email us at <Link href="mailto:WC-RI@lapd.online">WC-RI@lapd.online</Link>, or give us a call Monday – Thursday, 8:00 am – 5:00 pm, at <Link href="tel:213-486-8300">213-486-8300</Link>. Please be sure to provide a good email address or phone number so that we can respond to you.</Typography>

                            </Box>

                        </Grid>

                    </Grid>
                </Box>
                <Box sx={{marginTop: '30px'}}>
                    <Grid container>
                        <Grid item xs={12} sm={11} md={10} lg={8} className={styles.textstyl} >
                        <Typography  sx={{ fontSize: '18px' }}>Repossession Receipts can be purchased <Link href="https://www.lapdonline.org/police-commission/repo-fee/">here</Link> online 24/7.</Typography>
                        <Typography  sx={{ fontSize: '18px' }}>The R&I Division is not authorized to release Arrest Reports to Suspect nor does it provide Crime or Traffic Reports at the Public Counter. Requests for Crime or Traffic Reports are accepted via mail at:</Typography>

                        <Typography  sx={{ fontSize: '18px', marginTop: '30px' }}>Los Angeles Police Department</Typography>
                        <Typography  sx={{ fontSize: '18px' }}>ATTN: R&I Division Document Processing Unit</Typography>
                        <Typography  sx={{ fontSize: '18px' }}>P.O. Box 30158</Typography>
                        <Typography  sx={{ fontSize: '18px' }}>Los Angeles, CA 90030</Typography>

                        <Typography  sx={{ fontSize: '18px', marginTop: '30px' }}>Additional Information from the Records and Identification Division:</Typography>

                        <Typography  sx={{ fontSize: '18px', marginTop: '30px' }}><Link href="https://www.lapdonline.org/obtaining-arrest-summaries-detention-letters/">Obtaining Arrest Summaries</Link></Typography>

                        <Typography  sx={{ fontSize: '18px'}}><Link href="https://www.lapdonline.org/how-can-i-get-a-police-clearance-letter-for-foreign-travel-adoption-purposes/">Obtaining Clearance Letters and Related Services</Link></Typography>

                        
                        <Typography  sx={{ fontSize: '18px' }}><Link href="https://www.lapdonline.org/reports-and-other-services/">Reports and Other Services</Link></Typography>

                        <Typography sx={{fontSize: '18px', fontWeight: 'bold', marginTop: '30px' }}>NOTE:</Typography>

                        <Typography sx={{ fontSize: '18px', marginTop: '30px'}}>Fees are subject to change by the Police Commission on an annual basis, starting July 1st of each Fiscal Year.</Typography>
                        </Grid>
                    </Grid>
                </Box>



            </Container>




        </>
    )
}

export default California