'use client'
import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import styles from '../../styles/home.module.css'
import Link from 'next/link';
import Colors from "../../stylingColors/colors.module.scss"




const BasicTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);


  const handleTabChange = (event: any, newValue: any) => {
    setSelectedTab(newValue);
  };

  return (

    <Box>
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
              <Tab label="NEWSROOM"  sx={{fontSize:"16px",fontWeight:"bold",color:"#000000"}}/>
              <Tab label="EVENTS"  sx={{fontSize:"16px",fontWeight:"bold",color:"#000000"}}/>
             
            </Tabs>
            <Divider sx={{backgroundColor:"#000"}}/>

           <Box sx={{marginTop:"50px"}}>
          <TabPanel value={selectedTab} index={0}>
            <Box>
              <Grid container columnSpacing={11} rowSpacing={5}>
                <Grid item  lg={6}>
                         <Box className={styles.hoverBox}>
                          <Link href="#">
                          <Typography className={styles.typo} sx={{fontSize:"26px",fontWeight:"bold",color:"#fff"}}>
                          Los Angeles Police Department to Conduct DUI Checkpoints NA24095dm                          </Typography>
                          <Typography sx={{color:"#fff",marginTop:"30px"}}>05/09/2024</Typography>
                          </Link>
                         </Box>
                </Grid>

                <Grid item lg={6}>
                   <Box>
                    <Grid container columnSpacing={2} rowSpacing={5}>
                    <Grid item md={6} lg={6}>
                    <Box className={styles.hoverBox1}>
                          <Link href="#">
                          <Typography className={styles.typo1} sx={{fontSize:"18px",color:"#000"}}>
                          Arrest Made in Hollywood Assault Incident NR24146kt/ne                          </Typography>
                          <Typography sx={{marginTop:"5px",color:"#798c96"}}>05/09/2024</Typography>
                          </Link>
                         </Box>
                </Grid>
                <Grid item md={6} lg={6}>
                    <Box className={styles.hoverBox1}>
                          <Link href="#">
                          <Typography className={styles.typo1} sx={{fontSize:"18px",color:"#000"}}>
                          Fatal Hit-and-Run leaves Pedestrian Dead NR24155ne/dm                          </Typography>
                          <Typography sx={{marginTop:"5px",color:"#798c96"}}>05/09/2024</Typography>
                          </Link>
                         </Box>
                </Grid>
                <Grid item md={6} lg={6}>
                    <Box className={styles.hoverBox1}>
                          <Link href="#">
                          <Typography className={styles.typo1} sx={{fontSize:"18px",color:"#000"}}>
                          Stabbing in Palms NR24144kt/dm                          </Typography>
                          <Typography sx={{marginTop:"5px",color:"#798c96"}}>05/09/2024</Typography>
                          </Link>
                         </Box>
                </Grid>
                <Grid item md={6} lg={6}>
                    <Box className={styles.hoverBox1}>
                          <Link href="#">
                          <Typography className={styles.typo1} sx={{fontSize:"18px",color:"#000"}}>
                          Murder Suspect Arrested NR24143kt/dm                          </Typography>
                          <Typography sx={{marginTop:"5px",color:"#798c96"}}>05/07/2024</Typography>
                          </Link>
                         </Box>
                </Grid>
                <Grid item lg={6}>
                <Box sx={{ display: "flex", alignItems: "center",  height: "50px",gap:"10px" }}>
                               <span style={{ height: "2px", width: "20px", opacity: ".9", backgroundColor: "black"}}></span>
                             <Link style={{ textDecoration: 'none' }} href='https://www.youtube.com/watch?v=SIUb_Y3fVFk'>
                            <Typography sx={{ color: "#e73f15", textTransform: "none", '&:hover': { color: "grey" } }}>{`View All News Items`}</Typography>
                              </Link>
                          </Box>
                </Grid>

                    </Grid>
                   </Box>
                </Grid>

              </Grid>
            </Box>
          </TabPanel>

          <TabPanel value={selectedTab} index={1}>
           <Box>
            <Grid container rowSpacing={5}>
            <Grid item md={5}>
              <Box sx={{display:"flex",flexDirection:"row",gap:"15px"}}>
              <Box sx={{display: 'flex'}}>
                  <Box className={styles.calendar}>
                      <Typography sx={{fontWeight: 'bold',fontSize: '18px', textAlign: 'center'}}>DEC</Typography>
                      <Typography sx={{fontWeight: 'bolder',fontSize: '32px', textAlign: 'center'}}>23</Typography>
                  </Box>
              </Box>
                  <Box className={styles.hoverBox1}>
                  <Link style={{ textDecoration: 'none' }} href='https://www.youtube.com/watch?v=SIUb_Y3fVFk'>
                     <Typography className={styles.typo1} sx={{fontSize:"18px",color:"#000"}}>Heart Heroes 2023 Campaign</Typography>
                      </Link>
                    <Typography>All Day</Typography>
                  </Box>
                  </Box>
            </Grid>
            <Grid item md={5}>
            <Box sx={{display:"flex",flexDirection:"row",gap:"15px"}}>
              <Box sx={{display: 'flex'}}>
                  <Box className={styles.calendar}>
                      <Typography sx={{fontWeight: 'bold',fontSize: '18px', textAlign: 'center'}}>DEC</Typography>
                      <Typography sx={{fontWeight: 'bolder',fontSize: '32px', textAlign: 'center'}}>23</Typography>
                  </Box>
              </Box>
              <Box className={styles.hoverBox1}>
                  <Link style={{ textDecoration: 'none' }} href='https://www.youtube.com/watch?v=SIUb_Y3fVFk'>
                     <Typography className={styles.typo1} sx={{fontSize:"18px",color:"#000"}}>2023 Holiday/Winter Season Community Update Bulletin</Typography>
                      </Link>
                    <Typography>All Day</Typography>
                  </Box>
                  </Box>
            </Grid>
            </Grid>
           </Box>
          </TabPanel>
          </Box>
    </Box>

  );
}

export default BasicTabs


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