'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import styles from '../../styles/home.module.css'
import Link from 'next/link';
import Colors from "../../stylingColors/colors.module.scss"



interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}



function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BasicTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
 
  return (

    <Box sx={{padding:"2% 0% 2% 0%"}}>
      <Box sx={{ borderBottom: 1, borderColor: '#0f212b' }}>
        <Tabs  value={value} onChange={handleChange} sx={{"& button.Mui-selected": {color:Colors.orangeColor}}} TabIndicatorProps={{
      style: {
      backgroundColor: Colors.orangeColor,
      height:"7px", 
    }
   }} aria-label="basic tabs example">
          <Tab label= "NEWSROOM" disableRipple sx={{fontSize:"16px",fontWeight:"bold",color:"#000000"}} {...a11yProps(0)} />
          <Tab label= "EVENTS" disableRipple sx={{fontSize:"16px",fontWeight:"bold",color:"#000000"}}  {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box>
          <Grid container columnSpacing={15}>
            <Grid item lg={6}>
              <Box className={styles.news}>
              <Link style={{ textDecoration: 'none' }} href='https://www.youtube.com/watch?v=SIUb_Y3fVFk'>
                            <Typography sx={{ color: "#ffffff", textTransform: "none", '&:hover': { color: "grey" } }}>
                              <h3>{`Another Pedestrian Killed by a Hit and Run Driver on Western Avenue/Vernon Avenue    NR23791rc`}</h3></Typography>
                              </Link>

                <Typography>12/21/2023 </Typography>
              </Box>
            </Grid>

            <Grid  item lg={6}>
              <Box sx={{ display: 'flex', padding: '10px 10px 30px 0px' }}>
                <Grid container>
                <Grid item md={6} lg={6}  >
                  <Link href='#' style={{ textDecoration: 'none' }} className={styles.textspace}>
                    <h3>Department Statement on False Media Report  NR23794km</h3>
                    <Typography>12/21/2023 </Typography>
                  </Link>
                </Grid>
                <Grid item md={6} lg={6}>
                  <Link href='#' style={{ textDecoration: 'none' }} className={styles.textspace}>
                    <h3>Hit-and-Run Driver Can’t Outrun the Law   NR23792mo/bb</h3>
                    <Typography>12/21/2023 </Typography>
                  </Link>
                </Grid>
                <Grid item md={6} lg={6}>
                  <Link href='#' style={{ textDecoration: 'none' }} className={styles.textspace}>
                    <h3>Six Arrested, One Rescued in Prostitution Operations  <br></br>NR23790rc</h3>
                    <Typography>12/18/2023 </Typography>
                  </Link>
                </Grid>
                <Grid item  md={6} lg={6}>
                  <Link href='#' style={{ textDecoration: 'none' }} className={styles.textspace}>
                    <h3>Pedestrian Struck and Killed, Driver Flees  NR23789ne/rc</h3>
                    <Typography>12/18/2023 </Typography>

                  </Link>
                </Grid>
                </Grid>

              </Box>
             
              <Box sx={{ display: "flex", alignItems: "center",  height: "50px",gap:"10px" }}>
                               <span style={{ height: "2px", width: "20px", opacity: ".9", backgroundColor: "black"}}></span>
                             <Link style={{ textDecoration: 'none' }} href='https://www.youtube.com/watch?v=SIUb_Y3fVFk'>
                            <Typography sx={{ color: "#e73f15", textTransform: "none", '&:hover': { color: "grey" } }}>{`View All News Items`}</Typography>
                              </Link>
                          </Box>
            </Grid>
          </Grid>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box>
          <Grid container rowSpacing={2} sx={{marginTop: '20px'}}>
            <Grid item md={5} sx={{display: 'flex'}}>
              <Box sx={{display:"flex",flexDirection:"row",gap:"15px"}}>
              <Box sx={{display: 'flex'}}>
                  <Box className={styles.calendar}>
                      <Typography sx={{fontWeight: 'bold',fontSize: '18px', textAlign: 'center'}}>DEC</Typography>
                      <Typography sx={{fontWeight: 'bolder',fontSize: '32px', textAlign: 'center'}}>23</Typography>
                  </Box>
              </Box>
                  <Box>
                  <Link style={{ textDecoration: 'none' }} className={styles.textspace} href='https://www.youtube.com/watch?v=SIUb_Y3fVFk'>
                     <h3>Heart Heroes 2023 Campaign</h3>
                      </Link>
                    <Typography>All Day</Typography>
                  </Box>
                  </Box>
            </Grid>
            <Grid item md={5} sx={{display: 'flex'}}>
            <Box sx={{display:"flex",flexDirection:"row",gap:"15px"}}>
              <Box sx={{display: 'flex'}}>
                  <Box className={styles.calendar}>
                      <Typography sx={{fontWeight: 'bold',fontSize: '18px', textAlign: 'center'}}>DEC</Typography>
                      <Typography sx={{fontWeight: 'bolder',fontSize: '32px', textAlign: 'center'}}>23</Typography>
                  </Box>
              </Box>
                  <Box className={styles.textstyle} sx={{textAlign:"left",justifyContent:"left",alignItems:"left"}}>
                  <Link style={{ textDecoration: 'none' }} className={styles.textspace} href='https://www.youtube.com/watch?v=SIUb_Y3fVFk'>
                     <h3>2023 Holiday/Winter Season Community Update Bulletin</h3>
                      </Link>
                    <Typography>All Day</Typography>
                  </Box>
                  </Box>
            </Grid>
          </Grid>
        </Box>
      </CustomTabPanel>
    </Box>

  );
}

export default BasicTabs