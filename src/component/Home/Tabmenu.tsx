'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import styles from '../../styles/MyComponent.module.css'
import Link from 'next/link';


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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
 
  return (
    <Box sx={{padding:"2% 7% 2% 7%"}}>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: '#0f212b' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="NEWSROOM" sx={{fontWeight: 'bold', fontSize: '15px', color:'#e73f15!important'}} {...a11yProps(0)} />
          <Tab label="EVENTS" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box>
          <Grid container>
            <Grid item lg={6} sx={{ padding: '0px 50px 0px 0px' }}>
              <Box className={styles.news}>
                <Link href='#'> <h3>Another Pedestrian Killed by a Hit and Run Driver on Western Avenue/Vernon Avenue    NR23791rc</h3></Link>

                <Typography>12/21/2023 </Typography>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box sx={{ display: 'flex', padding: '10px 30px 30px 0px' }}>
                <Grid item lg={6} sx={{gap: '5rem'}} >
                  <Link href='#' className={styles.textspace}>
                    <h3>Department Statement on False Media Report  NR23794km</h3>
                    <Typography>12/21/2023 </Typography>
                  </Link>
                </Grid>
                <Grid item lg={6}>
                  <Link href='#' className={styles.textspace}>
                    <h3>Hit-and-Run Driver Can’t Outrun the Law   NR23792mo/bb</h3>
                    <Typography>12/21/2023 </Typography>
                  </Link>
                </Grid>
              </Box>
              <Box sx={{ display: 'flex', padding: '10px 30px 30px 0px' }}>
              <Grid item lg={6}>
                  <Link href='#' className={styles.textspace}>
                    <h3>Six Arrested, One Rescued in Prostitution Operations  <br></br>NR23790rc</h3>
                    <Typography>12/18/2023 </Typography>
                  </Link>
                </Grid>
                <Grid item lg={6}>
                  <Link href='#' className={styles.textspace}>
                    <h3>Pedestrian Struck and Killed, Driver Flees  NR23789ne/rc</h3>
                    <Typography>12/18/2023 </Typography>

                  </Link>
                </Grid>
              </Box>
              <Box sx={{display: 'flex'}} className={styles.seperate}>
                 <span className={styles.line}></span>
                <Link href="#">

                 <Typography sx={{marginLeft: '10px'}}>View All News Items</Typography>
                 </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box>
          <Grid container sx={{marginTop: '20px'}}>
            <Grid item md={5} sx={{display: 'flex'}}>
              <Box sx={{display: 'flex'}}>
                  <Box className={styles.calendar}>
                      <Typography sx={{fontWeight: 'bold',fontSize: '18px', textAlign: 'center'}}>DEC</Typography>
                      <Typography sx={{fontWeight: 'bolder',fontSize: '32px', textAlign: 'center'}}>23</Typography>
                  </Box>
              </Box>
                  <Box className={styles.textstyle}>
                    <Link href="#">
                      <h4>Heart Heroes 2023 Campaign</h4>
                    </Link>
                    <Typography>All Day</Typography>
                  </Box>
            </Grid>
            <Grid item md={5} sx={{display: 'flex'}}>
              <Box sx={{display: 'flex'}}>
                  <Box className={styles.calendar}>
                      <Typography sx={{fontWeight: 'bold',fontSize: '18px', textAlign: 'center'}}>DEC</Typography>
                      <Typography sx={{fontWeight: 'bolder',fontSize: '32px', textAlign: 'center'}}>23</Typography>
                  </Box>
              </Box>
                  <Box className={styles.textstyle}>
                    <Link href="#">
                      <h4>Heart Heroes 2023 Campaign</h4>
                    </Link>
                    <Typography>All Day</Typography>
                  </Box>
            </Grid>
          </Grid>
        </Box>
      </CustomTabPanel>

    </Box>
    </Box>
  );
}