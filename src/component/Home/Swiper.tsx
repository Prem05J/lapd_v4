import React from "react";
import homeStyle from "../../styles/home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import playIcon from "../../../public/Icons/play-1001-svgrepo-com.svg";
import global from "../../app/global.module.css";
import { AllDocumentTypes } from "../../../prismicio-types";
import { useState, useEffect } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import type * as prismic from "@prismicio/client";
import { createClient } from "@/prismicio";

const SwiperImage = () => {
  const [pageData, setPageData] = useState<AllDocumentTypes | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const client = createClient();
      const page = await client.getSingle("settings");
      setPageData(page);
    };
    fetchData();
  }, []);
  const imageUrl1 = pageData?.data.homepage_image1.url;
  const imageUrl2 = pageData?.data.homepage_image2.url;
  const imageUrl3 = pageData?.data.homepage_image3.url;
  const imageUrl4 = pageData?.data.homepage_image4.url;
  const imageUrl5 = pageData?.data.homepage_image5.url;
  const imageUrl6 = pageData?.data.homepage_image6.url;
  const swipBox1 = {
    backgroundImage: `url(${imageUrl1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "65vh",
  };
  const swipBox2 = {
    backgroundImage: `url(${imageUrl2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "65vh",
  };
  const swipBox3 = {
    backgroundImage: `url(${imageUrl3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "65vh",
  };
  const swipBox4 = {
    backgroundImage: `url(${imageUrl4})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "65vh",
  };
  const swipBox5 = {
    backgroundImage: `url(${imageUrl5})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "65vh",
  };
  const swipBox6 = {
    backgroundImage: `url(${imageUrl6})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "65vh",
  };

  return (
    <div>
      <Box sx={{ marginTop: "140px" }}>
        <Grid className={homeStyle.swiperBox} container rowSpacing={2}>
          <Grid item xs={12} md={8}>
            <Swiper
              className={homeStyle.mySwiper}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              speed={1000}
              autoplay={{ delay: 5000 }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
            >
              <SwiperSlide>
                {/* <Box className={homeStyle.swipBox1}> */}
                <Box style={swipBox1}>
                  <Box className={homeStyle.nameBox}>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "24px",
                        marginLeft: "30px",
                      }}
                    >
                      Commitment to Leadership
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>

              <SwiperSlide>
                {/* <Box className={homeStyle.swipBox2}> */}
                <Box style={swipBox2}>
                  <Box className={homeStyle.nameBox}>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "24px",
                        marginLeft: "30px",
                      }}
                    >
                      Service to Our Community
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>

              <SwiperSlide>
                {/* <Box className={homeStyle.swipBox3}> */}
                <Box style={swipBox3}>
                  <Box className={homeStyle.nameBox}>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "25px",
                        marginLeft: "30px",
                      }}
                    >
                      Integrity in All We Say and Do
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>

              <SwiperSlide>
                {/* <Box className={homeStyle.swipBox4}> */}
                <Box style={swipBox4}>
                  <Box className={homeStyle.nameBox}>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "25px",
                        marginLeft: "30px",
                      }}
                    >
                      Quality Through Continuous Improvement
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>

              <SwiperSlide>
                {/* <Box className={homeStyle.swipBox5}> */}
                <Box style={swipBox5}>
                  <Box className={homeStyle.nameBox}>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "25px",
                        marginLeft: "30px",
                      }}
                    >
                      Respect for People
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>

              <SwiperSlide>
                {/* <Box className={homeStyle.swipBox6}> */}
                <Box style={swipBox6}>
                  <Box className={homeStyle.nameBox}>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "25px",
                        marginLeft: "30px",
                      }}
                    >
                      Reverence for the Law
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            </Swiper>
          </Grid>

          <Grid item xs={12} md={4} sx={{ overflow: "hidden" }}>
            <Link href="">
              <Box className={homeStyle.videoBox}>
                <Box className={homeStyle.videoBoxContent}>
                  <Box
                    className={global.fadeInUp}
                    sx={{ display: "flex", gap: "10px", paddingLeft: "20px" }}
                  >
                    <Box className={homeStyle.playBox}>
                      <Image
                        className={homeStyle.playBoxIcon}
                        src={playIcon}
                        alt="playIcon"
                        width={25}
                        height={25}
                      />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography sx={{ color: "#ffffff", fontSize: "20px" }}>
                        Message from Chief Michel R. Moore
                      </Typography>
                      <Typography sx={{ color: "#ffffff" }}>
                        December 2023
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SwiperImage;
