'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './force.module.css'
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
              <Typography sx={{fontSize: tab ? "40px" : "62px",lineHeight:"1.1",fontWeight:"bold"}}>Force Investigation Division (FID)</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* 2nd block */}
      <Container>

        <Box>
          <Grid container>
            <Grid item xs={12} sm={11} md={10} lg={8} className={styles.textstyl} >
              <Typography style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '60px' }} >100 W. First Street, Suite 431</Typography>
              <Typography style={{ fontSize: '18px', fontWeight: 'bold' }} >Los Angeles, CA 90012</Typography>
              <Typography style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '30px' }} >(800) 339-6868 24-hour toll free hotline</Typography>

              <Typography style={{ fontSize: '18px' }}>Commanding Officer: <Link href="https://www.lapdonline.org/command-staff/bazulto-omar/">Captain III Omar Bazulto</Link></Typography>
              <Typography style={{ fontSize: '18px' }}>Assistant Commanding Officer: <Link href="https://www.lapdonline.org/command-staff/hwang-david/">Captain I David Hwang</Link></Typography>

              <Typography style={{ fontSize: '18px', marginTop: '30px' }} ><span style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '30px' }} >Force Investigation Division (FID)</span> reports to the Commanding Officer of Professional Standards Bureau.   It was first established in August 2004 as the entity responsible for the administrative investigation of all uses of force denoted as “Categorical” in the Consent Decree between the Department and the United States Department of Justice.</Typography>

              <Typography sx={{ fontSize: '18px', marginTop: '30px' }}>
                FID is responsible for the investigation of all incidents involving the use of deadly force of an LAPD officer.  In addition, all use of force resulting in an injury requiring hospitalization commonly referred to as a Law Enforcement Related Injury (LERI).  Investigative responsibility of FID also includes all deaths while the arrestee or detainee is in the custodial care of the LAPD, accidental and animal shootings, and other investigations as directed by the Chief of Police.
              </Typography>

              <Typography sx={{ fontSize: "18px", marginTop: '30px' }}>
                To accomplish this task, FID is currently organized into four investigative sections.  Additionally, an Administrative Section incorporating a special projects unit provides the necessary administrative review, oversight, and compliance with related projects, inquiries, and audits.
              </Typography>




              {/* ==================================      TO BE HIDDEN     ==================================== */}


                <Grid container>
                  <Grid item sm={12} md={9.5} xl={8.5}>
                    <ul className={styles.listBox}>
                      <li className={styles.list}>
                        <div className={styles.bullet}></div>
                        <Typography sx={{ fontSize: "18px" }}>Administrative A Section</Typography>
                      </li>
                      <li className={styles.list}>
                        <div className={styles.bullet}></div>
                        <Typography sx={{ fontSize: "18px" }}>Administrative B Section</Typography>
                      </li>
                      <li className={styles.list}>
                        <div className={styles.bullet}></div>
                        <Typography sx={{ fontSize: "18px" }}>Administrative C Section</Typography>
                      </li>
                      <li className={styles.list}>
                        <div className={styles.bullet}></div>
                        <Typography sx={{ fontSize: "18px" }}>Administrative D Section</Typography>
                      </li>
                      <li className={styles.list}>
                        <div className={styles.bullet}></div>
                        <Typography sx={{ fontSize: "18px" }}>Criminal Apprehension Team</Typography>
                      </li>
                      <li className={styles.list}>
                        <div className={styles.bullet}></div>
                        <Typography sx={{ fontSize: "18px" }}>Investigative Support Section</Typography>
                      </li>
                      <li className={styles.list}>
                        <div className={styles.bullet}></div>
                        <Typography sx={{ fontSize: "18px" }}>Investigative Support Unit</Typography>
                      </li>
                      <li className={styles.list}>
                        <div className={styles.bullet}></div>
                        <Typography sx={{ fontSize: "18px" }}>Video Technology Unit</Typography>
                      </li>
                    </ul>
                  </Grid>
                </Grid>



            </Grid>
          </Grid>
        </Box>



      </Container>




    </>
  )
}

export default California