import React from 'react'
import { Box, Grid } from '@mui/material'
import footerStyle from "../styles/footer.module.css"
import Link from 'next/link'


const Subfooter = () => {
  return (
    <Box sx={{textAlign:"center"}} className={footerStyle.subfooter}>
    <Grid container>
      <Grid item md={8} lg={9} className={footerStyle.subclr}>
        <span>Copyright ©2023<Link href="#" target={'_blank'} className={footerStyle.sublnk}> Los Angeles Police Foundation</Link> and the LAPD. All Rights Reserved.</span><span className={footerStyle.spn}><Link href="#" target={'_blank'} className={footerStyle.sublnk}>Privacy Policy</Link></span> <span className={footerStyle.spn}><Link href="#" target={'_blank'} className={footerStyle.sublnk}>Do Not Sell My Info</Link></span>
      </Grid>
      <Grid item md={4} lg={3}>
        <span><Link href="#" target="_blank" rel='noopener'></Link></span>
      </Grid>
    </Grid>
  </Box>
    )
}

export default Subfooter