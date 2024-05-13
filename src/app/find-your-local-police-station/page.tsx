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


const scrollToSection = (id:any) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};


const TopNavigation = ({ keys }) => (
  <div>
    {keys.map((key:any) => (
      <Link  className={styles.linkText} href="#" key={key} scroll={false}>
         <Link href={`#${key}`} onClick={() => scrollToSection(key)}>
          {key}
        </Link>
      </Link>
    ))}
  </div>
);


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
              sx={{"& button.Mui-selected": {color:Colors.orangeColor}}} >
              <Tab label="communities"  sx={{fontSize:"16px",fontWeight:"bold",color:"#000000"}}/>
              <Tab label="police station divisions"  sx={{fontSize:"16px",fontWeight:"bold",color:"#000000"}}/>
              <Tab label="Bureaus"  sx={{fontSize:"16px",fontWeight:"bold",color:"#000000"}}/>
              <Tab label="Traffic & Homicide"  sx={{fontSize:"16px",fontWeight:"bold",color:"#000000"}}/>
               </Tabs>
            <Divider sx={{backgroundColor:"#000"}}/>

           <Box sx={{marginTop:"50px"}}>
          <TabPanel value={selectedTab} index={0}>
            <Box>
            <TopNavigation  keys={Object.keys(Data1)} />
            <Grid container rowSpacing={3}  sx={{marginTop:"60px"}}>
         {
            Object.keys(Data1).map((key) =>(
              <Grid key={key} id={key} item xs={12} sm={6} md={4} lg={3}>
             
                <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>{key}</Typography>
                {
                  Data1[key].map((data,index:any) => (
                    <Box className={styles.linkListText} key={index}>
                    <Link   href={data.anchor}><Typography>{data.name}</Typography></Link>
                     </Box>
                  ))
                }
                </Grid>
                     ))
           }
           </Grid>
             </Box>
            </TabPanel>

          <TabPanel value={selectedTab} index={1}>
           <Box>
           <TopNavigation  keys={Object.keys(Data2)} />
            <Grid container rowSpacing={3}  sx={{marginTop:"60px"}}>
           {
            Object.keys(Data2).map((key) =>(
              <Grid key={key} id={key} item xs={12} sm={6} md={4} lg={3}>
                <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>{key}</Typography>
                {
                  Data2[key].map((data,index:any) => (
                    <Box className={styles.linkListText} key={index}>
                    <Link   href={data.anchor}><Typography>{data.name}</Typography></Link>
                     </Box>
                  ))
                }
                </Grid> 
                     ))
           } 
           </Grid>

          </Box>
          </TabPanel>

          <TabPanel value={selectedTab} index={2}>
          <Box>
           <TopNavigation  keys={Object.keys(Data3)} />
            <Grid container rowSpacing={3}  sx={{marginTop:"60px"}}>
           {
            Object.keys(Data3).map((key) =>(
              <Grid key={key} id={key} item xs={12} sm={6} md={4} lg={3}>
             
                <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>{key}</Typography>
                {
                  Data3[key].map((data,index:any) => (
                    <Box className={styles.linkListText} key={index}>
                    <Link   href={data.anchor}><Typography>{data.name}</Typography></Link>
                     </Box>
                  ))
                }
                </Grid>
                     ))
           }
           </Grid>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          </Box>
          </TabPanel>

          <TabPanel value={selectedTab} index={3}>
          <Box>
           <TopNavigation  keys={Object.keys(Data4)} />
            <Grid container rowSpacing={3}  sx={{marginTop:"60px"}}>
           {
            Object.keys(Data4).map((key) =>(
              <Grid key={key} id={key} item xs={12} sm={6} md={4} lg={3}>
             
                <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>{key}</Typography>
                {
                  Data4[key].map((data,index:any) => (
                    <Box className={styles.linkListText} key={index}>
                    <Link   href={data.anchor}><Typography>{data.name}</Typography></Link>
                     </Box>
                  ))
                }
                </Grid>
                     ))
           }
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
        <AccordionDetails>
        <Divider />
        <Box sx={{marginTop:"30px"}}>
            <TopNavigation  keys={Object.keys(Data1)} />
            <Grid container rowSpacing={3}  sx={{marginTop:"60px"}}>
         {
            Object.keys(Data1).map((key) =>(
              <Grid key={key} id={key} item xs={12} sm={6} md={4} lg={3}>
             
                <Typography sx={{fontWeight:"bold",fontSize:"20px",display:"flex",flexDirection:"row",flexWrap:"wrap"}}>{key}</Typography>
                {
                  Data1[key].map((data,index:any) => (
                    <Box className={styles.linkListText} key={index}>
                    <Link   href={data.anchor}><Typography>{data.name}</Typography></Link>
                     </Box>
                  ))
                }
                </Grid>
                     ))
           }
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
           <TopNavigation  keys={Object.keys(Data2)} />
            <Grid container rowSpacing={3}  sx={{marginTop:"60px"}}>
           {
            Object.keys(Data2).map((key) =>(
              <Grid key={key} id={key} item xs={12} sm={6} md={4} lg={3}>
               <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>{key}</Typography>
                {
                  Data2[key].map((data,index:any) => (
                    <Box className={styles.linkListText} key={index}>
                      <Link  href={data.anchor}><Typography>{data.name}</Typography></Link>
                      </Box>
                  ))
                }
                </Grid>
                     ))
           }
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
           <TopNavigation  keys={Object.keys(Data3)} />
            <Grid container rowSpacing={3}  sx={{marginTop:"60px"}}>
           {
            Object.keys(Data3).map((key) =>(
              <Grid key={key} id={key} item xs={12} sm={6} md={4} lg={3}>
                <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>{key}</Typography>
                {
                  Data3[key].map((data,index:any) => (
                    <Box className={styles.linkListText} key={index}>
                    <Link   href={data.anchor}><Typography>{data.name}</Typography></Link>
                     </Box>
                  ))
                }
                </Grid> 
                     ))
           }
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
           <TopNavigation  keys={Object.keys(Data4)} />
            <Grid container rowSpacing={3}  sx={{marginTop:"60px"}}>
           {
            Object.keys(Data4).map((key) =>(
              <Grid key={key} id={key} item xs={12} sm={6} md={4} lg={3}>
             
                <Typography sx={{fontWeight:"bold",fontSize:"20px"}}>{key}</Typography>
                {
                  Data4[key].map((data,index:any) => (
                    <Box className={styles.linkListText} key={index}>
                    <Link   href={data.anchor}><Typography>{data.name}</Typography></Link>
                     </Box>
                  ))
                }
                </Grid>
                     ))
           }
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

