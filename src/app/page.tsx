"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Box, Typography, Grid, TextField, IconButton, Divider, Button } from '@mui/material'
import homeStyle from "../styles/home.module.css"
import Quicklinks from '@/component/Home/Quicklinks';
import BasicTabs from '@/component/Home/Tabmenu';
import TeamImage from "../../public/Images/Home/image-jointheteam.jpg";
import Axiom from "../../public/Images/Home/AXIOM-740x400-B.jpg";
import Emergency from "../../public/Icons/emergency.svg"
import playIcon from "../../public/Icons/play-1001-svgrepo-com.svg"
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperImage from '@/component/Home/Swiper';
import global from "./global.module.css"


const Home = () => {

  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsVisible(true);
        }, 10);

        return () => clearTimeout(delay);
    }, []);

    return (
        <div className={homeStyle.home}>

            <Box className={homeStyle.italicTypoBox} sx={{ marginLeft: "12%", marginTop: "4%", display:"flex",flexDirection:"column",gap:"15px" }}  data-aos="fade-up" 
    >
                <Typography className={homeStyle.italicTypo1} sx={{ fontSize: "22px", fontStyle:"italic",fontWeight: "400", lineHeight: "1.27", letterSpacing: "-.25px", color: "#0f212b" }}>
                    The Official Site of the Los Angeles Police Department
                </Typography>
                <Typography className={homeStyle.italicTypo2} sx={{ fontSize: "55px", fontStyle:"italic", fontWeight: "700", lineHeight: "1.1", letterSpacing: "1.15px", fontFamily: "Public Sans,sans-serif" }}>
                    “to protect and to serve”
                </Typography>
                <Box sx={{ margin:"6% 0% -7% 0%" }}>
                            <TextField
                             className={`${homeStyle.formTextField} ${isVisible ? homeStyle.visible: ''}`}
                                  sx={{
                                    width: "50%",
                                    position: 'absolute',
                                    marginTop: '50px',
                                    opacity: '0',
                                    zIndex: "9999",
                                    backgroundColor: "white",
                                    paddingTop: "10px",
                                    paddingBottom: "10px",
                                    border: "1px solid black",
                                    ":hover": { border: "1px solid red", transitionDelay: ".2s;" }
                                }}

                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                          <IconButton>
                                            <SearchIcon sx={{color:"#e73f15"}} />
                                          </IconButton>
                                        </InputAdornment>
                                    ),
                                    placeholder: "What you are looking for ?",
                                    disableUnderline: true,
                                    style: {
                                        marginLeft: "20px",
                                        fontSize: "20px",
                                    },
                                }}

                                variant="standard"
                            />
                        </Box>
            </Box>

          <section>
            <SwiperImage />
          </section>

           <Box className={`${homeStyle.paddingBox} ${global.fadeInUp}` } sx={{padding:"2% 10% 0% 15%"}}>

            <Quicklinks />

            <BasicTabs />

            <Box sx={{alignContent:"center",justifyContent:"center",alignItems:"center",padding:"0px 10px 0px 10px"}}>
                <Grid container rowSpacing={6} columnSpacing={5} >
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                      <Box sx={{display:"flex",flexDirection:"column",backgroundColor:"#ebf4f7"}}>
                        <Image className={homeStyle.cardImage} src={TeamImage} alt="teamImage" />
                        <Box sx={{paddingLeft:"50px",gap:"20px",display:"flex",flexDirection:"column",marginTop:"20px"}}>
                         <Typography sx={{fontSize:"26px",fontWeight:"bold"}}>Join the Team</Typography>
                         <Typography sx={{fontSize:"18px",fontWeight:"400",paddingRight:"90px"}}>There are countless ways to help the LAPD do its job.  </Typography>
                         <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#ebf4f7", height: "50px", gap:"10px" }}>
                               <span style={{ height: "2px", width: "20px", opacity: ".9", backgroundColor: "black"}}></span>
                             <Link style={{ textDecoration: 'none' }} href='https://www.youtube.com/watch?v=SIUb_Y3fVFk'>
                            <Typography sx={{ color: "#e73f15", textTransform: "none", '&:hover': { color: "grey" } }}>{`Explore How to Make a Difference`}</Typography>
                              </Link>
                          </Box>
                          </Box>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Box sx={{display:"flex",flexDirection:"column",backgroundColor:"#ebf4f7"}}>
                        <Image className={homeStyle.cardImage} src={Axiom} alt="teamImage" />
                        <Box sx={{paddingLeft:"50px",gap:"20px",display:"flex",flexDirection:"column",marginTop:"20px"}}>
                         <Typography sx={{fontSize:"26px",fontWeight:"bold"}}>Critical Incident Videos</Typography>
                         <Typography sx={{fontSize:"18px",fontWeight:"400"}}>View publicly released video recordings that capture critical incidents involving LAPD officers. </Typography>
                         <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#ebf4f7", height: "50px",gap:"10px" }}>
                               <span style={{ height: "2px", width: "20px", opacity: ".9", backgroundColor: "black"}}></span>
                             <Link style={{ textDecoration: 'none' }} href='https://www.youtube.com/watch?v=SIUb_Y3fVFk'>
                            <Typography sx={{ color: "#e73f15", textTransform: "none", '&:hover': { color: "grey" } }}>{`Watch Critical Incident Videos`}</Typography>
                              </Link>
                          </Box>
                          </Box>
                      </Box>
                    
                    </Grid> 

                    <Grid item xs={12} sm={12} md={12} lg={4}>
                          <Box>
                            <Box sx={{backgroundColor:"#052942",display:"flex",flexDirection:"column",gap:"20px",padding:"5%"}}>
                                <Box sx={{display:"flex",flexDirection:"row",gap:"15px"}}>
                                    <Image src={Emergency} alt="Emergency-icon" />
                                    <Box sx={{display:"flex",flexDirection:"column",textAlign:"left"}}>
                                 <Typography sx={{fontSize:"16px",color:"#ffffff"}}>Life-Threatening Emergencies Only:</Typography>
                              <Link href="#" style={{ textDecoration: 'none' }}><Typography sx={{color:"#ffffff",fontSize:"22px"}}>9-1-1</Typography></Link>
                                    </Box>

                                </Box>
                                <Box sx={{display:"flex",flexDirection:"row",gap:"15px"}}>
                                    <Image src={Emergency} alt="Emergency-icon" />
                                    <Box sx={{display:"flex",flexDirection:"column",textAlign:"left"}}>
                                 <Typography sx={{fontSize:"16px",color:"#ffffff"}}>Non-Emergency Police Response::</Typography>
                              <Link href="#" style={{ textDecoration: 'none' }}><Typography sx={{color:"#ffffff",fontSize:"22px"}}>1-877-ASK-LAPD</Typography></Link>
                                    </Box>

                                </Box>
                                <Box sx={{display:"flex",flexDirection:"row",gap:"15px"}}>
                                    <Image src={Emergency} alt="Emergency-icon" />
                                    <Box sx={{display:"flex",flexDirection:"column",textAlign:"left"}}>
                                 <Typography sx={{fontSize:"16px",color:"#ffffff"}}>Email Questions & Comments:</Typography>
                              <Link href="#" style={{ textDecoration: 'none' }}><Typography sx={{color:"#ffffff",fontSize:"20px"}}>contact.lapdonline@gmail.com</Typography></Link>
                                    </Box>

                                </Box>

                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center",  height: "50px" }}>
                               <span style={{ height: "2px", width: "20px", opacity: ".9", backgroundColor: "black"}}></span>
                             <Link style={{ textDecoration: 'none' }} href='https://www.youtube.com/watch?v=SIUb_Y3fVFk'>
                            <Typography sx={{ color: "#e73f15", textTransform: "none", '&:hover': { color: "grey" } }}>{`Watch Critical Incident Videos`}</Typography>
                              </Link>
                          </Box>
                          </Box>
                          
                    </Grid>

                </Grid>
            </Box>
            </Box>

            
        </div>
    )
}

export default Home