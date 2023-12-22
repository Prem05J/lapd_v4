'use client'
import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography, Grid, TextField, IconButton } from '@mui/material'
import 'swiper/css';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import useMediaQuery from '@mui/material/useMediaQuery';
import homeStyle from "../styles/home.module.css"
import videos from '../../public/Images/Home/video-img-01.jpg';




import Quicklinks from '@/component/Home/Quicklinks';
import BasicTabs from '@/component/Home/Tabmenu';

const Home = () => {

    const Mobile = useMediaQuery('(max-width:768px)');

    return (
        <div className='home'>

            <Box sx={{ marginLeft: "20%", marginTop: "5%" }}>
                <Typography sx={{ fontSize: "20px", fontWeight: "400", lineHeight: "1.27", letterSpacing: "-.25px", color: "#0f212b" }}>
                    The Official Site of the Los Angeles Police Department
                </Typography>
                <Typography sx={{ fontSize: "55px", fontWeight: "700", lineHeight: "1.1", letterSpacing: "1.15px", fontFamily: "Public Sans,sans-serif" }}>
                    “to protect and to serve”
                </Typography>
            </Box>

            <Box sx={{ marginTop: '5%' }}>
                <Grid container rowSpacing={2}>
                    <Grid item xs={12} sm={12} md={8}>
                        <Box sx={{ marginBottom: "-30px", marginLeft: "25rem" }}>
                            <TextField
                                className="form-textfield"

                                sx={{
                                    width: "75%",
                                    zIndex: "999",
                                    backgroundColor: "white",
                                    paddingTop: "10px",
                                    border: "1px solid black",
                                    ":hover": { border: "1px solid red", transitionDelay: ".2s;" }
                                }}

                                InputProps={{

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
                        <Swiper
                            className={homeStyle.myswiper}
                            slidesPerView={1}
                            spaceBetween={0}
                            loop={true}
                            speed={1000}
                            autoplay={{ delay: 5000 }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation, Autoplay]}>

                            <SwiperSlide>
                                <Box className={homeStyle.swipBox1}>

                                    <Box className={homeStyle.nameBox}>
                                        <Typography sx={{ color: "white", fontSize: "25px", marginLeft: "30px" }}>Commitment to Leadership</Typography>
                                    </Box>
                                </Box>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Box className={homeStyle.swipBox2}>

                                    <Box className={homeStyle.nameBox}>
                                        <Typography sx={{ color: "white", fontSize: "25px", marginLeft: "30px" }}>Service to Our Community</Typography>
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

                    <Grid item xs={12} sm={12} md={4}>
                        <Box className={homeStyle.videoBox}>

                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Quicklinks />

            <BasicTabs />

            
        </div>
    )
}

export default Home