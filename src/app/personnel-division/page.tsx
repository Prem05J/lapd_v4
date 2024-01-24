'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './personnel.module.css'
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
              <Typography sx={{ fontSize: '22px', lineHeight: '1.27', marginBottom: '10px', fontStyle: 'italic' }}>civilian backgrounds, screening applicants, medical exams, and pre-exit interviews</Typography>
              <Typography className={styles.h1size} sx={{ fontSize: tab ? "40px" : "62px", lineHeight: "1.1", fontWeight: "bold" }}>Personnel Division</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* 2nd block */}
      <Container>

        <Box>
          <Grid container>
            <Grid item xs={12} sm={11} md={10} lg={8} className={styles.textstyl} >
              <Typography style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '60px' }} >100 W. 1st Street, Room 228</Typography>
              <Typography style={{ fontSize: '18px', fontWeight: 'bold' }} >Los Angeles, CA 90012</Typography>
              <Typography style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '30px' }} >213-486-4650</Typography>

              <Typography style={{ fontSize: '18px', lineHeight: '1.55' }}>LAPD’s Personnel Division, under the command of the Administrative Services Bureau, provides human resources-related services to the Department. <Link href="https://www.lapdonline.org/command-staff/taft-brian/" target='_blank'>Brian Taft</Link> is the Commanding Officer of the Personnel Division. For verification of employment, please email here: <Link href="mailto:per.voe@lapd.online">per.voe@lapd.online</Link>.</Typography>


              <Typography sx={{ fontSize: "18px", marginTop: '30px' }}>
                Responsibilities of this Division include:
              </Typography>

              <Grid container>
                <Grid item sm={12} md={9.5} xl={8.5}>
                  <ul className={styles.listBox}>
                    <li className={styles.list}>
                      <div className={styles.bullet}></div>
                      <Typography sx={{ fontSize: "18px" }}>conducting investigative backgrounds of civilian candidates</Typography>
                    </li>
                    <li className={styles.list}>
                      <div className={styles.bullet}></div>
                      <Typography sx={{ fontSize: "18px" }}>processing, interviewing,</Typography>
                    </li>
                    <li className={styles.list}>
                      <div className={styles.bullet}></div>
                      <Typography sx={{ fontSize: "18px" }}>screening civilian (non-sworn) applicants,</Typography>
                    </li>
                    <li className={styles.list}>
                      <div className={styles.bullet}></div>
                      <Typography sx={{ fontSize: "18px" }}>medical exams, and</Typography>
                    </li>
                    <li className={styles.list}>
                      <div className={styles.bullet}></div>
                      <Typography sx={{ fontSize: "18px" }}>conducting pre-exit interviews of employees</Typography>
                    </li>

                  </ul>
                </Grid>
              </Grid>

              <Typography sx={{ fontSize: "18px", marginTop: '30px' }}>
                In addition, Personnel Division maintains a database of Department personnel and prepares the Table of Organization and related charts.
              </Typography>


              <Typography sx={{ display: toggle ? 'none' : 'flex', alignItems: 'center', paddingTop: '30px' }}>
                <span className={styles.hlinetwo}></span><Link href="javascript:;" className={styles.insidelnktwo} onClick={() => setToggle(true)}>Read More</Link>
              </Typography>



              {/* ==================================      TO BE HIDDEN  =================================== */}



              <Box className={`${toggle ? styles.readMoreView : styles.readMoreHide} ${styles.scale_up_left}`}>

                <Typography sx={{ fontSize: "18px", marginTop: '30px' }}>
                  Other duties of Personnel Division are:
                </Typography>
                <Box>
                  <Grid container columnSpacing={5} rowSpacing={5}>

                    <Grid item sm={12} md={7} lg={12} className={styles.textstyl}>

                      <Box className={styles.linkbox} sx={{ marginTop: '30px', marginBottom: '30px' }}>
                        <Typography sx={{ fontSize: '18px', margin: '20px 0px 20px 20px' }}>&quot;
                          <em>processing and investigating medical histories and information pertaining to sick or injured-on-duty (IOD) employees who apply for pensions, ensuring that proper medical treatment is provided to employees who are injured on duty, obtaining pertinent medical information from treating physicians and maintaining confidentiality of medical records.&quot;</em>
                        </Typography>

                      </Box>

                    </Grid>

                  </Grid>
                </Box>

                <Typography sx={{ fontSize: "18px", marginTop: '30px' }}>
                  Personnel Division also administers the Department’s Safety Program.
                </Typography>

                <Typography sx={{ fontSize: "18px", marginTop: '30px' }}>
                  Personnel Division is composed of the following sections:
                </Typography>

                <Grid container>
                  <Grid item sm={12} md={9.5} xl={8.5}>
                    <ul className={styles.listBox} style={{ marginBottom: '30px' }}>
                      <li className={styles.list}>
                        <div className={styles.bullet}></div>
                        <Typography sx={{ fontSize: "18px" }}>Administrative Section</Typography>
                      </li>
                      <li className={styles.list}>
                        <div className={styles.bullet}></div>
                        <Typography sx={{ fontSize: "18px" }}>Civilian Employment Section</Typography>
                      </li>
                      <li className={styles.list}>
                        <div className={styles.bullet}></div>
                        <Typography sx={{ fontSize: "18px" }}>Employee Selection Section</Typography>
                      </li>
                      <li className={styles.list}>
                        <div className={styles.bullet}></div>
                        <Typography sx={{ fontSize: "18px" }}>Medical Liaison Section</Typography>
                      </li>
                      <li className={styles.list}>
                        <div className={styles.bullet}></div>
                        <Typography sx={{ fontSize: "18px" }}>Position Control Section</Typography>
                      </li>
                      <li className={styles.list}>
                        <div className={styles.bullet}></div>
                        <Typography sx={{ fontSize: "18px" }}>Personnel Records Section</Typography>
                      </li>
                      <li className={styles.list}>
                        <div className={styles.bullet}></div>
                        <Typography sx={{ fontSize: "18px" }}>Return to Work Section</Typography>
                      </li>

                    </ul>
                  </Grid>
                </Grid>






                <Typography sx={{ display: toggle ? 'block' : 'flex', alignItems: 'center', marginBottom: '30px' }}>
                  <span className={styles.hlinetwo} style={{ marginTop: '10px' }}></span><Link href="javascript:;" className={styles.insidelnktwo} onClick={() => setToggle(false)}>Read Less</Link>
                </Typography>


              </Box>

            </Grid>
          </Grid>
        </Box>



      </Container>




    </>
  )
}

export default California