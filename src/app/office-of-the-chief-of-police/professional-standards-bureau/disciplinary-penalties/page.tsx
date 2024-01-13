'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery'
import trainingStyle from "./statistical.module.css"
import Grid from '@mui/material/Grid'
import global from "../../../global.module.css"
import styles from "./disciplinary.module.css"
import LaunchIcon from '@mui/icons-material/Launch'
import { Container } from '@mui/material'
import Image from 'next/image'
import Img from '../../../../../public/Icons/icon-pdf-white.svg'
import Img1 from '../../../../../public/Icons/pdf-svg-icon.svg'


const Training = () => {
  const mobile = useMediaQuery('(max-width: 576px)');

  return (
    <>
      <Box sx={{ display: 'flex', padding: '36px 0px', flexDirection: 'column', background: '#0f212b' }}>
        <Container>

          <Typography className={global.fadeInUp} sx={{ color: '#fff', fontSize: mobile ? '40px' : '62px', fontWeight: '700' }}>
            Disciplinary Penalties
          </Typography>

        </Container>
      </Box>
      <Container sx={{marginBottom: '30px'}}>

        <Box className={global.fadeInUp} >
          <Grid container sx={{ marginTop: "40px" }} rowSpacing={5} columnSpacing={5}>

            <Grid item xs={12} sm={6}>

              <Box sx={{ backgroundColor: "#ebf4f7", padding: "30px 30px 30px 40px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <Typography sx={{ fontSize: "26px", fontWeight: "bold" }}>2023</Typography>
                <ul className={styles.listItem} style={{ marginTop: '0px' }}>
                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>November 2023 Disciplinary Penalties</Typography></Link></li>
                <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>October 2023 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>September 2023 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>August 2023 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>July 2023 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>June 2023 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>May 2023 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>April 2023 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>March 2023 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>February 2023 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>January 2023 Disciplinary Penalties</Typography></Link></li>
                </ul>
              </Box>

            </Grid>

            <Grid item xs={12} sm={6}>

              <Box sx={{ backgroundColor: "#ebf4f7", padding: "30px 30px 30px 40px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <Typography sx={{ fontSize: "26px", fontWeight: "bold" }}>2022</Typography>

                <ul className={styles.listItem}>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>December 2022 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>Nobvember 2022 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>October 2022 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>September 2022 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>August 2022 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>July 2022 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>June 2022 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>May 2022 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>April 2022 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>March 2022 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>February 2022 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>January 2022 Disciplinary Penalties</Typography></Link></li>
                </ul>
              </Box>

            </Grid>

          </Grid>
        </Box>

        <Box className={global.fadeInUp} >
          <Grid container sx={{ marginTop: "40px" }} rowSpacing={5} columnSpacing={5}>
            <Grid item xs={12} sm={6}>

              <Box sx={{ backgroundColor: "#ebf4f7", padding: "30px 30px 30px 40px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <Typography sx={{ fontSize: "26px", fontWeight: "bold" }}>2021</Typography>

                <ul className={styles.listItem}>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>December 2021 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>November 2021 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>October 2021 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>September 2021 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>August 2021 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>July 2021 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>June 2021 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>May 2021 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>April 2021 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>March 2021 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>February 2021 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>January 2021 Disciplinary Penalties</Typography></Link></li>
                </ul>
              </Box>

            </Grid>
            <Grid item xs={12} sm={6}>

              <Box sx={{ backgroundColor: "#ebf4f7", padding: "30px 30px 30px 40px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <Typography sx={{ fontSize: "26px", fontWeight: "bold" }}>2020</Typography>
                <ul className={styles.listItem} style={{ marginTop: '0px' }}>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>December 2020 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>November 2020 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>October 2020 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>September 2020 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>August 2020 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>July 2020 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>June 2020 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>May 2020 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>April 2020 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>March 2020 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>February 2020 Disciplinary Penalties</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>January 2020 Disciplinary Penalties</Typography></Link></li>
                </ul>
              </Box>

            </Grid>



          </Grid>
        </Box>



       </Container>
    </>
  )
}

export default Training