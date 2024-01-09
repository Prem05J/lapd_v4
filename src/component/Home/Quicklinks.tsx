import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import styles from '../../styles/home.module.css'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import CarCrashOutlinedIcon from '@mui/icons-material/CarCrashOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Image from 'next/image';
import File from "../../../public/Icons/File.svg"
import Traffic from "../../../public/Icons/Traffic.svg"
import CrimeMapping from "../../../public/Icons/icon-crimemapping.svg"
import reference from "../../../public/Icons/reference-library.svg"
import policeCommission from "../../../public/Icons/policeCommission.svg"
import mostWanted from "../../../public/Icons/mostWanted.svg"
import Link from 'next/link';

const Quicklinks = () => {
    
    return (
        <Box>
            <Typography sx={{ fontWeight: '800', fontSize: '15px', paddingBottom: '5px' }}>QUICK LINKS</Typography>
            <Grid container sx={{marginTop:"30px"}}>
                <Grid item xs={6} sm={4} md={2}>
                    <Link href="javascript:;" className={styles.link}>
                        <Box className={styles.boxes} sx={{border:"1px solid #d0dade",borderBottom:"none",height:"160px",alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column",gap:"20px",padding:"0px 30px 0px 30px"}}>
                        <Image src={File} alt='File-icon' width={50} height={50}/>
                            <Typography>File a Police Report</Typography>
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                    <Link href="javascript:;" className={styles.link}>
                        <Box className={styles.boxes} sx={{border:"1px solid #d0dade",borderBottom:"none",height:"160px",alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column",gap:"20px",padding:"0px 30px 0px 30px"}}>
                         
                                <Image src={Traffic} alt='File-icon' width={50} height={50}/>
                            
                            <Typography>Obtain a Traffic Collision Report</Typography>
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                    <Link href="javascript:;" className={styles.link}>
                        <Box className={styles.boxes} sx={{border:"1px solid #d0dade",borderBottom:"none",height:"160px",alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column",gap:"20px",padding:"0px 30px 0px 30px"}}>
                        <Image src={CrimeMapping} alt='File-icon' width={50} height={50}/>
                            <Typography>Crime Mapping</Typography>
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                    <Link href="javascript:;" className={styles.link}>
                        <Box className={styles.boxes} sx={{border:"1px solid #d0dade",borderBottom:"none",height:"160px",alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column",gap:"20px",padding:"0px 30px 0px 30px"}}>
                        <Image src={reference} alt='File-icon' width={50} height={50}/>
                            <Typography>Reference Library</Typography>
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                    <Link href="javascript:;" className={styles.link}>
                        <Box className={styles.boxes} sx={{border:"1px solid #d0dade",borderBottom:"none",height:"160px",alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column",gap:"20px",padding:"0px 30px 0px 30px"}}>
                        <Image src={policeCommission} alt='File-icon' width={50} height={50}/>
                            <Typography>Police Commission</Typography>
                        </Box>
                    </Link>
                </Grid>
                <Grid item xs={6} sm={4} md={2}>
                    <Link href="javascript:;" className={styles.link}>
                        <Box className={styles.boxes} sx={{border:"1px solid #d0dade",borderBottom:"none",height:"160px",alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column",gap:"20px",padding:"0px 30px 0px 30px"}}>
                        <Image src={mostWanted} alt='File-icon' width={50} height={50}/>
                            <Typography>Most Wanted</Typography>
                        </Box>
                    </Link>
                </Grid>
               
            </Grid>
        </Box>
    )
}

export default Quicklinks