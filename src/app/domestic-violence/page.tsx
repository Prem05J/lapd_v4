'use client'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery'
import Styles from './style.module.css'
import Grid from '@mui/material/Grid'
import LaunchIcon from '@mui/icons-material/Launch';
import DV_Bear from '../../../public/Images/DV_Bear-e1623720012452.jpg'
import Rose_img from '../../../public/Images/DomesticViolence_RosePetals_H-768x220.jpg'
import Rose_bottom from '../../../public/Images/Spanish_DomesticViolence_Roses-675x1024.jpg'
import pdf_icon from '../../../public/Icons/pdf-svg-icon.svg'
import Faq from './Faq'
import Container from '@mui/material/Container'

const Domestic_violence = () => {
    const mobile = useMediaQuery('(max-width: 480px)');
    const tab = useMediaQuery('(max-width: 768px)');

    const pdf_1 = '/public/pdfs/domestic_violence/Domestic_Violence_D.A.R.T._Program.pdf'
    const pdf_2 = '/public/pdfs/domestic_violence/DV_Pamphlet.pdf'
    const pdf_3 = '/public/pdfs/domestic_violence/Domestic-Violence-Victim-Assistance3.pdf'

    return (
        <>
            <Box sx={{ display: 'flex', padding: '32px 5%', flexDirection: 'column', background: '#0f212b' }}>
                <Container>
                <Typography sx={{ marginBottom: '5px', color: '#fff', fontSize: mobile ? '18px' : '22px' }}>We&rsquo;re all affected by the issue of...</Typography>
                <Typography sx={{ color: '#fff', margin: '0px 0px 20px', fontSize: mobile ? '30px' : '62px', fontWeight: '700' }}>Domestic Violence</Typography>
                </Container>
            </Box>

            <Box>
                <Container>
                <Grid container columnSpacing={5} rowSpacing={5} sx={{ marginTop: '5%' }}>
                    <Grid item xs={12} sm={6} md={6} >
                        <Box>
                            <Image src={DV_Bear} alt='domestic-violence' style={{ width:"90%", height: mobile ? '400px' : tab ? '300px' : '720px' }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} >
                        <Box>
                            <Typography sx={{ fontSize: '18px', lineHeight: '1.5', margin: mobile ? '30px 0px 30px 0px' : '0px 0px 20px 0px' }}>
                                Domestic violence doesn&rsquo;t discriminate. People of any race, age, gender, sexuality, religion, education level, or economic status can be a victim — or perpetrator — of domestic violence.
                            </Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                                <LaunchIcon style={{ width: '20px', paddingRight: '5px', cursor: 'pointer' }} />
                                <Link href='https://www.thehotline.org/identify-abuse/understand-relationship-abuse/' className={Styles.linkHover}>
                                    What is Domestic Violence
                                </Link>
                            </Typography>
                        </Box>

                    </Grid>

                </Grid>
                </Container>



                <Container>
                    <Grid container columnSpacing={2} rowSpacing={2} style={{ marginTop: '6%', marginBottom: '6%' }}>
                        <Grid item xs={12} sm={12} md={4}>
                            <Box sx={{ padding: '30px', background: '#ebf4f7', display: 'flex' }}>
                                <Image src={pdf_icon} alt='PDF_Icon' style={{ width: '16px', marginTop: '5px', marginRight: '10px' }} />
                                <Typography>
                                    <Link href={pdf_1} className={Styles.linkHover}>LAPD: There Is No Excuse For...Domestic Violence (Pamphlet)</Link>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Box sx={{ padding: '30px', background: '#ebf4f7', display: 'flex', position: 'relative' }}>
                                <span className={Styles.hyphen}></span>
                                <Typography sx={{ marginLeft: '30px' }}>
                                    <Link href='https://www.lapdonline.org/domestic-violence/lapd-domestic-violence-major-assault-crimes-detectives/' className={Styles.linkHover}>LAPD: Major Assault Crimes Detectives</Link>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Box sx={{ padding: '30px', background: '#ebf4f7', display: 'flex' }}>
                                <Image src={pdf_icon} alt='PDF_Icon' style={{ width: '16px', marginTop: '5px', marginRight: '10px' }} />
                                <Typography>
                                    <Link href={pdf_2} className={Styles.linkHover}>LAPD: Domestic Abuse Response Team (D.A.R.T.)</Link>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Typography className={Styles.para}>
                        <Link href='http://nodvla.org/city-initiatives/domestic-violence-campaign/' className={Styles.linkHover}>Domestic Violence Campaign (NODVLA)</Link>
                    </Typography>
                    <Typography className={Styles.para}>
                        <Link href='https://www.lapdonline.org/domestic-violence/domestic-violence-reasons-why-battered-victims-stay-with-the-batterers/' className={Styles.linkHover}>Reasons Why Battered Victims Stay With the Batterers</Link>
                    </Typography>

                    <Grid container columnSpacing={1} style={{ marginTop: '30px' }}>
                        <Grid item xs={12} sm={12} md={7}>
                            <Box>
                                <Image src={Rose_img} alt='Rose_Images' style={{ width: mobile || tab ? '100%' : '575px', height: '165px' }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5}>
                            <Typography sx={{ marginTop: mobile || tab ? '20px' : '70px', fontSize: '18px' }}>
                                <Link href='https://www.lapdonline.org/domestic-violence/domestic-violence-are-you-abused/' className={Styles.linkHover}>Are You Abused?
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography className={Styles.para}>
                        <Link href='http://nodvla.org/what-is-domestic-violence/teen-dating-abuse/' className={Styles.linkHover}>Teen Dating Abuse</Link>
                    </Typography>
                    <Typography className={Styles.para}>
                        <Link href='https://www.lapdonline.org/domestic-violence-understanding-the-cycle-of-violence/' className={Styles.linkHover}>Understanding the Cycle Of Violence</Link>
                    </Typography>


                    <Grid container columnSpacing={2} rowSpacing={2} style={{ marginTop: '6%' }}>

                        <Grid item xs={12} sm={12} md={3}>
                            <Box sx={{ padding: '30px', background: '#ebf4f7', display: 'flex', height: tab ? 'auto' : '55%' }}>
                                <Image src={pdf_icon} alt='PDF_Icon' style={{ width: '16px', marginTop: '5px', marginRight: '10px' }} />
                                <Typography>
                                    <Link href={pdf_3} className={Styles.linkHover}>Victim Assistance</Link>
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3}>
                            <Box sx={{ padding: '30px', background: '#ebf4f7', display: 'flex' }}>
                                <LaunchIcon style={{ width: '20px', paddingRight: '5px', cursor: 'pointer' }} />
                                <Typography>
                                    <Link href='https://requests.ops.appriss.com/vinerestore' className={Styles.linkHover}>Victim Information and Notification Everyday (VINE)</Link>
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3}>
                            <Box sx={{ padding: '30px', background: '#ebf4f7', display: 'flex', height: tab ? 'auto' : '55%' }}>
                                <LaunchIcon style={{ width: '20px', paddingRight: '5px', cursor: 'pointer' }} />
                                <Typography>
                                    <Link href='https://da.lacounty.gov/victims' className={Styles.linkHover}>Los Angeles County Victim Services</Link>
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3}>
                            <Box sx={{ padding: '30px', background: '#ebf4f7', display: 'flex', position: 'relative', height: tab ? 'auto' : '55%' }}>
                                <span className={Styles.hyphen}></span>
                                <Typography sx={{ marginLeft: '30px' }}>
                                    <Link href='https://www.lapdonline.org/domestic-violence/domestic-violence-pre-planning-and-safety-tips/' className={Styles.linkHover}>Pre-Planning and Safety Tips</Link>
                                </Typography>
                            </Box>
                        </Grid>

                    </Grid>

                    <Grid container columnSpacing={2} rowSpacing={2} style={{ marginTop: '6%' }} >
                        <Grid item xs={12} sm={12} md={6}>
                            <Box sx={{ padding: '45px', backgroundColor: '#ebf4f7' }}>
                                <Typography>
                                    <Link href='https://www.lapdonline.org/domestic-violence/domestic-violence-obtaining-a-restraining-order/' className={Styles.linkHover}>Obtaining a Restraining Order</Link>
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6}>
                            <Box sx={{ padding: '45px', backgroundColor: '#ebf4f7' }}>
                                <Typography>
                                    <Link href='https://www.lapdonline.org/domestic-violence/domestic-violence-obtaining-a-restraining-order/' className={Styles.linkHover}>Obtaining a Restraining Order</Link>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box sx={{ padding: '45px', backgroundColor: '#ebf4f7' }}>
                                <Typography>
                                    <Link href='https://www.lapdonline.org/domestic-violence/domestic-violence-emergency-referral-services-and-hotlines/' className={Styles.linkHover}>Emergency Referral Services and Hotlines</Link>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8}>
                            <Typography sx={{ fontSize: '22px', fontStyle: 'italic', marginTop: '30px' }}>
                            &rdquo;annoying/threatening phone calls, I was told to drop the case, he/she is the bread winner and said I&lsquo;ll be evicted if I testify, what should I do?
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={12} sm={12} md={8}>
                            <Typography sx={{ fontSize: mobile || tab ? '6vw' : '4vw', fontWeight: '700', margin: '30px 0px' }}>
                                Domestic Violence FAQ&lsquo;s
                            </Typography>
                        </Grid>
                    </Grid>

                    <Faq />

                    <Grid container>
                        <Grid item xs={12} sm={3} md={2}></Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Box sx={{ marginTop: '80px'}}>
                                <Image src={Rose_bottom} style={{ width: mobile ? '100%' : '383px', height: '581px' }} alt='domestic-violence' />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3} md={4}></Grid>
                    </Grid>
                </Container>

            </Box >



        </>
    )
}

export default Domestic_violence