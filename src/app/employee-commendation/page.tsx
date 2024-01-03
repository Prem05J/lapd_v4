'use client'
import React from "react";
import styles from "./commendation.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import global from "../global.module.css";
import useMediaQuery from '@mui/material/useMediaQuery'


const Commendation = () => {

    const mobile = useMediaQuery('(max-width: 576px)');

    return (
        <div>
            <Box sx={{ display: 'flex', padding: '32px 5%', flexDirection: 'column', background: '#0f212b' }}>

                <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 10px', fontSize: mobile ? '40px' : '62px', fontWeight: '700' }}>Employee Commendation</Typography>
            </Box>

            <Box sx={{ padding: "40px 5% 40px 5%" }}>
                <Grid className={global.fadeInUp} container>
                    <Grid item xs={12} sm={12} md={12} lg={7} xl={5}>
                        <Box className={styles.box1} sx={{ marginTop: "50px" }}>
                            <Typography className={styles.letter}>
                                If you would like to commend an employee of the Los
                                Angeles Police Department, please fill out this
                                form. You may either mail this form or return it to
                                any police facility. You may also commend an
                                employee by writing a letter to the Chief of Police,
                                Los Angeles Police Department, P.O. Box 30158, Los
                                Angeles, CA 90030, or to the commanding officer of
                                the police station in your Area. Verbal
                                commendations may be given to any Department
                                supervisor. Your comments will be reviewed by the
                                concerned commanding officer and the commended
                                employee.
                            </Typography>
                        </Box>

                        <Box className={styles.box2} sx={{ marginTop: "50px" }}>
                            <Link className={styles.lnk} href="#">
                                <Typography className={styles.letter}>Commendation in English</Typography>
                            </Link>
                            <Link className={styles.lnk} href="#">
                                <Typography className={styles.letter}>Commendation in Chinese</Typography>
                            </Link>
                            <Link className={styles.lnk} href="#">
                                <Typography className={styles.letter}>Commendation in Japanese</Typography>
                            </Link>
                            <Link className={styles.lnk} href="#">
                                <Typography className={styles.letter}>Commendation in Korean</Typography>
                            </Link>
                            <Link className={styles.lnk} href="#">
                                <Typography className={styles.letter}>Commendation in Spanish</Typography>
                            </Link>
                            <Link className={styles.lnk} href="#">
                                <Typography className={styles.letter}>Commendation in Tagalog</Typography>
                            </Link>
                            <Link className={styles.lnk} href="#">
                                <Typography className={styles.letter}>Commendation in Vietnamese</Typography>
                            </Link>
                        </Box>
                    </Grid>
                </Grid></Box>
        </div>
    );
};

export default Commendation;
