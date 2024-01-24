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



const PolicsStation = () => {

    const [selectedTab, setSelectedTab] = useState(0);


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
        <Grid item xs={12} md={11} lg={8}>
        <Typography sx={{fontWeight:"bold",fontSize:"37px",lineHeight:"1.1",marginTop:"80px"}}>You can also find your local LAPD contacts by browsing:</Typography>

        </Grid>
      </Grid>


      <Box sx={{marginTop:"60px"}}>
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
                   <Link href="#">A</Link>
                   <Link href="#">B</Link>
                   <Link href="#">C</Link>
                   <Link href="#">D</Link>
                   <Link href="#">E</Link>
                   <Link href="#">F</Link>
                   <Link href="#">G</Link>
                   <Link href="#">H</Link>
                   <Link href="#">I</Link>
                   <Link href="#">J</Link>
                   <Link href="#">K</Link>
                   <Link href="#">L</Link>
                   <Link href="#">M</Link>
                   <Link href="#">N</Link>
                   <Link href="#">O</Link>
                   <Link href="#">P</Link>
                   <Link href="#">R</Link>
                   <Link href="#">S</Link>
                   <Link href="#">T</Link>
                   <Link href="#">U</Link>
                   <Link href="#">V</Link>
                   <Link href="#">W</Link>
            </Box> 
            </Grid>
            </Grid>

            <Grid container rowSpacing={3}  sx={{marginTop:"60px"}}>
            <Grid  item xs={12} sm={6} md={4} lg={3}>
                
                <Typography  sx={{fontWeight:"bold",fontSize:"20px"}}>A</Typography>
                  {

                  Data1.A.map((data,index) => ( 
                   
                    <Box key={index} sx={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
                   <Link style={{textDecoration:"none"}}  href={data.anchor}><Typography sx={{color:"black",":hover":{color:"#e73f15"}}}>{data.name}</Typography></Link>
                    </Box> 
                  
                  )
                  )}
               </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>B</Typography>
                  {
                  Data1.B.map((data) => ( 
                   <Box  key="index" sx={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
                    <Link style={{textDecoration:"none"}}  href={data.anchor}><Typography sx={{color:"black",":hover":{color:"#e73f15"}}}>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>C</Typography>
                  {
                  Data1.C.map((data) => ( 
                   <Box  key="index" sx={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
                    <Link style={{textDecoration:"none"}}  href={data.anchor}><Typography sx={{color:"black",":hover":{color:"#e73f15"}}}>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>D</Typography>
                  {
                  Data1.D.map((data) => ( 
                   <Box  key="index" sx={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
                    <Link style={{textDecoration:"none"}}  href={data.anchor}><Typography sx={{color:"black",":hover":{color:"#e73f15"}}}>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>E</Typography>
                  {
                  Data1.E.map((data) => ( 
                   <Box  key="index" sx={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
                    <Link style={{textDecoration:"none"}}  href={data.anchor}><Typography sx={{color:"black",":hover":{color:"#e73f15"}}}>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>F</Typography>
                  {
                  Data1.F.map((data) => ( 
                   <Box  key="index" sx={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
                    <Link style={{textDecoration:"none"}}  href={data.anchor}><Typography sx={{color:"black",":hover":{color:"#e73f15"}}}>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>G</Typography>
                  {
                  Data1.G.map((data) => ( 
                   <Box  key="index" sx={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
                    <Link style={{textDecoration:"none"}}  href={data.anchor}><Typography sx={{color:"black",":hover":{color:"#e73f15"}}}>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>H</Typography>
                  {
                  Data1.H.map((data) => ( 
                   <Box  key="index" sx={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
                    <Link style={{textDecoration:"none"}}  href={data.anchor}><Typography sx={{color:"black",":hover":{color:"#e73f15"}}}>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>J</Typography>
                  {
                  Data1.J.map((data) => ( 
                   <Box  key="index" sx={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
                    <Link style={{textDecoration:"none"}}  href={data.anchor}><Typography sx={{color:"black",":hover":{color:"#e73f15"}}}>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>K</Typography>
                  {
                  Data1.K.map((data) => ( 
                   <Box  key="index" sx={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
                    <Link style={{textDecoration:"none"}}  href={data.anchor}><Typography sx={{color:"black",":hover":{color:"#e73f15"}}}>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>L</Typography>
                  {
                  Data1.L.map((data) => ( 
                   <Box  key="index" sx={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
                    <Link style={{textDecoration:"none"}}  href={data.anchor}><Typography sx={{color:"black",":hover":{color:"#e73f15"}}}>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>M</Typography>
                  {
                  Data1.M.map((data) => ( 
                   <Box  key="index" sx={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
                    <Link style={{textDecoration:"none"}}  href={data.anchor}><Typography sx={{color:"black",":hover":{color:"#e73f15"}}}>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>N</Typography>
                  {
                  Data1.N.map((data) => ( 
                   <Box  key="index" sx={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
                    <Link style={{textDecoration:"none"}}  href={data.anchor}><Typography sx={{color:"black",":hover":{color:"#e73f15"}}}>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>O</Typography>
                  {
                  Data1.O.map((data) => ( 
                   <Box  key="index" sx={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
                    <Link style={{textDecoration:"none"}}  href={data.anchor}><Typography sx={{color:"black",":hover":{color:"#e73f15"}}}>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>P</Typography>
                  {
                  Data1.P.map((data) => ( 
                   <Box  key="index" sx={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
                    <Link style={{textDecoration:"none"}}  href={data.anchor}><Typography sx={{color:"black",":hover":{color:"#e73f15"}}}>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>R</Typography>
                  {
                  Data1.R.map((data) => ( 
                   <Box  key="index" sx={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
                    <Link style={{textDecoration:"none"}}  href={data.anchor}><Typography sx={{color:"black",":hover":{color:"#e73f15"}}}>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>S</Typography>
                  {
                  Data1.S.map((data) => ( 
                   <Box  key="index" sx={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
                    <Link style={{textDecoration:"none"}}  href={data.anchor}><Typography sx={{color:"black",":hover":{color:"#e73f15"}}}>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>T</Typography>
                  {
                  Data1.T.map((data) => ( 
                   <Box  key="index" sx={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
                    <Link style={{textDecoration:"none"}}  href={data.anchor}><Typography sx={{color:"black",":hover":{color:"#e73f15"}}}>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>U</Typography>
                  {
                  Data1.U.map((data) => ( 
                   <Box  key="index" sx={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
                    <Link style={{textDecoration:"none"}}  href={data.anchor}><Typography sx={{color:"black",":hover":{color:"#e73f15"}}}>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>V</Typography>
                  {
                  Data1.V.map((data) => ( 
                   <Box  key="index" sx={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
                    <Link style={{textDecoration:"none"}}  href={data.anchor}><Typography sx={{color:"black",":hover":{color:"#e73f15"}}}>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>W</Typography>
                  {
                  Data1.W.map((data) => ( 
                   <Box  key="index" sx={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
                    <Link style={{textDecoration:"none"}}  href={data.anchor}><Typography sx={{color:"black",":hover":{color:"#e73f15"}}}>{data.name}</Typography></Link>
                    </Box> 
                  )
                  )}
                </Grid>

            </Grid>

          </Box>
          </TabPanel>
           <TabPanel value={selectedTab} index={1}>
           <Box>
           <Typography>Hi2</Typography>
           </Box>
          </TabPanel>

          <TabPanel value={selectedTab} index={2}>
           <Box>
           <Typography>Hi3</Typography>
           </Box>
          </TabPanel>

          <TabPanel value={selectedTab} index={3}>
           <Box>
           <Typography>Hi4</Typography>
           </Box>
          </TabPanel>
          </Box>
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