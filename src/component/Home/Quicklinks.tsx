import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "../../styles/home.module.css";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import CarCrashOutlinedIcon from "@mui/icons-material/CarCrashOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import LocalPoliceOutlinedIcon from "@mui/icons-material/LocalPoliceOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Image from "next/image";
import File from "../../../public/Icons/File.svg";
import Traffic from "../../../public/Icons/Traffic.svg";
import CrimeMapping from "../../../public/Icons/icon-crimemapping.svg";
import reference from "../../../public/Icons/reference-library.svg";
import policeCommission from "../../../public/Icons/policeCommission.svg";
import mostWanted from "../../../public/Icons/mostWanted.svg";
import Link from "next/link";

import {
  AllDocumentTypes,
  SettingsDocumentDataQuicklinksItem,
} from "../../../prismicio-types";
import { useState, useEffect } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import type * as prismic from "@prismicio/client";
import { createClient } from "@/prismicio";

const Quicklinks = () => {
  const [pageData, setPageData] = useState<AllDocumentTypes | null>(null);
  const [sections, setSections] = useState<
    {
      section1: string;
      section2: string;
      section3: string;
      section4: string;
      section5: string;
      section6: string;
    }[]
  >([]);
  useEffect(() => {
    const fetchData = async () => {
      const client = createClient();
      const page = await client.getSingle("settings");
      setPageData(page);
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (pageData) {
      const quickLinks = pageData.data
        .quicklinks as SettingsDocumentDataQuicklinksItem[];
      const sectionsData = quickLinks.map((item) => ({
        section1: item.section_1 as string,
        section2: item.section_2 as string,
        section3: item.section_3 as string,
        section4: item.section_4 as string,
        section5: item.section_5 as string,
        section6: item.section_6 as string,
      }));

      setSections(sectionsData);

      // Logging the sections data
      sectionsData.forEach((section) => {
        console.log("Section 1:", section.section1);
        console.log("Section 2:", section.section2);
        console.log("Section 3:", section.section3);
        console.log("Section 4:", section.section4);
        console.log("Section 5:", section.section5);
        console.log("Section 6:", section.section6);
      });
    }
  }, [pageData]);

  return (
    <Box>
      <Typography
        sx={{ fontWeight: "800", fontSize: "15px", paddingBottom: "5px" }}
      >
        QUICK LINKS
      </Typography>
      <Grid container sx={{ marginTop: "30px" }}>
        <Grid item xs={6} sm={4} md={2}>
          <Link href="javascript:;" className={styles.link}>
            <Box
              className={styles.boxes}
              sx={{
                border: "1px solid #d0dade",
                borderBottom: "none",
                height: "160px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "0px 30px 0px 30px",
              }}
            >
              <Image src={File} alt="File-icon" width={50} height={50} />
              {/* <Typography>File a Police Report</Typography> */}
              <Typography>{sections.map((a) => a.section1)}</Typography>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Link href="javascript:;" className={styles.link}>
            <Box
              className={styles.boxes}
              sx={{
                border: "1px solid #d0dade",
                borderBottom: "none",
                height: "160px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "0px 30px 0px 30px",
              }}
            >
              <Image src={Traffic} alt="File-icon" width={50} height={50} />

              {/* <Typography>Obtain a Traffic Collision Report</Typography> */}
              <Typography>{sections.map((a) => a.section2)}</Typography>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Link href="javascript:;" className={styles.link}>
            <Box
              className={styles.boxes}
              sx={{
                border: "1px solid #d0dade",
                borderBottom: "none",
                height: "160px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "0px 30px 0px 30px",
              }}
            >
              <Image
                src={CrimeMapping}
                alt="File-icon"
                width={50}
                height={50}
              />
              {/* <Typography>Crime Mapping</Typography> */}
              <Typography>{sections.map((a) => a.section3)}</Typography>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Link href="javascript:;" className={styles.link}>
            <Box
              className={styles.boxes}
              sx={{
                border: "1px solid #d0dade",
                borderBottom: "none",
                height: "160px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "0px 30px 0px 30px",
              }}
            >
              <Image src={reference} alt="File-icon" width={50} height={50} />
              {/* <Typography>Reference Library</Typography> */}
              <Typography>{sections.map((a) => a.section4)}</Typography>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Link href="javascript:;" className={styles.link}>
            <Box
              className={styles.boxes}
              sx={{
                border: "1px solid #d0dade",
                borderBottom: "none",
                height: "160px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "0px 30px 0px 30px",
              }}
            >
              <Image
                src={policeCommission}
                alt="File-icon"
                width={50}
                height={50}
              />
              {/* <Typography>Police Commission</Typography> */}
              <Typography>{sections.map((a) => a.section5)}</Typography>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Link href="javascript:;" className={styles.link}>
            <Box
              className={styles.boxes}
              sx={{
                border: "1px solid #d0dade",
                borderBottom: "none",
                height: "160px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "0px 30px 0px 30px",
              }}
            >
              <Image src={mostWanted} alt="File-icon" width={50} height={50} />
              {/* <Typography>Most Wanted</Typography> */}
              <Typography>{sections.map((a) => a.section6)}</Typography>
            </Box>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Quicklinks;
