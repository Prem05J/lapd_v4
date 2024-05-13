'use client'
import React from 'react'
import Container from "@mui/material/Container";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from "@mui/material/Typography";
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery'

const OfficeKilled = () => {

    const mobile = useMediaQuery('(max-width: 696px)');   

  return (
    <div>
        <Container>
          <Breadcrumbs sx={{marginTop:"40px"}} aria-label="breadcrumb">
        <Typography sx={{fontSize:"14px"}} color="grey">Your LAPD</Typography>
        <Link   href="/" style={{textDecoration:"none",color:"grey",fontSize:"14px"}}>
        Officers Killed in the Line of Duty
        </Link>
          </Breadcrumbs>
        <Divider sx={{marginTop:"10px"}}/>
         <Typography sx={{marginTop:"30px",fontSize:"22px"}}>Officers Killed in the Line of Duty</Typography>
         <Grid container>
            <Grid item xs={10}  md={8} > 
            <Typography sx={{marginTop:"10px",fontSize:mobile ? "40px" :"62px",fontWeight:"bold",lineHeight:"1.1"}}>Heroism. Valor. In Memoriam.</Typography>
             </Grid>
         </Grid>
        </Container>
    </div>     
  )
}

export default OfficeKilled  