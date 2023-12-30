'use client'
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery'
import Styles from './style.module.css'
import Link from 'next/link';
import global from ".././global.module.css"



const FileReport = () => {
    const mobile = useMediaQuery('(max-width: 576px)');
    const tab = useMediaQuery('(max-width: 891px)');


    return (
        <>
            <Box sx={{ display: 'flex', padding: '32px 5%', flexDirection: 'column', background: '#0f212b' }}>
                <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 10px', fontSize: mobile ? '30px' : '62px', fontWeight: '700' }}>File A Police Report</Typography>
            </Box>

            <Grid container className={global.fadeInUp}  sx={{ padding: '5%' }}>
                <Grid item xs={12} sm={10} md={10} lg={7}>
                    <Box>
                        <ul className={Styles.content_list}>
                            <li>

                                <Typography className={Styles.paraStyle}>
                                    <span className={Styles.boldText}>Filing a false police report is a crime.</span> Anyone filing a false police report may be prosecuted under California Penal Code section 148.5 PC. Filing a false police report is punishable by imprisonment in county jail not exceeding 6 months, or by fine not exceeding $1,000, or by both.
                                </Typography>
                            </li>
                            <li>
                                <Box>
                                    <Box sx={{ border: '3px solid #9ab1b9', padding: tab ? '5px' : '15px', textAlign: 'center' }}>

                                        <Grid container sx={{ alignItems: 'center' }}>
                                            <Grid item xs={12} sm={12} md={7}>
                                                <Typography sx={{ fontSize: tab ? '18px' : '22px', fontWeight: 'bold', marginRight: '10px' }}>Start An Online Police Report in:</Typography>
                                            </Grid>

                                            <Grid item xs={12} sm={12} md={5} sx={{ alignItems: 'start' }}>
                                                <Typography sx={{ position: 'relative' }}><span className={Styles.hypen}></span><Link href='/' className={Styles.innerLink}>English</Link><span className={Styles.vertical}></span><span className={Styles.hypen} style={{ marginLeft: '10px' }}></span><Link className={Styles.innerLink} href='/' style={{ marginLeft: '30px' }}>Spanish - Espa&ntilde;ol</Link></Typography>
                                            </Grid>
                                        </Grid>

                                        <Typography sx={{ fontSize: '12px', margin: '30px 0px 10px', fontWeight: 'bold' }}>FILING A FALSE POLICE REPORT IS A CRIME</Typography>
                                        <Link href='/' className={Styles.innerLink} style={{ fontSize: tab ? '16px' : '18px' }}>Read about California Penal Code Section 148.5 PC</Link>
                                        <Typography sx={{ marginTop: '30px' }}>Powered by Coplogic</Typography>
                                    </Box>

                                    <Typography sx={{ fontSize: '18px', margin: '20px 0px', textAlign: 'justify' }}>
                                        If your incident did not meet the criteria for online reporting, please dial <span style={{ fontWeight: 'bold' }}>1-877-ASK-LAPD (Toll Free) (</span><Link href='tel:877-275-5273' className={Styles.innerLink} style={{ marginLeft: '0' }}>1-877-275-5273</Link><span style={{ fontWeight: 'bold' }}>) (Voice and TDD/TTY)</span> for Non-Emergency Police Response.  Filers can also call <Link href='tel:833-387-4589' className={Styles.innerLink} style={{ marginLeft: '0' }}>833-387-4589</Link>, to receive a text message with a link to file an online report from a mobile device.
                                    </Typography>

                                    <Typography sx={{ fontSize: '18px', margin: '20px 0px', textAlign: 'justify' }}>
                                        Welcome to the Los Angeles Police Department Community Online Reporting Service.  Using this service allows you to submit select police reports at your convenience.
                                    </Typography>
                                    <Typography sx={{ fontSize: '18px', margin: '40px 0px', textAlign: 'center', color: '#e73f15', fontWeight: '700' }}>
                                        IF THIS IS AN EMERGENCY OR CRIME IN PROGRESS, PLEASE CALL 911.
                                    </Typography>
                                    <Typography sx={{ fontSize: '18px', margin: '20px 0px' }}>
                                        Types of Crime Reports That Can Be Filed Online:
                                    </Typography>
                                </Box>
                            </li>
                            <li>
                                <Typography className={Styles.paraStyle}>
                                    <span className={Styles.boldText}>Harassing Phone Calls:</span> Any person who repeatedly, with the intent to annoy, telephones or makes contact by means of an electronic communication.  For example, immediate hang-ups, obscene language, emails, text messages with no known suspects.
                                </Typography>
                            </li>
                            <li>
                                <Typography className={Styles.paraStyle}>
                                    <span className={Styles.boldText}>Lost Property:</span> Any Personal property that was unintentionally left by its true owner.  For example, property left behind at an unknown location or left behind with no attempt to retrieve it.
                                </Typography>
                            </li>
                            <li>
                                <Typography className={Styles.paraStyle}>
                                    <span className={Styles.boldText}>Vandalism:</span> Any person who maliciously damages, destroys or defaces the property of another person.  For example, knocking over a mailbox, spray painting a wall, or throwing a rock through a window.
                                </Typography>
                            </li>
                            <li>
                                <Typography className={Styles.paraStyle}>
                                    <span className={Styles.boldText}>Theft:</span> Personal property taken from a publicly accessible location.  For example, a package is taken from your porch; or, you left your wallet behind in a restaurant, but when you attempted to go back to retrieve it, the wallet was no longer there.
                                </Typography>
                            </li>
                            <li>
                                <Typography className={Styles.paraStyle}>
                                    <span className={Styles.boldText}>Theft from Vehicle:</span> Theft from an unlocked or locked vehicle.
                                </Typography>
                            </li>
                            <li>
                                <Typography className={Styles.paraStyle}>
                                    <span className={Styles.boldText}>Minor Traffic Collisions:</span>  Minor injuries and you have exchanged information
                                </Typography>
                            </li>
                            <li>
                                <Typography className={Styles.paraStyle}>
                                    <span className={Styles.boldText}>Hit and Run:</span> Damage caused by another vehicle in which the driver should have left information or fled the scene without stopping to provide information.
                                </Typography>
                            </li>
                            <li>
                                <Typography className={Styles.paraStyle}>
                                    <span className={Styles.boldText}>VICE Tips:</span> Tips may be reported filer may  remain anonymous.</Typography>
                            </li>
                            <li>
                                <Typography className={Styles.paraStyle}>
                                    <span className={Styles.boldText}>Narcotics Tips:</span> Tips may be reported filer may  remain anonymous.</Typography>
                            </li>
                            <li>
                                <Typography className={Styles.paraStyle}>
                                    <span className={Styles.boldText}>Identity Theft:</span> Crime location should be reported as the filer&rsquo;s home residence address (regardless of where the crime is believed to have occurred), and reported to the filer&rsquo;s local law enforcement agency for investigation.</Typography>

                                <Typography sx={{ fontSize: '18px', fontWeight: 'bold', margin: '30px 0px' }}>To File an Illegal Dumping Report Online:</Typography>
                            </li>

                            <li>
                                <Typography className={Styles.paraStyle}>
                                    <span className={Styles.boldText}>Illegal Dumping:</span> Willfully or intentionally depositing, dropping, dumping, placing, or throwing onto public or private property.  Illegal dumping is reported and handled by the City of Los Angeles Department of Sanitation.  Please <Link className={Styles.innerLink} style={{ marginLeft: '0' }} href='javascript:;'>click here</Link> to file a report.</Typography>
                            </li>
                            <li>
                                <Typography className={Styles.paraStyle}>
                                    <span className={Styles.boldText}>Illegal Dumping:</span> Willfully or intentionally depositing, dropping, dumping, placing, or throwing onto public or private property.  Illegal dumping is reported and handled by the City of Los Angeles Department of Sanitation.  Please <Link className={Styles.innerLink} style={{ marginLeft: '0' }} href='javascript:;'>click here</Link> to file a report.</Typography>

                                <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>IS COMMUNITY ONLINE REPORTING RIGHT FOR YOU</Typography>

                                <Typography sx={{ fontWeight: 'bold', marginTop: '10px' }}>Your incident must meet the following criteria:</Typography>
                            </li>

                        </ul>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0' }} className={Styles.nxtList}>
                            <li>
                                <Typography className={Styles.nxtListtext}>The incident is not an emergency.</Typography>
                            </li>
                            <li>
                                <Typography className={Styles.nxtListtext}>The incident occurred within the City of Los Angeles.</Typography>
                            </li>
                            <li>
                                <Typography className={Styles.nxtListtext}>You must be at least 18 years old.</Typography>
                            </li>
                            <li>
                                <Typography className={Styles.nxtListtext}>No one was injured as a result of this incident.</Typography>
                            </li>
                            <li>
                                <Typography className={Styles.nxtListtext}>There are no known suspects.</Typography>
                            </li>
                            <li>
                                <Typography className={Styles.nxtListtext}>The incident did not occur on the state highway.</Typography>
                            </li>
                            <li>
                                <Typography className={Styles.nxtListtext}>No firearms were involved in the incident.</Typography>
                            </li>
                            <li>
                                <Typography className={Styles.nxtListtext}>You must have internet access and an email address.</Typography>
                            </li>
                        </ul>
                        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', margin: '25px 0px' }}>
                            Once you have submitted your report:
                        </Typography>

                        <ul style={{ listStyleType: 'none', padding: '0', marginBottom: '0' }}>
                            <li>
                                <Box className={Styles.flextcnt}>
                                    <span></span>
                                    <Typography className={Styles.nxtListtext}>
                                        You will immediately receive a temporary report number and be able to print a copy of the report you just made.
                                    </Typography>
                                </Box>
                                <Box className={Styles.flextcnt}>
                                    <span></span>
                                    <Typography className={Styles.nxtListtext}>
                                        All incidents reported using the Community Online Reporting Service will be reviewed, on average once every 24 hours (possibly longer on weekends and holidays), and upon approval will become an official police report.
                                    </Typography>
                                </Box>
                                <Box className={Styles.flextcnt}>
                                    <span></span>
                                    <Typography className={Styles.nxtListtext}>
                                        If further investigation of your reported incident is needed, you will be contacted by email or telephone.
                                    </Typography>
                                </Box>
                                <Box className={Styles.flextcnt}>
                                    <span></span>
                                    <Typography className={Styles.nxtListtext}>
                                        Once the report has been approved, a LAPD report number will be issued and a copy of the final report will be emailed back to you.
                                    </Typography>
                                </Box>
                                <Box className={Styles.flextcnt}>
                                    <span></span>
                                    <Typography className={Styles.nxtListtext}>
                                        Please click here to look up your Community Police Station and then click on the Division name to see the address and phone number.
                                    </Typography>
                                </Box>
                                <Box className={Styles.flextcnt}>
                                    <span></span>
                                    <Typography className={Styles.nxtListtext}>
                                        Supplemental Reports cannot be filed online.  To add any additional information, please wait until you have received your final report with a LAPD report number and call your local police station to speak with the detective assigned to your case.
                                    </Typography>
                                </Box>
                            </li>
                        </ul>
                        <Typography sx={{ fontSize: '18px', fontWeight: 'bold', margin: '15px 0px' }}>
                            Please note:
                        </Typography>


                        <ul style={{ listStyleType: 'none', padding: '0', marginBottom: '0' }}>
                            <li>
                                <Box className={Styles.flextcnt}>
                                    <span></span>
                                    <Typography className={Styles.nxtListtext}>
                                        Supplemental Reports cannot be filed online.  To add any additional information, please wait until you have received your final report with a LAPD report number and call your local police station to speak with the detective assigned to your case.
                                    </Typography>
                                </Box>
                            </li>
                        </ul>


                        <Box>
                            <Box sx={{ border: '3px solid #9ab1b9', padding: tab ? '5px' : '15px', textAlign: 'center' }}>

                                <Grid container sx={{ alignItems: 'center' }}>
                                    <Grid item xs={12} sm={12} md={7}>
                                        <Typography sx={{ fontSize: tab ? '18px' : '22px', fontWeight: 'bold', marginRight: '10px' }}>Start An Online Police Report in:</Typography>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={5} sx={{ alignItems: 'start' }}>
                                        <Typography sx={{ position: 'relative' }}><span className={Styles.hypen}></span><Link href='/' className={Styles.innerLink}>English</Link><span className={Styles.vertical}></span><span className={Styles.hypen} style={{ marginLeft: '10px' }}></span><Link className={Styles.innerLink} href='/' style={{ marginLeft: '30px' }}>Spanish - Espa&ntilde;ol</Link></Typography>
                                    </Grid>
                                </Grid>

                                <Typography sx={{ fontSize: '12px', margin: '30px 0px 10px', fontWeight: 'bold' }}>FILING A FALSE POLICE REPORT IS A CRIME</Typography>
                                <Link href='/' className={Styles.innerLink} style={{ fontSize: tab ? '16px' : '18px' }}>Read about California Penal Code Section 148.5 PC</Link>
                                <Typography sx={{ marginTop: '30px' }}>Powered by <Link className={Styles.innerLink} href='/' style={{ marginLeft: '30px' }}>Coplogic</Link>
                                </Typography>
                            </Box>

                            <Typography sx={{ fontSize: '18px', margin: '20px 0px', textAlign: 'justify' }}>
                                If your incident did not meet the criteria for online reporting, please dial <span style={{ fontWeight: 'bold' }}>1-877-ASK-LAPD (Toll Free) (</span><Link href='tel:877-275-5273' className={Styles.innerLink} style={{ marginLeft: '0' }}>1-877-275-5273</Link><span style={{ fontWeight: 'bold' }}>) (Voice and TDD/TTY)</span> for Non-Emergency Police Response.
                            </Typography>
                            <Typography sx={{textAlign: 'center', fontStyle: 'italic', fontSize: '18px', marginTop: '30px'}}>
                                The Community Online Reporting Service (CORS) is ADA compliant and follows the U. S. Federal standards set forth in the “Electronic and Information Technology Accessibility Standards” (Section 508).
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default FileReport