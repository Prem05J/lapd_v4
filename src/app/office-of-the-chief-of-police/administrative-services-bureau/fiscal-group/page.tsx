'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './fiscal.module.css'
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
                        <Typography sx={{ fontSize: '22px', lineHeight: '1.27', marginBottom: '15px', letterSpacing: '-.25px' }}>Department’s payroll, annual budget, organizational charts and financial statements</Typography>
                            <Typography className={styles.h1size} sx={{fontSize: tab ? "40px" : "62px",lineHeight:"1.1",fontWeight:"bold"}}>Fiscal Group</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* 2nd block */}
            <Container>

                <Box sx={{marginBottom: '30px'}}>
                    <Grid container>
                        <Grid item xs={12} sm={11} md={10} lg={8} className={styles.textstyl} >
                            <Typography style={{ fontSize: '18px', marginTop: '60px' }} >100 West First Street, Suite 768</Typography>
                            <Typography style={{ fontSize: '18px'}} >Los Angeles, CA 90012</Typography>
                            <Typography style={{ fontSize: '18px'}} >213-486-8590</Typography>

                            <Typography style={{ fontSize: '18px', marginTop: '30px' }} >Fiscal Group (FG) prepares and distributes the Department’s payroll, annual budget, organizational charts and financial statements. <Link href="https://www.lapdonline.org/command-staff/unzicker-trina/">Police Administrator Trina Unzicker</Link> is the Commanding Officer of FG.</Typography>
                            <Typography style={{ fontSize: '18px', marginTop: '30px' }} >FG is responsible for financial auditing, appropriation accounting, funding of interim needs, Cost Recovery and Tracking Activities and the establishment of Travel and Per Diem Guidelines. FG is also responsible for the administration of the civilian cash overtime, Secret Service Fund and Special Funds and for the maintenance of the Department’s Overtime Manual and Audit Guide and Budget Guide.</Typography>



                        </Grid>
                    </Grid>
                </Box>



            </Container>




        </>
    )
}

export default California