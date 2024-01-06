import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Image from 'next/image'
import navStyle from '../styles/nav.module.css'
import { Divider, Button } from '@mui/material';
import searchIcon2 from "../../public/Icons/search-alt-2-svgrepo-com.svg"
import infoIcon from "../../public/Icons/message.png"
import joinLapd from '../../public/Icons/icon-jointheteam.svg';
import fileReport from '../../public/Icons/File.svg'
import trafficReport from '../../public/Icons/Traffic.svg'
import crimeMapping from '../../public/Icons/icon-crimemapping.svg'
import criminalVictms from '../../public/Icons/blk-ribbon.png'
import missingPerson from '../../public/Icons/icon-missing.svg'
import iWatch from '../../public/Icons/bino2.png'
import news from '../../public/Icons/icon-newsroom.svg'
import global from "../app/global.module.css"


interface props {
    navClose: any

}


const Mobilenav: React.FC<props> = ({ navClose }) => {

    const [activeButton, setActiveButton] = React.useState<number | null>(null);

    const handleButtonClick = (buttonId: number) => {
        setActiveButton(activeButton === buttonId ? null : buttonId);
    };

    const buttonStyles = (buttonId: number) => ({
        backgroundColor: activeButton === buttonId ? '#0f212b' : '#fff',
        color: activeButton === buttonId ? '#FFF' : '#e73f15',
        cursor: 'pointer',
    });



    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (
        event: React.ChangeEvent<{}>,
        isExpanded: boolean
    ) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (

        <Box sx={{ height: '100vh', backgroundColor: "#fff", textAlign: "center" }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: "#ffffff" }}>
                <Typography sx={{ padding: '10px 30px', fontSize: '12px', backgroundColor: '#fff' }}>For Emergencies Dial 911 | For Non-Emergency Police Response 877-ASK-LAPD</Typography>
            </Box>

            <Accordion sx={{ boxShadow: 'none', border: '1px solid #ccc' }} disableGutters={true} expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: activeButton ? '#fff' : '#e73f15' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={buttonStyles(1)}
                    onClick={() => handleButtonClick(1)}
                >
                    <Typography sx={{ fontSize: '15px', fontWeight: '700' }}>YOUR LAPD</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                        <li>
                            <Link href='#' className={navStyle.menu_links} onClick={navClose}>
                                <Image src={searchIcon2} alt='search' height={32} width={32} />
                                <Typography sx={{ marginLeft: '10px', color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Find Your Local Police Station</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link href='/inside-the-lapd' className={navStyle.menu_links} onClick={navClose}>
                                <Image src={infoIcon} alt='search' height={32} width={32} />
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" }, marginLeft: '10px' }} className={navStyle.link_text}>Inside the LAPD</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link href='/training-division/join-the-team' className={navStyle.menu_links} onClick={navClose}>
                                <Image src={joinLapd} alt='search' height={32} width={32} />
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" }, marginLeft: '10px' }} className={navStyle.link_text}>Join the LAPD</Typography>
                            </Link>
                        </li>
                        <li>
                            <Divider sx={{ backgroundColor: "#ccc", margin: '10px 0px' }} />
                        </li>

                        <li>
                            <Link href='https://www.lapdcsp.org/' className={navStyle.menu_links} onClick={navClose}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Community Safety Partnership Bureau</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link href='/police-commission/medal-of-valor' className={navStyle.menu_links} onClick={navClose}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Medal of Valor, Purple Heart & Preservation of Life Awards</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link href='/office-of-the-chief-of-police/constitutional-policing' className={navStyle.menu_links} onClick={navClose}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Constitutional Policing</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link href='/our-motto-mission-statement-core-values' className={navStyle.menu_links} onClick={navClose}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Mission, Vision, Values</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link href='/history-of-the-lapd' className={navStyle.menu_links} onClick={navClose}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>History of the LAPD</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className={navStyle.menu_links} onClick={navClose}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Officers Killed in the Line of Duty</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link href='/lapd-organization-chart' className={navStyle.menu_links} onClick={navClose}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>LAPD Organization Chart</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className={navStyle.menu_links} onClick={navClose}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Strategic Plan 2021 to 2023</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link href='https://thelapdstore.com/' className={navStyle.menu_links} onClick={navClose}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>LAPD Store</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link href='/public-communications-group/media-relations-division/entertainment-trademark-unit/' className={navStyle.menu_links} onClick={navClose}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Trademark & Licensing</Typography>
                            </Link>
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ boxShadow: 'none', border: '1px solid #ccc' }} expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')} disableGutters={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: activeButton ? '#fff' : '#e73f15' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={buttonStyles(2)}
                    onClick={() => handleButtonClick(2)}
                >
                    <Typography sx={{ fontSize: '15px', fontWeight: '700' }}>GET SERVICE</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                        <li>
                            <Link href='/file-a-police-report' className={navStyle.menu_links} onClick={navClose}>
                                <Image src={fileReport} alt='search' height={32} width={32} />
                                <Typography sx={{ marginLeft: '10px', color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>File a Police Report</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link href='/office-of-the-chief-of-police/office-of-special-operations/transit-services-bureau/file-a-traffic-collision-report' className={navStyle.menu_links} onClick={navClose}>
                                <Image src={trafficReport} alt='search' height={32} width={32} />
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" }, marginLeft: '10px' }} className={navStyle.link_text}>Obtain a Traffic Collision Report</Typography>
                            </Link>
                        </li>
                        <li>
                            <Divider sx={{ backgroundColor: "#ccc", margin: '10px 0px' }} />
                        </li>

                        <li>
                            <Link href='/california-public-records-act' className={navStyle.menu_links} onClick={navClose}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>California Public Records Act</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link href='/fireworks-complaints' className={navStyle.menu_links} onClick={navClose}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Fireworks Complaints</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/office-of-the-chief-of-police/office-of-special-operations/detective-bureau/detective-services-group/ccw-carry-concealed-weapon-license' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>CCW Carry Concealed Weapon License</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/inside-the-lapd/obtaining-police-information' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Request a Police Report (Victims Only)</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/employee-commendation' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Commend an Officer</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/inside-the-lapd/sites-of-interest' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Sites of Interest</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/faqs' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>FAQ&apos;s</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/reference-library/undocumented-immigrants/' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Undocumented Immigrants</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/office-of-the-chief-of-police/professional-standards-bureau/report-employee-misconduct/' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>File a Complaint</Typography>
                            </Link>
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ boxShadow: 'none', border: '1px solid #ccc' }} expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')} disableGutters={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: activeButton ? '#fff' : '#e73f15' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={buttonStyles(3)}
                    onClick={() => handleButtonClick(3)}
                >
                    <Typography sx={{ fontSize: '15px', fontWeight: '700' }}>CRIME INFO</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                        <li>
                            <Link onClick={navClose} href='/office-of-the-chief-of-police/office-of-special-operations/detective-bureau/crime-mapping-and-compstat/' className={navStyle.menu_links}>
                                <Image src={crimeMapping} alt='search' height={32} width={32} />
                                <Typography sx={{ marginLeft: '10px', color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Crime Mapping & COMPSTAT</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/' className={navStyle.menu_links}>
                                <Image src={criminalVictms} alt='search' height={32} width={32} />
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" }, marginLeft: '10px' }} className={navStyle.link_text}>2022 Criminal Homicide Victims</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/' className={navStyle.menu_links}>
                                <Image src={missingPerson} alt='search' height={32} width={32} />
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" }, marginLeft: '10px' }} className={navStyle.link_text}>Missing Persons</Typography>
                            </Link>
                        </li>
                        <li>
                            <Divider sx={{ backgroundColor: "#ccc", margin: '10px 0px' }} />
                        </li>

                        <li>
                            <Link onClick={navClose} href='/ab-953-the-racial-and-identity-profiling-act-of-2015-ripa' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>AB 953: The Racial and Identity Profiling Act of 2015 (RIPA)</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/office-of-the-chief-of-police/office-of-special-operations/detective-bureau/detective-support-and-vice-division/hate-crimes/' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Hate Crime Information</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/office-of-the-chief-of-police/office-of-special-operations/detective-bureau/detective-support-and-vice-division/human-trafficking' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Human Trafficking</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Bureau of Justice Statistics (BJS)</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>ID Theft</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/crime-prevention' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Crime Prevention</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Statistical Data</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Critical Incident Videos</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Traffic Info</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Domestic Violence</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Unsolved Murders of LAPD Officers</Typography>
                            </Link>
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ boxShadow: 'none', border: '1px solid #ccc' }} expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')} disableGutters={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: activeButton ? '#fff' : '#e73f15' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={buttonStyles(4)}
                    onClick={() => handleButtonClick(4)}
                >
                    <Typography sx={{ fontSize: '15px', fontWeight: '700' }}>GET INVOLVED</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                        <li>
                            <Link onClick={navClose} href='/' className={navStyle.menu_links}>
                                <Image src={iWatch} alt='search' height={32} width={32} />
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" }, marginLeft: '10px' }} className={navStyle.link_text}>iWatch</Typography>
                            </Link>
                        </li>
                        <li>
                            <Divider sx={{ backgroundColor: "#ccc", margin: '10px 0px' }} />
                        </li>

                        <li>
                            <Link onClick={navClose} href='/' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Crime Stoppers</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Reward Bulletin</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>iWatch</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Volunteer</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Neighborhood Watch</Typography>
                            </Link>
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ boxShadow: 'none', border: '1px solid #ccc' }} expanded={expanded === 'panel5'}
                onChange={handleChange('panel5')} disableGutters={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: activeButton ? '#fff' : '#e73f15' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={buttonStyles(5)}
                    onClick={() => handleButtonClick(5)}
                >
                    <Typography sx={{ fontSize: '15px', fontWeight: '700' }}>NEWS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                        <li>
                            <Link onClick={navClose} href='/' className={navStyle.menu_links}>
                                <Image src={news} alt='search' height={32} width={32} />
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" }, marginLeft: '10px' }} className={navStyle.link_text}>Newsroom</Typography>
                            </Link>
                        </li>
                        <li>
                            <Divider sx={{ backgroundColor: "#ccc", margin: '10px 0px' }} />
                        </li>

                        <li>
                            <Link onClick={navClose} href='/' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>Critical Incident Videos</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>LAPD Up Close</Typography>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={navClose} href='/' className={navStyle.menu_links}>
                                <Typography sx={{ color: "#0f212b", textTransform: "none", '&:hover': { color: "#e73f15" } }} className={navStyle.link_text}>LAPD TV</Typography>
                            </Link>
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>


            <Link href="javascript:;"><Button sx={{ marginTop: "20px", borderRadius: "0px", backgroundColor: "#e73f15", padding: "12px 16px", width: "98%", boxShadow: "inset 0 0 0 0 #ff7526", transition: "ease-in-out.3s" }} className={global.contactBtn} variant="contained" >
                <Typography sx={{ fontWeight: "bold" }}>CONTACT </Typography>
            </Button></Link>



        </Box>
    );
}

export default Mobilenav;