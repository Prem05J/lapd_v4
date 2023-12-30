"use client";
import Box from "@mui/material/Box";
import styles from "./request.module.css";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import useMediaQuery from '@mui/material/useMediaQuery'
import global from "../../global.module.css"

const Request = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [toggle, setToggle] = useState(false);
    const mobile = useMediaQuery('(max-width: 576px)');
    
    return (
        <div>
            <Box className={styles.request1}>
                <Grid container>
                    <Grid item xs={10} sm={12} md={4} lg={4}>
                    <Typography className={global.fadeInUp } variant="h2" sx={{marginLeft:"5%",fontWeight:"bold",fontSize: mobile ? '30px' : '62px',}}>
                    Obtaining Police Information
                </Typography>
                    </Grid>
                </Grid>
               
            </Box>
            <Grid className={global.fadeInUp } container>

                <Grid item xs={12} sm={12} md={7} lg={6}>
                <Box sx={{marginTop:"50px"}} className={styles.request2}>
                <Link className={styles.lnk} href="javascript:;">
                    <Typography className={styles.letter}>
                        How can I get a copy of a police report?
                    </Typography>
                </Link>
                <Link className={styles.lnk} href="javascript:;">
                    <Typography className={styles.letter}>
                        How can I get a copy of my criminal record?
                    </Typography>
                </Link>
                <Link className={styles.lnk} href="javascript:;">
                    <Typography className={styles.letter}>
                        How can I get a disposition of my arrest(s)?
                    </Typography>
                </Link>
                <Link className={styles.lnk} href="javascript:;">
                    <Typography className={styles.letter}>
                        How can I get a police clearance letter for foreign
                        travel / adoption purposes?
                    </Typography>
                </Link>
                <Link className={styles.lnk} href="javascript:;">
                    <Typography className={styles.letter}>
                        How can I get a police clearance letter for immigration
                        purposes?
                    </Typography>
                </Link>
                <Link className={styles.lnk} href="javascript:;">
                    <Typography className={styles.letter}>
                        How can I get a police clearance letter for immigration
                        purposes?
                    </Typography>
                </Link>
                <br></br>
                <br></br>
                <Typography className={styles.letter}>
                    How can I get a copy of a police report if I am a victim of
                    a crime?
                </Typography>
                <br></br>
                <br></br>
                <Typography className={styles.letter}>
                    If you want to request a copy of a crime report, you must
                    mail your written request to
                    <Link className={styles.lnk} href="javascript:;">
                        {" "}
                        Records & Identification (R&I) Division.
                    </Link>
                    You can only receive a crime report if you are an authorized
                    person such as the victim, the victim’s representative, or
                    as provided in Section 6254 of the Government Code.
                </Typography>

                <br></br>
                <br></br>
                <Typography className={styles.letter}>
                    If the request for a copy of a crime report is in relation
                    to a U or T Visa certification request, please write on the
                    outside of the envelope “U or T Visa Request”. This will
                    assist in avoiding a delay in processing the request.
                </Typography>
                <br></br>
                <br></br>
                <Box sx={{ display: toggle ? "none" : "" }}>
                    <Link
                        className={styles.lnk}
                        href="javascript:;"
                        onClick={() => setToggle(true)}
                    >
                        <Typography>- Read More</Typography>
                    </Link>
                </Box>
            </Box>
            <Box
                className={`${styles.request3} ${
                    toggle ? styles.Visible : styles.Invisible
                } ${styles.scale_up_left}`}
            >
                <Typography className={styles.letter}>
                    Victims of domestic violence are entitled to one free copy
                    of their incident reports made within five years from the
                    date of completion of the incident report. Victims of Sexual
                    Assault, Stalking, Human Trafficking, or Abuse of an Elder
                    or a Dependent Adult are entitled to one free copy of their
                    incident reports made within two years from the date of
                    completions of the incident report.
                </Typography>
                <br></br>
                <br></br>
                <Typography className={styles.letter}>
                    Additionally, victims of identity theft are entitled to a
                    free copy of their incident reports.
                </Typography>
                <br></br>
                <br></br>
                <Typography className={styles.letter}>
                    <b>Report requests are mailed to:</b>
                </Typography>
                <br></br>
                <br></br>
                <Typography className={styles.letter}>
                    Los Angeles Police Department<br></br>R&I Division Document
                    <br></br>
                    Processing Unit <br></br>P.O. Box 30158 <br></br>Los
                    Angeles, CA 90030
                </Typography>
                <br></br>
                <br></br>
                <Typography className={styles.letter}>
                    <b>ATTN:</b> Document Processing Unit
                </Typography>
                <br></br>
                <br></br>
                <Typography className={styles.letter}>
                    <b> NOTE:</b> Please contact the recorded line
                    <Link href="javascript:;" className={styles.lnk}>
                        {" "}
                        (213) 486-8130
                    </Link>{" "}
                    for additional information or status update on receiving the
                    report.
                </Typography>
                <br></br>
                <br></br>
                <Typography className={styles.letter}>
                    To obtain a copy of a CRIME report, you must provide:
                </Typography>
                <br></br>
                <br></br>
                <Typography className={styles.letter}>
                    A check or money order payable to the LAPD in the amount of
                    $17.00 (do not send cash). This fee may be refunded if it is
                    determined that no report exists. If you receive
                    notification that no report exists, please complete a City
                    of Los Angeles Claim for Refund form and return it to the
                    City Clerk’s Office.
                </Typography>
                <br></br>
                <br></br>
                <Box className={styles.list}>
                    <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                        <li>
                            <Box className={styles.bullet}></Box>
                            <Typography className={styles.listText}>
                                The name(s) and address(es) of the victim(s)
                            </Typography>
                        </li>
                        <li>
                        <Box className={styles.bullet}></Box>
                            <Typography className={styles.listText}>
                                The insurance policy number and/or claim number
                                if the requestor is an insurance company
                            </Typography>
                        </li>
                        <li>
                        <Box className={styles.bullet}></Box>
                            <Typography className={styles.listText}>
                                A release from the victim if the request is from
                                an attorney
                            </Typography>
                        </li>

                        <li>
                        <Box className={styles.bullet}></Box>
                            <Typography className={styles.listText}>
                                The type of report – robbery, assault, etc.
                            </Typography>
                        </li>
                        <li>
                        <Box className={styles.bullet}></Box>
                            <Typography className={styles.listText}>
                                The date and location of occurrence
                            </Typography>
                        </li>
                        <li>
                        <Box className={styles.bullet}></Box>
                            <Typography className={styles.listText}>
                                A report (DR) number and/or Incident Number, if
                                known
                            </Typography>
                        </li>

                        <li>
                        <Box className={styles.bullet}></Box>
                            <Typography className={styles.listText}>
                             Proof of relationship for parents of minor
                                victim or the spouse or relative of a deceased
                                victim<br></br>
                                  for recorded instructions, please call --
                                <Link className={styles.lnk} href="javascript:;">
                                 213 486-8130
                                </Link>
                                &nbsp;  or--
                                <Link className={styles.lnk} href="javascript:;">
                                
                                &nbsp;  213 486-8133&nbsp;
                                </Link>
                                &nbsp;  (for Spanish)
                            </Typography>
                        </li>
                    </ul>
                </Box>
                <br></br>
                <br></br>
                <Typography className={styles.letter}>
                    To Download the Crime Report Request Form,
                    <Link href="javascript:;" className={styles.lnk}>
                        
                        click here
                    </Link>
                </Typography>
                <br></br>
                <br></br>
                <Link
                    className={styles.lnk}
                    href="javascript:;"
                    onClick={() => setToggle(false)}
                >
                    <Typography>-Read Less</Typography>
                </Link>
            </Box>
                </Grid>

            </Grid>
            
        </div>
    );
};

export default Request;
