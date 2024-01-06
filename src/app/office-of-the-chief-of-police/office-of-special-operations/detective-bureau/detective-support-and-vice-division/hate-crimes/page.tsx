'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery'
import trainingStyle from "./hate.module.css"
import Grid from '@mui/material/Grid'
import global from "../../../../../global.module.css"
import styles from "./hate.module.css"
import LaunchIcon from '@mui/icons-material/Launch'
import { Container } from '@mui/material'
import Image from 'next/image'
import Img from "../../../../../../../public/Icons/icon-pdf-white.svg"
import Img1 from '../../../../../../../public/Icons/pdf-svg-icon.svg'


const Training = () => {
  const mobile = useMediaQuery('(max-width: 576px)');

  return (
    <>
      <Box sx={{ display: 'flex', padding: '32px 0px', flexDirection: 'column', background: '#0f212b' }}>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={10} lg={8} >
              <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 10px',lineHeight:"1.3", fontSize: mobile ? '20px' : '22px', fontStyle: 'italic' }}>
                The City of Los Angeles is a diverse metropolis, whose residents represent nearly every culture, nationality, race, religion, sexual orientation, political affiliation and physical disability. The combination of all these different groups has made the City of Los Angeles rich in diversity with its own unique blend of cultures. Sadly, there are specific groups and individuals that are motivated by hate, and are willing to act violently towards others based upon these differences. These criminal acts referred to as hate crimes affect not just individuals, but entire communities.
              </Typography>
            </Grid>
          </Grid>
          <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 20px', fontSize: mobile ? '30px' : '62px', fontWeight: '700' }}>
            Hate Crimes
          </Typography>
          <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} href='https://www.joinlapd.com/'>
            <Box className={global.fadeInUp} sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Image src={Img} alt="pdf" style={{ height: '20px', width: '20px' }} />

              <Typography sx={{ padding: '0px 0px 0xp 20px', color: "#7DDFFF", fontSize: "16px", textTransform: "none", '&:hover': { color: "#fff" } }}>Hate Crimes - California Assembly Bills 2282 and 485</Typography>
            </Box>
          </Link>
        </Container>
      </Box>
      <Container>
        <Box className={global.fadeInUp} >
          <Grid container sx={{ marginTop: "40px" }} rowSpacing={5} columnSpacing={5}>

            <Grid item xs={12} sm={12} md={6}>

              <Box sx={{ backgroundColor: "#ebf4f7", padding: "30px 30px 30px 40px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <Typography sx={{ fontSize: "26px", fontWeight: "bold" }}>Hate Crimes by Bias and Category</Typography>
                <ul className={styles.listItem}>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>Hate Crimes by Bias</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>Hate Incidents by Bias</Typography></Link></li>
                  <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>Hate Crimes & Incidents by Category YTD</Typography></Link></li>
                </ul>
              </Box>

            </Grid>

          </Grid>
        </Box>

        <Box className={global.fadeInUp} sx={{ display: "flex", flexDirection: "column", paddingTop: "5%" }}>
          <Grid container rowSpacing={5}>
            <Grid item xs={12} sm={11} md={10}  lg={8}>
              <h3 style={{ fontSize: '26px' }}><strong>Hate Incident Civil remedies and resources
              </strong></h3>
              <Typography sx={{ fontSize: "18px" }}>
                Over the past several years, there has been an alarming rise of hate crimes and incidents against marginalized members of our community.  The California Fair Employment and Housing Council (Council) and the Department of Fair Employment and Housing (DFEH) have taken increased and focused actions to try and address this surge of civil rights abuses. Victims of hate incidents might not be aware that they can file a complaint with DFEH and/or seek civil remedies through court action under the Ralph Civil Rights Act, Cal. Civ. Code Section 51, and thereby secure restraining orders, actual damages, punitive damages, civil penalties and attorney’s fees.
              </Typography>
            </Grid>
          </Grid>

          <Box sx={{ marginTop: "20px" }}>
            <ul className={trainingStyle.listBox}>
              <li className={trainingStyle.list}>
                <Box className={trainingStyle.bullet}></Box>
                <Typography sx={{ fontSize: "18px" }} className={styles.listItem}><Link href="#" style={{ fontSize: '18px' }}>September 2021 hearing on hate violence</Link></Typography>
              </li>
              <li className={trainingStyle.list}>
                <Box className={trainingStyle.bullet}></Box>
                <Typography sx={{ fontSize: "18px" }} className={styles.listItem}><Link href="#" style={{ fontSize: '18px' }}>Hate Violence and Civil Rights Fact Sheet</Link></Typography>
              </li>
              <li className={trainingStyle.list}>
                <Box className={trainingStyle.bullet}></Box>
                <Typography sx={{ fontSize: "18px" }} className={styles.listItem}><Link href="#" style={{ fontSize: '18px' }}>US Department of Justice Collection of Hate Crimes Resources</Link></Typography>
              </li>
              <li className={trainingStyle.list}>
                <Box className={trainingStyle.bullet}></Box>
                <Typography sx={{ fontSize: "18px" }} className={styles.listItem}><Link href="#" style={{ fontSize: '18px' }}>US Department of Justice Hate Violence Educational Opportunities</Link></Typography>
              </li>
            </ul>
          </Box>

          <Box className={global.fadeInUp} >
            <Grid container sx={{ marginTop: "40px" }} rowSpacing={5} columnSpacing={5}>

              <Grid item xs={12} sm={6}>
                <Box sx={{ backgroundColor: "#ebf4f7", padding: "30px 30px 30px 40px", display: "flex", flexDirection: "column", gap: "20px" }}>
                  <Typography sx={{ fontSize: "26px", fontWeight: "bold" }}>Information on Hate Crimes
                  </Typography>
                  <ul className={styles.listItem}>
                    <li><Link href="javascript:;"><Typography>What are Hate Crimes?</Typography></Link></li>
                    <li><Link href="javascript:;"><Typography>What LAPD is Doing to Fight Hate Crimes</Typography></Link></li>
                    <li><Link href="javascript:;"><Typography>Hate Crime Literature</Typography></Link></li>
                    <li><Link href="javascript:;"><Typography>LAPD/LGBTQ Information</Typography></Link></li>
                    <li><Link href="javascript:;"><Typography>Other Public Agencies that Can Provide Information on Hate Crimes</Typography></Link></li>
                    <li><Link href="javascript:;"><Typography>Where to Get Help if You are a Victim of a Hate Crime</Typography></Link></li>
                    <li><Link href="javascript:;"><Typography>Hate Crimes on the Internet</Typography></Link></li>
                    <li><Link href="javascript:;"><Typography>Hate Crimes and Youth</Typography></Link></li>
                    <li><Link href="javascript:;"><Typography>Security Assessments</Typography></Link></li>
                    <li><Link href="javascript:;"><Typography>Hate Crime Circular</Typography></Link></li>
                    <li><Link href="javascript:;"><Typography>More Information about Hate Crimes</Typography></Link></li>
                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>Hate Crimes Circular PDF - English</Typography></Link></li>
                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>Hate Crimes Circular PDF - Chinese Mandarin </Typography></Link></li>
                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>Hate Crimes Circular PDF - Español</Typography></Link></li>
                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>Hate Crimes Circular PD - Japanese</Typography></Link></li>
                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>Hate Crimes Circular PD - Thai</Typography></Link></li>
                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>Hate Crimes Circular PD - Vietnamese</Typography></Link></li>
                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><Image src={Img1} alt="pdf" style={{ height: '20px', width: '20px', marginRight: '14px' }} /><Typography>Special Order 40</Typography></Link></li>

                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Hate Crime Video</Typography></Link></li>
                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Hate Crime PSA - Chinese</Typography></Link></li>
                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Hate Crime PSA -Japanese</Typography></Link></li>
                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Hate Crime PSA - Korean</Typography></Link></li>
                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Hate Crime PSA - Tagalog</Typography></Link></li>
                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Hate Crime PSA - Thai</Typography></Link></li>
                    <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} /><Typography>Hate Crime PSA - Vietnamese</Typography></Link></li>


                  </ul>              </Box>

              </Grid>



            </Grid>
          </Box>

        </Box>

      </Container>
    </>
  )
}

export default Training