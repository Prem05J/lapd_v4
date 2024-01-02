'use client'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery'
import Styles from './style.module.css'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import pdf from '../../../../../../../public/Icons/pdf-svg-icon.svg'
import global from "../../../../../global.module.css"

// ------------ CCW  ------------- 
const pdf_1 = '/pdfs/ccw/CCW-After-Interview-Instructions.pdf';
const pdf_2 = '/pdfs/ccw/CCW-FAQ.pdf';
const pdf_3 = '/pdfs/ccw/CCW-Firearms-Prohibited-Categories-FINAL-Rev.-01.2024.pdf';
const pdf_4 = '/pdfs/ccw/CCW-Firearm-Training-Providers.pdf';
const pdf_5 = '/pdfs/ccw/ccw-live-scan-form.pdf';
const pdf_6 = '/pdfs/ccw/ccw-shooting-proficiency-standards-form.pdf';
const pdf_7 = '/pdfs/ccw/Concealed-Carry-Weapons-License-Terms-of-Acknowledgement.pdf';
const pdf_8 = '/pdfs/ccw/doj-ccw-application-BOF-4012-FINAL-Rev.-01.2024.pdf';

const CCWcarry = () => {
    const mobile = useMediaQuery('(max-width: 576px)');
    const [toggle, setToggle] = useState(false)

    return (
        <>

            <Box sx={{ display: 'flex', padding: '32px 5%', flexDirection: 'column', background: '#0f212b' }}>
                <Typography className={global.fadeInUp} sx={{ marginBottom: '8px', color: '#fff', fontSize: mobile ? '18px' : '22px', fontStyle: 'italic', width: mobile ? '100%' : '70%' }}>Pursuant to California Penal Code section 26155, the Los Angeles Police Department&rsquo;s (LAPD) policy is to issue a CCW license to an applicant who demonstrates that he/she...</Typography>
                <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 20px', fontSize: mobile ? '30px' : '62px', fontWeight: '700', width: mobile ? '100%' : '70%', lineHeight: '1.3' }}>CCW Carry Concealed Weapon License Policy</Typography>
            </Box>


            <Box  className={global.fadeInUp} sx={{ padding: '5%' }}>
                <Typography sx={{ fontSize: '25px', fontWeight: '700' }}>FAQ&rsquo;S</Typography>
                <Link href={pdf_2} target='_blank' className={Styles.linkHover} >
                    <Typography style={{ margin: '15px 0px', fontSize: '18px' }}>LAPD CCW Frequently Asked Questions</Typography>
                </Link>
                <Grid container style={{ marginTop: '50px' }}>
                    <Grid item xs={12} sm={12} md={8}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>Concealed Carry Weapon (CCW) Application Guidelines</Typography>
                            <Typography sx={{ fontSize: '18px', fontStyle: 'italic' }}>(Updated December 27, 2023)</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ margin: '30px 0px 0px 0px', fontSize: '18px' }}>
                                In accordance with California Penal Code Section 26155, the Los Angeles Police Department&rsquo;s (LAPD) policy is to issue a CCW license to an applicant upon a finding that he/she is at least 21 years of age, and:
                            </Typography>
                        </Box>
                        <ul style={{ listStyleType: 'none', fontSize: '18px', margin: '20px 0px' }}>
                            <li><Typography sx={{ fontSize: '18px' }}>(1) Is a resident of the City of Los Angeles (<b>LAPD Jurisdiction</b>);</Typography></li>
                            <li><Typography sx={{ fontSize: '18px' }}>(2) Is of good moral character; and,</Typography></li>
                            <li><Typography sx={{ fontSize: '18px' }}>(3) Has completed a course of training acceptable to the Department, as described in Penal Code Section 26165, <b style={{ textDecoration: 'underline' }}>AFTER</b> the person has been approved for a CCW license.</Typography></li>
                        </ul>
                        <Box>
                            <Typography sx={{ fontSize: '18px' }}>
                                Please note that although Penal Code Section 26155 also contains a requirement that an applicant demonstrate that “good cause” exists for the issuance of a CCW license, the U.S. Supreme Court&rsquo;s ruling in New York State Rifle & Pistol Association v. Bruen held that New York&rsquo;s similar “proper cause” requirement was unconstitutional. Therefore, pursuant to Bruen, LAPD will not enforce the “good cause” requirement and will not require an applicant to demonstrate “good cause” to qualify for a CCW license.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Typography sx={{ fontSize: '18px', fontWeight: 'bold', margin: '25px 0px' }}>CCW Application Process:</Typography>
                <Typography className={Styles.linkHover} sx={{ fontSize: '18px', cursor: 'pointer', display: toggle ? 'none':'flex', alignItems: 'center' }} onClick={() => setToggle(true)}><span className={Styles.uline}></span><span style={{ marginLeft: '20px' }}>Read More</span></Typography>

                <Box className={`${toggle?Styles.readMoreView:Styles.readMoreHide} ${Styles.scale_up_left}`}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={8}>
                            <Typography className={Styles.readMorePara}>
                                <span style={{ textDecoration: 'underline' }}>Application Instructions :</span> Print or download the most updated version of the California Department of Justice (DOJ) Bureau of Firearms Standard Initial and Renewal Application for a CCW License (Form BOF 4012, Revised 01/2024).
                            </Typography>

                            <Typography className={Styles.readMorePara}>
                                Available here : <Link href={pdf_8} target="_blank" style={{ textDecoration: 'none' }} className={Styles.readMoreLink}>Cal DOJ Standard CCW Application</Link>
                            </Typography >

                            <Typography className={Styles.readMorePara}>
                                The applicant should thoroughly review and complete all sections of the Standard Application except for <span style={{ textDecoration: 'underline', fontWeight: '700' }}>the two signatures and dates required on sections 7 and 8. This must be signed in the presence of the investigator.</span> Additional pages may be used and inserted if more space is necessary to complete the application. (Note that the Standard Application can be downloaded on a computer and filled out electronically.)
                            </Typography>

                            <Typography className={Styles.readMorePara}>
                                Once the Standard Application is completed as specified above, please call <Link className={Styles.readMoreLink} href='tel:1-213-486-5712'>(213) 486-5712</Link> or email <Link className={Styles.readMoreLink} href='mailto:CCWProcessing@lapd.online '>CCWProcessing@lapd.online</Link> and include your name, address and phone number to be placed on a waiting list to schedule an in-person interview.
                            </Typography>
                            <Typography className={Styles.readMorePara}>
                                Applications can be submitted to LAPD by bringing your completed application with you on the day of your in-person appointment. An Investigator will provide details when setting up the in-person interview. You must appear in person to have your application reviewed by an LAPD investigator. <span style={{ fontWeight: 'bold' }}>If you appear with an incomplete application, your interview will need to be rescheduled.</span>
                            </Typography>
                            <Typography className={Styles.readMorePara}>
                                <span style={{ textDecoration: 'underline', fontWeight: 'bold' }}>PROOF OF RESIDENCY :</span> Residency in the jurisdiction of the issuing authority is a legal requirement for the issuance of a permit per Penal Code Section 26155. Therefore, you will be required to show proof of residency in the City of Los Angeles and verify your identity by submitting:
                            </Typography>
                            <ul style={{ listStyleType: 'none' }}>
                                <li>
                                    <Typography className={Styles.readMorePara}>
                                        1&rpar; A valid California Driver&rsquo;s License or California Identification Card and a copy of the front and back. An applicant must <span style={{ fontWeight: '700' }}>have a current valid California driver&rsquo;s license or identification with their current address, in compliance with Vehicle Code Section 14600(a),</span> or any additional documents issued by the DMV that reflect their current address. No P.O. Box address is acceptable.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography className={Styles.readMorePara}>
                                        2&rpar; A copy of <span style={{ fontWeight: '700' }}>two</span> of the following items showing proof of residency: a recent utility bill (gas, water or electricity) and/or a  rental or lease agreement, vehicle registration, cable/internet, or waste statement. Financial or sensitive information may  be redacted or blacked out.
                                    </Typography>
                                </li>
                            </ul>
                            <Typography className={Styles.readMorePara}>
                                <span style={{ fontWeight: '700', textDecoration: 'underline' }}>CCW Application Processing Fees:</span> Applicants must pay the following fees for processing of a CCW license. Please note that such fees are non-refundable.
                            </Typography>
                            <Typography className={Styles.readMorePara}>
                                LAPD CCW Processing Fees:
                            </Typography>
                            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                                <li className={Styles.readlist}>
                                    <Typography sx={{ marginLeft: '20px', fontSize: '18px', marginTop: '15px', marginBottom: '15px' }}>
                                        For new applicants, the total fee amount is $268.
                                    </Typography>
                                    <ul style={{ listStyleType: 'none' }}>
                                        <li>
                                            <Typography className={Styles.readMorePara}>
                                                * 20% of the application fee ($53) is due at the time of the in-person interview; please do not submit this payment prior to your in-person interview.<br />
                                                * The remaining 80% of the application fee ($215) is due upon issuance of a CCW license.
                                            </Typography>
                                        </li>
                                    </ul>
                                </li>

                                <li className={Styles.readlist}>
                                    <Typography sx={{ marginLeft: '20px', fontSize: '18px', marginTop: '15px', marginBottom: '15px' }}>
                                        For renewal applicants, the total fee amount is $25.
                                    </Typography>
                                </li>

                                <li className={Styles.readlist}>
                                    <Typography sx={{ marginLeft: '20px', fontSize: '18px', marginTop: '15px', marginBottom: '15px' }}>
                                        CCW license processing fees shall be paid by cashier’s check or money order made payable to the City of Los Angeles. NO CASH or personal checks will be accepted.
                                    </Typography>
                                </li>
                            </ul>
                            <Typography className={Styles.readMorePara}>
                                Live Scan (DOJ) Fee:
                            </Typography>
                            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                                <li className={Styles.readlist}><Typography sx={{ marginLeft: '20px', fontSize: '18px', marginTop: '15px', marginBottom: '15px' }}>Live Scan Fee varies per vendor (fee payable to the vendor).</Typography></li>
                            </ul>
                            <Typography className={Styles.readMorePara}>
                                <span style={{ fontWeight: 'bold' }}>Firearms Training Course:</span> Applicants must successfully complete a firearms training course acceptable to LAPD per Penal  Code Sections 26155 and 26165. However, this requirement need not be satisfied until after the Department has determined and  provided notice to the applicant that they satisfy the residency and good moral character requirements. An applicant who meets those requirements will be so notified by the LAPD Gun Unit and instructed to proceed with the firearms training course. The  applicant must thereafter provide proof to LAPD that they have successfully completed a course of training, and a CCW license  will be issued after the applicant furnishes such proof. The LAPD will accept an applicant’s proof of training dated no earlier than six months before the time of their interview.
                            </Typography>
                            <Typography>
                                Pursuant to Penal Code Section 26165:
                            </Typography>
                            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                                <li className={Styles.readlist}>
                                    <Typography sx={{ marginLeft: '20px', fontSize: '18px', marginTop: '15px', marginBottom: '15px' }}>
                                        New applicants must complete a training course lasting at least 8 hours but not exceeding 16 hours.
                                    </Typography>
                                </li>
                                <li className={Styles.readlist}>
                                    <Typography sx={{ marginLeft: '20px', fontSize: '18px', marginTop: '15px', marginBottom: '15px' }}>
                                        Renewal applicants must complete a training course lasting at least 4 hours.
                                    </Typography>
                                </li>
                                <li className={Styles.readlist}>
                                    <Typography sx={{ marginLeft: '20px', fontSize: '18px', marginTop: '15px', marginBottom: '15px' }}>
                                        The course shall include instruction on firearm safety, firearm handling, shooting technique, and laws regarding the permissible use of a firearm.
                                    </Typography>
                                </li>
                                <li className={Styles.readlist}>
                                    <Typography sx={{ marginLeft: '20px', fontSize: '18px', marginTop: '15px', marginBottom: '15px' }}>
                                        Each firearm shall be inspected by the training provider to ensure that it is safe, operable, and in compliance with state and federal laws and regulations.
                                    </Typography>
                                </li>
                                <li className={Styles.readlist}>
                                    <Typography sx={{ marginLeft: '20px', fontSize: '18px', marginTop: '15px', marginBottom: '15px' }}>
                                        Applicants must complete a live fire course with each firearm to be listed on the license and must satisfy shooting proficiency standards established by LAPD. The Department&rquos;s Shooting Proficiency Standards Form is posted below.
                                    </Typography>
                                </li>
                            </ul>
                            <Typography className={Styles.readMorePara}>
                                It is the applicant&rquos;s responsibility to contact an authorized course provider to schedule and complete a training course acceptable to the Department. A list of training <Link href={pdf_4} className={Styles.readMoreLink}>providers</Link> who teach courses acceptable to the LAPD is posted below. The applicant must  select a Firearm Provider from the LAPD list only.
                            </Typography>
                            <Typography className={Styles.readMorePara}>
                                When the applicant has completed their firearm training course, a copy of the completed and signed shooting proficiency standards form must be sent to <Link href='mailto:CCWProcessing@lapd.online' className={Styles.readMoreLink}>CCWProcessing@lapd.online</Link>.
                            </Typography>
                            <Typography className={Styles.readMorePara}>
                                <span style={{ textDecoration: 'underline' }}>Handgun Requirements:</span> As stated above, training course providers inspect each handgun to ensure that it is safe, operable, and in compliance with state and federal laws and regulations. Please be aware that any handgun used in the firearm training course and listed on a CCW license must comply with the following state and federal laws and regulations:
                            </Typography>
                            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                                <li className={Styles.readlist} style={{ marginTop: '10px' }}>
                                    <Typography sx={{ marginLeft: '20px', fontSize: '18px', marginTop: '15px', marginBottom: '15px' }}>
                                        The handgun must be registered/DROS to the applicant.
                                    </Typography>
                                </li>
                                <li className={Styles.readlist} style={{ marginTop: '10px' }}>
                                    <Typography sx={{ marginLeft: '20px', fontSize: '18px', marginTop: '15px', marginBottom: '15px' }}>
                                        The handgun must be concealable upon the person or purse.
                                    </Typography>
                                </li>
                                <li className={Styles.readlist} style={{ marginTop: '10px' }}>
                                    <Typography sx={{ marginLeft: '20px', fontSize: '18px', marginTop: '15px', marginBottom: '15px' }}>
                                        The handgun, magazines, and ammunition must comply with applicable state laws.
                                    </Typography>
                                </li>
                                <li className={Styles.readlist} style={{ marginTop: '10px' }}>
                                    <Typography sx={{ marginLeft: '20px', fontSize: '18px', marginTop: '15px', marginBottom: '15px' }}>
                                        Registered assault weapons as defined in California Penal Code Sections 30510 and 30515 are not permitted for a CCW license.
                                    </Typography>
                                </li>
                                <li className={Styles.readlist} style={{ marginTop: '10px' }}>
                                    <Typography sx={{ marginLeft: '20px', fontSize: '18px', marginTop: '15px', marginBottom: '15px' }}>
                                        Any handgun or pistol that has the capacity to accept a magazine outside of the pistol grip is not permitted for a CCW license.
                                    </Typography>
                                </li>
                            </ul>
                            <Typography className={Styles.readMorePara}>
                                Once an applicant has been approved for a CCW license, they will be contacted to schedule an appointment to obtain and sign the CCW license. Appointments will take place at the LAPD Police Headquarters Facility.
                            </Typography>
                            <Typography className={Styles.readMorePara}>
                                If you have any questions regarding the CCW process, please call the LAPD CCW Unit at <Link href='tel:213-486-5712' className={Styles.readMoreLink}>(213) 486-5712</Link> or email <Link href='mailto:CCWProcessing@lapd.online' className={Styles.readMoreLink}>CCWProcessing@lapd.online</Link>.
                            </Typography>
                            <Typography className={Styles.readMorePara}>
                                Please continue to monitor this website for new or additional information about the Department&rsquo;s CCW process.
                            </Typography>
                            <Typography className={Styles.readMoreLink} sx={{fontSize: '18px', cursor: 'pointer'}} onClick={() => setToggle(false)}>
                                <span className={Styles.hyphen}></span> <span style={{marginLeft: '30px'}}>Read Less</span>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>











                <Grid container style={{ marginTop: '50px' }}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box sx={{ padding: '45px', background: '#ebf4f7' }}>
                            <Typography variant='h2' sx={{ fontSize: '26px', fontWeight: '700', lineHeight: '1.5', marginBottom: '20px' }}>Additional Information and Frequently Asked Questions</Typography>

                            <Link href={pdf_1} target="_blank" style={{ display: 'flex', textDecoration: 'none', margin: '15px 0px' }}>
                                <Image src={pdf} alt='pdf_image' />
                                <Typography sx={{ marginLeft: '10px', color: '#e73f15' }}>After Interview Instructions</Typography>
                            </Link>

                            <Link href={pdf_4} target="_blank" style={{ display: 'flex', textDecoration: 'none', margin: '15px 0px' }}>
                                <Image src={pdf} alt='pdf_image' />
                                <Typography sx={{ marginLeft: '10px', color: '#e73f15' }}>CCW Firearm Training Providers</Typography>
                            </Link>

                            <Link href={pdf_7} target="_blank" style={{ display: 'flex', textDecoration: 'none', margin: '15px 0px' }}>
                                <Image src={pdf} alt='pdf_image' />
                                <Typography sx={{ marginLeft: '10px', color: '#e73f15' }}>CCW User Acknowledgement</Typography>
                            </Link>

                            <Link href={pdf_8} target="_blank" style={{ display: 'flex', textDecoration: 'none', margin: '15px 0px' }}>
                                <Image src={pdf} alt='pdf_image' />
                                <Typography sx={{ marginLeft: '10px', color: '#e73f15' }}>DOJ CCW Application</Typography>
                            </Link>

                            <Link href={pdf_3} target="_blank" style={{ display: 'flex', textDecoration: 'none', margin: '15px 0px' }}>
                                <Image src={pdf} alt='pdf_image' />
                                <Typography sx={{ marginLeft: '10px', color: '#e73f15' }}>Firearms Prohibited Categories</Typography>
                            </Link>

                            <Link href={pdf_5} target="_blank" style={{ display: 'flex', textDecoration: 'none', margin: '15px 0px' }}>
                                <Image src={pdf} alt='pdf_image' />
                                <Typography sx={{ marginLeft: '10px', color: '#e73f15' }}>Live Scan (NOTE: if you are unable to print form from clicking blue button, RIGHT click on your mouse to print form.)</Typography>
                            </Link>

                            <Link href={pdf_6} target="_blank" style={{ display: 'flex', textDecoration: 'none', margin: '10px 0px' }}>
                                <Image src={pdf} alt='pdf_image' />
                                <Typography sx={{ marginLeft: '10px', color: '#e73f15' }}>Shooting Proficiency Standards</Typography>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>

            </Box>
        </>
    )
}

export default CCWcarry