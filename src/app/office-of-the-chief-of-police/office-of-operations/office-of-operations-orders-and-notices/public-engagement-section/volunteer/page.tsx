"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import styles from "../Volunteer/volunteer.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";

const Volunteer = () => {
    const mobile = useMediaQuery("(max-width: 576px)");
    const tab = useMediaQuery("(max-width: 992px)");
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <Box className={styles.head}>
                <Container>
                    <Grid container>
                        <Grid item xs={11} sm={9} md={10} lg={12}>
                            <Typography
                                sx={{
                                    paddingLeft: mobile
                                        ? "0px"
                                        : tab
                                        ? "45px"
                                        : "0px",
                                    fontSize: mobile
                                        ? "42px"
                                        : tab
                                        ? "50px"
                                        : "60px",
                                    fontWeight: "900",
                                    lineHeight: mobile
                                        ? "1"
                                        : tab
                                        ? "1"
                                        : "1.3",
                                }}
                            >
                                Volunteer
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={11} md={8} lg={7}>
                        <Box
                            className={styles.box1}
                            sx={{
                                marginTop: mobile ? "14%" : "7%",
                                marginBottom: mobile ? "10%" : "",
                                paddingLeft: mobile
                                    ? "0px"
                                    : tab
                                    ? "45px"
                                    : "0px",
                            }}
                        >
                            <Typography
                                sx={{ fontSize: "18px", lineHeight: "28px" }}
                            >
                                Make a difference as a LAPD volunteer and be the
                                change you want to see in your community.
                                Volunteers represent a broad range of ages, from
                                teenagers to senior citizens. Through their
                                dedicated service, volunteers reflect the
                                quality that is representative of the people of
                                Los Angeles and the LAPD. In turn, the
                                Department recognizes the valuable assistance
                                that volunteers provide, and considers them an
                                integral part of the LAPD team.
                            </Typography>
                            <br></br>
                            <br></br>
                            <Typography
                                sx={{ fontSize: "18px", lineHeight: "28px" }}
                            >
                                <Link href="#">
                                    {" "}
                                    Community Volunteer Application
                                </Link>{" "}
                                <span style={{ fontStyle: "italic" }}>
                                    – *Same application for:
                                </span>
                                <br></br>
                                <span style={{ fontStyle: "italic" }}>
                                    {" "}
                                    Volunteers/Interns/CPAB/Boosters/Chaplains{" "}
                                </span>
                                <br></br>
                                <Link href="#">
                                    Crime & Intelligence Analyst Internship
                                    Program (Program back on, summer 2023)
                                </Link>{" "}
                                <br></br>
                                <Link href="#">Internship Information </Link>
                                <Link href="#">LAPD Area Stations </Link>
                                <br></br>
                                <Link href="#">
                                    Policy on Sexual Harassment
                                </Link>
                                <span style={{ fontStyle: "italic" }}>
                                    {" "}
                                    – *Read all handouts and print out last page
                                    to initial receipt of these. Scan the
                                    receipt page along with your application to
                                    the desired divisional coordinator<br></br>
                                </span>{" "}
                                <Link href="#">
                                    Reserve Police Officer Program (Volunteer
                                    Police Officer)
                                </Link>
                            </Typography>
                            <br></br>
                            <br></br>
                            <Typography
                                sx={{ fontSize: "18px", lineHeight: "28px" }}
                            >
                                One of the most important aspects of the LAPD
                                volunteer program is the diversity of
                                responsibilities that volunteers undertake on a
                                daily basis. Volunteers serve as a bridge
                                between officers and civilians as they represent
                                their communities in all aspects of
                                Department-related functions.
                            </Typography>
                            <br></br>
                            <br></br>

                            <Typography
                                sx={{ fontSize: "18px", lineHeight: "28px" }}
                            >
                                <Link href="#">Public Engagement Section</Link>
                            </Typography>

                            <br></br>
                            <br></br>
                            <Typography
                                sx={{ fontSize: "18px", lineHeight: "28px" }}
                            >
                                Please print out your application.
                            </Typography>
                            <br></br>
                            <br></br>

                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    lineHeight: "28px",
                                    display: toggle ? "none" : "",
                                }}
                            >
                                <Link
                                    href="javascript:;"
                                    onClick={() => setToggle(true)}
                                    style={{
                                        textDecoration: "none",
                                        display: "flex",
                                        alignItems: "center",
                                        width: "fit-content",
                                        gap: "10px",
                                    }}
                                >
                                    <span
                                        style={{
                                            backgroundColor: "black",
                                            width: "18px",
                                            height: "2px",
                                            marginBottom: "4px",
                                        }}
                                    ></span>
                                    Read More
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <Grid container>
                    <Grid xs={12} sm={11} md={12} lg={8}>
                        <Box
                            className={`${styles.box2} ${
                                toggle ? styles.Visible : styles.Invisible
                            } ${styles.scale_up_left}`}
                            sx={{
                                marginBottom: mobile ? "14%" : "",
                                marginTop: mobile ? "-10%": ' ',
                                paddingLeft: mobile
                                    ? "0px"
                                    : tab
                                    ? "45px"
                                    : "0px",
                            }}
                        >
                            <Typography
                                sx={{ fontSize: "18px", lineHeight: "28px" }}
                            >
                                The City of Los Angeles is divided into 21
                                geographic Areas, each containing its own
                                community police station. In the spirit of
                                community policing , community members and
                                officers join together to design volunteer
                                opportunities at each station. As a volunteer,
                                here are some of the available opportunities:
                            </Typography>
                            <br></br>
                            <br></br>
                            <Box className={styles.listbox}>
                                <ul
                                    style={{
                                        listStyle: "none",
                                        paddingLeft: "0px",
                                    }}
                                >
                                    <li>
                                        <Box className={styles.bullet}></Box>
                                        <Typography
                                            sx={{
                                                fontSize: "18px",
                                                marginLeft: "30px",
                                            }}
                                        >
                                            Promoting Safety with business
                                            communities
                                        </Typography>
                                    </li>

                                    <li>
                                        <Box className={styles.bullet}></Box>
                                        <Typography
                                            sx={{
                                                fontSize: "18px",
                                                marginLeft: "30px",
                                            }}
                                        >
                                            Front Desk Operations
                                        </Typography>
                                    </li>
                                    <li>
                                        <Box className={styles.bullet}></Box>
                                        <Typography
                                            sx={{
                                                fontSize: "18px",
                                                marginLeft: "30px",
                                            }}
                                        >
                                            Traffic Safety Outreach
                                        </Typography>
                                    </li>

                                    <li>
                                        <Box className={styles.bullet}></Box>
                                        <Typography
                                            sx={{
                                                fontSize: "18px",
                                                marginLeft: "30px",
                                            }}
                                        >
                                            Clerical and administrative support
                                        </Typography>
                                    </li>
                                    <li>
                                        <Box className={styles.bullet}></Box>
                                        <Typography
                                            sx={{
                                                fontSize: "18px",
                                                marginLeft: "30px",
                                            }}
                                        >
                                            Safe Passage to Schools
                                        </Typography>
                                    </li>
                                    <li>
                                        <Box className={styles.bullet}></Box>
                                        <Typography
                                            sx={{
                                                fontSize: "18px",
                                                marginLeft: "30px",
                                            }}
                                        >
                                            Community Members on Patrol
                                        </Typography>
                                    </li>
                                    <li>
                                        <Box className={styles.bullet}></Box>
                                        <Typography
                                            sx={{
                                                fontSize: "18px",
                                                marginLeft: "30px",
                                            }}
                                        >
                                            Vacation Checks
                                        </Typography>
                                    </li>
                                    <li>
                                        <Box className={styles.bullet}></Box>
                                        <Typography
                                            sx={{
                                                fontSize: "18px",
                                                marginLeft: "30px",
                                            }}
                                        >
                                            Detective Support
                                        </Typography>
                                    </li>
                                    <li>
                                        <Box className={styles.bullet}></Box>
                                        <Typography
                                            sx={{
                                                fontSize: "18px",
                                                marginLeft: "30px",
                                            }}
                                        >
                                            Variety of other important functions
                                        </Typography>
                                    </li>
                                </ul>
                            </Box>
                            <br></br>
                            <br></br>
                            <Typography
                                sx={{ fontSize: "18px", lineHeight: "28px" }}
                            >
                                There are also over 20 specialized divisions
                                that utilize volunteers. In addition, LAPD
                                provides opportunities for college/high school
                                students interested in working in unpaid
                                intern/volunteer positions or community service
                                requirement programs.
                            </Typography>
                            <br></br>
                            <br></br>
                            <Typography
                                sx={{
                                    fontSize: mobile
                                        ? "30px"
                                        : tab
                                        ? "30px"
                                        : "40px",
                                    letterSpacing: mobile ? "-0.3px" : "",
                                    lineHeight: mobile ? "33px" : "",

                                    fontWeight: "bold",
                                }}
                            >
                                How to Become a LAPD Volunteer
                            </Typography>
                            <br></br>
                            <Typography
                                sx={{ fontSize: "18px", lineHeight: "28px" }}
                            >
                                For information on volunteer opportunities with
                                the LAPD, contact your local{" "}
                                <Link href="#">
                                    divisional volunteer coordinator{" "}
                                </Link>
                                for information, including the application
                                process, as well as current volunteer
                                opportunities will be provided. All applicants
                                are required to be
                                <Link href="#"> fingerprinted</Link> as part of
                                LAPD{" "}
                                <Link href="#">background procedures.</Link>{" "}
                                (Click here to print the fingerprint control
                                slip, fill it out and take with you to your Live
                                scan print appointment)
                            </Typography>
                            <br></br>
                            <br></br>
                            <Typography sx={{ fontSize: "18px" }}>
                                <b style={{ color: "red" }}> NOTE:</b>{" "}
                                <span style={{ fontStyle: "italic" }}>
                                    proof of vaccination required when you get
                                    <Link href="#"> live scanned.</Link>
                                </span>
                            </Typography>
                            <br></br>
                            <br></br>
                            <Typography
                                sx={{ fontSize: "18px", lineHeight: "28px" }}
                            >
                                If you aren’t sure which station you should
                                call, or you have specific interest in one of
                                the LAPD specialized divisions, you may contact
                                the Department’s Volunteer Unit, email
                                <Link href="#">
                                    LAPDvolunteers@lapd.online{" "}
                                </Link>
                                at <Link href="#">(213) 486-6000.</Link>
                            </Typography>
                            <br></br>
                            <br></br>
                            <Typography
                                sx={{
                                    fontSize: mobile
                                        ? "30px"
                                        : tab
                                        ? "30px"
                                        : "40px",
                                    letterSpacing: mobile ? "-0.3px" : "",
                                    fontWeight: "bold",
                                }}
                            >
                                Make a contribution
                            </Typography>
                            <br></br>
                            <Typography>
                                <Link href="#">
                                    Los Angeles Police Foundation
                                </Link>
                                <br></br>
                                <Link href="#">
                                    Los Angeles Police Memorial Foundation
                                </Link>
                                <br></br>
                                <Link href="#"> The Parker Foundation</Link>
                            </Typography>
                            <br></br>
                            <br></br>
                            <Typography
                                sx={{
                                    fontSize: mobile
                                        ? "30px"
                                        : tab
                                        ? "30px"
                                        : "40px",
                                    letterSpacing: mobile ? "-0.3px" : "",
                                    fontWeight: "bold",
                                }}
                            >
                                Prevent Crime
                            </Typography>
                            <br></br>

                            <Typography
                                sx={{ fontSize: "18px", lineHeight: "28px" }}
                            >
                                The LAPD is dedicated to enhancing public safety
                                and reducing the fear and the incidence of
                                crime. But there are many things each and every
                                community member can do to reduce his or her
                                chances of becoming a victim.
                            </Typography>
                            <br></br>
                            <br></br>
                            <Typography
                                sx={{
                                    fontSize: mobile
                                        ? "30px"
                                        : tab
                                        ? "30px"
                                        : "40px",
                                    letterSpacing: mobile ? "-0.3px" : "",
                                    fontWeight: "bold",
                                }}
                            >
                                Volunteer your time
                            </Typography>
                            <br></br>
                            <Typography>
                                <Link href="#">
                                    Reserve Police Officer Program
                                </Link>
                                <br></br>
                                <Link href="#">Community Policing Unit</Link>
                                <br></br>
                                <Link href="#">Neighborhood Watch Program</Link>
                            </Typography>
                            <br></br>
                            <br></br>
                            <Typography>
                                <Link
                                    href="javascript:;"
                                    onClick={() => setToggle(false)}
                                    style={{
                                        textDecoration: "none",
                                        display: "flex",
                                        alignItems: "center",
                                        width: "fit-content",
                                        gap: "10px",
                                    }}
                                >
                                    <span
                                        style={{
                                            width: "18px",
                                            height: "2px",
                                            backgroundColor: "black",
                                            marginBottom: "2px",
                                        }}
                                    ></span>
                                    Read Less
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box></Box>
            </Container>
        </div>
    );
};

export default Volunteer;
