"use client";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import styles from "./public-engagement-section.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "@mui/material/Link";
import Launch from "@mui/icons-material/Launch";

const PublicEngagementSection = () => {

    const mobile = useMediaQuery("(max-width: 576px)");
    const tab = useMediaQuery("(max-width: 992px)");
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <Box
                className={styles.head}
                sx={{
                    padding: mobile
                        ? "10% 0% 10% 0%"
                        : tab
                        ? "5% 5% 5% 5%"
                        : "2% 0% 3% 0%",
                }}
            >
                <Container>
                    <Grid container>
                        <Grid item xs={12} sm={9}>
                            <Typography
                                sx={{
                                    fontStyle: "italic",
                                    fontSize: mobile ? "20px" : "22px",
                                    lineHeight: mobile
                                        ? "1"
                                        : tab
                                        ? "1"
                                        : "1.3",
                                }}
                            >
                                &quot;Mission: The mission of the Public Engagement
                                Section is to create inclusive opportunities for
                                public participation in Departmental programs,
                                increasing understanding, awareness, and a sense
                                of civic responsibility.&quot;
                            </Typography>
                            <br></br>
                            <Typography
                                sx={{
                                    fontWeight: "600",
                                    fontSize: mobile
                                        ? "35px"
                                        : tab
                                        ? "50px"
                                        : "68px",
                                    lineHeight: "1",
                                }}
                            >
                                Public Engagement Section
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Container> 
                <Grid
                    container
                    sx={{ marginTop: "20px",paddingLeft:mobile?'':tab?'5%':''}}
                    rowSpacing={5}
                    columnSpacing={5}
                    
                >
                    
                    {/* 1ST BOX */}
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box className={styles.boxes}>
                            <Typography
                                sx={{
                                    fontWeight: "700",
                                    fontSize: "20px",
                                    lineHeight: "1",
                                }}
                            >
                                Community Relations Section
                            </Typography>
                            <ul className={styles.listbox}>
                                <li>
                                    <span
                                        style={{
                                            backgroundColor: "black",
                                            width: "18px",
                                            height: "2px",
                                        }}
                                    ></span>
                                    <Link href="#">
                                        <Typography sx={{ fontSize: "16px" }}>
                                            Community Relations Section
                                        </Typography>
                                    </Link>
                                </li>
                            </ul>
                        </Box>
                    </Grid>

                    {/* 2ND BOX */}
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box className={styles.boxes}>
                            <Typography
                                sx={{
                                    fontWeight: "700",
                                    fontSize: "20px",
                                    lineHeight: "1",
                                }}
                            >
                                POPP
                            </Typography>
                            <ul className={styles.listbox}>
                                <li>
                                    <Launch></Launch>

                                    <Link href="#">
                                        <Typography sx={{ fontSize: "16px" }}>
                                            POPP
                                        </Typography>
                                    </Link>
                                </li>
                            </ul>
                        </Box>
                    </Grid>

                    {/* 3rd BOX */}
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box className={styles.boxes}>
                            <Typography
                                sx={{
                                    fontWeight: "700",
                                    fontSize: "20px",
                                    lineHeight: "1",
                                }}
                            >
                                PAMS
                            </Typography>
                            <ul className={styles.listbox}>
                                <li>
                                    <Launch></Launch>

                                    <Link href="#">
                                        <Typography sx={{ fontSize: "16px" }}>
                                            PAMS
                                        </Typography>
                                    </Link>
                                </li>
                            </ul>
                        </Box>
                    </Grid>

                    {/* 4th BOX */}
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box className={styles.boxes}>
                            <Typography
                                sx={{
                                    fontWeight: "700",
                                    fontSize: "20px",
                                    lineHeight: "1",
                                }}
                            >
                                Reserves
                            </Typography>
                            <ul className={styles.listbox}>
                                <li>
                                    <Launch></Launch>

                                    <Link href="#">
                                        <Typography sx={{ fontSize: "16px" }}>
                                            Reserves
                                        </Typography>
                                    </Link>
                                </li>
                            </ul>
                        </Box>
                    </Grid>

                    {/* 5th BOX */}
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box className={styles.boxes}>
                            <Typography
                                sx={{ fontWeight: "700", fontSize: "20px" }}
                            >
                                Volunteers
                            </Typography>
                            <ul className={styles.listbox}>
                                <li>
                                    <span
                                        style={{
                                            backgroundColor: "black",
                                            width: "18px",
                                            height: "2px",
                                        }}
                                    ></span>
                                    <Link href="#">
                                        <Typography sx={{ fontSize: "16px" }}>
                                            Volunteers
                                        </Typography>
                                    </Link>
                                </li>
                            </ul>
                        </Box>
                    </Grid>

                    {/* 6th BOX */}
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box className={styles.boxes}>
                            <Typography
                                sx={{
                                    fontSize: "20px",
                                    fontWeight: "700",
                                    lineHeight: "1",
                                }}
                            >
                                Youth Volunteers Programs
                            </Typography>
                        </Box>
                    </Grid>
                    

                    <Grid item  sm={12} lg={8.5} sx={{ marginTop: "20px" }}>
                        <Box>
                            <Typography sx={{ fontSize: "18px" }}>
                                The Public Engagement Section (PE) was
                                commissioned by the Office of Operations to
                                establish a constructive platform of inclusion
                                to the public we serve. We seek to build a
                                mutually beneficial pathway to address the fears
                                and concerns of the public. Our mandate is
                                active and meaningful engagement, providing
                                opportunities to increase public confidence and
                                develop reciprocal understanding. Our Public
                                Engagement strategy focuses on the publics
                                fundamental concerns, including youth
                                development and civic responsibility.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item  sm={12} lg={8.5} sx={{ marginTop: "5px" }}>
                        <Box>
                            <Typography
                                sx={{ fontSize: "19px", fontWeight: "bold" }}
                            >
                                Public Engagement Defined:
                            </Typography>
                            <Typography sx={{ fontSize: "18px" }}>
                                The intentional collaborative action, involving
                                members of public and police personnel,
                                resulting in a mutually beneficial outcome.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item   sm={12} lg={8.5} sx={{ marginTop: "5px" }}>
                        <Box>
                            <Typography
                                sx={{ fontSize: "19px", fontWeight: "bold" }}
                            >
                                Principles of the Public Engagement Section:
                            </Typography>
                            <Typography sx={{ fontSize: "18px" }}>
                                1. Public Empowerment for Community Improvement
                            </Typography>
                            <Typography sx={{ fontSize: "18px" }}>
                                2. Beneficial Collaboration
                            </Typography>
                            <Typography sx={{ fontSize: "18px" }}>
                                3. Inclusivity
                            </Typography>
                            <Typography sx={{ fontSize: "18px" }}>
                                4. Shared Responsibility
                            </Typography>
                            <Typography sx={{ fontSize: "18px" }}>
                                5. Deliberate Execution
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item  sm={12}  lg={8.5} sx={{ marginTop: "5px" }}>
                        <Box className={styles.boxes3}>
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
            <Container >
                <Grid container>
                <Grid item sm={12}lg={8.5}  className={`${styles.boxes3} ${
                                toggle ? styles.Visible : styles.Invisible
                            } ${styles.scale_up_left}`
                        }
                        sx={{marginTop:mobile?"5%":" ",paddingLeft:mobile?'':tab?'5%':''}} 
                            >
                    <Box>
                        <Typography sx={{ fontSize: "19px", fontWeight: "bold"} }>Primary Essential Functions:</Typography>
                        <Typography sx={{ fontSize: "18px" }}>
                            1. Create inclusive opportunities for public
                            participation in Department i nitiated community
                            programs, which includes the Reserve Police Officer
                            Program and the Community Volunteer Program;
                        </Typography>
                        <br></br>
                        <Typography sx={{ fontSize: "18px" }}>
                            2. Actively seek out members of the public to engage
                            in community dialogues to improve mutual
                            understanding;
                        </Typography>
                        <br></br>
                        <Typography sx={{ fontSize: "18px" }}>
                            3. Provide functional oversite over Departmental
                            youth programs, to include Cadets, Junior Cadets,
                            Police Activities League (PAL), and Jeopardy;
                        </Typography>
                        <br></br>
                        <Typography sx={{ fontSize: "18px" }}>
                            4. Guide, mentor, and provide professional insight
                            to youth participants in the Police Orientation &
                            Preparation Program (POPP) and Police Academy Magnet
                            School (PAM);
                        </Typography>
                        <br></br>
                        <Typography sx={{ fontSize: "18px" }}>
                            5. Plan, coordinate and host the Youth Cadet
                            Leadership Academy and Graduation;
                        </Typography>
                        <br></br>
                        <Typography sx={{ fontSize: "18px" }}>
                            6. Develop relationship-based policing training and
                            design focus groups to further improve the
                            Department’s overall strategic community engagement
                            efforts;
                        </Typography>
                        <br></br>
                        <Typography sx={{ fontSize: "18px" }}>
                            7. Initiate, develop and implement a Multi-Cultural
                            Inclusive Coalition, to identify, plan and mobilize,
                            to create solution-based initiatives to enhance
                            public safety;
                        </Typography>
                        <br></br>
                        <Typography sx={{ fontSize: "18px" }}>
                            8. Support Diversity, Equity, and Inclusion (DEI)
                            efforts on an as needed basis.
                        </Typography>
                        <br></br>
                        <br></br>
                        <Typography sx={{ fontSize: "19px",fontWeight:'bold' }}>Programs:</Typography>
                        <Typography sx={{ fontSize: "18px" }}>
                            ➢ Days of Dialogue: Series on Policing, Racism, the
                            Pandemic and Beyond
                        </Typography>

                        <Typography sx={{ fontSize: "18px" }}>➢ LGBTQ Engagement</Typography>
                        <Typography sx={{ fontSize: "18px" }}>➢ Community Volunteers</Typography>
                        <Typography sx={{ fontSize: "18px" }}>➢ Police Reserves</Typography>
                        <Typography sx={{ fontSize: "18px" }}>
                            ➢ Youth Education with POPP & PAMS
                        </Typography>
                        <Typography sx={{ fontSize: "18px" }}>➢ Youth Leadership</Typography>
                        <Typography sx={{ fontSize: "18px" }}>
                            ➢ Crime Prevention through Environmental Design
                        </Typography>
                        <Typography sx={{ fontSize: "18px" }}>
                            ➢ Multi-Cultural Inclusive Coalition
                        </Typography>
                        <Typography sx={{ fontSize: "18px" }}>
                            ➢ Community Interactive Experience (CIE Mobile FOS)
                        </Typography>
                        <Typography sx={{ fontSize: "18px" }}>
                            ➢ Community Policing Orientation (aka Community
                            Police Academy)
                        </Typography>
                    </Box>
                    <br></br>
                  
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    lineHeight: "28px",
                                    marginBottom:mobile?'10%':'',
                                     marginTop:mobile?'5%':''
                                }}
                                
                            >
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
                                            backgroundColor: "black",
                                            width: "18px",
                                            height: "2px",
                                            marginBottom: "4px",
                                        }}
                                    ></span>
                                    Read Less
                                </Link>
                            </Typography>
                        
                </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default PublicEngagementSection;
