"use client";
import Box from "@mui/material/Box";
import React from "react";
import styles from "./OfficeofOperations.module.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import LaunchIcon from "@mui/icons-material/Launch";

const OfficeofOperations = () => {
    const mobile = useMediaQuery("(max-width: 576px)");
    const tab = useMediaQuery("(max-width: 992px)");
    return (
        <div>
            <Box className={styles.head} sx={{
                padding: mobile?'40px 30px 40px 0px':tab?'40px 30px 50px 80px':'40px 30px 40px 40px'}}>
                <Container>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Typography
                                sx={{
                                    fontSize:'20px'
                                    
                                    
                                }}
                            >
                                Updated 11-1-23
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: mobile
                                        ? "33px"
                                        : tab
                                        ? "50px"
                                        : "60px",
                                    fontWeight: 700,
                                    lineHeight: "1",
                                   
                                }}
                            >
                                Office of Operations <br></br>
                                Orders and Notices
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
     <Container sx={{marginLeft:mobile?'0px':tab?'50px':''}}>

                <Grid container  
                    rowSpacing={5}
                    columnSpacing={5}>
                       {/* -------1st box-------- */}
                    <Grid item xs={12} sm={6}>
                        <Box className={styles.box1} sx={{marginTop:'10%'}} >
                            <ul className={styles.listbox}>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 2023</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 2022</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 2021</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 2020</Typography>
                                    </Link>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
              
            </Grid>
                         {/* -------2nd box-------- */}
              <Grid container  
                    rowSpacing={5}
                    columnSpacing={5}>        
                    <Grid item xs={12} sm={6}  >
                        <Box className={styles.box1}>
                            <ul className={styles.listbox}>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 2019</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 2018</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 2017</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 2016</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 2015</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 2014</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 2013</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 2012</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 2011</Typography>
                                    </Link>
                                    </li>
                                    <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 2010</Typography>
                                    </Link>
                                </li>
                                
                            </ul>
                        </Box>
                        </Grid>
                      {/* -------3rd box-------- */}
                        <Grid item xs={12} sm={6} >
                        <Box className={styles.box1}>
                            <ul className={styles.listbox}>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 2009</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 2008</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 2007</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 2006</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 2005</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 2004</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 2003</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 2002</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 2001</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 2000</Typography>
                                    </Link>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                   
                      {/* -------4th box-------- */}
                     
                    <Grid item xs={12} sm={6} >
                        <Box className={styles.box1} >
                            <ul className={styles.listbox}>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 1999</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 1998</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 1997</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 1996</Typography>
                                    </Link>

                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 1995</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 1994</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 1993</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 1992</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 1991</Typography>
                                    </Link>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                    {/* -------5th box-------- */}
                    <Grid item xs={12} sm={6}>
                        <Box className={styles.box1}>
                            <ul className={styles.listbox}>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 1989</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 1988</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 1987</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 1983</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography> 1981</Typography>
                                    </Link>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                
              </Grid>
         
    </Container> 
        </div>
    );
};

export default OfficeofOperations;
