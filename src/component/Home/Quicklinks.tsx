import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import styles from '../../styles/MyComponent.module.css'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import CarCrashOutlinedIcon from '@mui/icons-material/CarCrashOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Link from 'next/link';

const Quicklinks = () => {
    return (
        <Box className={styles.space}>
            <Typography sx={{ fontWeight: '800', fontSize: '15px', paddingBottom: '5px' }}>QUICK LINKS</Typography>
            <Grid container>
                <Grid item xs={6} sm={6} md={2} className={styles.bottom}>
                    <Link href="#" className={styles.link}>
                        <Box className={`${styles.boxes} ${styles.none} ${styles.pb}`}>
                            <InsertDriveFileOutlinedIcon className={styles.imgs} sx={{ height: "40px", width: "40px",  marginBottom: '10px'}} />
                            <Typography  sx={{  fontSize: '14px', display: 'block', textAlign: 'center',}}>File a Police Report</Typography>
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={6} md={2} className={styles.bottom}>
                    <Link href="#" className={styles.link}>
                        <Box className={styles.boxes} sx={{ padding: '35px 35px 34px 35px !important', display:"flex",flexDirection:"coumn",alignItems:"center"}}>
                            <CarCrashOutlinedIcon className={styles.imgs} sx={{ height: "40px", width: "40px", marginBottom: '10px' }} />
                            <Typography sx={{ fontSize: '14px', display: 'block', textAlign: 'center' }}>Obtaining a Traffic Collision Report</Typography>
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={6} md={2} className={styles.bottom}>
                    <Link href="#" className={styles.link}>
                        <Box className={`${styles.boxes} ${styles.none}`}>
                            <LocationOnOutlinedIcon className={styles.imgs} sx={{ height: "40px", width: "40px",  marginBottom: '10px' }} />
                            <Typography sx={{ fontSize: '14px', display: 'block', textAlign: 'center' }}>Crime Mapping</Typography>
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={6} md={2} className={styles.bottom}>
                    <Link href="#" className={styles.link}>
                        <Box className={styles.boxes}>
                            <BookOutlinedIcon className={styles.imgs} sx={{ height: "40px", width: "40px",  marginBottom: '10px' }} />
                            <Typography sx={{ fontSize: '14px', display: 'block', textAlign: 'center' }}>Reference Library</Typography>
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={6} md={2} className={styles.bottom}>
                    <Link href="#" className={styles.link}>
                        <Box className={`${styles.boxes} ${styles.none}`}>
                            <LocalPoliceOutlinedIcon className={styles.imgs} sx={{ height: "40px", width: "40px",  marginBottom: '10px' }} />
                            <Typography sx={{ fontSize: '14px', display: 'block', textAlign: 'center' }}>Police Commission</Typography>
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={6} md={2} className={styles.bottom}>
                    <Link href="#" className={styles.link}>
                        <Box className={styles.boxes} sx={{ borderRight: '1px solid #d0dade' }}>
                            <PersonOutlineOutlinedIcon className={styles.imgs} sx={{ height: "40px", width: "40px",  marginBottom: '10px' }} />
                            <Typography sx={{ fontSize: '14px', display: 'block', textAlign: 'center' }}>Most Wanted</Typography>
                        </Box>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Quicklinks