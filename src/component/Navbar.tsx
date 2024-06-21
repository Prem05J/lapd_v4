// "use client";
// import {
//   Box,
//   Button,
//   Divider,
//   Grid,
//   Typography,
//   useMediaQuery,
// } from "@mui/material";
// import Link from "next/link";
// import SearchIcon from "@mui/icons-material/Search";
// import navStyle from "../styles/nav.module.css";
// import { useState } from "react";
// import Image from "next/image";
// import headerLogo from "../../public/Images/LAPD-Badge-Logo.png";
// import searchIcon2 from "../../public/Icons/search-alt-2-svgrepo-com.svg";
// import infoIcon from "../../public/Icons/message.png";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import logo from "../../public/logo.svg";
// import jointTeam from "../../public/Icons/icon-jointheteam.svg";
// import File from "../../public/Icons/File.svg";
// import Traffic from "../../public/Icons/Traffic.svg";
// import CrimeMap from "../../public/Icons/icon-crimemapping.svg";
// import Ribbon from "../../public/Icons/blk-ribbon.png";
// import IconMision from "../../public/Icons/icon-missing.svg";
// import Bino from "../../public/Icons/bino2.png";
// import Newspaper from "../../public/Icons/icon-newsroom.svg";
// import Mobilenav from "../component/Mobilenav";
// import global from "../app/global.module.css";
// import { createClient } from "@/prismicio";
// import { Anybody } from "next/font/google";
// import type * as prismic from "@prismicio/client";
// import { AllDocumentTypes } from "../../prismicio-types";
// import React, { useEffect } from "react";
// import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false);

//   const toggleBtn = () => {
//     setToggle(!toggle);
//   };
//   const close = () => {
//     setToggle(false);
//   };

//   const [ishover1, setIshover1] = useState(false);
//   const [ishover2, setIshover2] = useState(false);
//   const [ishover3, setIshover3] = useState(false);
//   const [ishover4, setIshover4] = useState(false);
//   const [ishover5, setIshover5] = useState(false);

//   const tablet = useMediaQuery("(max-width:1020px)");
//   const [pageData, setPageData] = useState<AllDocumentTypes | null>(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       const client = createClient();
//       const page = await client.getSingle("settings");
//       setPageData(page);
//     };
//     fetchData();
//   }, []);

//   return (
//     <>
//       <div className="non-sticky-header">
//         <Box
//           sx={{
//             display: toggle ? (tablet ? "none" : " ") : "flex",
//             flexDirection: "column",
//           }}
//         >
//           <Box
//             sx={{
//               width: "100%",
//               backgroundColor: "#052942",
//               height: "50px",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 gap: "6px",
//                 marginLeft: "15px",
//                 flexDirection: "row",
//                 alignItems: "center",
//               }}
//             >
//               <Image alt="logo" src={logo} height={30} width={30} />
//               <Typography
//                 sx={{ color: "white", fontSize: "16px", fontWeight: "bold" }}
//               >
//                 LOS ANGELS
//               </Typography>
//             </Box>

//             <Box
//               sx={{
//                 display: "flex",
//                 gap: "15px",
//                 marginRight: "15px",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Box>
//                 <Box sx={{ display: "flex", gap: "5px" }}>
//                   <Box className={navStyle.topNavbar}>
//                     <Typography sx={{ fontSize: "12px" }}>311</Typography>
//                   </Box>
//                   <Typography
//                     className={navStyle.headerContent}
//                     sx={{ color: "white", fontSize: "12px" }}
//                   >
//                     City Services
//                   </Typography>
//                 </Box>
//               </Box>

//               <Box>
//                 <Box sx={{ display: "flex", gap: "5px" }}>
//                   <Box className={navStyle.topNavbar}>
//                     <Typography sx={{ fontSize: "12px" }}>LA</Typography>
//                   </Box>
//                   <Typography
//                     className={navStyle.headerContent}
//                     sx={{ color: "white", fontSize: "12px" }}
//                   >
//                     City Directory
//                   </Typography>
//                 </Box>
//               </Box>

//               <Box className={navStyle.headerContent} sx={{ padding: "5px" }}>
//                 <input placeholder="English"></input>
//               </Box>
//             </Box>
//           </Box>

//           <Box className={navStyle.topNavContentBox}>
//             <p className={navStyle.topNavContent1}> </p>{" "}
//             <span
//               style={{
//                 height: "2px",
//                 width: "20px",
//                 opacity: ".9",
//                 backgroundColor: "black",
//                 marginLeft: "10px",
//               }}
//             ></span>
//             <Link
//               style={{ textDecoration: "none" }}
//               href="https://www.youtube.com/watch?v=SIUb_Y3fVFk"
//             >
//               <p className={navStyle.topNavContent2}>
//                 {pageData?.data.daily_update}
//               </p>
//             </Link>
//           </Box>
//         </Box>
//       </div>

//       <Box className={navStyle.stickyHeader}>
//         <Grid container rowSpacing={2} columnSpacing={2}>
//           <Grid item xs={2} md={1}>
//             <Box
//               sx={{
//                 marginTop: "-12px",
//                 display: toggle ? (tablet ? "none" : "") : "block",
//               }}
//             >
//               <Link href="/">
//                 <Image
//                   src={headerLogo}
//                   id="logo"
//                   alt="header-logo"
//                   height={96}
//                   width={68}
//                 />
//               </Link>
//             </Box>
//           </Grid>
//           <Grid
//             item
//             xs={10}
//             md={11}
//             sx={{
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "flex-end",
//               gap: "30px",
//             }}
//           >
//             <Box className={navStyle.tablist}>
//               <ul
//                 className={navStyle.lists}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "end",
//                   listStyle: "none",
//                   gap: "20px",
//                 }}
//               >
//                 <li
//                   onMouseEnter={() => setIshover1(true)}
//                   onMouseLeave={() => setIshover1(false)}
//                 >
//                   <Link href="javascript:;" className={navStyle.menu}>
//                     {/* YOUR LAPD */}
//                     {pageData?.data.your_lapd}
//                   </Link>
//                   <Box
//                     className={navStyle.fadeInUp}
//                     sx={{
//                       display: ishover1 ? "flex" : "none",
//                       position: "absolute",
//                       width: "100%",
//                       marginTop: "48px",
//                       padding: "5% 0% 5% 0%",
//                       left: "0px",
//                       boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
//                       zIndex: "9999",
//                       backgroundColor: "#ffffff",
//                       justifyContent: "center",
//                       gap: "50px",
//                       transition: "all 3s ease-out",
//                     }}
//                   >
//                     {/* ------------------- Sub-cnt -----------------  */}
//                     <Box
//                       sx={{
//                         display: "flex",
//                         flexDirection: "column",
//                         gap: "30px",
//                         marginLeft: "-50px",
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           display: "flex",
//                           alignItems: "center",
//                           gap: "20px",
//                         }}
//                       >
//                         <Image
//                           src={searchIcon2}
//                           alt="search"
//                           height={32}
//                           width={32}
//                         />
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           href="/find-your-local-police-station"
//                           onClick={() => setIshover1(false)}
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               fontSize: "22px",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Find Your Local Police Station`}</Typography>
//                         </Link>
//                       </Box>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           alignItems: "center",
//                           gap: "20px",
//                         }}
//                       >
//                         <Image
//                           src={infoIcon}
//                           alt="search"
//                           height={32}
//                           width={32}
//                         />
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           href="/inside-the-lapd"
//                           onClick={() => setIshover1(false)}
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               fontSize: "22px",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Inside the LAPD`}</Typography>
//                         </Link>
//                       </Box>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           alignItems: "center",
//                           gap: "20px",
//                         }}
//                       >
//                         <Image
//                           src={jointTeam}
//                           alt="search"
//                           height={35}
//                           width={35}
//                         />
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           href="/training-division/join-the-team"
//                           onClick={() => setIshover1(false)}
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               fontSize: "22px",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Join the LAPD`}</Typography>
//                         </Link>
//                       </Box>
//                     </Box>

//                     <Divider
//                       orientation="vertical"
//                       flexItem
//                       sx={{ backgroundColor: "grey" }}
//                     />

//                     <Box
//                       sx={{
//                         display: "flex",
//                         flexDirection: "row",
//                         gap: "30px",
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           display: "flex",
//                           flexDirection: "column",
//                           gap: "10px",
//                         }}
//                       >
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           href="https://www.lapdcsp.org/"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Community Safety Partnership Bureau`}</Typography>
//                         </Link>
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           href="/office-of-the-chief-of-police/constitutional-policing"
//                           onClick={() => setIshover1(false)}
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Constitutional Policing`}</Typography>
//                         </Link>
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           href="/history-of-the-lapd"
//                           onClick={() => setIshover1(false)}
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`History of the LAPD`}</Typography>
//                         </Link>
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           href="/lapd-organization-chart"
//                           onClick={() => setIshover1(false)}
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`LAPD Organization Chart`}</Typography>
//                         </Link>
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           href="https://thelapdstore.com/"
//                           onClick={() => setIshover1(false)}
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`LAPD Store`}</Typography>
//                         </Link>
//                       </Box>

//                       <Box
//                         sx={{
//                           display: "flex",
//                           flexDirection: "column",
//                           gap: "10px",
//                         }}
//                       >
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           href="/police-commission/medal-of-valor"
//                           onClick={() => setIshover1(false)}
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Medal of Valor, Purple Heart & Preservation of Life Awards`}</Typography>
//                         </Link>
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           href="/our-motto-mission-statement-core-values"
//                           onClick={() => setIshover1(false)}
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Mission, Vision, Values`}</Typography>
//                         </Link>
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           href="/officers-killed-in-the-line-of-duty/"
//                           onClick={() => setIshover1(false)}
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Officers Killed in the Line of Duty`}</Typography>
//                         </Link>
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           href="https://lapdonlinestrgeacc.blob.core.usgovcloudapi.net/lapdonlinemedia/2021/12/Strategic-Plan-2021-to-2023.pdf"
//                           onClick={() => setIshover1(false)}
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Strategic Plan 2021 to 2023`}</Typography>
//                         </Link>
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           href="/public-communications-group/media-relations-division/entertainment-trademark-unit/"
//                           onClick={() => setIshover1(false)}
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Trademark & Licensing`}</Typography>
//                         </Link>
//                       </Box>
//                     </Box>
//                     {/* ---------------------- End-sub-cnt------------- */}
//                   </Box>
//                 </li>

//                 <li
//                   onMouseEnter={() => setIshover2(true)}
//                   onMouseLeave={() => setIshover2(false)}
//                 >
//                   <Link href="javascript:;" className={navStyle.menu}>
//                     {pageData?.data.get_service}
//                   </Link>
//                   <Box
//                     className={navStyle.fadeInUp}
//                     sx={{
//                       display: ishover2 ? "flex" : "none",
//                       position: "absolute",
//                       width: "100%",
//                       marginTop: "48px",
//                       padding: "5% 0% 5% 0%",
//                       left: "0px",
//                       boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
//                       zIndex: "9999",
//                       backgroundColor: "#ffffff",
//                       justifyContent: "center",
//                       gap: "50px",
//                     }}
//                   >
//                     {/* ------------------- Sub-cnt -----------------  */}
//                     <Box
//                       sx={{
//                         display: "flex",
//                         flexDirection: "column",
//                         gap: "30px",
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           display: "flex",
//                           alignItems: "center",
//                           gap: "20px",
//                         }}
//                       >
//                         <Image src={File} alt="search" height={32} width={32} />
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           href="/file-a-police-report"
//                           onClick={() => setIshover2(false)}
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               fontSize: "22px",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`File a Police Report`}</Typography>
//                         </Link>
//                       </Box>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           alignItems: "center",
//                           gap: "20px",
//                         }}
//                       >
//                         <Image
//                           src={Traffic}
//                           alt="search"
//                           height={32}
//                           width={32}
//                         />
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           onClick={() => setIshover2(false)}
//                           href="/office-of-the-chief-of-police/office-of-special-operations/transit-services-bureau/file-a-traffic-collision-report"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               fontSize: "22px",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Obtain a Traffic Collision Report`}</Typography>
//                         </Link>
//                       </Box>
//                     </Box>

//                     <Divider
//                       orientation="vertical"
//                       flexItem
//                       sx={{ backgroundColor: "grey" }}
//                     />

//                     <Box
//                       sx={{
//                         display: "flex",
//                         flexDirection: "row",
//                         gap: "30px",
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           display: "flex",
//                           flexDirection: "column",
//                           gap: "10px",
//                           alignItems: "flex-start",
//                         }}
//                       >
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           onClick={() => setIshover2(false)}
//                           href="/california-public-records-act"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`California Public Records Act`}</Typography>
//                         </Link>
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           onClick={() => setIshover2(false)}
//                           href="/office-of-the-chief-of-police/office-of-special-operations/detective-bureau/detective-services-group/ccw-carry-concealed-weapon-license"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`CCW Carry Concealed Weapon License`}</Typography>
//                         </Link>
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           onClick={() => setIshover2(false)}
//                           href="/employee-commendation"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Commend an Officer`}</Typography>
//                         </Link>
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           onClick={() => setIshover2(false)}
//                           href="/faqs"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`FAQ’s`}</Typography>
//                         </Link>
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           onClick={() => setIshover2(false)}
//                           href="/office-of-the-chief-of-police/professional-standards-bureau/report-employee-misconduct/"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`File a Complaint`}</Typography>
//                         </Link>
//                       </Box>

//                       <Box
//                         sx={{
//                           display: "flex",
//                           flexDirection: "column",
//                           gap: "10px",
//                         }}
//                       >
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           href="/fireworks-complaints"
//                           onClick={() => setIshover2(false)}
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Fireworks Complaints`}</Typography>
//                         </Link>
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           onClick={() => setIshover2(false)}
//                           href="/inside-the-lapd/obtaining-police-information"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Request a Police Report (Victims Only)`}</Typography>
//                         </Link>
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           onClick={() => setIshover2(false)}
//                           href="/inside-the-lapd/sites-of-interest"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Sites of Interest`}</Typography>
//                         </Link>
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           onClick={() => setIshover2(false)}
//                           href="/reference-library/undocumented-immigrants/"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Undocumented Immigrants`}</Typography>
//                         </Link>
//                       </Box>
//                     </Box>
//                     {/* ---------------------- End-sub-cnt------------- */}
//                   </Box>
//                 </li>

//                 <li
//                   onMouseEnter={() => setIshover3(true)}
//                   onMouseLeave={() => setIshover3(false)}
//                 >
//                   <Link href="javascript:;" className={navStyle.menu}>
//                     {pageData?.data.crime_info}
//                   </Link>
//                   <Box
//                     className={navStyle.fadeInUp}
//                     sx={{
//                       display: ishover3 ? "flex" : "none",
//                       position: "absolute",
//                       width: "100%",
//                       marginTop: "48px",
//                       padding: "5% 0% 5% 0%",
//                       left: "0px",
//                       boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
//                       zIndex: "9999",
//                       backgroundColor: "#ffffff",
//                       justifyContent: "center",
//                       gap: "50px",
//                     }}
//                   >
//                     {/* ------------------- Sub-cnt -----------------  */}
//                     <Box
//                       sx={{
//                         display: "flex",
//                         flexDirection: "column",
//                         gap: "30px",
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           display: "flex",
//                           alignItems: "center",
//                           gap: "20px",
//                         }}
//                       >
//                         <Image
//                           src={CrimeMap}
//                           alt="search"
//                           height={32}
//                           width={32}
//                         />
//                         <Link
//                           onClick={() => setIshover3(false)}
//                           style={{ textDecoration: "none" }}
//                           href="/office-of-the-chief-of-police/office-of-special-operations/detective-bureau/crime-mapping-and-compstat/"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               fontSize: "22px",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Crime Mapping & COMPSTAT`}</Typography>
//                         </Link>
//                       </Box>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           alignItems: "center",
//                           gap: "20px",
//                         }}
//                       >
//                         <Image
//                           src={Ribbon}
//                           alt="search"
//                           height={32}
//                           width={32}
//                         />
//                         <Link
//                           onClick={() => setIshover3(false)}
//                           style={{ textDecoration: "none" }}
//                           href="#"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               fontSize: "22px",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`2022 Criminal Homicide Victims`}</Typography>
//                         </Link>
//                       </Box>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           alignItems: "center",
//                           gap: "20px",
//                         }}
//                       >
//                         <Image
//                           src={IconMision}
//                           alt="search"
//                           height={35}
//                           width={35}
//                         />
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           href="#"
//                           onClick={() => setIshover3(false)}
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               fontSize: "22px",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Missing Persons`}</Typography>
//                         </Link>
//                       </Box>
//                     </Box>

//                     <Divider
//                       orientation="vertical"
//                       flexItem
//                       sx={{ backgroundColor: "grey" }}
//                     />

//                     <Box
//                       sx={{
//                         display: "flex",
//                         flexDirection: "row",
//                         gap: "30px",
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           display: "flex",
//                           flexDirection: "column",
//                           gap: "10px",
//                           alignItems: "flex-start",
//                         }}
//                       >
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           href="/ab-953-the-racial-and-identity-profiling-act-of-2015-ripa"
//                           onClick={() => setIshover3(false)}
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`AB 953: The Racial and Identity Profiling Act of 2015 (RIPA)`}</Typography>
//                         </Link>
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           href="https://www.ojp.gov/about/offices/bureau-justice-statistics-bjs"
//                           onClick={() => setIshover3(false)}
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Bureau of Justice Statistics (BJS)`}</Typography>
//                         </Link>
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           href="/crime-prevention"
//                           onClick={() => setIshover3(false)}
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Crime Prevention`}</Typography>
//                         </Link>
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           href="/office-of-the-chief-of-police/professional-standards-bureau/critical-incident-videos/"
//                           onClick={() => setIshover3(false)}
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Critical Incident Videos`}</Typography>
//                         </Link>
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           href="/domestic-violence"
//                           onClick={() => setIshover3(false)}
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Domestic Violence`}</Typography>
//                         </Link>
//                       </Box>

//                       <Box
//                         sx={{
//                           display: "flex",
//                           flexDirection: "column",
//                           gap: "10px",
//                         }}
//                       >
//                         <Link
//                           onClick={() => setIshover3(false)}
//                           style={{ textDecoration: "none" }}
//                           href="/office-of-the-chief-of-police/office-of-special-operations/detective-bureau/detective-support-and-vice-division/hate-crimes/"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Hate Crime Information`}</Typography>
//                         </Link>
//                         <Link
//                           onClick={() => setIshover3(false)}
//                           style={{ textDecoration: "none" }}
//                           href="/office-of-the-chief-of-police/office-of-special-operations/detective-bureau/detective-support-and-vice-division/human-trafficking"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Human Trafficking`}</Typography>
//                         </Link>
//                         <Link
//                           onClick={() => setIshover3(false)}
//                           style={{ textDecoration: "none" }}
//                           href="/identity-theft"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`ID Theft`}</Typography>
//                         </Link>
//                         <Link
//                           onClick={() => setIshover3(false)}
//                           style={{ textDecoration: "none" }}
//                           href="/statistical-data"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Statistical Data`}</Typography>
//                         </Link>
//                         <Link
//                           onClick={() => setIshover3(false)}
//                           style={{ textDecoration: "none" }}
//                           href="/office-of-the-chief-of-police/office-of-special-operations/transit-services-bureau/traffic-group"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Traffic Info`}</Typography>
//                         </Link>
//                         <Link
//                           onClick={() => setIshover3(false)}
//                           style={{ textDecoration: "none" }}
//                           href="/unsolved-murders-of-lapd-officers/"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Unsolved Murders of LAPD Officers`}</Typography>
//                         </Link>
//                       </Box>
//                     </Box>
//                     {/* ---------------------- End-sub-cnt------------- */}
//                   </Box>
//                 </li>

//                 <li
//                   onMouseEnter={() => setIshover4(true)}
//                   onMouseLeave={() => setIshover4(false)}
//                 >
//                   <Link href="javascript:;" className={navStyle.menu}>
//                     {pageData?.data.get_involved}
//                   </Link>

//                   <Box
//                     className={navStyle.fadeInUp}
//                     sx={{
//                       display: ishover4 ? "flex" : "none",
//                       position: "absolute",
//                       width: "100%",
//                       marginTop: "48px",
//                       padding: "5% 0% 5% 0%",
//                       left: "0px",
//                       boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
//                       zIndex: "9999",
//                       backgroundColor: "#ffffff",
//                       justifyContent: "center",
//                       gap: "50px",
//                     }}
//                   >
//                     {/* ------------------- Sub-cnt -----------------  */}
//                     <Box
//                       sx={{
//                         display: "flex",
//                         flexDirection: "column",
//                         gap: "30px",
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           display: "flex",
//                           alignItems: "center",
//                           gap: "20px",
//                         }}
//                       >
//                         <Image src={Bino} alt="search" height={32} width={32} />
//                         <Link
//                           onClick={() => setIshover4(false)}
//                           style={{ textDecoration: "none" }}
//                           href="/iwatch/"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               fontSize: "22px",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`iWatch`}</Typography>
//                         </Link>
//                       </Box>
//                     </Box>

//                     <Divider
//                       orientation="vertical"
//                       flexItem
//                       sx={{ backgroundColor: "grey" }}
//                     />

//                     <Box
//                       sx={{
//                         display: "flex",
//                         flexDirection: "row",
//                         gap: "30px",
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           display: "flex",
//                           flexDirection: "column",
//                           gap: "10px",
//                           alignItems: "flex-start",
//                         }}
//                       >
//                         <Link
//                           onClick={() => setIshover4(false)}
//                           style={{ textDecoration: "none" }}
//                           href="https://www.lacrimestoppers.org/"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Crime Stoppers`}</Typography>
//                         </Link>
//                         <Link
//                           onClick={() => setIshover4(false)}
//                           style={{ textDecoration: "none" }}
//                           href="/iwatch/"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`iWatch`}</Typography>
//                         </Link>
//                         <Link
//                           onClick={() => setIshover4(false)}
//                           style={{ textDecoration: "none" }}
//                           href="/office-of-the-chief-of-police/office-of-operations/neighborhood-watch/"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Neighborhood Watch`}</Typography>
//                         </Link>
//                       </Box>

//                       <Box
//                         sx={{
//                           display: "flex",
//                           flexDirection: "column",
//                           gap: "10px",
//                         }}
//                       >
//                         <Link
//                           onClick={() => setIshover4(false)}
//                           style={{ textDecoration: "none" }}
//                           href="/office-of-the-chief-of-police/office-of-special-operations/detective-bureau/reward-bulletin/"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Reward Bulletin`}</Typography>
//                         </Link>
//                         <Link
//                           onClick={() => setIshover4(false)}
//                           style={{ textDecoration: "none" }}
//                           href="/office-of-the-chief-of-police/office-of-operations/office-of-operations-orders-and-notices/public-engagement-section/volunteer/"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Volunteer`}</Typography>
//                         </Link>
//                       </Box>
//                     </Box>
//                     {/* ---------------------- End-sub-cnt------------- */}
//                   </Box>
//                 </li>

//                 <li
//                   onMouseEnter={() => setIshover5(true)}
//                   onMouseLeave={() => setIshover5(false)}
//                 >
//                   <Link href="javascript:;" className={navStyle.menu}>
//                     News
//                   </Link>
//                   <Box
//                     className={navStyle.fadeInUp}
//                     sx={{
//                       display: ishover5 ? "flex" : "none",
//                       position: "absolute",
//                       width: "100%",
//                       marginTop: "48px",
//                       padding: "5% 0% 5% 0%",
//                       left: "0px",
//                       boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
//                       zIndex: "9999",
//                       backgroundColor: "#ffffff",
//                       justifyContent: "center",
//                       gap: "50px",
//                     }}
//                   >
//                     {/* ------------------- Sub-cnt -----------------  */}
//                     <Box
//                       sx={{
//                         display: "flex",
//                         flexDirection: "column",
//                         gap: "30px",
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           display: "flex",
//                           alignItems: "center",
//                           gap: "20px",
//                         }}
//                       >
//                         <Image
//                           src={Newspaper}
//                           alt="search"
//                           height={32}
//                           width={32}
//                         />
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           href="#"
//                           onClick={() => setIshover5(false)}
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               fontSize: "22px",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Newsroom`}</Typography>
//                         </Link>
//                       </Box>
//                     </Box>

//                     <Divider
//                       orientation="vertical"
//                       flexItem
//                       sx={{ backgroundColor: "grey" }}
//                     />

//                     <Box
//                       sx={{
//                         display: "flex",
//                         flexDirection: "row",
//                         gap: "30px",
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           display: "flex",
//                           flexDirection: "column",
//                           gap: "10px",
//                           alignItems: "flex-start",
//                         }}
//                       >
//                         <Link
//                           onClick={() => setIshover5(false)}
//                           style={{ textDecoration: "none" }}
//                           href="/office-of-the-chief-of-police/professional-standards-bureau/critical-incident-videos/"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`Critical Incident Videos`}</Typography>
//                         </Link>
//                         <Link
//                           onClick={() => setIshover5(false)}
//                           style={{ textDecoration: "none" }}
//                           href="/lapd_tv/lapd-tv"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`LAPD TV`}</Typography>
//                         </Link>
//                       </Box>

//                       <Box
//                         sx={{
//                           display: "flex",
//                           flexDirection: "column",
//                           gap: "10px",
//                         }}
//                       >
//                         <Link
//                           onClick={() => setIshover5(false)}
//                           style={{ textDecoration: "none" }}
//                           href="https://www.youtube.com/playlist?list=PLW5iqZEagvjPVEfckYNrJGY9Ps-hv407M"
//                         >
//                           <Typography
//                             sx={{
//                               color: "black",
//                               textTransform: "none",
//                               "&:hover": { color: "#e73f15" },
//                             }}
//                           >{`LAPD Up Close`}</Typography>
//                         </Link>
//                       </Box>
//                     </Box>
//                     {/* ---------------------- End-sub-cnt------------- */}
//                   </Box>
//                 </li>

//                 <li>
//                   <Link href="/contact-us">
//                     <button className={global.contactBtn}>
//                       <Typography sx={{ fontWeight: "bold", color: "#fff" }}>
//                         {pageData?.data.contact}{" "}
//                       </Typography>
//                     </button>
//                   </Link>
//                 </li>
//               </ul>
//             </Box>

//             {/* ==================== Mobile Menu =======================  */}
//             <Box
//               className={navStyle.mobNav}
//               sx={{
//                 transition: "all .3s ease-in-out",
//                 zIndex: toggle ? "99999" : "0",
//               }}
//             >
//               <Box
//                 sx={{
//                   position: "absolute",
//                   top: toggle ? "100%" : "-1500px",
//                   width: "100%",
//                   left: "0",
//                   transition: "top .5s ease-in-out",
//                 }}
//               >
//                 <Mobilenav navClose={close} />
//               </Box>
//             </Box>
//             {/* ========================== End Mobile menu =================  */}

//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "flex-end",
//                 height: "100%",
//               }}
//             >
//               <Box className={navStyle.tabSearch}>
//                 <SearchIcon
//                   sx={{
//                     display: toggle ? "none" : "block",
//                     cursor: "pointer",
//                     width: "35px",
//                     height: "35px",
//                     color: tablet ? "#e73f15" : "#000",
//                   }}
//                 />
//               </Box>

//               <Box className={navStyle.mobSearch}>
//                 <MenuIcon
//                   onClick={toggleBtn}
//                   sx={{
//                     display: tablet ? (toggle ? "none" : "block") : "none",
//                     cursor: "pointer",
//                     marginRight: "10px",
//                     width: "40px",
//                     height: "40px",
//                     color: "#e73f15",
//                   }}
//                 />

//                 <CloseIcon
//                   sx={{
//                     display: toggle ? "block" : "none",
//                     opacity: tablet ? "1" : "0",
//                     width: "40px",
//                     height: "40px",
//                     color: "#e73f15",
//                   }}
//                   onClick={close}
//                 />
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default Navbar;

"use client";
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import navStyle from "../styles/nav.module.css";
import { useState } from "react";
import Image from "next/image";
import headerLogo from "../../public/Images/LAPD-Badge-Logo.png";
import searchIcon2 from "../../public/Icons/search-alt-2-svgrepo-com.svg";
import infoIcon from "../../public/Icons/message.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../public/logo.svg";
import jointTeam from "../../public/Icons/icon-jointheteam.svg";
import File from "../../public/Icons/File.svg";
import Traffic from "../../public/Icons/Traffic.svg";
import CrimeMap from "../../public/Icons/icon-crimemapping.svg";
import Ribbon from "../../public/Icons/blk-ribbon.png";
import IconMision from "../../public/Icons/icon-missing.svg";
import Bino from "../../public/Icons/bino2.png";
import Newspaper from "../../public/Icons/icon-newsroom.svg";
import Mobilenav from "../component/Mobilenav";
import global from "../app/global.module.css";
import { createClient } from "@/prismicio";
import { Anybody } from "next/font/google";
import type * as prismic from "@prismicio/client";
import { AllDocumentTypes } from "../../prismicio-types";
import React, { useEffect } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleBtn = () => {
    setToggle(!toggle);
  };
  const close = () => {
    setToggle(false);
  };

  const [ishover1, setIshover1] = useState(false);
  const [ishover2, setIshover2] = useState(false);
  const [ishover3, setIshover3] = useState(false);
  const [ishover4, setIshover4] = useState(false);
  const [ishover5, setIshover5] = useState(false);

  const tablet = useMediaQuery("(max-width:1020px)");
  const [pageData, setPageData] = useState<AllDocumentTypes | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const client = createClient();
      const page = await client.getSingle("settings");
      setPageData(page);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="non-sticky-header">
        <Box
          sx={{
            display: toggle ? (tablet ? "none" : " ") : "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#052942",
              height: "50px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "6px",
                marginLeft: "15px",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image alt="logo" src={logo} height={30} width={30} />
              <Typography
                sx={{ color: "white", fontSize: "16px", fontWeight: "bold" }}
              >
                LOS ANGELS
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "15px",
                marginRight: "15px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <Box className={navStyle.topNavbar}>
                    <Typography sx={{ fontSize: "12px" }}>311</Typography>
                  </Box>
                  <Typography
                    className={navStyle.headerContent}
                    sx={{ color: "white", fontSize: "12px" }}
                  >
                    City Services
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <Box className={navStyle.topNavbar}>
                    <Typography sx={{ fontSize: "12px" }}>LA</Typography>
                  </Box>
                  <Typography
                    className={navStyle.headerContent}
                    sx={{ color: "white", fontSize: "12px" }}
                  >
                    City Directory
                  </Typography>
                </Box>
              </Box>

              <Box className={navStyle.headerContent} sx={{ padding: "5px" }}>
                <input placeholder="English"></input>
              </Box>
            </Box>
          </Box>

          <Box className={navStyle.topNavContentBox}>
            <p className={navStyle.topNavContent1}> </p>{" "}
            <span
              style={{
                height: "2px",
                width: "20px",
                opacity: ".9",
                backgroundColor: "black",
                marginLeft: "10px",
              }}
            ></span>
            <Link
              style={{ textDecoration: "none" }}
              href="https://www.youtube.com/watch?v=SIUb_Y3fVFk"
            >
              <p className={navStyle.topNavContent2}>
                {pageData?.data.daily_update}
              </p>
            </Link>
          </Box>
        </Box>
      </div>

      <Box className={navStyle.stickyHeader}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={2} md={1}>
            <Box
              sx={{
                marginTop: "-12px",
                display: toggle ? (tablet ? "none" : "") : "block",
              }}
            >
              <Link href="/">
                <Image
                  src={headerLogo}
                  id="logo"
                  alt="header-logo"
                  height={96}
                  width={68}
                />
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            xs={10}
            md={11}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: "30px",
            }}
          >
            <Box className={navStyle.tablist}>
              <ul
                className={navStyle.lists}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                  listStyle: "none",
                  gap: "20px",
                }}
              >
                <li
                  onMouseEnter={() => setIshover1(true)}
                  onMouseLeave={() => setIshover1(false)}
                >
                  <Link href="javascript:;" className={navStyle.menu}>
                    {/* YOUR LAPD */}
                    {pageData?.data.your_lapd}
                  </Link>
                  <Box
                    className={navStyle.fadeInUp}
                    sx={{
                      display: ishover1 ? "flex" : "none",
                      position: "absolute",
                      width: "100%",
                      padding: "0% 0% 5% 0%",
                      left: "0px",
                      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                      zIndex: "9999",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      className={navStyle.fadeInUp}
                      sx={{
                        display: ishover1 ? "flex" : "none",
                        position: "absolute",
                        width: "100%",
                        marginTop: "48px",
                        padding: "5% 0% 5% 0%",
                        left: "0px",
                        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                        zIndex: "9999",
                        backgroundColor: "#ffffff",
                        justifyContent: "center",
                        gap: "50px",
                        transition: "all 3s ease-out",
                      }}
                    >
                      {/* ------------------- Sub-cnt -----------------  */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "30px",
                          marginLeft: "-50px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                          }}
                        >
                          <Image
                            src={searchIcon2}
                            alt="search"
                            height={32}
                            width={32}
                          />
                          <Link
                            style={{ textDecoration: "none" }}
                            href="/find-your-local-police-station"
                            onClick={() => setIshover1(false)}
                          >
                            <Typography
                              sx={{
                                color: "black",
                                fontSize: "22px",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Find Your Local Police Station`}</Typography>
                          </Link>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                          }}
                        >
                          <Image
                            src={infoIcon}
                            alt="search"
                            height={32}
                            width={32}
                          />
                          <Link
                            style={{ textDecoration: "none" }}
                            href="/inside-the-lapd"
                            onClick={() => setIshover1(false)}
                          >
                            <Typography
                              sx={{
                                color: "black",
                                fontSize: "22px",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Inside the LAPD`}</Typography>
                          </Link>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                          }}
                        >
                          <Image
                            src={jointTeam}
                            alt="search"
                            height={35}
                            width={35}
                          />
                          <Link
                            style={{ textDecoration: "none" }}
                            href="/training-division/join-the-team"
                            onClick={() => setIshover1(false)}
                          >
                            <Typography
                              sx={{
                                color: "black",
                                fontSize: "22px",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Join the LAPD`}</Typography>
                          </Link>
                        </Box>
                      </Box>

                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ backgroundColor: "grey" }}
                      />

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "30px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}
                        >
                          <Link
                            style={{ textDecoration: "none" }}
                            href="https://www.lapdcsp.org/"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Community Safety Partnership Bureau`}</Typography>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            href="/office-of-the-chief-of-police/constitutional-policing"
                            onClick={() => setIshover1(false)}
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Constitutional Policing`}</Typography>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            href="/history-of-the-lapd"
                            onClick={() => setIshover1(false)}
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`History of the LAPD`}</Typography>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            href="/lapd-organization-chart"
                            onClick={() => setIshover1(false)}
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`LAPD Organization Chart`}</Typography>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            href="https://thelapdstore.com/"
                            onClick={() => setIshover1(false)}
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`LAPD Store`}</Typography>
                          </Link>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}
                        >
                          <Link
                            style={{ textDecoration: "none" }}
                            href="/police-commission/medal-of-valor"
                            onClick={() => setIshover1(false)}
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Medal of Valor, Purple Heart & Preservation of Life Awards`}</Typography>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            href="/our-motto-mission-statement-core-values"
                            onClick={() => setIshover1(false)}
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Mission, Vision, Values`}</Typography>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            href="/officers-killed-in-the-line-of-duty/"
                            onClick={() => setIshover1(false)}
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Officers Killed in the Line of Duty`}</Typography>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            href="https://lapdonlinestrgeacc.blob.core.usgovcloudapi.net/lapdonlinemedia/2021/12/Strategic-Plan-2021-to-2023.pdf"
                            onClick={() => setIshover1(false)}
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Strategic Plan 2021 to 2023`}</Typography>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            href="/public-communications-group/media-relations-division/entertainment-trademark-unit/"
                            onClick={() => setIshover1(false)}
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Trademark & Licensing`}</Typography>
                          </Link>
                        </Box>
                      </Box>
                      {/* ---------------------- End-sub-cnt------------- */}
                    </Box>
                  </Box>
                </li>

                <li
                  onMouseEnter={() => setIshover2(true)}
                  onMouseLeave={() => setIshover2(false)}
                >
                  <Link href="javascript:;" className={navStyle.menu}>
                    {pageData?.data.get_service}
                  </Link>
                  <Box
                    className={navStyle.fadeInUp}
                    sx={{
                      display: ishover2 ? "flex" : "none",
                      position: "absolute",
                      width: "100%",
                      padding: "0% 0% 5% 0%",
                      left: "0px",
                      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                      zIndex: "9999",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      className={navStyle.fadeInUp}
                      sx={{
                        display: ishover2 ? "flex" : "none",
                        position: "absolute",
                        width: "100%",
                        marginTop: "48px",
                        padding: "5% 0% 5% 0%",
                        left: "0px",
                        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                        zIndex: "9999",
                        backgroundColor: "#ffffff",
                        justifyContent: "center",
                        gap: "50px",
                      }}
                    >
                      {/* ------------------- Sub-cnt -----------------  */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "30px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                          }}
                        >
                          <Image
                            src={File}
                            alt="search"
                            height={32}
                            width={32}
                          />
                          <Link
                            style={{ textDecoration: "none" }}
                            href="/file-a-police-report"
                            onClick={() => setIshover2(false)}
                          >
                            <Typography
                              sx={{
                                color: "black",
                                fontSize: "22px",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`File a Police Report`}</Typography>
                          </Link>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                          }}
                        >
                          <Image
                            src={Traffic}
                            alt="search"
                            height={32}
                            width={32}
                          />
                          <Link
                            style={{ textDecoration: "none" }}
                            onClick={() => setIshover2(false)}
                            href="/office-of-the-chief-of-police/office-of-special-operations/transit-services-bureau/file-a-traffic-collision-report"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                fontSize: "22px",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Obtain a Traffic Collision Report`}</Typography>
                          </Link>
                        </Box>
                      </Box>

                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ backgroundColor: "grey" }}
                      />

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "30px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            alignItems: "flex-start",
                          }}
                        >
                          <Link
                            style={{ textDecoration: "none" }}
                            onClick={() => setIshover2(false)}
                            href="/california-public-records-act"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`California Public Records Act`}</Typography>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            onClick={() => setIshover2(false)}
                            href="/office-of-the-chief-of-police/office-of-special-operations/detective-bureau/detective-services-group/ccw-carry-concealed-weapon-license"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`CCW Carry Concealed Weapon License`}</Typography>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            onClick={() => setIshover2(false)}
                            href="/employee-commendation"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Commend an Officer`}</Typography>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            onClick={() => setIshover2(false)}
                            href="/faqs"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`FAQ’s`}</Typography>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            onClick={() => setIshover2(false)}
                            href="/office-of-the-chief-of-police/professional-standards-bureau/report-employee-misconduct/"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`File a Complaint`}</Typography>
                          </Link>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}
                        >
                          <Link
                            style={{ textDecoration: "none" }}
                            href="/fireworks-complaints"
                            onClick={() => setIshover2(false)}
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Fireworks Complaints`}</Typography>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            onClick={() => setIshover2(false)}
                            href="/inside-the-lapd/obtaining-police-information"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Request a Police Report (Victims Only)`}</Typography>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            onClick={() => setIshover2(false)}
                            href="/inside-the-lapd/sites-of-interest"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Sites of Interest`}</Typography>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            onClick={() => setIshover2(false)}
                            href="/reference-library/undocumented-immigrants/"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Undocumented Immigrants`}</Typography>
                          </Link>
                        </Box>
                      </Box>
                      {/* ---------------------- End-sub-cnt------------- */}
                    </Box>
                  </Box>
                </li>

                <li
                  onMouseEnter={() => setIshover3(true)}
                  onMouseLeave={() => setIshover3(false)}
                >
                  <Link href="javascript:;" className={navStyle.menu}>
                    {pageData?.data.crime_info}
                  </Link>
                  <Box
                    className={navStyle.fadeInUp}
                    sx={{
                      display: ishover3 ? "flex" : "none",
                      position: "absolute",
                      width: "100%",
                      padding: "0% 0% 5% 0%",
                      left: "0px",
                      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                      zIndex: "9999",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      className={navStyle.fadeInUp}
                      sx={{
                        display: ishover3 ? "flex" : "none",
                        position: "absolute",
                        width: "100%",
                        marginTop: "48px",
                        padding: "5% 0% 5% 0%",
                        left: "0px",
                        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                        zIndex: "9999",
                        backgroundColor: "#ffffff",
                        justifyContent: "center",
                        gap: "50px",
                      }}
                    >
                      {/* ------------------- Sub-cnt -----------------  */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "30px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                          }}
                        >
                          <Image
                            src={CrimeMap}
                            alt="search"
                            height={32}
                            width={32}
                          />
                          <Link
                            onClick={() => setIshover3(false)}
                            style={{ textDecoration: "none" }}
                            href="/office-of-the-chief-of-police/office-of-special-operations/detective-bureau/crime-mapping-and-compstat/"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                fontSize: "22px",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Crime Mapping & COMPSTAT`}</Typography>
                          </Link>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                          }}
                        >
                          <Image
                            src={Ribbon}
                            alt="search"
                            height={32}
                            width={32}
                          />
                          <Link
                            onClick={() => setIshover3(false)}
                            style={{ textDecoration: "none" }}
                            href="#"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                fontSize: "22px",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`2022 Criminal Homicide Victims`}</Typography>
                          </Link>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                          }}
                        >
                          <Image
                            src={IconMision}
                            alt="search"
                            height={35}
                            width={35}
                          />
                          <Link
                            style={{ textDecoration: "none" }}
                            href="#"
                            onClick={() => setIshover3(false)}
                          >
                            <Typography
                              sx={{
                                color: "black",
                                fontSize: "22px",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Missing Persons`}</Typography>
                          </Link>
                        </Box>
                      </Box>

                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ backgroundColor: "grey" }}
                      />

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "30px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            alignItems: "flex-start",
                          }}
                        >
                          <Link
                            style={{ textDecoration: "none" }}
                            href="/ab-953-the-racial-and-identity-profiling-act-of-2015-ripa"
                            onClick={() => setIshover3(false)}
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`AB 953: The Racial and Identity Profiling Act of 2015 (RIPA)`}</Typography>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            href="https://www.ojp.gov/about/offices/bureau-justice-statistics-bjs"
                            onClick={() => setIshover3(false)}
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Bureau of Justice Statistics (BJS)`}</Typography>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            href="/crime-prevention"
                            onClick={() => setIshover3(false)}
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Crime Prevention`}</Typography>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            href="/office-of-the-chief-of-police/professional-standards-bureau/critical-incident-videos/"
                            onClick={() => setIshover3(false)}
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Critical Incident Videos`}</Typography>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            href="/domestic-violence"
                            onClick={() => setIshover3(false)}
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Domestic Violence`}</Typography>
                          </Link>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}
                        >
                          <Link
                            onClick={() => setIshover3(false)}
                            style={{ textDecoration: "none" }}
                            href="/office-of-the-chief-of-police/office-of-special-operations/detective-bureau/detective-support-and-vice-division/hate-crimes/"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Hate Crime Information`}</Typography>
                          </Link>
                          <Link
                            onClick={() => setIshover3(false)}
                            style={{ textDecoration: "none" }}
                            href="/office-of-the-chief-of-police/office-of-special-operations/detective-bureau/detective-support-and-vice-division/human-trafficking"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Human Trafficking`}</Typography>
                          </Link>
                          <Link
                            onClick={() => setIshover3(false)}
                            style={{ textDecoration: "none" }}
                            href="/identity-theft"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`ID Theft`}</Typography>
                          </Link>
                          <Link
                            onClick={() => setIshover3(false)}
                            style={{ textDecoration: "none" }}
                            href="/statistical-data"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Statistical Data`}</Typography>
                          </Link>
                          <Link
                            onClick={() => setIshover3(false)}
                            style={{ textDecoration: "none" }}
                            href="/office-of-the-chief-of-police/office-of-special-operations/transit-services-bureau/traffic-group"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Traffic Info`}</Typography>
                          </Link>
                          <Link
                            onClick={() => setIshover3(false)}
                            style={{ textDecoration: "none" }}
                            href="/unsolved-murders-of-lapd-officers/"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Unsolved Murders of LAPD Officers`}</Typography>
                          </Link>
                        </Box>
                      </Box>
                      {/* ---------------------- End-sub-cnt------------- */}
                    </Box>
                  </Box>
                </li>

                <li
                  onMouseEnter={() => setIshover4(true)}
                  onMouseLeave={() => setIshover4(false)}
                >
                  <Link href="javascript:;" className={navStyle.menu}>
                    {pageData?.data.get_involved}
                  </Link>
                  <Box
                    className={navStyle.fadeInUp}
                    sx={{
                      display: ishover4 ? "flex" : "none",
                      position: "absolute",
                      width: "100%",
                      padding: "0% 0% 5% 0%",
                      left: "0px",
                      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                      zIndex: "9999",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      className={navStyle.fadeInUp}
                      sx={{
                        display: ishover4 ? "flex" : "none",
                        position: "absolute",
                        width: "100%",
                        marginTop: "48px",
                        padding: "5% 0% 5% 0%",
                        left: "0px",
                        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                        zIndex: "9999",
                        backgroundColor: "#ffffff",
                        justifyContent: "center",
                        gap: "50px",
                      }}
                    >
                      {/* ------------------- Sub-cnt -----------------  */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "30px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                          }}
                        >
                          <Image
                            src={Bino}
                            alt="search"
                            height={32}
                            width={32}
                          />
                          <Link
                            onClick={() => setIshover4(false)}
                            style={{ textDecoration: "none" }}
                            href="/iwatch/"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                fontSize: "22px",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`iWatch`}</Typography>
                          </Link>
                        </Box>
                      </Box>

                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ backgroundColor: "grey" }}
                      />

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "30px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            alignItems: "flex-start",
                          }}
                        >
                          <Link
                            onClick={() => setIshover4(false)}
                            style={{ textDecoration: "none" }}
                            href="https://www.lacrimestoppers.org/"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Crime Stoppers`}</Typography>
                          </Link>
                          <Link
                            onClick={() => setIshover4(false)}
                            style={{ textDecoration: "none" }}
                            href="/iwatch/"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`iWatch`}</Typography>
                          </Link>
                          <Link
                            onClick={() => setIshover4(false)}
                            style={{ textDecoration: "none" }}
                            href="/office-of-the-chief-of-police/office-of-operations/neighborhood-watch/"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Neighborhood Watch`}</Typography>
                          </Link>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}
                        >
                          <Link
                            onClick={() => setIshover4(false)}
                            style={{ textDecoration: "none" }}
                            href="/office-of-the-chief-of-police/office-of-special-operations/detective-bureau/reward-bulletin/"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Reward Bulletin`}</Typography>
                          </Link>
                          <Link
                            onClick={() => setIshover4(false)}
                            style={{ textDecoration: "none" }}
                            href="/office-of-the-chief-of-police/office-of-operations/office-of-operations-orders-and-notices/public-engagement-section/volunteer/"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Volunteer`}</Typography>
                          </Link>
                        </Box>
                      </Box>
                      {/* ---------------------- End-sub-cnt------------- */}
                    </Box>
                  </Box>
                </li>

                <li
                  onMouseEnter={() => setIshover5(true)}
                  onMouseLeave={() => setIshover5(false)}
                >
                  <Link href="javascript:;" className={navStyle.menu}>
                    News
                  </Link>
                  <Box
                    className={navStyle.fadeInUp}
                    sx={{
                      display: ishover5 ? "flex" : "none",
                      position: "absolute",
                      width: "100%",
                      padding: "0% 0% 5% 0%",
                      left: "0px",
                      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                      zIndex: "9999",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      className={navStyle.fadeInUp}
                      sx={{
                        display: ishover5 ? "flex" : "none",
                        position: "absolute",
                        width: "100%",
                        marginTop: "48px",
                        padding: "5% 0% 5% 0%",
                        left: "0px",
                        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                        zIndex: "9999",
                        backgroundColor: "#ffffff",
                        justifyContent: "center",
                        gap: "50px",
                      }}
                    >
                      {/* ------------------- Sub-cnt -----------------  */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "30px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                          }}
                        >
                          <Image
                            src={Newspaper}
                            alt="search"
                            height={32}
                            width={32}
                          />
                          <Link
                            style={{ textDecoration: "none" }}
                            href="#"
                            onClick={() => setIshover5(false)}
                          >
                            <Typography
                              sx={{
                                color: "black",
                                fontSize: "22px",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Newsroom`}</Typography>
                          </Link>
                        </Box>
                      </Box>

                      <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ backgroundColor: "grey" }}
                      />

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "30px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            alignItems: "flex-start",
                          }}
                        >
                          <Link
                            onClick={() => setIshover5(false)}
                            style={{ textDecoration: "none" }}
                            href="/office-of-the-chief-of-police/professional-standards-bureau/critical-incident-videos/"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`Critical Incident Videos`}</Typography>
                          </Link>
                          <Link
                            onClick={() => setIshover5(false)}
                            style={{ textDecoration: "none" }}
                            href="/lapd_tv/lapd-tv"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`LAPD TV`}</Typography>
                          </Link>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}
                        >
                          <Link
                            onClick={() => setIshover5(false)}
                            style={{ textDecoration: "none" }}
                            href="https://www.youtube.com/playlist?list=PLW5iqZEagvjPVEfckYNrJGY9Ps-hv407M"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                textTransform: "none",
                                "&:hover": { color: "#e73f15" },
                              }}
                            >{`LAPD Up Close`}</Typography>
                          </Link>
                        </Box>
                      </Box>
                      {/* ---------------------- End-sub-cnt------------- */}
                    </Box>
                  </Box>
                </li>

                <li>
                  <Link href="/contact-us">
                    <button className={global.contactBtn}>
                      <Typography sx={{ fontWeight: "bold", color: "#fff" }}>
                        {pageData?.data.contact}{" "}
                      </Typography>
                    </button>
                  </Link>
                </li>
              </ul>
            </Box>

            {/* ==================== Mobile Menu =======================  */}
            <Box
              className={navStyle.mobNav}
              sx={{
                transition: "all .3s ease-in-out",
                zIndex: toggle ? "99999" : "0",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: toggle ? "100%" : "-1500px",
                  width: "100%",
                  left: "0",
                  transition: "top .5s ease-in-out",
                }}
              >
                <Mobilenav navClose={close} />
              </Box>
            </Box>
            {/* ========================== End Mobile menu =================  */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                height: "100%",
              }}
            >
              <Box className={navStyle.tabSearch}>
                <SearchIcon
                  sx={{
                    display: toggle ? "none" : "block",
                    cursor: "pointer",
                    width: "35px",
                    height: "35px",
                    color: tablet ? "#e73f15" : "#000",
                  }}
                />
              </Box>

              <Box className={navStyle.mobSearch}>
                <MenuIcon
                  onClick={toggleBtn}
                  sx={{
                    display: tablet ? (toggle ? "none" : "block") : "none",
                    cursor: "pointer",
                    marginRight: "10px",
                    width: "40px",
                    height: "40px",
                    color: "#e73f15",
                  }}
                />

                <CloseIcon
                  sx={{
                    display: toggle ? "block" : "none",
                    opacity: tablet ? "1" : "0",
                    width: "40px",
                    height: "40px",
                    color: "#e73f15",
                  }}
                  onClick={close}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Navbar;
