'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React from 'react'
import Link from 'next/link'
import styles from './traffic.module.css'
import Typography from '@mui/material/Typography'
import global from "../../../../global.module.css"
import { Container } from '@mui/material'

const TransitServices = () => {
    return (
        <>
            {/* 1st block */}
            <Box className={styles.bg}>
                <Container>
                <Grid container>
                    <Grid  className={global.fadeInUp} item xs={12} sm={10} md={7} lg={8}>
                        <h1 className={styles.h1size}>Obtain A Traffic Collision Report</h1>
                    </Grid>
                </Grid>
                </Container>
            </Box>
            {/* 2nd block */}
            <Container>
          
                <Box sx={{marginTop:"60px"}}>
                    <Grid className={global.fadeInUp} container>
                        <Grid item xs={12} sm={12} md={10} lg={7} xl={8} className={styles.textstyl} >
                            <Typography sx={{ marginBottom: '30px' }}>Traffic Collision Reports may be released to authorized persons such as victims, representative(s) of the victim, or such individuals as provided in Section 20012 of the Vehicle Code, by requesting the report online or via United States Mail.</Typography>
                            <Typography sx={{ fontWeight: 'bold', marginBottom: '30px' }}>NOTE:</Typography>
                            <ul className={styles.disc}>
                                <li>
                                    <Typography sx={{ fontWeight: 'bold', marginBottom: '30px', color: 'black', fontStyle: 'italic' }}>Traffic Collision Reports that involve an arrest, fatality, or juvenile <span>cannot</span> be released online and must be requested through United States Mail.</Typography>
                                </li>
                                <li>
                                    <Typography sx={{ fontWeight: 'bold', marginBottom: '30px', color: 'black', fontStyle: 'italic' }}>Traffic Collision Reports issued prior to February 1, 2016, must be requested through United States Mail.
                                    </Typography>
                                </li>
                            </ul>
                            <Typography sx={{ fontWeight: 'bold', marginBottom: '30px' }}>IMPORTANT:</Typography>
                            <ul className={styles.disc}>
                                <li>
                                    <Typography sx={{ fontWeight: 'bold', marginBottom: '30px', color: 'black', fontStyle: 'italic' }}>Before attempting to obtain a copy of a Traffic Collision Report online, <span>please allow a minimum of 45 days from the date of the collision</span> to allow the report to be reviewed and approved for release.</Typography>
                                </li>
                            </ul>

                            <Typography sx={{ marginBottom: '30px' }}>To Obtain Traffic Collision Reports Online</Typography>
                            <Typography>If you would like to obtain your Traffic Collision Report online, please click on the link below:</Typography>
                            <Typography className={styles.bold}>Obtain a Traffic Collision Report in: <span><Link href="javascript:;">ENGLISH</Link> &nbsp;|&nbsp;  <Link href="javascript:;">Spanish – Español</Link></span></Typography>
                            <Typography className={styles.bold}>Powered by <span><Link href="javascript:;">LexisNexis</Link></span></Typography>

                            <Typography sx={{ marginTop: '30px', marginBottom: '30px' }}>To Obtain Traffic Collision Reports  via United States Mail</Typography>

                            <Typography sx={{ marginBottom: '30px' }}>To request a report through the United States Mail, download and complete the Traffic Collision Report Request and return it with a $11.00 check or money order payable to the LAPD<Link href="javascript:;"> (do not send cash)</Link> to:</Typography>

                            <Typography>Los Angeles Police Department</Typography>
                            <Typography>Records and Identification Division</Typography>
                            <Typography>Document Processing Unit</Typography>
                            <Typography>P.O. Box 30158</Typography>
                            <Typography sx={{ marginBottom: '30px' }}>Los Angeles, CA 90030</Typography>


                            <Typography sx={{ marginBottom: '30px' }}>NOTE: Please contact the recorded line <span><Link href="javascript:;">(213) 486-8130</Link></span> for additional information or status update on receiving the report.</Typography>

                            <Typography sx={{ marginBottom: '30px' }}>Download the <span><Link href="javascript:;">Traffic Collision Report Request</Link></span> Form</Typography>

                            <Typography sx={{ marginBottom: '30px' }}>If you are unable to print or view the form, please make sure your written request includes:</Typography>

                           <Box sx={{display:"flex",flexDirection:"column",gap:"10px"}}>
                            <Box sx={{display:"flex"}}><Typography sx={{fontWeight:"bold"}}>1.&nbsp;&nbsp;</Typography><Typography>Type of report – Traffic</Typography></Box>
                            <Box sx={{display:"flex"}}><Typography sx={{fontWeight:"bold"}}>2.&nbsp;&nbsp;</Typography><Typography>Requester’s Name, Address, and Telephone Number</Typography></Box>
                            <Box sx={{display:"flex"}}><Typography sx={{fontWeight:"bold"}}>3.&nbsp;&nbsp;</Typography><Typography>LAPD Report (DR) Number and/or Incident Number, if known</Typography></Box>
                            <Box sx={{display:"flex"}}><Typography sx={{fontWeight:"bold"}}>4.&nbsp;&nbsp;</Typography><Typography>Requester’s Date of Birth</Typography></Box>
                            <Box sx={{display:"flex"}}><Typography sx={{fontWeight:"bold"}}>5.&nbsp;&nbsp;</Typography><Typography>Name(s) of party(ies) listed in report</Typography></Box>
                            <Box sx={{display:"flex"}}><Typography sx={{fontWeight:"bold"}}>6.&nbsp;&nbsp;</Typography><Typography>Date and Time of occurrence</Typography></Box>
                            <Box sx={{display:"flex"}}><Typography sx={{fontWeight:"bold"}}>7.&nbsp;&nbsp;</Typography><Typography>Location of occurrence</Typography></Box>
                            <Box sx={{display:"flex"}}><Typography sx={{fontWeight:"bold"}}>8.&nbsp;&nbsp;</Typography><Typography>License Plate Number and State of Registration of involved vehicle(s)</Typography></Box>
                            <Box sx={{display:"flex"}}><Typography sx={{fontWeight:"bold"}}>9.&nbsp;&nbsp;</Typography><Typography>Your interest in the report (i.e. involved party, authorized representative, insurance company, or parent/guardian). Include release forms for authorized parties and insurance companies and proof of relationship for parents/guardians.</Typography></Box>
                            <Box sx={{display:"flex"}}><Typography sx={{fontWeight:"bold"}}>10.&nbsp;&nbsp;</Typography><Typography>Requester’s Name, Address, and Telephone Number</Typography></Box>
                            
                            </Box>
                            <Typography className={styles.bottom}><span><Link href="javascript:;">Request Traffic or Crime Report</Link></span></Typography>

                        </Grid>
                    </Grid>
                </Box>
           
            </Container>


        </>
    )
}

export default TransitServices