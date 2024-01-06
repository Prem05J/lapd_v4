'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery'
import Grid from '@mui/material/Grid'
import global from "../../../../../global.module.css"
import styles from "./human.module.css"
import { Container } from '@mui/material'



const Training = () => {
  const mobile = useMediaQuery('(max-width: 576px)');

  return (
    <>
      <Box sx={{ display: 'flex', padding: '32px 0px', flexDirection: 'column', background: '#0f212b' }}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 10px', fontSize: mobile ? '18px' : '22px', fontStyle: 'italic', lineHeight: '1.1' }}>
                &quot;rescue individuals who are being sexually exploited through prostitution&quot;
              </Typography>

            </Grid>
            <Grid item xs={10} sm={12} lg={7} xl={8}>

              <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 20px', fontSize: mobile ? '30px' : '62px', fontWeight: '700', lineHeight: '1.1' }}>
                Exploitation & Investigative Section
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>


        <Box className={global.fadeInUp} sx={{ display: "flex", flexDirection: "column", paddingTop: "5%" }}>
          <Grid container rowSpacing={5}>
            <Grid item xs={12} sm={12} md={10} lg={8}>

              <Typography sx={{ fontSize: "18px" }}>
                The <strong>Exploitation & Investigative Section</strong> is responsible for the investigation and enforcement of state and federal crimes involving the sexual exploitation of human beings; reduce the vulnerability of children to acts of sexual criminal activity and strengthen the capabilities of federal, state and local law enforcement through training programs and investigative assistance.
              </Typography>
              <Typography sx={{ fontSize: "18px", marginTop: '30px' }}>
                The objective of the section is to identify and rescue individuals who are being sexually exploited through prostitution as well as to identify and initiate investigations into those responsible for this exploitation.
              </Typography>
              <Typography sx={{ fontSize: "18px", marginTop: '30px' }}>
                A primary function of the unit is the identification and rescue of juvenile victims lured into the sex trade. Other functions include:
              </Typography>
              <Typography sx={{ fontSize: "18px", marginTop: '30px' }}>
                • Investigative prostitution-related offenses as they connect to organized crime.
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>
                • Identification and arrest of individuals involved in human trafficking for the
                purpose of prostitution.
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>
                • Liaison with Robbery Homicide Division, Federal Bureau of Investigation, Immigration and Customs Enforcement, U.S. State Department, and the Los Angeles County District Attorney’s Office to investigate and prosecute cases of human trafficking.
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>
                • Investigate and prosecute pimp organizations involved in domestic trafficking, with a strong emphasis on individuals who traffic in minors.
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>
                • Assist Area vice units in conducting prostitution related investigations and/or task force operations.
              </Typography>
              <Typography sx={{ fontSize: "18px" }}>
                • Assist Area vice units in identifying and removing problem/nuisance locations.
              </Typography>
              <Typography sx={{ fontSize: "18px", marginTop: '30px' }}>
                <strong>References:</strong>
              </Typography>
              <ul className={styles.listItem1} style={{marginTop: '30px'}}>
                <li><Link href="javascript:;"><Typography>Stop Hate and Respect Everyone (S.H.A.R.E.)</Typography></Link></li>
                <li><Link href="javascript:;"><Typography>Crimenes de Odio – Folleto de Recursos</Typography></Link></li>
              </ul>

              <Typography sx={{ fontSize: "18px", marginTop: '30px' }}>
                The <strong>Missing Persons Unit (MPU)</strong> investigates approximately 3,200 adult Missing Person (M/P) reports annually, or 250 to 300 reports per month. Contrary to public belief, federal law prohibits the observance of a waiting period before accepting a M/P report.
              </Typography>
              <Typography sx={{ fontSize: "18px", marginTop: '30px' }}>
                Approximately 70 percent of all reported missing persons are found or voluntarily return within 48 to 72 hours. Not all adult missing persons are the victims of kidnapping, murders, or some other criminal act.
              </Typography>
              <Typography sx={{ fontSize: "18px", marginTop: '30px' }}>
                There are a variety of reasons why a person voluntarily disappears including mental illness, depression, substance abuse, credit problems, abusive relationships, or marital discord. California law classifies M/P reports as “non-criminal”; however, they take investigative precedence over crimes involving property, thus establishing a “due diligence” responsibility on the part of the adult MPU.
              </Typography>
              <Typography sx={{ fontSize: "18px", marginTop: '30px' }}>
                Being a “voluntary” missing person is not a crime. Any adult person can simply walk away, and choose to ignore family, friends, associates and employers. Since this type of behavior is not “criminal,” law enforcement is limited on how they conduct these types of investigations.
              </Typography>
              <Typography sx={{ fontSize: "18px", marginTop: '30px' }}>
                When facts and circumstances indicate a strong possibility of “foul-play,” or the disappearance is the result of a criminal act, the investigation will continue along such a course.
              </Typography>
              <Typography sx={{ fontSize: "18px", marginTop: '30px', marginBottom:'30px' }}>
                Missing Persons Frequently Asked Questions: <Link href="#" className={styles.clk}>(click here)</Link>
              </Typography>
            </Grid>
          </Grid>



        </Box>

      </Container>
    </>
  )
}

export default Training