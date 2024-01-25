'use client'
import React, { useState } from 'react'
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import global from "../global.module.css";
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import policeImage from "../../../public/Images/image-findyourpolicestation.jpg"
import styles from "./style.module.css"
import location from "../../../public/Icons/icon-crimemapping-police.svg"
import pdf from "../../../public/Icons/pdf-svg-icon.svg"
import Colors from "../../stylingColors/colors.module.scss"
import Data1 from "../../../public/EmptyData/communites.json"
import Data2 from "../../../public/EmptyData/police-station-devision.json"
import Data3 from '../../../public/EmptyData/bureaus.json'
import Data4 from "../../../public/EmptyData/trafic_homicdie.json"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandPlusIcon from '@mui/icons-material/Add';
import ExpandminusIcon from '@mui/icons-material/Remove';




const PolicsStation = () => {

    const [selectedTab, setSelectedTab] = useState(0);
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (isExapnded: boolean, panel: string) => {
      setExpanded(isExapnded ? panel : false)
  }
  

  
  const handleTabChange = (event: any, newValue: any) => {
    setSelectedTab(newValue);
  };



  return (
    <div>
        <Container>
        <Breadcrumbs aria-label="breadcrumb">
        <Typography sx={{fontSize:"14px"}} color="grey">Your LAPD</Typography>
        <Link   href="/" style={{textDecoration:"none",color:"#000",fontSize:"14px"}}>
        Find Your Local Police Station
        </Link>
      </Breadcrumbs>
      <Divider sx={{marginTop:"10px"}}/>

       <Box sx={{marginTop:"70px"}}>
      <Grid container columnSpacing={10} rowSpacing={5}>
        <Grid item xs={12} md={7} lg={7.5}>
          
          <Typography sx={{fontSize:"20px"}}>Your LAPD by Bureau, Division, and Community</Typography>
          <Typography sx={{fontSize:"60px",fontWeight:"bold",lineHeight:"1.1",marginTop:"10px"}}>Find Your Local Police Station</Typography>
          <Typography sx={{fontSize:"19px",marginTop:"60px"}}>Partner with us to build safer communities throughout the City of Los Angeles. Enter your address below to locate the police station within your community.</Typography>
      
          <Box sx={{backgroundColor:"#ebf4f7",padding:"40px 20px",marginTop:"70px"}}>
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12} sm={12}  lg={7}>
                 <Typography>Street Address</Typography>
                 <TextField  className={global.fadeInUp}
             sx={{
                marginTop:"5px",
                width:"100%",
               backgroundColor: "white",
              paddingTop: "5px",
              paddingBottom: "5px",
              border: "1px solid black",
              ":hover": { border: "1px solid red", transitionDelay: ".2s;" }
            }}
            InputProps={{
                disableUnderline: true,
                style: {
                  marginLeft: "20px",
                  fontSize: "20px",
                },
              }}
               variant="standard"
                      />
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                  <Typography>City</Typography>
                  <TextField  className={global.fadeInUp}
             sx={{
                marginTop:"5px",
                width:"100%",
               backgroundColor: "white",
              paddingTop: "5px",
              paddingBottom: "5px",
              border: "1px solid black",
              ":hover": { border: "1px solid red", transitionDelay: ".2s;" }
            }}
            InputProps={{
                disableUnderline: true,
                style: {
                  marginLeft: "20px",
                  fontSize: "20px",
                },
              }}
               variant="standard"
                      />
                </Grid>
                <Grid item xs={12} sm={6} lg={2}>
                 <Typography>Zip Code</Typography>
                 <TextField  className={global.fadeInUp}
             sx={{
                marginTop:"5px",
               backgroundColor: "white",
               width:"100%",
              paddingTop: "5px",
              paddingBottom: "5px",
              border: "1px solid black",
              ":hover": { border: "1px solid red", transitionDelay: ".2s;" }
            }}
            InputProps={{
                disableUnderline: true,
                style: {
                  marginLeft: "20px",
                  fontSize: "20px",
                },
              }}
              variant="standard"
                      />
                </Grid>

            </Grid>

         <Link href="#" style={{textDecoration:"none"}}>
             <Box sx={{display:"flex",flexDirection:"row",width:"200px",gap:"5px",marginTop:"20px"}} className={global.contactBtn}>
             <SearchIcon sx={{color:"#fff",fontSize:"26px"}}/>
             <Typography sx={{ fontWeight: "bold",color:"#fff",textDecoration:"none"}}>
               FIND YOUR STATION</Typography>
             </Box>
                </Link>
         </Box>
         
               <Box sx={{display:"flex",flexDirection:"row",marginTop:"60px",gap:"30px"}}>
                  <Image src={location} alt="location-icon"/>
                  <Box>
                    <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>Want a visual representation of your LAPD communities?</Typography>
                       <Box sx={{display:"flex",flexDirection:"row",gap:"10px",marginTop:"5px"}}>
                      <Image src={pdf} alt="pdf-icon"/>
                      <Typography className={styles.linkText}><Link href="#">Download the Bureau and Division map</Link></Typography>
                       </Box>
                  </Box>
                </Box>
        </Grid>
        <Grid item xs={12} md={5} lg={4.5} className={styles.policeImage}>
             <Image src={policeImage} alt="Police-Image" />
        </Grid>

      </Grid>
      </Box>
 
      <Grid container>
        <Grid item xs={12} md={11} lg={8.5}>
        <Typography sx={{fontWeight:"bold",fontSize:"37px",lineHeight:"1.1",marginTop:"80px"}}>You can also find your local LAPD contacts by browsing:</Typography>

        </Grid>
      </Grid>


      <Box className={styles.tabContained} sx={{marginTop:"60px"}}>
           <Tabs
             value={selectedTab}
              onChange={handleTabChange}
              TabIndicatorProps={{
                style: {
                backgroundColor: Colors.orangeColor,
                height:"7px", 
                }
            }}
              sx={{"& button.Mui-selected": {color:Colors.orangeColor}}}
            >
              <Tab label="communities"  sx={{fontSize:"16px",fontWeight:"bold",color:"#000000"}}/>
              <Tab label="police station divisions"  sx={{fontSize:"16px",fontWeight:"bold",color:"#000000"}}/>
              <Tab label="Bureaus"  sx={{fontSize:"16px",fontWeight:"bold",color:"#000000"}}/>
              <Tab label="Traffic & Homicide"  sx={{fontSize:"16px",fontWeight:"bold",color:"#000000"}}/>

             
            </Tabs>
            <Divider sx={{backgroundColor:"#000"}}/>

           <Box sx={{marginTop:"50px"}}>
          <TabPanel value={selectedTab} index={0}>
            <Box>
            <Grid container >
            <Grid item xs={12}>
            <Box className={styles.linkletter}>
                   <Link href="#section-a">A</Link>
                   <Link href="#section-b">B</Link>
                   <Link href="#section-c">C</Link>
                   <Link href="#section-d">D</Link>
                   <Link href="#section-e">E</Link>
                   <Link href="#section-f">F</Link>
                   <Link href="#section-g">G</Link>
                   <Link href="#section-h">H</Link>
                   <Link href="#section-i">I</Link>
                   <Link href="#section-j">J</Link>
                   <Link href="#section-k">K</Link>
                   <Link href="#section-l">L</Link>
                   <Link href="#section-m">M</Link>
                   <Link href="#section-n">N</Link>
                   <Link href="#section-o">O</Link>
                   <Link href="#section-p">P</Link>
                   <Link href="#section-r">R</Link>
                   <Link href="#section-s">S</Link>
                   <Link href="#section-t">T</Link>
                   <Link href="#section-u">U</Link>
                   <Link href="#section-v">V</Link>
                   <Link href="#section-w">W</Link>
            </Box> 
            </Grid>  
            </Grid>

            <Grid container rowSpacing={3}  sx={{marginTop:"60px"}}>
            <Grid id="section-a" item xs={12} sm={6} md={4} lg={3}>
                
                <Typography  sx={{fontWeight:"bold",fontSize:"20px"}}>A</Typography>
                  {
                    Data1.A.map((data,index) => ( 
                   
                    <Box className={styles.linkListText} key={index}>
                   <Link   href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  
                  )
                  )}
               </Grid>
                <Grid id="section-b" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>B</Typography>
                  {
                  Data1.B.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-c" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>C</Typography>
                  {
                  Data1.C.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link   href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-d" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>D</Typography>
                  {
                  Data1.D.map((data,index) => ( 
                   <Box className={styles.linkListText}  key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-e" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>E</Typography>
                  {
                  Data1.E.map((data,index) => ( 
                   <Box className={styles.linkListText}  key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-f" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>F</Typography>
                  {
                  Data1.F.map((data,index) => ( 
                   <Box className={styles.linkListText}  key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-g" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>G</Typography>
                  {
                  Data1.G.map((data,index) => ( 
                   <Box className={styles.linkListText}  key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-h" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>H</Typography>
                  {
                  Data1.H.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-j" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>J</Typography>
                  {
                  Data1.J.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-k" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>K</Typography>
                  {
                  Data1.K.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-l" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>L</Typography>
                  {
                  Data1.L.map((data,index) => ( 
                   <Box className={styles.linkListText}  key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-m" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>M</Typography>
                  {
                  Data1.M.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-n" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>N</Typography>
                  {
                  Data1.N.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link  href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-o" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>O</Typography>
                  {
                  Data1.O.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-p" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>P</Typography>
                  {
                  Data1.P.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-r" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>R</Typography>
                  {
                  Data1.R.map((data,index) => ( 
                   <Box className={styles.linkListText}  key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-s" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>S</Typography>
                  {
                  Data1.S.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-t" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>T</Typography>
                  {
                  Data1.T.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-u" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>U</Typography>
                  {
                  Data1.U.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link  href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-v" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>V</Typography>
                  {
                  Data1.V.map((data,index) => ( 
                   <Box className={styles.linkListText}  key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-w" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>W</Typography>
                  {
                  Data1.W.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>

            </Grid>

          </Box>
          </TabPanel>
           <TabPanel value={selectedTab} index={1}>
           <Box>
            <Grid container >
            <Grid item xs={12}>
            <Box className={styles.linkletter}>
                   <Link href="#section-7">7</Link>
                   <Link href="#section-c">C</Link>
                   <Link href="#section-d">D</Link>
                   <Link href="#section-f">F</Link>
                   <Link href="#section-h">H</Link>
                   <Link href="#section-m">M</Link>
                   <Link href="#section-n">N</Link>
                   <Link href="#section-o">O</Link>
                   <Link href="#section-p">P</Link>
                   <Link href="#section-r">R</Link>
                   <Link href="#section-s">S</Link>
                   <Link href="#section-t">T</Link>
                   <Link href="#section-v">V</Link>
                   <Link href="#section-w">W</Link>
                </Box> 

            </Grid>
            </Grid>

            <Grid container rowSpacing={3}  sx={{marginTop:"60px"}}>
               <Grid id="section-7"  item xs={12} sm={6} md={4} lg={3}>
                <Typography  sx={{fontWeight:"bold",fontSize:"20px"}}>7</Typography>
                  {
                  Data2[7].map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                   <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  
                  )
                  )}
               </Grid>
                <Grid id="section-c" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>C</Typography>
                  {
                  Data2.C.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-d" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>D</Typography>
                  {
                  Data2.D.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-f" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>F</Typography>
                  {
                  Data2.F.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-h" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>H</Typography>
                  {
                  Data2.H.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-m" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>M</Typography>
                  {
                  Data2.M.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-n" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>N</Typography>
                  {
                  Data2.N.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-o" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>O</Typography>
                  {
                  Data2.O.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-p" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>P</Typography>
                  {
                  Data2.P.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-r" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>R</Typography>
                  {
                  Data2.R.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-s" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>S</Typography>
                  {
                  Data2.S.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-t" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>T</Typography>
                  {
                  Data2.T.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-v" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>V</Typography>
                  {
                  Data2.V.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-w" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>W</Typography>
                  {
                  Data2.W.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
             </Grid>

          </Box>
          </TabPanel>

          <TabPanel value={selectedTab} index={2}>
          <Box>
            <Grid container >
            <Grid item xs={12}>
            <Box className={styles.linkletter}>
                   <Link href="#section-c">C</Link>
                   <Link href="#section-d">D</Link>
                   <Link href="#section-s">S</Link>
                   <Link href="#section-v">V</Link>
                   <Link href="#section-w">W</Link>
                   </Box> 

            </Grid>
            </Grid>

            <Grid container rowSpacing={3}  sx={{marginTop:"60px"}}>
            <Grid  id="section-c" item xs={12} sm={6} md={4} lg={3}>
                
                <Typography  sx={{fontWeight:"bold",fontSize:"20px"}}>C</Typography>
                  {
                  Data3.C.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                   <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  
                  )
                  )}
               </Grid>
                <Grid id="section-d" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>D</Typography>
                  {
                  Data3.D.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid  id="section-s" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>S</Typography>
                  {
                  Data3.S.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-v" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>V</Typography>
                  {
                  Data3.V.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-w" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>W</Typography>
                  {
                  Data3.W.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
             </Grid>

          </Box>
          </TabPanel>

          <TabPanel value={selectedTab} index={3}>
          <Box>
            <Grid container >
            <Grid item xs={12}>
            <Box className={styles.linkletter}>
                   <Link href="#section-c">C</Link>
                   <Link href="#section-s">S</Link>
                   <Link href="#section-t">T</Link>
                   <Link href="#section-v">V</Link>
                   <Link href="#section-w">W</Link>
                   </Box> 

            </Grid>
            </Grid>

            <Grid container rowSpacing={3}  sx={{marginTop:"60px"}}>
            <Grid id="section-c"  item xs={12} sm={6} md={4} lg={3}>
                <Typography  sx={{fontWeight:"bold",fontSize:"20px"}}>C</Typography>
                  {
                      Data4.C.map((data,index) => ( 
                    <Box className={styles.linkListText} key={index}>
                   <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  
                  )
                  )}
               </Grid>
                <Grid id="section-s" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>S</Typography>
                  {
                  Data4.S.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-t" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>T</Typography>
                  {
                  Data4.T.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-v" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>V</Typography>
                  {
                  Data4.V.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="section-w" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>W</Typography>
                  {
                  Data4.W.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
             </Grid>

          </Box>
          </TabPanel>
          </Box>
      </Box>

      <Box className={styles.mobileTabContained} sx={{marginTop:"60px"}} >

      <Accordion 
       expanded={expanded === 'panel1'}
       onChange={(event, isExapnded) => handleChange(isExapnded, 'panel1')}
       elevation={0}>
        <AccordionSummary 
         expandIcon={expanded === 'panel1' ? <ExpandminusIcon  sx={{fontSize:"28px",color:"#000"}}/> : <ExpandPlusIcon  sx={{fontSize:"28px",color:"#000"}}/>}>
         <Typography sx={{fontWeight:"bold",fontSize:"16px",textTransform:"uppercase"}}>Communities</Typography>
        </AccordionSummary>
        <AccordionDetails >
        <Divider />
        <Box sx={{marginTop:"30px"}}>
            <Grid container >
            <Grid item xs={12}>
            <Box className={styles.linkletter}>
                   <Link href="#div-a">A</Link>
                   <Link href="#div-b">B</Link>
                   <Link href="#div-c">C</Link>
                   <Link href="#div-d">D</Link>
                   <Link href="#div-e">E</Link>
                   <Link href="#div-f">F</Link>
                   <Link href="#div-g">G</Link>
                   <Link href="#div-h">H</Link>
                   <Link href="#div-i">I</Link>
                   <Link href="#div-j">J</Link>
                   <Link href="#div-k">K</Link>
                   <Link href="#div-l">L</Link>
                   <Link href="#div-m">M</Link>
                   <Link href="#div-n">N</Link>
                   <Link href="#div-o">O</Link>
                   <Link href="#div-p">P</Link>
                   <Link href="#div-r">R</Link>
                   <Link href="#div-s">S</Link>
                   <Link href="#div-t">T</Link>
                   <Link href="#div-u">U</Link>
                   <Link href="#div-v">V</Link>
                   <Link href="#div-w">W</Link>
            </Box> 
            </Grid>  
            </Grid>

            <Grid container rowSpacing={3}  sx={{marginTop:"60px"}}>
            <Grid id="div-a" item xs={12} sm={6} md={4} lg={3}>
                
                <Typography  sx={{fontWeight:"bold",fontSize:"20px"}}>A</Typography>
                  {

                  Data1.A.map((data,index) => ( 
                   
                    <Box className={styles.linkListText} key={index}>
                   <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  
                  )
                  )}
               </Grid>
                <Grid id="div-b" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>B</Typography>
                  {
                  Data1.B.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-c" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>C</Typography>
                  {
                  Data1.C.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-d" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>D</Typography>
                  {
                  Data1.D.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-e" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>E</Typography>
                  {
                  Data1.E.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-f" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>F</Typography>
                  {
                  Data1.F.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-g" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>G</Typography>
                  {
                  Data1.G.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-h" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>H</Typography>
                  {
                  Data1.H.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-j" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>J</Typography>
                  {
                  Data1.J.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-k" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>K</Typography>
                  {
                  Data1.K.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-l" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>L</Typography>
                  {
                  Data1.L.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-m" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>M</Typography>
                  {
                  Data1.M.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-n" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>N</Typography>
                  {
                  Data1.N.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-o" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>O</Typography>
                  {
                  Data1.O.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-p" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>P</Typography>
                  {
                  Data1.P.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-r" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>R</Typography>
                  {
                  Data1.R.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-s" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>S</Typography>
                  {
                  Data1.S.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-t" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>T</Typography>
                  {
                  Data1.T.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-u" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>U</Typography>
                  {
                  Data1.U.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-v" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>V</Typography>
                  {
                  Data1.V.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-w" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>W</Typography>
                  {
                  Data1.W.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>

            </Grid>

          </Box>
        </AccordionDetails>
      </Accordion>

       <Accordion
       expanded={expanded === 'panel2'}
       onChange={(event, isExapnded) => handleChange(isExapnded, 'panel2')}
        elevation={0}>
        <AccordionSummary
          expandIcon={expanded === 'panel2' ? <ExpandminusIcon  sx={{fontSize:"28px",color:"#000"}}/> : <ExpandPlusIcon sx={{fontSize:"28px",color:"#000"}} />}>
         <Typography sx={{fontWeight:"bold",fontSize:"16px",textTransform:"uppercase"}}>police station divisions</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Divider />
        <Box sx={{marginTop:"30px"}}>
            <Grid container >
            <Grid item xs={12}>
            <Box className={styles.linkletter}>
                   <Link href="#div-7">7</Link>
                   <Link href="#div-c">C</Link>
                   <Link href="#div-d">D</Link>
                   <Link href="#div-f">F</Link>
                   <Link href="#div-h">H</Link>
                   <Link href="#div-m">M</Link>
                   <Link href="#div-n">N</Link>
                   <Link href="#div-o">O</Link>
                   <Link href="#div-p">P</Link>
                   <Link href="#div-r">R</Link>
                   <Link href="#div-s">S</Link>
                   <Link href="#div-t">T</Link>
                   <Link href="#div-v">V</Link>
                   <Link href="#div-w">W</Link>
                </Box> 

            </Grid>
            </Grid>

            <Grid container rowSpacing={3}  sx={{marginTop:"60px"}}>
               <Grid id="div-7"  item xs={12} sm={6} md={4} lg={3}>
                <Typography  sx={{fontWeight:"bold",fontSize:"20px"}}>7</Typography>
                  {
                  Data2[7].map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                   <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  
                  )
                  )}
               </Grid>
                <Grid id="div-c" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>C</Typography>
                  {
                  Data2.C.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-d" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>D</Typography>
                  {
                  Data2.D.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-f" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>F</Typography>
                  {
                  Data2.F.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-h" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>H</Typography>
                  {
                  Data2.H.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-m" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>M</Typography>
                  {
                  Data2.M.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-n" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>N</Typography>
                  {
                  Data2.N.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-o" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>O</Typography>
                  {
                  Data2.O.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-p" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>P</Typography>
                  {
                  Data2.P.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-r" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>R</Typography>
                  {
                  Data2.R.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-s" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>S</Typography>
                  {
                  Data2.S.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-t" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>T</Typography>
                  {
                  Data2.T.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-v" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>V</Typography>
                  {
                  Data2.V.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-w" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>W</Typography>
                  {
                  Data2.W.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
             </Grid>

          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
       expanded={expanded === 'panel3'}
       onChange={(event, isExapnded) => handleChange(isExapnded, 'panel3')}
        elevation={0}>
        <AccordionSummary
         expandIcon={expanded === 'panel3' ? <ExpandminusIcon sx={{fontSize:"28px",color:"#000"}} /> : <ExpandPlusIcon  sx={{fontSize:"28px",color:"#000"}}/>}>
         
         <Typography sx={{fontWeight:"bold",fontSize:"16px",textTransform:"uppercase"}}>Bureaus</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Divider />
        <Box sx={{marginTop:"30px"}}>
            <Grid container >
            <Grid item xs={12}>
            <Box className={styles.linkletter}>
                   <Link href="#div-c">C</Link>
                   <Link href="#div-d">D</Link>
                   <Link href="#div-s">S</Link>
                   <Link href="#div-v">V</Link>
                   <Link href="#div-w">W</Link>
                   </Box> 

            </Grid>
            </Grid>

            <Grid container rowSpacing={3}  sx={{marginTop:"60px"}}>
            <Grid  id="div-c" item xs={12} sm={6} md={4} lg={3}>
                
                <Typography  sx={{fontWeight:"bold",fontSize:"20px"}}>C</Typography>
                  {
                  Data3.C.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                   <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  
                  )
                  )}
               </Grid>
                <Grid id="div-d" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>D</Typography>
                  {
                  Data3.D.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid  id="div-s" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>S</Typography>
                  {
                  Data3.S.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-v" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>V</Typography>
                  {
                  Data3.V.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-w" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>W</Typography>
                  {
                  Data3.W.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
             </Grid>

          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
       expanded={expanded === 'panel4'}
       onChange={(event, isExapnded) => handleChange(isExapnded, 'panel4')}
        elevation={0}>
        <AccordionSummary
         expandIcon={expanded === 'panel4' ? <ExpandminusIcon sx={{fontSize:"28px",color:"#000"}} /> : <ExpandPlusIcon  sx={{fontSize:"28px",color:"#000"}}/>}>
         <Typography sx={{fontWeight:"bold",fontSize:"16px",textTransform:"uppercase"}}>Traffic & Homicide</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Divider />
        <Box sx={{marginTop:"30px"}}>
            <Grid container >
            <Grid item xs={12}>
            <Box className={styles.linkletter}>
                   <Link href="#div-c">C</Link>
                   <Link href="#div-s">S</Link>
                   <Link href="#div-t">T</Link>
                   <Link href="#div-v">V</Link>
                   <Link href="#div-w">W</Link>
                   </Box> 

            </Grid>
            </Grid>

            <Grid container rowSpacing={3}  sx={{marginTop:"60px"}}>
            <Grid id="div-c"  item xs={12} sm={6} md={4} lg={3}>
                
                <Typography  sx={{fontWeight:"bold",fontSize:"20px"}}>C</Typography>
                  {

                  Data4.C.map((data,index) => ( 
                   
                    <Box className={styles.linkListText} key={index}>
                   <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  
                  )
                  )}
               </Grid>
                <Grid id="div-s" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>S</Typography>
                  {
                  Data4.S.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-t" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>T</Typography>
                  {
                  Data4.T.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-v" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>V</Typography>
                  {
                  Data4.V.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid id="div-w" item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>W</Typography>
                  {
                  Data4.W.map((data,index) => ( 
                   <Box className={styles.linkListText} key={index}>
                    <Link href={data.anchor}><Typography>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
             </Grid>

        </Box>
        </AccordionDetails>
      </Accordion>

      <Divider />
      
      
      </Box>

        </Container>
        </div>
  )
}

export default PolicsStation



function TabPanel(props: any) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}
      >
        {value === index && <Box p={0}>{children}</Box>}
      </div>
    );
   }