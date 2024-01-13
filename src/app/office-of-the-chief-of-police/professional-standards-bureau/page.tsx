'use client'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery'
import Styles from './style.module.css'
import Grid from '@mui/material/Grid'
import { Container } from '@mui/material'


const Professional = () => {

    const mobile = useMediaQuery('(max-width: 576px)');
    const [toggle, setToggle] = useState(false)
    const pdf_1 = '/pdfs/professional_standards_bureau/standards_bureau.pdf'

    return (
        <>
            <Box sx={{ display: 'flex', padding: '32px 0px', flexDirection: 'column', background: '#0f212b' }}>
                <Container>
                <Typography sx={{ color: '#fff', margin: '0px 0px 20px', fontSize: mobile ? '30px' : '62px', fontWeight: '700', width: mobile ? '100%' : '70%',lineHeight:"1.2" }}>Professional Standards Bureau</Typography>
                </Container>
                </Box>

            <Container>
            <Box sx={{marginTop:"70px"}}>
                <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                    <li><Typography className={Styles.para}>Professional Standards Bureau</Typography></li>
                    <li><Typography className={Styles.para}>201 N. Figueroa Street, Suite 1600</Typography></li>
                    <li><Typography className={Styles.para}>Los Angeles, CA 90012</Typography></li>
                    <li><Typography className={Styles.para}><Link href='tel:800-339-6868' className={Styles.linkHover}>800-339-6868</Link>  (24-hour toll free hotline)</Typography></li>
                </ul>


                <Grid container sx={{marginTop:"30px"}}>
                    <Grid item xs={12} sm={12} md={12} lg={8}>
                        <Typography sx={{ fontSize: '18px', fontWeight: '700', lineHeight: '1.7' }}>
                            GOALS:
                        </Typography>

                        <Typography className={Styles.para}>
                            The Los Angeles Police Department, Professional Standards Bureau (PSB), is committed to identifying misconduct that discredits the organization and decreases police legitimacy within the diverse communities we serve. We are dedicated to completing thorough and timely investigations in order to ensure that our employees consistently treat all community members fairly, with dignity and respect, in every law enforcement encounter. Innovative programs such as complaint mediation, highlight the future of PSB by providing voice and space for community members to be heard in a safe and neutral environment. Through transparent examination processes, we strive to enhance public trust and ensure the quality of service to the valued communities we serve.
                        </Typography>

                        <Typography className={Styles.para}>
                            Professional Standards Bureau is composed of three branches: Internal Affairs Division, Force Investigation Division, and Special Operations Division.
                        </Typography>

                        <Typography className={Styles.paraStyle} sx={{ position: 'relative', display: toggle ? 'none' :'flex', alignItems: 'center' }} >
                            <span className={Styles.hyphen}></span>
                            <Link href="javascript:;" className={Styles.linkHover} style={{ marginLeft: '30px' }} onClick={() => setToggle(true)}>Read More</Link>
                        </Typography>

                        <Box className={`${toggle ? Styles.readMoreView : Styles.readMoreHide} ${Styles.scale_up_left}`}>

                            <Typography className={Styles.para}>
                                <Link href='https://www.lapdonline.org/office-of-the-chief-of-police/professional-standards-bureau/internal-affairs-division/' className={Styles.linkHover}>Internal Affairs Division (IAD)</Link> acts as the investigative arm of the Chief of Police (COP) with respect to employee misconduct.  All complaints are reviewed by PSB to determine the appropriate investigative entity.  Internal Affairs Division is responsible for investigating complaints of misconduct of LAPD employees that are either administrative in nature, or have potential criminal elements associated with the complaints.
                            </Typography>

                            <Typography className={Styles.para}>
                                <Link href='https://www.lapdonline.org/office-of-the-chief-of-police/professional-standards-bureau/force-investigations-division' className={Styles.linkHover}>Force Investigation Division (FID)</Link> is responsible for the administrative investigation of all “Categorical” uses of force, including uses of deadly force, upper body control holds, deaths while an arrestee or detainee is in the custodial care of the Department, and uses of force resulting in death.  All other uses of force, “Non-Categorical,” are investigated by supervisors from the involved officer&s division of assignment.  If a Categorical use of force results in an Administrative Disapproval/Out of Policy finding and the COP determines a personnel complaint should be initiated, or if the use of force investigation uncovers possible misconduct, PSB assumes investigative responsibility for the resulting complaint.
                            </Typography>

                            <Typography className={Styles.para}>
                                <Link href='https://www.lapdonline.org/office-of-the-chief-of-police/professional-standards-bureau/special-operations-division' className={Styles.linkHover}>Special Operations Division (SOD)</Link> includes the Ethics Enforcement Section, Internal Surveillance Unit, and the Workers&rsquo; Compensation Fraud Unit.  The mission of SOD is to safeguard the integrity of law enforcement operations within the LAPD.  Special Operations Division works closely with PSB and Department managers to identify at-risk personnel and behaviors.  Once identified, SOD develops proactive strategies to test, monitor, and curtail these behaviors.
                            </Typography>

                            <Typography sx={{ fontSize: '18px', fontWeight: '700', lineHeight: '1.7' }}>
                                Quality Service is Your Right
                            </Typography>
                            <Typography className={Styles.para}>
                                The motto of the Los Angeles Police Department is “to protect and to serve.”  The Department is dedicated to providing the finest police service possible.  In order to provide quality service to the community, we need your assistance.  This is your police department.  We welcome your comments and encourage you to let us know about the quality of service you receive from our employees.
                            </Typography>
                            <Typography className={Styles.para}>
                                If you wish to commend the actions of employees of this Department, you may do so by clicking <Link href={pdf_1} target='_blank' className={Styles.linkHover}>here</Link>, writing a letter to the captain of the station in your Area, or to the Chief of Police.  Verbal commendations may also be given to any Department supervisor.
                            </Typography>
                            <Typography className={Styles.para}>
                                If you believe the conduct of an employee was inappropriate, you may file an online complaint <Link href='https://docs.google.com/forms/d/e/1FAIpQLSfWo1bwv7nLh3M4vpfObqBrvfUAPFeFcgIKzd0SU6dzxcVswA/viewform' className={Styles.linkHover}>here</Link>.
                            </Typography>
                            <Typography sx={{ fontSize: '18px', fontWeight: '700' }}>
                                Filing a Complaint of Police Misconduct
                            </Typography>
                            <Typography className={Styles.para}>
                                A complaint can be filed in person at any police facility in Los Angeles, Professional Standards Bureau, the Police Commission, or the Office of the Inspector General.  Although it is not required, the Department encourages community members to make these reports in person so a supervisor has an opportunity to do a thorough initial assessment of your complaint.
                            </Typography>
                            <Typography className={Styles.para}>
                                If you do not wish to report your complaint in person, you may obtain a “Complaint of Employee Misconduct” form from any police facility or City Council field office.   Complaints may also be filed online by clicking <Link href='https://www.lapdonline.org/information-on-how-to-file-a-complaint/' className={Styles.linkHover}>here</Link>.
                            </Typography>
                            <Typography className={Styles.para}>
                                If you prefer to make your complaint by phone, you may call our 24-hour toll free hotline at (800) 339-6868.
                            </Typography>
                            <Typography className={Styles.para}>
                                Anonymous and third-party complaints are also accepted and will be investigated to the extent that sufficient information is provided.  However, if you choose to not provide your contact information, the investigators will be unable to ask you follow-up questions that might be needed for a thorough, complete investigation.
                            </Typography>
                            <Typography sx={{ fontSize: '18px', fontWeight: '700' }}>
                                The Investigation Process
                            </Typography>
                            <Typography className={Styles.para}>
                                All complaints are reviewed by PSB before being assigned for investigation.  However, not all complaints are investigated by PSB.  Depending on the misconduct alleged, personnel complaints may be investigated by PSB investigators or at the divisional level.  Complaints not investigated by PSB are assigned to the accused officer&rsquo;s division of assignment for investigation.
                            </Typography>
                            <Typography className={Styles.para}>
                                Your complaint will be investigated by a trained supervisor.  The investigation may include interviews of witnesses and officers; a review of Department records, policies, and procedures; an inspection of medical records, photographs and other evidence; and legal  analysis.
                            </Typography>
                            <Typography className={Styles.para}>
                                The investigation of a personnel complaint and subsequent actions (including the administration of discipline when warranted) are involved and time consuming processes.  The amount of time they take depends on a number of factors and generally varies from several months to about a year.  Once the process has been completed, you will be notified of the outcome in writing if you have provided your mailing address.
                            </Typography>
                            <Typography sx={{ fontSize: '18px', fontWeight: '700' }}>
                                Mediation Program and Alternative Complaint Resolution Process
                            </Typography>
                            <Typography className={Styles.para}>
                                Some complaints are eligible to be resolved through Mediation or the Alternative Complaint Resolution (ACR) process rather than the traditional, fact-finding investigation.  These alternative complaint procedures, which take place in an informal setting, were developed to resolve complaints through dialogue and with the intent to strengthen relations between the community and the LAPD.
                            </Typography>
                            <Typography className={Styles.para}>
                                Mediation is a form of confidential dispute resolution in which complainants and LAPD employees meet face-to-face with impartial mediators to discuss the alleged misconduct.  The mediators are trained volunteers from the City Attorney&rsquo;s Office, and have no power to influence the outcome of the mediation.
                            </Typography>
                            <Typography className={Styles.para}>
                                Similarly, for the ACR process, the parties meet to resolve the complaint through a discussion. The conversation is facilitated by an LAPD supervisor, and the ACR process is also confidential.
                            </Typography>
                            <Typography className={Styles.para}>
                                If your complaint is determined to be appropriate for mediation or the ACR process, you will be notified.  However, your participation would be completely voluntary.
                            </Typography>
                            <Typography className={Styles.para}>
                                You may file an online complaint <Link href='https://docs.google.com/forms/d/e/1FAIpQLSfWo1bwv7nLh3M4vpfObqBrvfUAPFeFcgIKzd0SU6dzxcVswA/viewform' className={Styles.linkHover}>here</Link>.
                            </Typography>

                            <Typography className={Styles.paraStyle} sx={{ position: 'relative', display: 'flex', alignItems: 'center' }} >
                                <span className={Styles.hyphen}></span>
                                <Link href="javascript:;" className={Styles.linkHover} style={{ marginLeft: '30px' }} onClick={() => setToggle(false)}>Read Less</Link>
                            </Typography>

                        </Box>

                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ padding: '45px', background: '#ebf4f7', margin: '20px 0px' }}>
                            <Typography sx={{ fontSize: '20px', marginBottom: '20px', fontWeight: '700' }}>Public Reports on Discipline</Typography>
                            <Typography sx={{ fontSize: '16px', lineHeight: '1.5', margin: '20px 0px' }}>
                                <Link href='/office-of-the-chief-of-police/professional-standards-bureau/disciplinary-penalties/' className={Styles.linkHover}>
                                    Disciplinary Penalties Reports
                                </Link>
                            </Typography>
                            <Typography sx={{ fontSize: '16px', lineHeight: '1.5', margin: '20px 0px' }}>
                                <Link href='/office-of-the-chief-of-police/professional-standards-bureau/month-and-ytd-2022/' className={Styles.linkHover}>Month and YTD (2023)</Link>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            </Container>

        </>
    )
}

export default Professional