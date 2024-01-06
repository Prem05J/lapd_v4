'use client'
import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import global from "../../../global.module.css"
import Link from 'next/link'
import LaunchIcon from '@mui/icons-material/Launch';
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from "./styles.module.css"
import Image from 'next/image'
import pdf from "../../../../../public/Icons/pdf-svg-icon.svg"
import { Container } from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Data from "../../../../../public/EmptyData/incidentData.json"
import Colors from "../../../../stylingColors/colors.module.scss"
import Data1 from "../../../../../public/EmptyData/incidentData1.json"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: Colors.darkBlue,
      color: theme.palette.common.white,
      padding:"14px 10px",
      fontWeight:"bold",
      borderRight:"1px solid #fff"
      
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      padding:"13.8px 10px",
      borderRight:"1px solid #dee2e6"
     
      
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
      backgroundColor:Colors.lightBlue,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      
      borderRight:"1px solid #dee2e6"
    },
  }));

const CriticalIncident = () => {
    const mobile = useMediaQuery('(max-width: 576px)');
  return (
    <div>
        <Box sx={{ display: 'flex', padding: '32px 0px', flexDirection: 'column', background: '#0f212b' }}>
            <Container>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                <Typography className={global.fadeInUp} sx={{ marginBottom: '8px', color: '#fff', fontSize: mobile ? '18px' : '22px' }}>The Board of Police Commissioners Critical Incident Video Release Policy. Effective April 19, 2018. Click link below to read News Release.</Typography>
                <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 20px', fontSize: mobile ? '30px' : '62px', fontWeight: '700' }}>Critical Incident Videos</Typography>
                <Link className={global.fadeInUp} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} href='https://www.lapdonline.org/office-of-the-chief-of-police-ocop/'>
                    <LaunchIcon sx={{ fontSize: 'large', color: '#fff', marginRight: '5px' }} />
                    <Typography sx={{ padding: '0px 0px 0xp 20px', color: "#7DDFFF", fontSize: "16px", textTransform: "none", '&:hover': { color: "#fff" } }}>Board of Police Commissioners Critical Incident Video News Release Policy</Typography>
                </Link>
                </Grid>
               
                </Grid>
                </Container>
            </Box>

              <Container>
      <Box className={global.fadeInUp} sx={{padding:"60px 0px 40px 0px",display:"flex",flexDirection:"column",gap:"70px"}}>

             <Grid container columnSpacing={5} rowSpacing={5}>
                <Grid item xs={12} sm={7} md={6} lg={6} xl={6}>
                <Box sx={{backgroundColor:"#ebf4f7",padding:"40px 30px 40px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>Use of Force Policy</Typography>
                     
                      <ul className={styles.listItem}>
                      
                      <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>
                        <Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} /><Typography>
                        Use of Force Policy </Typography></Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>
                        <Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} /><Typography>
                        Use of Force Policy - Directive 1.3</Typography></Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>
                        <Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} /><Typography>
                        Critical Incident Video Release Policy </Typography></Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>
                        <Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} /><Typography>
                        Special Order 23 - Policy on the Use of Force </Typography></Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>
                        <Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} /><Typography>
                        Level III Non-Categorical Use of Force </Typography></Link></li>
                            <li><Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}>
                        <Image src={pdf} alt='pdf' style={{ height: '20px', width: '20px', marginRight: '10px' }} /><Typography>
                        Special Order 5 - Vehicle Pursuit </Typography></Link></li>

                     </ul>
              </Box>

                </Grid>
                </Grid>

                <Grid container columnSpacing={5} rowSpacing={5}>

                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Box sx={{backgroundColor:"#ebf4f7",height:"100%",padding:"40px 30px 40px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>
                        Force Investigation Division</Typography>
                        <Typography sx={{fontSize:"16px",fontWeight:"400",letterSpacing:".09px",lineHeight:"24px"}}>
                            The Force Investigation Division (FID) is responsible for the investigation of all incidents
                             involving the use of deadly force of an LAPD officer. In addition, all use of force resulting 
                             in an injury requiring hospitalization commonly referred to as a Law Enforcement Related 
                             Injury (LERI).</Typography>
                     <Typography sx={{fontSize:"16px",fontWeight:"400",letterSpacing:".09px",lineHeight:"24px"}}>Investigative responsibility of FID also includes all deaths while the arrestee or detainee is in the custodial care of the LAPD, accidental and animal shootings and other investigations as directed by the Chief of Detectives.</Typography>
                    <Box sx={{display:"flex",flexDirection:"column",gap:"5px"}}>
                    <Typography> 100 W. First Street Suite 431 </Typography>
                    <Typography> Los Angeles, CA 90012 </Typography>
                    <Typography> (213) 486-5230 (Main) </Typography>
                    <Typography>(213) 486-5250 (fax) </Typography>
                    </Box>
              </Box>

                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Box sx={{backgroundColor:"#ebf4f7",height:"100%",padding:"40px 30px 40px 40px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"26px",fontWeight:"bold"}}>Office of Inspector General</Typography>
                      <Typography sx={{fontSize:"16px",fontWeight:"400",letterSpacing:".09px",lineHeight:"24px"}}>
                      The OIG is separate and independent from the Department. The OIG also reviews investigations specific to 
                      all officer-involved shootings and significant uses of force that result in death or hospitalization, 
                      as well as complaint investigations of police officer misconduct.</Typography>
                      <Typography>The OIG conducts its own performance-related audits, as well as other reviews.</Typography>
                      <Typography className={styles.linkTypo}>For further contact, please call <Link href="#">(213) 893-6400.</Link></Typography>
                     <ul className={styles.listItem}>
                        <li>
                        <Link href="javascript:;" style={{ display: 'flex', alignItems: 'center' }}><LaunchIcon sx={{ color: 'black', marginRight: '10px' }} />
                        <Typography>Office of Inspector General</Typography></Link>
            
                            </li></ul> 
              </Box>

                </Grid>

                </Grid>

                      <Box sx={{marginTop:"60px"}}>
                     <Typography sx={{fontWeight:"700",lineHeight:"1.23",letterSpacing:"-.11px",fontSize:"28px"}}>Legend Key</Typography>
                  <Grid container >
                  
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{marginTop:"30px"}}>
                    
                   <table className={styles.table}>
                    <tbody>
                        <tr className={styles.row}>
                            <td className={styles.data}><Typography>VID - Video Available</Typography></td>
                            <td className={styles.data}><Typography>O.I.S./H - Officer Involved Shooting with Hits</Typography></td>
                            <td className={styles.data}><Typography>LERI - Law Enforcement Related Injury</Typography></td>
                            <td className={styles.data}><Typography>O.I.A.S. - Officer Involved Animal Shooting</Typography></td>
                            <td className={styles.data}><Typography>TUD - Tactical Unintentional Discharge</Typography></td>

                        </tr>
                        <tr className={styles.row}>
                            <td className={styles.data}><Typography>NVA - No Video Available</Typography></td>
                            <td className={styles.data}><Typography>O.I.S./NH - Officer Involved Shooting with No Hits</Typography></td>
                            <td className={styles.data}><Typography>ICD - In-Custody Death</Typography></td>
                            <td className={styles.data}><Typography>NTUD - Non-Tactical Unintentional Discharge</Typography></td>
                            <td className={styles.data}><Typography>CUOF - Categorical Use of Force</Typography></td>

                        </tr>
                        <tr className={styles.row}>
                            <td className={styles.data}>
                               <Typography>MCIT- Multi-Disciplinary Collision Investigation Team</Typography>
                               </td> 
                               <td className={styles.data}>
                               <Typography>LFO - Lethal Force Other</Typography>
                               </td> 
                               <td className={styles.data}>
                               <Typography>K9 Contact - with Hospitalization (dog bite)</Typography>
                               </td> 
                               <td className={styles.data}>
                               
                               </td> 
                               <td className={styles.data}>
                              
                               </td> 
                           
                            </tr>
                     </tbody>
                    </table>
              
                    </Grid>
                   </Grid>
                     </Box>

                   <Box>
                 <Typography sx={{fontWeight:"700",lineHeight:"1.23",letterSpacing:"-.11px",fontSize:"28px"}}>2023 Non-Force Investigation Division Critical Incidents</Typography>
                  <Grid container >
                  
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{marginTop:"30px"}}>
                    
                    <TableContainer sx={{border:"1px solid #dee2e6" }}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell>Division</StyledTableCell>
            <StyledTableCell>Location</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>NR Number</StyledTableCell>
            <StyledTableCell>VID</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            {Data.map((data) => (
              <StyledTableRow key={data.Sno}>
              <StyledTableCell>{data.Sno}</StyledTableCell>
              <StyledTableCell>{data.Date}</StyledTableCell>
              <StyledTableCell>{data.Type}</StyledTableCell>
              <StyledTableCell>{data.Division}</StyledTableCell>
              <StyledTableCell>{data.Location}</StyledTableCell>
              <StyledTableCell className={styles.linkName} ><Link href="#">{data.Name}</Link></StyledTableCell>
              <StyledTableCell>{data.NRNumber}</StyledTableCell>
              <StyledTableCell className={styles.linkName}>
                {
                        data.Video ? 
                        <Link href="#"><Typography sx={{fontSize:"14px"}}>{data.VID}</Typography></Link> : <Typography sx={{fontSize:"14px"}}>{data.VID}</Typography>
                    }
              </StyledTableCell>
            </StyledTableRow>
             ))}
       
        </TableBody>
                 </Table>
                 </TableContainer>
              
                    </Grid>
                   </Grid>

                   </Box>

                   <Box>
                 <Typography sx={{fontWeight:"700",lineHeight:"1.23",letterSpacing:"-.11px",fontSize:"28px"}}>2023 O.I.S. Shootings and Critical Incidents</Typography>
                  <Grid container >
                  
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{marginTop:"30px"}}>
                    
                    <TableContainer sx={{border:"1px solid #dee2e6" }}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
               <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell>Division</StyledTableCell>
            <StyledTableCell>Location</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>C.I. Number</StyledTableCell>
            <StyledTableCell>Video</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            {Data1.map((data) => (
              <StyledTableRow key={data.Sno}>
              <StyledTableCell>{data.Sno}</StyledTableCell>
              <StyledTableCell>{data.Date}</StyledTableCell>
              <StyledTableCell>{data.Type}</StyledTableCell>
              <StyledTableCell>{data.Division}</StyledTableCell>
              <StyledTableCell>{data.Location}</StyledTableCell>
              <StyledTableCell className={styles.linkName} >

                {
                  data.Name.match("Please contact the Los Angeles School Police Department for details.") ||
                   data.Name.match("Boles, Jason") ? 
                  <Typography>{data.Name}</Typography> 
                  : <Link href="#">{data.Name}</Link>
                }
                
                
                
                </StyledTableCell>
              <StyledTableCell>{data.NRNumber}</StyledTableCell>
              <StyledTableCell className={styles.linkName}>
                {
                        data.Video ? 
                        <Link href="#"><Typography sx={{fontSize:"14px"}}>{data.VID}</Typography></Link> : <Typography sx={{fontSize:"14px"}}>{data.VID}</Typography>
                    }
              </StyledTableCell>
            </StyledTableRow>
             ))}
       
        </TableBody>
                 </Table>
                 </TableContainer>
              
                    </Grid>
                   </Grid>

                   </Box>


              <Grid container rowSpacing={5} columnSpacing={4}>
                   <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Box sx={{backgroundColor:"#ebf4f7",height:"100%",padding:"30px 0px 0px 30px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"22px",fontWeight:"bold"}}>Previous O.I.S. Shootings and Critical Incidents</Typography>
                       <Typography className={styles.linkText} sx={{fontSize:"18px"}} ><span className={styles.spanDash}></span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link href="javascript:;">2022 O.I.S. Shootings and Critical Incidents</Link> </Typography>
              </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Box sx={{backgroundColor:"#ebf4f7",height:"100%",padding:"30px 0px 0px 30px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"22px",fontWeight:"bold"}}>Previous O.I.S. Shootings and Critical Incidents</Typography>
                       <Typography className={styles.linkText} sx={{fontSize:"18px"}} ><span className={styles.spanDash}></span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link href="javascript:;">2021 O.I.S. Shootings and Critical Incidents</Link> </Typography>
              </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Box sx={{backgroundColor:"#ebf4f7",height:"100%",padding:"30px 0px 0px 30px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"22px",fontWeight:"bold"}}>Previous O.I.S. Shootings and Critical Incidents</Typography>
                       <Typography className={styles.linkText} sx={{fontSize:"18px"}} ><span className={styles.spanDash}></span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link href="javascript:;">2020 O.I.S. Shootings and Critical Incidents</Link> </Typography>
              </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Box sx={{backgroundColor:"#ebf4f7",height:"100%",padding:"30px 0px 0px 30px",display:"flex",flexDirection:"column",gap:"20px"}}>
                      <Typography  sx={{fontSize:"22px",fontWeight:"bold"}}>Previous O.I.S. Shootings and Critical Incidents</Typography>
                       <Typography className={styles.linkText} sx={{fontSize:"18px"}} ><span className={styles.spanDash}></span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link href="javascript:;">2019 O.I.S. Shootings and Critical Incidents</Link> </Typography>
              </Box>
                  </Grid>
                </Grid> 

    </Box>
    </Container>
          
    </div>
  )
}

export default CriticalIncident