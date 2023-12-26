import React from 'react'
import { Box, Grid } from '@mui/material'
import Footer1 from "../../public/Images/footer1.jpg"
import Footer2 from "../../public/Images/footer2.jpg"
import footerStyle from "../styles/footer.module.css"
import Image from 'next/image'
import Link from 'next/link'
import { Padding } from '@mui/icons-material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Facebook from '../../public/Icons/icon-fb.svg'
import Subfooter from "./Subfooter"

const Footer = () => {
  return (
    <Box sx={{paddingTop:"5%"}}>
     <Box sx={{ position: 'relative' }}>
      {/* Image */}
      <Box sx={{ display: "flex" }} className={footerStyle.footerblock}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} className={footerStyle.bag}>
            <Image className={footerStyle.footerImage} src={Footer1} alt="footer-image1" />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <Image className={footerStyle.footerImage} src={Footer2} alt="footer-image1" />
          </Grid>
        </Grid>
      </Box>

  

      {/* Social Block */}
      <Grid container sx={{padding:"0% 10%"}}  className={footerStyle.socialspace} data-aos="fade-up"
     data-aos-duration="1500">
        <Grid item lg={4} sx={{ margin: '0px 0px 15px 30px' }}>
          <Box className={footerStyle.socialcard}>
            <h6 className={footerStyle.hsix} style={{ color: '#798c96' }}>STAY CONNECTED</h6>

            <ul className={footerStyle.list}>
              <li style={{ display: 'flex', alignItems: 'center' }}><Link href="#" className={footerStyle.lnk}><Image className={footerStyle.scimg} src={Facebook} alt="facebook" /><span className={footerStyle.fbspace}>Facebook</span></Link></li>
              <li><Link href="#" className={footerStyle.lnk}><InstagramIcon className={footerStyle.scrclr} /><span className={footerStyle.fbspace}>Instagram</span></Link></li>
              <li><Link href="#" className={footerStyle.lnk}><TwitterIcon className={footerStyle.scrclr} /><span className={footerStyle.fbspace}>Twitter</span></Link></li>
              <li><Link href="#" className={footerStyle.lnk}><YouTubeIcon className={footerStyle.scrclr} /><span className={footerStyle.fbspace}>Youtube</span></Link></li>
            </ul>
          </Box>
        </Grid>
      </Grid>
      {/* Empty container */}
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} className={footerStyle.clearfix}>
        </Grid>
      </Grid>

      {/* Quick links */}
      <Box sx={{ margin: '30px 30px 0px',padding:"0% 10% 0% 10%" }} className={footerStyle.mobspace}>
        <Grid container>
          <Grid item sm={12} lg={8}>
            <h6 className={footerStyle.hsix}>QUICKLINKS</h6>
            <Grid container>
              <Grid item xs={12} sm={4} lg={4}>
                <ul className={footerStyle.list}>
                  <li><Link href="#" className={footerStyle.lnk}>File a Police Report</Link></li>
                  <li ><Link href="#" className={`${footerStyle.lnk} ${footerStyle.obt}`}>Obtain a Traffic Collision Report</Link></li>
                  <li><Link href="#" className={footerStyle.lnk}>Crime Mappings</Link></li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={4} lg={4}>
                <ul className={footerStyle.list}>
                  <li><Link href="#" className={footerStyle.lnk}>Join the Team</Link></li>
                  <li><Link href="#" className={footerStyle.lnk}>Police Commission</Link></li>
                  <li><Link href="#" className={footerStyle.lnk}>Reference Library</Link></li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={4} lg={4}>
                <ul className={footerStyle.list}>
                  <li><Link href="#" className={footerStyle.lnk}>Contact us</Link></li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12} lg={4}>
            <h6 className={footerStyle.hsix}>TRANSLATE THIS PAGE</h6>
          </Grid>
        </Grid>
      </Box>


    </Box>
    <Subfooter />
    </Box>
  )
}

export default Footer