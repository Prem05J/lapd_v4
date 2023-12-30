import React from 'react'
import homeStyle from "../../styles/home.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography, Grid, TextField, IconButton, Divider, Button } from '@mui/material'
import {  Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import playIcon from "../../../public/Icons/play-1001-svgrepo-com.svg"
import global from "../../app/global.module.css"


const SwiperImage = () => {
  return (
    <div>
          <Box sx={{ marginTop: '5%' }}>
                <Grid className={homeStyle.swiperBox} container rowSpacing={2}>
                    <Grid item xs={12} sm={12} md={8}>
                  
                        <Swiper
                         className={homeStyle.mySwiper}
                            slidesPerView={1}
                            spaceBetween={0}
                            loop={true}
                            speed={1000}
                            autoplay={{ delay: 5000 }}
                            pagination={{
                                clickable: true
                            }}
                            modules={[Pagination, Autoplay]}>

                            <SwiperSlide>
                                <Box className={homeStyle.swipBox1}>

                                    <Box className={homeStyle.nameBox}>
                                        <Typography sx={{ color: "white", fontSize: "24px", marginLeft: "30px" }}>Commitment to Leadership</Typography>
                                    </Box>
                                </Box>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Box className={homeStyle.swipBox2}>

                                    <Box className={homeStyle.nameBox}>
                                        <Typography sx={{ color: "white", fontSize: "24px", marginLeft: "30px" }}>Service to Our Community</Typography>
                                    </Box>
                                </Box>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Box className={homeStyle.swipBox3}>
                                    <Box className={homeStyle.nameBox}>
                                        <Typography sx={{ color: "white", fontSize: "25px", marginLeft: "30px" }}>CIntegrity in All We Say and Do</Typography>
                                    </Box>
                                </Box>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Box className={homeStyle.swipBox4}>
                                    <Box className={homeStyle.nameBox}>
                                        <Typography sx={{ color: "white", fontSize: "25px", marginLeft: "30px" }}>Quality Through Continuous Improvement</Typography>
                                    </Box>
                                </Box>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Box className={homeStyle.swipBox5}>
                                    <Box className={homeStyle.nameBox}>
                                        <Typography sx={{ color: "white", fontSize: "25px", marginLeft: "30px" }}>Respect for People</Typography>
                                    </Box>
                                </Box>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Box className={homeStyle.swipBox6}>
                                    <Box className={homeStyle.nameBox}>
                                        <Typography sx={{ color: "white", fontSize: "25px", marginLeft: "30px" }}>Reverence for the Law</Typography>
                                    </Box>
                                </Box>
                            </SwiperSlide>

                        </Swiper>
                 
                      
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}  sx={{overflow:"hidden"}}>
                        <Link href="">
                        <Box className={homeStyle.videoBox}>
                            <Box className={homeStyle.videoBoxContent}>
                        <Box className={global.fadeInUp} sx={{display:"flex",gap:"10px",paddingLeft:"20px"}}>
                           <Box className={homeStyle.playBox}>
                               <Image className={homeStyle.playBoxIcon} src={playIcon} alt="playIcon" width={25} height={25} />
                           </Box>
                           <Box sx={{display:"flex",flexDirection:"column"}}>
                            <Typography sx={{color:"#ffffff",fontSize:"20px"}}>Message from Chief Michel R. Moore</Typography>
                            <Typography sx={{color:"#ffffff"}}>December 2023</Typography>

                           </Box>
 
                         </Box>
                            </Box>
                        </Box>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
    </div>
  )
}

export default SwiperImage