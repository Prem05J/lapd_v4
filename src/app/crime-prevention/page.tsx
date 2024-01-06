"use client";
import { Container, Grid, Typography, colors } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import styles from "./crimeprevention.module.css";
import Link from "next/link";
import img from "../../../public/Images/Lock-it-Hide-it.jpg";
import useMediaQuery from '@mui/material/useMediaQuery'
import Image from "next/image";
import LaunchIcon from "@mui/icons-material/Launch";
import pdf from "../../../public/Icons/pdf-svg-icon.svg";
import global from "../global.module.css"

const CrimePrevention = () => {

    const mobile = useMediaQuery('(max-width: 576px)');

    return (
        <div>
            <Box className={styles.head}>
                <Container>
                    <Grid container className={global.fadeInUp}>
                        <Grid item xs={12} sm={12} md={8} lg={6}>
                            <Typography sx={{fontSize: mobile ? "34px" : "62px",fontWeight:"bold"}}>
                                Crime Prevention
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Container>
                <Grid  container className={`${styles.box1} ${global.fadeInUp}`}>
                    <Grid item xs={12} sm={8} md={8} lg={8}>
                        <Box>
                            <Typography sx={{ fontSize: "18px" }}>
                                Tips for your home, your business, your family
                                and yourself. There are many things that each
                                community member can do to reduce his or her
                                chances of becoming a victim.
                                <Link href="#" style={{ color: "#e73f15",textDecoration:"none" }}>
                                    (CLICK HERE)
                                </Link>
                            </Typography>
                            <Link href="#">
                                <Box className={styles.piclink}>
                                    <Image src={img} alt="lockit" />
                                </Box>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                </Container>
            

                <Container className={global.fadeInUp}>
                <Grid
                    container
                    className={styles.box2}
                    rowSpacing={5}
                    columnSpacing={5}
                >
                    {/* -------1st box-------- */}
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box className={styles.boxes}>
                            <Typography
                                sx={{ fontSize: "24px", fontWeight: "bold" }}
                            >
                                Drugs & Violence
                            </Typography>
                            <ul className={styles.listbox}>
                                <li>
                                    <Link href="#">
                                        <Typography>
                                            Talking with Kids About Drugs
                                        </Typography>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Typography>
                                            Making Peace - Tips on Managing
                                            Conflict
                                        </Typography>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Typography>
                                            Ten Things Adults Can Do To Stop
                                            Violence
                                        </Typography>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        {" "}
                                        <Typography>
                                            Things Kids Can Do To Stop Violence
                                        </Typography>
                                    </Link>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                    {/* -------2nd box-------- */}
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box className={styles.boxes}>
                            <Typography
                                sx={{ fontSize: "24px", fontWeight: "bold" }}
                            >
                                Personal Safety
                            </Typography>
                            <ul className={styles.listbox}>
                                <li>
                                    <Link href="#">
                                        <Typography>Identity Theft</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Typography>
                                            ATM Safety & Security Tips
                                        </Typography>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Typography>Carjacking</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Typography>Street Smarts</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <Image src={pdf} alt="pdf1" />
                                    <Link href="#">
                                        <Typography>LAPD Scam Alert</Typography>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Typography>
                                            Mes De Concientizacion De La
                                            Seguridad Al Manejar Motocicletas
                                            2015
                                        </Typography>
                                    </Link>
                                </li>
                            </ul>
                        </Box>
                    </Grid>

                    {/* -------3rd box-------- */}
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box className={styles.boxes}>
                            <Typography
                                sx={{ fontSize: "24px", fontWeight: "bold" }}
                            >
                                Miscellaneous Crime Tips
                            </Typography>
                            <ul className={styles.listbox}>
                                <li>
                                    <Image src={pdf} alt="pdf1" />
                                    <Link href="#">
                                        <Typography>
                                            Domestic Violence and Guns
                                        </Typography>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Typography>
                                            Weapons in the Home
                                        </Typography>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Typography>
                                            Holiday Safety Tips
                                        </Typography>
                                    </Link>
                                </li>
                                <li>
                                    <LaunchIcon />
                                    <Link href="#">
                                        <Typography>
                                            National Crime Prevention Council
                                        </Typography>
                                    </Link>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                    {/* -------4th box-------- */}
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box className={styles.boxes}>
                            <Typography
                                sx={{ fontSize: "24px", fontWeight: "bold" }}
                            >
                                Neighborhood Watch
                            </Typography>
                            <ul className={styles.listbox}>
                                <li>
                                    <Link href="#">
                                        <Typography>
                                            Preventing Vandalism
                                        </Typography>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Typography>
                                            Getting Together to Fight Crime
                                        </Typography>
                                    </Link>
                                </li>
                                <li>
                                    <Image src={pdf} alt="pdf1" />
                                    <Link href="#">
                                        <Typography>
                                            Domestic Violence Brochure [PDF]
                                        </Typography>
                                    </Link>
                                </li>
                            </ul>
                        </Box>
                    </Grid>
                    {/* -------5th box-------- */}
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box className={styles.boxes}>
                            <Typography
                                sx={{ fontSize: "24px", fontWeight: "bold" }}
                            >
                                New Laws & Resources
                            </Typography>
                            <ul className={styles.listbox}>
                                <li>
                                    <Image src={pdf} alt="pdf1" />
                                    <Link href="#">
                                        <Typography>
                                            AB60 - Driver License Implementation
                                        </Typography>
                                    </Link>
                                </li>
                                <li>
                                    <Image src={pdf} alt="pdf1" />
                                    <Link href="#">
                                        <Typography>
                                            Veteran Resources
                                        </Typography>
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

export default CrimePrevention;
