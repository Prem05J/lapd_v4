'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './motor.module.css'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Container } from '@mui/material'


const California = () => {

    const tab = useMediaQuery('(max-width:768px)');

    const [toggle, setToggle] = useState(false)
    return (
        <>

            {/* 1st block */}
            <Box className={styles.bg}>
                <Container>
                    <Grid container>
                        <Grid item xs={11} sm={10} md={7} lg={8}>
                            <Typography sx={{fontSize: tab ? "40px" : "62px",lineHeight:"1.1",fontWeight:"bold"}}>Motor Transport Division</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* 2nd block */}
            <Container>

                <Box sx={{marginBottom: '30px'}}>
                    <Grid container>
                        <Grid item xs={12} sm={11} md={10} lg={8} className={styles.textstyl} >
                            <Typography style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '60px' }} >260 S Main St.</Typography>
                            <Typography style={{ fontSize: '18px', fontWeight: 'bold' }} >Los Angeles, CA 90012</Typography>
                            <Typography style={{ fontSize: '18px', fontWeight: 'bold' }} >213-486-1020</Typography>

                            <Box sx={{ display: "flex", flexDirection: "column",marginTop: '30px', paddingBottom: "20px" }}>
                                <Typography sx={{ fontSize: '18px'}}>It is the mission of Motor Transport Division (MTD) to provide the Department with a safe and effective law enforcement vehicle fleet at an industry competitive cost. Motor Transport Division is widely recognized as a leader in law enforcement fleet operations and has produced many innovative vehicle solutions to meet the needs of the Department and law enforcement agencies worldwide. The division furnishes all manner of fleet operational support by administering and controlling all fleet related functions.  In this role, MTD is responsible for the budgeting and purchasing of needed vehicles and related equipment; all areas of fleet maintenance and repair; product testing and vehicle modification; the salvaging of damaged or obsolete vehicles and equipment; and the maintenance of all fleet records.  <Link href="https://www.lapdonline.org/command-staff/aubuchon-dirk/"> Dirk Aubuchon, Director of Police Transportation</Link>, is the Commanding Officer of Motor Transport Division.</Typography>
                                <Typography sx={{ fontSize: '18px',marginTop: '30px'}}>
                                      Motor Transport Division is a decentralized support division with 24 shops in 22 locations (including the Davis Training Center).  With 268 employees, MTD provides a full range maintenance and repair operations, along with body shop, component rebuilding, and vehicle modification for all vehicle makes, models, and types. The fleet maintenance program is based on a de-centralized support system with a shop at each of Department’s nineteen Area stations.
                                </Typography>
                                <Typography sx={{ fontSize: '18px',marginTop: '30px'}}>
                                     There are over 4,700 vehicles in the Department’s fleet.  Numerous makes, models, and types of vehicles are operated by the Department, including automobiles, motorcycles, vans, trucks, buses, four-wheel drives, and miscellaneous one-of-a-kind vehicles (e.g. hostage rescue vehicles, bomb disposal units, command posts, armored vehicles, underwater dive team, mounted and canine units).  The fleet averages an annual usage of 56 million miles with an annual operating budget of $14 million to cover repair parts, tires, oil, and fuel.  Annual fleet purchases range between $25 to $32 million, including the cost to equip or modify vehicles to meet the needs of the Department.
                                </Typography>
                                <Typography sx={{ fontSize: '18px',marginTop: '30px'}}>
                                  Beyond the normal maintenance and repair functions, MTD also performs collision repair, component rebuilding, vehicle modification and refurbishment.  In addition, technicians perform numerous state and federally mandated vehicle inspections such as commercial vehicle inspections on trucks, tankers, and buses; emission system certifications; safety inspections on both Department and privately owned vehicles involved in traffic collision, and testify as subject matter experts for the City Attorney in auto fraud cases or in litigation of civil liability cases.  Other responsibilities include the design and fabrication of unique vehicles and/or equipment; close, technical support to specialized units such as Driver Training, Emergency Operations Division, Traffic Coordination Section, and Special Weapons and Tactics.  In the event of an emergency where the department is mobilized, MTD is responsible for activating the Vehicle Mobilization Plan as directed by the Department Commander and the Emergency Operations Center.
                                </Typography>
                            </Box>


                        </Grid>
                    </Grid>
                </Box>


            </Container>




        </>
    )
}

export default California