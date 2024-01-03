'use client'
import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LaunchIcon from '@mui/icons-material/Launch';
import useMediaQuery from '@mui/material/useMediaQuery'
import Link from 'next/link';
import styles from "./office.module.css";
import global from "../global.module.css"

const Office = () => {

    const mobile = useMediaQuery('(max-width: 576px)');

    return (

        <>
            <Box sx={{ display: 'flex', padding: '32px 5%', flexDirection: 'column', background: '#0f212b' }}>
                <Typography className={global.fadeInUp} sx={{ marginBottom: '8px', color: '#fff', fontSize: mobile ? '18px' : '22px' }}>Chief Michel Moore</Typography>
                <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 20px', fontSize: mobile ? '30px' : '62px', fontWeight: '700' }}>Office of the Chief of Police</Typography>
                <Link className={global.fadeInUp} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} href='https://www.lapdonline.org/office-of-the-chief-of-police-ocop/'>
                    <LaunchIcon sx={{ fontSize: 'large', color: '#fff', marginRight: '5px' }} />
                    <Typography sx={{ padding: '0px 0px 0xp 20px', color: "#7DDFFF", fontSize: "16px", textTransform: "none", '&:hover': { color: "#fff" } }}>Office of the Chief of Police (OCOP)</Typography>
                </Link>
            </Box>

            <Box className={global.fadeInUp} sx={{ padding: '5%' }}>
                <Box>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0px 0px 30px' }}>
                        <li><Typography className={styles.typograpy_list}>100 West First Street</Typography></li>
                        <li><Typography className={styles.typograpy_list}>Suite 1072</Typography></li>
                        <li><Typography className={styles.typograpy_list}>Los Angeles, CA 90012</Typography></li>
                        <li><Typography className={styles.typograpy_list}>213-486-0150</Typography></li>
                    </ul>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={7} xl={5}>
                            <Typography className={styles.para_styles}>
                                The Chief of Police (COP) is the highest-ranking officer in the Police Department. The COP is appointed by the Mayor, is subject to the approval of the <Link href='https://www.lapdonline.org/police-commission/function-and-role-of-the-board-of-police-commissioners/' className={styles.anchor_link}>Police Commission</Link> and the City Council, and can serve a maximum of two five-year terms. As a general manager of the Police Department, the COP is responsible for the planning, efficient administration and operation of the Police Department under the authority of the Board of Police Commissioners. <Link href='https://www.lapdonline.org/command-staff/moore-michel/' className={styles.anchor_link}>Michel Moore</Link> is currently Chief of Police for the Los Angeles Police Department.
                            </Typography>
                            <Typography sx={{ fontSize: '38px', fontWeight: '700', margin: '0px 0px 20px', }}>Responsibilities of the Chief of Police</Typography>
                            <Typography className={styles.para_styles}>
                                The Chief of Police (COP) directs, plans, and coordinates the enforcement of the penal divisions of the City Charter, the ordinances of the City, and the laws of the state and nation for the purpose of protecting persons and property and for the preservation of the peace of the community. The COP is responsible for testifying before the City Council, the state and national legislative bodies on law enforcement matters of importance to the City of Los Angeles, as well as proposing new or amending existing legislation which could have an impact on law enforcement.
                            </Typography>
                            <Typography className={styles.para_styles}>
                                The COP attends the Police Commission meetings to keep commission members informed about any issue related to the Department&apos;s operations, and to respond to citizens&apos; complaints or concerns. The COP acts on all matters related to disciplinary issues and recommends awards for exemplary conduct of the Department&apos;s sworn and civilian employees. The COP also makes presentations to private citizens&apos; community groups, churches, schools, and the business and industrial community to promote the goals and missions of the Police Department and to solicit their input in making the City of Los Angeles a safe place in which to live, visit and conduct business.
                            </Typography>
                            <Typography className={styles.para_styles}>
                                During a state of emergency such as civil disturbance in the City, the COP assumes a leadership role in planning, coordinating and directing all activities aimed at restoring peace in the City or otherwise returning conditions to normal.
                            </Typography>
                            <Typography className={styles.para_styles}>
                                The COP has jurisdiction within the City of Los Angeles and line command authority over 8,959 sworn and 2,618 civilian employees. The official duties of the COP are described in City Charter Sections 80, 87, 200, and 201.
                            </Typography>
                            <Typography className={styles.para_styles}>
                                The Los Angeles Police Department (LAPD) is an organization of approximately 12,000 women and men who are responsible for maintaining a safe, crime-free environment. The Chief of Police/General Manager administers an annual budget of $1.189 billion and has over 8,959 sworn officers under his jurisdiction. The Chief of Police reports to the <Link href='https://www.lapdonline.org/police-commission/function-and-role-of-the-board-of-police-commissioners/' className={styles.anchor_link}>Police Commission</Link> and interacts with the City Council and Mayor. The Chief is responsible for the conduct of operations, the efficient and effective utilization of the Department’s financial and human resources and is ultimately accountable to the City of Los Angeles.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Office