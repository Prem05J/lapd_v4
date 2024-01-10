'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './saluting.module.css'
import Typography from '@mui/material/Typography'
import LaunchIcon from '@mui/icons-material/Launch';
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
                            <Typography sx={{fontSize: '22px', lineHeight: '1.27', paddingTop: '30px'}}>heroism . valor . in memoriam</Typography>
                            <Typography className={styles.h1size}>Saluting Our Heroes</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* 2nd block */}
            <Container>

                <Box>
                    <Grid container>
                        <Grid item xs={12} sm={11} md={10} lg={7} className={styles.textstyl} >
                            <Typography style={{ fontSize: '18px', marginTop: '60px' }} >Every day, the members of the LAPD put their lives on the line. Some days are uneventful. Other days are full of danger. And some days, their dedication to the job leads them to perform great acts of heroism. This area of the LAPD website celebrates those officers who have gone above and beyond the call of duty – those who survived to tell their own tale, and those who didn’t.</Typography>

                            <Box sx={{ display: "flex", flexDirection: "column", paddingBottom: "20px", marginTop: '30px'  }}>
                                <Typography><Link href="#">Los Angeles Police Memorial</Link></Typography>
                                <Typography><Link href="#">Los Angeles Police Memorial Foundation</Link></Typography>
                                <Typography><Link href="#">History of Veteran’s Day</Link></Typography>
                                <Typography><Link href="#">2019 Purple Heart</Link></Typography>
                                <Typography><Link href="#">Medals of Valor</Link></Typography>
                                <Typography style={{ marginBottom: '30px' }}><Link href="#">Officers Killed in the Line of Duty</Link></Typography>
                            </Box>

                        </Grid>
                    </Grid>
                </Box>


            </Container>




        </>
    )
}

export default California