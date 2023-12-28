"use client"
import { Box, Button, Divider, Grid, Typography, useMediaQuery } from '@mui/material'
import Link from 'next/link'
import SearchIcon from '@mui/icons-material/Search';
import navStyle from "../styles/nav.module.css"
import { useState } from 'react';
import Image from 'next/image'
import headerLogo from "../../public/Images/LAPD-Badge-Logo.png"
import searchIcon2 from "../../public/Icons/search-alt-2-svgrepo-com.svg"
import infoIcon from "../../public/Icons/message.png"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from "../../public/logo.svg";
import jointTeam from "../../public/Icons/icon-jointheteam.svg";
import File from "../../public/Icons/File.svg";
import Traffic from "../../public/Icons/Traffic.svg";
import CrimeMap from "../../public/Icons/icon-crimemapping.svg";
import Ribbon from "../../public/Icons/blk-ribbon.png";
import IconMision from "../../public/Icons/icon-missing.svg";
import Bino from "../../public/Icons/bino2.png";
import Newspaper from "../../public/Icons/icon-newsroom.svg"
import Mobilenav from "../component/Mobilenav"


const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const toggleBtn = () => {
        setToggle(!toggle)
    }
    const close = () => {
        setToggle(false)
    }
    const [ishover1, setIshover1] = useState(false);
    const [ishover2, setIshover2] = useState(false);
    const [ishover3, setIshover3] = useState(false);
    const [ishover4, setIshover4] = useState(false);
    const [ishover5, setIshover5] = useState(false);


    const tablet = useMediaQuery('(max-width:992px)');
    return (
        <>
            <div className="non-sticky-header">
                <Box sx={{ display: toggle ? tablet ? "none"  : ' ' : "flex", flexDirection: "column" }}>

                    <Box sx={{ width: "100%", backgroundColor: "#052942", height: "50px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                        <Box sx={{ display: "flex", gap: "6px", marginLeft: "15px",flexDirection:"row",alignItems:"center" }}>
                            <Image alt="logo" src={logo} height={30} width={30} />
                            <Typography sx={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>LOS ANGELS</Typography>
                        </Box>

                        <Box sx={{ display: "flex", gap: "15px", marginRight: "15px", justifyContent: "center", alignItems: "center" }}>
                            <Box>
                                <Box sx={{ display: "flex", gap: "5px" }}>
                                    <Box className={navStyle.topNavbar} sx={{ backgroundColor: "white", borderRadius: "5px", padding: "1px 7px 1px 7px", textAlign: "center", justifyContent: "center", display: "flex" }}>
                                        <Typography sx={{ fontSize: "12px" }}>311</Typography>
                                    </Box>
                                    <Typography className={navStyle.headerContent} sx={{ color: "white", fontSize: "12px" }}>
                                        City Services
                                    </Typography>
                                </Box>
                            </Box>


                            <Box>
                                <Box sx={{ display: "flex", gap: "5px" }}>
                                    <Box className={navStyle.topNavbar}  sx={{ backgroundColor: "white", borderRadius: "5px", padding: "1px 7px 1px 7px", textAlign: "center", justifyContent: "center", display: "flex" }}>
                                        <Typography sx={{ fontSize: "12px" }}>LA</Typography>
                                    </Box>
                                    <Typography className={navStyle.headerContent} sx={{ color: "white", fontSize: "12px" }}>
                                        City Directory
                                    </Typography>
                                </Box>
                            </Box>


                            <Box className={navStyle.headerContent}  sx={{ padding: "5px" }}>
                                <input placeholder='English'></input>
                            </Box>
                        </Box>

                    </Box>



                    <Box className={navStyle.topNavContentBox} sx={{ display: "flex", alignItems: "center", backgroundColor: "#ebf4f7", width: "100%", justifyContent: "center", height: "50px", gap: "10px" }}>
                        <Typography className={navStyle.topNavContent}>Have a Safe Holiday </Typography> <span style={{ height: "2px", width: "20px", opacity: ".9", backgroundColor: "black", marginLeft: "10px" }}></span>
                        <Link style={{ textDecoration: 'none' }} href='https://www.youtube.com/watch?v=SIUb_Y3fVFk'>
                            <Typography className={navStyle.topNavContent} sx={{ color: "#e73f15", textTransform: "none", '&:hover': { color: "grey" } }}>{`Chief's Message - December 2023`}</Typography>
                        </Link>

                    </Box>

                </Box>
            </div>

            <Box className={navStyle.stickyHeader} sx={{ padding: "2% 5% 2% 5%", position: tablet ? 'relative' : "sticky" }}>
                <Grid sx={{}} container rowSpacing={2} columnSpacing={2}>
                    <Grid item xs={4} sm={2} md={2}>
                        <Box sx={{ marginTop: "-12px", display: toggle ? tablet ? "none" : '' : "block" }}>
                            <Image src={headerLogo} alt="header-logo" height={96} width={68} />
                        </Box>
                    </Grid>
                    <Grid item xs={4} sm={8} md={9}>
                        <Box sx={{ display: tablet ? 'none' : '' }}>
                            <ul className={navStyle.lists} style={{ display: 'flex', alignItems: 'center', justifyContent: "end", listStyle: 'none', gap: "20px" }}>

                                <li onMouseEnter={() => setIshover1(true)}
                                    onMouseLeave={() => setIshover1(false)}>

                                    <Link href={'/'} className={navStyle.menu}>YOUR LAPD</Link>
                                    <Box className={navStyle.fadeInUp}  sx={{
                                        display: ishover1 ? 'flex' : 'none', position: 'absolute', width: "100%", marginTop: "48px", padding: "5% 0% 5% 0%", left: '0px',
                                        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', zIndex: '9999', backgroundColor: "#ffffff", justifyContent:"center", gap: "50px",transition:"all 3s ease-out"
                                    }}>
                                        {/* ------------------- Sub-cnt -----------------  */}
                                        <Box  sx={{ display: "flex", flexDirection: "column", gap: "30px",marginLeft:"-50px" }}>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                                <Image src={searchIcon2} alt='search' height={32} width={32} />
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", fontSize: "22px", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Find Your Local Police Station`}</Typography>
                                                </Link>
                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                                <Image src={infoIcon} alt='search' height={32} width={32} />
                                                <Link style={{ textDecoration: 'none' }} href='/inside-the-lapd'>
                                                    <Typography sx={{ color: "black", fontSize: "22px", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Inside the LAPD`}</Typography>
                                                </Link>


                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                                <Image src={jointTeam} alt='search' height={35} width={35} />
                                                <Link style={{ textDecoration: 'none' }} href='/training-division/join-the-team'>
                                                    <Typography sx={{ color: "black", fontSize: "22px", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Join the LAPD`}</Typography>
                                                </Link>


                                            </Box>
                                        </Box>

                                        <Divider orientation="vertical" flexItem sx={{ backgroundColor: "grey" }} />

                                        <Box sx={{ display: "flex", flexDirection: "row", gap: "30px"}}>
                                            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                                <Link style={{ textDecoration: 'none' }} href='https://www.lapdcsp.org/'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Community Safety Partnership Bureau`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='/office-of-the-chief-of-police/constitutional-policing'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Constitutional Policing`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='/history-of-the-lapd'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`History of the LAPD`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='/lapd-organization-chart'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`LAPD Organization Chart`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='https://thelapdstore.com/'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`LAPD Store`}</Typography>
                                                </Link>
                                            </Box>

                                            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                                <Link style={{ textDecoration: 'none' }} href='/police-commission/medal-of-valor'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Medal of Valor, Purple Heart & Preservation of Life Awards`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='/our-motto-mission-statement-core-values'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Mission, Vision, Values`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Officers Killed in the Line of Duty`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Strategic Plan 2021 to 2023`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='/public-communications-group/media-relations-division/entertainment-trademark-unit/'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Trademark & Licensing`}</Typography>
                                                </Link>
                                            </Box>
                                        </Box>
                                        {/* ---------------------- End-sub-cnt------------- */}
                                    </Box>
                                </li>

                                <li onMouseEnter={() => setIshover2(true)}
                                    onMouseLeave={() => setIshover2(false)}>
                                    <Link href={'/'} className={navStyle.menu}>GET SERVICE</Link>
                                    <Box className={navStyle.fadeInUp} sx={{
                                        display: ishover2 ? 'flex' : 'none', position: 'absolute', width: "100%", marginTop: "48px", padding: "5% 0% 5% 0%", left: '0px',
                                        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', zIndex: '9999', backgroundColor: "#ffffff", justifyContent: "center", gap: "50px"
                                    }}>
                                        {/* ------------------- Sub-cnt -----------------  */}
                                        <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                                <Image src={File} alt='search' height={32} width={32} />
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", fontSize: "22px", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`File a Police Report`}</Typography>
                                                </Link>
                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                                <Image src={Traffic} alt='search' height={32} width={32} />
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", fontSize: "22px", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Obtain a Traffic Collision Report`}</Typography>
                                                </Link>
                                            </Box>

                                        </Box>

                                        <Divider orientation="vertical" flexItem sx={{ backgroundColor: "grey" }} />

                                        <Box sx={{ display: "flex", flexDirection: "row", gap: "30px" }}>
                                            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start" }}>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`California Public Records Act`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`CCW Carry Concealed Weapon License`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Commend an Officer`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`FAQ’s`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`File a Complaint`}</Typography>
                                                </Link>
                                            </Box>

                                            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Fireworks Complaints`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Request a Police Report (Victims Only)`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Sites of Interest`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Undocumented Immigrants`}</Typography>
                                                </Link>

                                            </Box>
                                        </Box>
                                        {/* ---------------------- End-sub-cnt------------- */}
                                    </Box>
                                </li>

                                <li onMouseEnter={() => setIshover3(true)}
                                    onMouseLeave={() => setIshover3(false)}>
                                    <Link href={'/'} className={navStyle.menu}>CRIME INFO</Link>
                                    <Box className={navStyle.fadeInUp} sx={{
                                        display: ishover3 ? 'flex' : 'none', position: 'absolute', width: "100%", marginTop: "48px", padding: "5% 0% 5% 0%", left: '0px',
                                        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', zIndex: '9999', backgroundColor: "#ffffff", justifyContent: "center", gap: "50px"
                                    }}>
                                        {/* ------------------- Sub-cnt -----------------  */}
                                        <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                                <Image src={CrimeMap} alt='search' height={32} width={32} />
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", fontSize: "22px", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Crime Mapping & COMPSTAT`}</Typography>
                                                </Link>
                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                                <Image src={Ribbon} alt='search' height={32} width={32} />
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", fontSize: "22px", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`2022 Criminal Homicide Victims`}</Typography>
                                                </Link>


                                            </Box>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                                <Image src={IconMision} alt='search' height={35} width={35} />
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", fontSize: "22px", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Missing Persons`}</Typography>
                                                </Link>


                                            </Box>
                                        </Box>

                                        <Divider orientation="vertical" flexItem sx={{ backgroundColor: "grey" }} />

                                        <Box sx={{ display: "flex", flexDirection: "row", gap: "30px" }}>
                                            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start" }}>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`AB 953: The Racial and Identity Profiling Act of 2015 (RIPA)`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Bureau of Justice Statistics (BJS)`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Crime Prevention`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Critical Incident Videos`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Domestic Violence`}</Typography>
                                                </Link>
                                            </Box>

                                            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Hate Crime Information`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Human Trafficking`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`ID Theft`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Statistical Data`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Traffic Info`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Unsolved Murders of LAPD Officers`}</Typography>
                                                </Link>
                                            </Box>
                                        </Box>
                                        {/* ---------------------- End-sub-cnt------------- */}
                                    </Box>
                                </li>

                                <li onMouseEnter={() => setIshover4(true)}
                                    onMouseLeave={() => setIshover4(false)}>
                                    <Link href={'/'} className={navStyle.menu}>GET INVOLVED</Link>

                                    <Box className={navStyle.fadeInUp} sx={{
                                        display: ishover4 ? 'flex' : 'none', position: 'absolute', width: "100%", marginTop: "48px", padding: "5% 0% 5% 0%", left: '0px',
                                        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', zIndex: '9999', backgroundColor: "#ffffff", justifyContent: "center", gap: "50px"
                                    }}>
                                        {/* ------------------- Sub-cnt -----------------  */}
                                        <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                                <Image src={Bino} alt='search' height={32} width={32} />
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", fontSize: "22px", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`iWatch`}</Typography>
                                                </Link>
                                            </Box>

                                        </Box>

                                        <Divider orientation="vertical" flexItem sx={{ backgroundColor: "grey" }} />

                                        <Box sx={{ display: "flex", flexDirection: "row", gap: "30px" }}>
                                            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start" }}>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Crime Stoppers`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`iWatch`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Neighborhood Watch`}</Typography>
                                                </Link>
                                            </Box>

                                            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Reward Bulletin`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Volunteer`}</Typography>
                                                </Link>

                                            </Box>
                                        </Box>
                                        {/* ---------------------- End-sub-cnt------------- */}
                                    </Box>
                                </li>

                                <li onMouseEnter={() => setIshover5(true)}
                                    onMouseLeave={() => setIshover5(false)}>
                                    <Link href={'/'} className={navStyle.menu}>News</Link>
                                    <Box className={navStyle.fadeInUp} sx={{
                                        display: ishover5 ? 'flex' : 'none', position: 'absolute', width: "100%", marginTop: "48px", padding: "5% 0% 5% 0%", left: '0px',
                                        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', zIndex: '9999', backgroundColor: "#ffffff", justifyContent: "center", gap: "50px"
                                    }}>
                                        {/* ------------------- Sub-cnt -----------------  */}
                                        <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                                            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                                <Image src={Newspaper} alt='search' height={32} width={32} />
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", fontSize: "22px", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Newsroom`}</Typography>
                                                </Link>
                                            </Box>
                                        </Box>

                                        <Divider orientation="vertical" flexItem sx={{ backgroundColor: "grey" }} />

                                        <Box sx={{ display: "flex", flexDirection: "row", gap: "30px" }}>
                                            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start" }}>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Critical Incident Videos`}</Typography>
                                                </Link>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`LAPD TV`}</Typography>
                                                </Link>

                                            </Box>

                                            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                                <Link style={{ textDecoration: 'none' }} href='#'>
                                                    <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`LAPD Up Close`}</Typography>
                                                </Link>

                                            </Box>
                                        </Box>
                                        {/* ---------------------- End-sub-cnt------------- */}
                                    </Box>
                                </li>

                                <li>
                                    <Link href="#"><Button variant="contained" sx={{ backgroundColor: "#e73f15", padding: "12px 16px", color: "white", borderRadius: "0px", '&:hover': { backgroundColor: "#e73f15", color: "white" } }}>
                                        <Typography sx={{ fontWeight: "bold" }}>CONTACT </Typography>
                                    </Button></Link>
                                </li>
                            </ul>
                        </Box>


                      {/* ==================== Mobile Menu =======================  */}
                      <Box sx={{ display: tablet ? 'block' : 'none', opacity: toggle ? '1' : '0', transition: 'all .3s ease-in-out', zIndex:"99999" }}>
                            <Box sx={{ position: 'absolute', top: '100%', width: '100%', left: '0' }} >
                                <Mobilenav />
                            </Box>
                        </Box>
                        {/* ========================== End Mobile menu =================  */}

                    </Grid>
                    <Grid item xs={1} sm={2} md={1}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: tablet ? 'space-between' : 'flex-start', height: '100%' }}>
                            <SearchIcon sx={{ display:toggle ? "none" : "block",cursor: 'pointer', width: '35px', height: '35px', color: tablet ? '#e73f15' : '#000' }} />

                            <MenuIcon onClick={toggleBtn} sx={{ display: tablet ? toggle ? 'none' : 'block' : 'none', cursor: 'pointer', marginRight: '10px', width: '40px', height: '40px', color: '#e73f15' }} />

                            <CloseIcon sx={{ display: toggle ? 'block' : 'none', opacity: tablet ? '1' : '0', width: '40px', height: '40px', color: '#e73f15' }} onClick={close} />
                        </Box>
                    </Grid>
                </Grid >
            </Box >
        </>
    )
}

export default Navbar