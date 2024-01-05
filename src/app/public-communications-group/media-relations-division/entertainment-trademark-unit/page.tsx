'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "./entertainment.module.css"
import pdf from '../../../public/pdf.png'
import Typography from '@mui/material/Typography'
import global from "../../../global.module.css"
import { Container } from '@material-ui/core'
import useMediaQuery from '@mui/material/useMediaQuery';


const Entertainment = () => {

    const mobile = useMediaQuery('(max-width: 576px)');

    return (
        <>
            {/* 1st block */}
            <Box className={styles.bg}>
                <Container>
                    <Grid container>
                        <Grid item xs={11} sm={8} lg={8} className={global.fadeInUp}>
                            <Typography sx={{ fontSize: mobile ? "35px" : "62px", fontWeight: "bold", lineHeight: "1" }}>Entertainment Trademark Unit</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* 2nd block */}

            <Container>
                <Box className={global.fadeInUp} sx={{ marginTop: "65px" }}>
                    <Box>
                        <Grid container>
                            <Grid item xs={11} sm={12} md={12} lg={9} xl={7} className={styles.textstyl} sx={{ marginTop: '10px' }}>
                                <Typography>Since its inception in January 2006, the Entertainment Trademark Unit (ETU), which is part of the Public Information Office, has embarked on a number of important tasks. The ETU, which is composed of both sworn and civilian employees, has three primary goals:
                                </Typography>
                                <Typography>To protect LAPD trademarked material (often referred to as “intellectual property”) used in the media or on commercial products by maintaining proper licensing agreements. This material includes the Department’s badge, acronym (LAPD), uniform, and motto (“To Protect and to Serve”);</Typography>

                                <Typography>To work with the entertainment industry in evaluating Department-related material in scripts for films, television, and related ventures, as well as production coordination for such projects.</Typography>

                                <Typography>With the Internet as an ever-increasing source of information and images, as well as consumer goods and services, it is more important than ever for the Department to maintain proper surveillance and control of its intellectual properties.</Typography>

                                <Typography>Questions or reports of possible violations, including inquiries about how to properly license and use LAPD trademarked material are welcome and may be submitted directly to the ETU by calling <Link href="javascript:;" className={styles.mobmargin}> 213-486-7063</Link>.</Typography>
                                <Typography>LAPDonline.org® is a registered trademark of the City of Los Angeles.</Typography>
                                <Typography><Link href="javascript:;">Filming With The LAPD</Link></Typography>

                            </Grid>
                        </Grid>
                    </Box>
                </Box></Container>

        </>
    )
}

export default Entertainment