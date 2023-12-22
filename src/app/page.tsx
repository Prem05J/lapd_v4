'use client'
import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography,Grid } from '@mui/material'
import 'swiper/css';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import useMediaQuery from '@mui/material/useMediaQuery';

import hero_1 from '../../public/Images/Home/HeroImage-01.jpg';
import hero_2 from '../../public/Images/Home/HeroImage-02.jpg';
import hero_3 from '../../public/Images/Home/HeroImage-03.jpg';
import hero_4 from '../../public/Images/Home/HeroImage-04.jpg';
import hero_5 from '../../public/Images/Home/HeroImage-05.jpg';
import hero_6 from '../../public/Images/Home/HeroImage-06.jpg';
import videos from '../../public/Images/Home/video-img-01.jpg';
import Quicklinks from '@/component/Home/Quicklinks';

const Home = () => {

  const Mobile = useMediaQuery('(max-width:768px)');

  return (
    <div className='home'>

      <Box sx={{ marginLeft: "20%",marginTop:"5%" }}>
        <Typography sx={{ fontSize: "20px", fontWeight: "400", lineHeight: "1.27", letterSpacing: "-.25px", color: "#0f212b" }}>
          The Official Site of the Los Angeles Police Department
        </Typography>
        <Typography sx={{ fontSize: "55px", fontWeight: "700", lineHeight: "1.1", letterSpacing: "1.15px", fontFamily: "Public Sans,sans-serif" }}>
          “to protect and to serve”
        </Typography>
      </Box>

      <Box sx={{ marginTop: '30px' }}>
                    <Grid container rowSpacing={2}>
                        <Grid item xs={12} sm={12} md={8}>
                            <Swiper slidesPerView={1}
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
                                    <Image src={hero_1} alt="Hero_Images" style={{ aspectRatio: '16 / 9' }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={hero_2} alt="Hero_Images" style={{ aspectRatio: '16 / 9' }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={hero_3} alt="Hero_Images" style={{ aspectRatio: '16 / 9' }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={hero_4} alt="Hero_Images" style={{ aspectRatio: '16 / 9' }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={hero_5} alt="Hero_Images" style={{ aspectRatio: '16 / 9' }} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={hero_6} alt="Hero_Images" style={{ aspectRatio: '16 / 9' }} />
                                </SwiperSlide>

                            </Swiper>
                        </Grid>

                        <Grid item xs={12} sm={12} md={4}>
                            <Image src={videos} alt="Hero_Images" style={{ height: '100%', width: '100%' }} />
                        </Grid>
                    </Grid>
                </Box>
                <Quicklinks />
 </div>
  )
}

export default Home