'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import global from "../../global.module.css"
import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery'
import Grid from '@mui/material/Grid'
import styles from "./specialoperation.module.css"
import { Container } from '@mui/material'

const SpecialOperation = () => {

  const mobile = useMediaQuery('(max-width: 576px)');


  return (
    <div>
      <Box sx={{ display: 'flex', padding: '35px 0px', flexDirection: 'column', background: '#0f212b' }}>
        <Container>
        <Grid className={global.fadeInUp} container>
          <Grid item xs={12} sm={12} md={7} >
            <Typography  sx={{ color: '#fff',lineHeight:"1", margin: '0px 0px 20px', fontSize: mobile ? '30px' : '62px', fontWeight: '700' }}>
              Office of Special Operations
            </Typography>
            <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} href='https://www.joinlapd.com/'>
              <Box  sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <span style={{ height: "2px", width: "20px", opacity: ".9", backgroundColor: "#fff", marginLeft: "10px" }}></span>
                <Typography sx={{ padding: '0px 0px 0xp 20px', color: "#7DDFFF", fontSize: "16px", textTransform: "none", '&:hover': { color: "#fff" } }}>Assistant Chief Blake Chow</Typography>
              </Box>
            </Link>
          </Grid>
        </Grid>
        </Container>
        </Box>

    <Container>
      <Box className={global.fadeInUp} sx={{ padding: "60px 0% 3% 0%" }}>

        <Box>
          <Typography sx={{ fontSize: "18px" }}>100 West 1st Street</Typography>
          <Typography sx={{ fontSize: "18px" }}>Los Angeles, CA 90012</Typography>
          <Typography sx={{ fontSize: "18px" }}>(213) 486-8440</Typography>
          <Typography sx={{ fontSize: "18px" }}>(213) 486-8455 Fax</Typography>
        </Box>

        <Grid container sx={{ marginTop: "50px" }}>
          <Grid item xs={12} sm={11} md={9} lg={8}>
            <Typography className={styles.link} sx={{ fontSize: "18px" }}>Office of Special Operations oversees all specialized units under: <Link href="javascript:;">Counter-Terrorism and
              Special Operations Bureau</Link>,<Link href="javascript:;"> Detective Bureau</Link> and <Link href="javascript:;">Transit Services Bureau</Link>.</Typography>
          </Grid>

        </Grid>

        <Typography className={styles.link} sx={{ marginTop: "50px" }}><Link href="javascript:;">Office of Special Operations Notices</Link></Typography>
      </Box>
      </Container>
    </div>
  )
}

export default SpecialOperation