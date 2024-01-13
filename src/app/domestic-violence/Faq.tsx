import React, { useState } from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, useMediaQuery } from '@mui/material'
import ExpandPlusIcon from '@mui/icons-material/Add';
import ExpandminusIcon from '@mui/icons-material/Remove';
import Styles from './style.module.css'
import Link from 'next/link';



const Faq = () => {
    const tab = useMediaQuery('(max-width: 768px)');
    const mobile = useMediaQuery('(max-width: 576px)');


    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (isExapnded: boolean, panel: string) => {
        setExpanded(isExapnded ? panel : false)
    }

    return (
        <>
            {/* -------------- FAQ 1 -----------------  */}
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={(event, isExapnded) => handleChange(isExapnded, 'panel1')}
                className={Styles.accordion}
                disableGutters={true}
            >
                <AccordionSummary
                    id='panel1-header'
                    aria-controls='panel1-content'
                    expandIcon={expanded === 'panel1' ? <ExpandminusIcon className={Styles.expandBtn} /> : <ExpandPlusIcon className={`${Styles.expandBtn} ${Styles.plusHover}`} />}
                    className={Styles.accordionSummary}>
                    <Typography sx={{ marginLeft: mobile ? '0px' : '15px', fontSize: tab ? '20px' : '22px', color: expanded === 'panel1' ? '#e73f15' : '#000', padding: tab ? '10px 15px' : '20px 30px', '&:hover': { color: '#798c96' }, width: tab ? '100%' : '70%' }}>What can I do about annoying or threatening phone calls?</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Box sx={{ marginLeft: mobile ? '40px' : tab ? '60px' : '75px', paddingRight: mobile ? '' :tab? '10%': '30%' }}>
                        <Typography className={Styles.faqPara}>If you become a victim of annoying phone calls, you should report them to the Los Angeles Police Department. Your phone company may be able to assist in tracking the origin of the calls if they have a police report number.</Typography>
                        <Typography className={Styles.faqPara}>
                            If you become a victim of threatening phone calls, report them to your local police department immediately. Los Angeles Police Department takes threatening calls seriously, and so should you, especially if you are in a battering relationship or have been a victim of domestic violence.
                        </Typography>
                    </Box>
                </AccordionDetails>

            </Accordion>

            {/* -------------- FAQ 2 -----------------  */}
            <Accordion
                expanded={expanded === 'panel2'}
                onChange={(event, isExapnded) => handleChange(isExapnded, 'panel2')}
                className={Styles.accordion}
                disableGutters={true}
            >
                <AccordionSummary
                    id='panel2-header'
                    aria-controls='panel2-content'
                    expandIcon={expanded === 'panel2' ? <ExpandminusIcon className={Styles.expandBtn} /> : <ExpandPlusIcon className={`${Styles.expandBtn} ${Styles.plusHover}`} />}
                    className={Styles.accordionSummary}>
                    <Typography sx={{ marginLeft: mobile ? '0px' : '15px', fontSize: tab ? '20px' : '22px', color: expanded === 'panel2' ? '#e73f15' : '#000', padding: tab ? '10px 15px' : '20px 30px', '&:hover': { color: '#798c96' }, width: tab ? '100%' : '70%' }}>My partner was arrested for domestic violence and told me to bail him/her out or else I would “get it.” What should I do?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ marginLeft: mobile ? '40px' : tab ? '55px' : '75px', paddingRight: mobile ? '' :tab? '10%': '30%' }}>
                        <Typography className={Styles.faqPara}>
                            This is a threat. Report this to the police, <Link href='http://www.lacityattorney.org/' className={Styles.linkHover}>City Attorney&rsquo;s</Link> or <Link href='http://da.lacounty.gov/victims' className={Styles.linkHover}>District Attorney&rsquo;s</Link> Office as soon as possible. A protective order for you can be requested in court and bail can be raised because of the threat. Depending on the specific nature of the threat, additional charges may be filed against the defendant.
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>



            {/* -------------- FAQ 3 -----------------  */}
            <Accordion
                expanded={expanded === 'panel3'}
                onChange={(event, isExapnded) => handleChange(isExapnded, 'panel3')}
                className={Styles.accordion}
                disableGutters={true}
            >
                <AccordionSummary
                    id='panel3-header'
                    aria-controls='panel3-content'
                    expandIcon={expanded === 'panel3' ? <ExpandminusIcon className={Styles.expandBtn} /> : <ExpandPlusIcon className={`${Styles.expandBtn} ${Styles.plusHover}`} />}
                    className={Styles.accordionSummary}>
                    <Typography sx={{ marginLeft: mobile ? '0px' : '15px', fontSize: tab ? '20px' : '22px', color: expanded === 'panel3' ? '#e73f15' : '#000', padding: tab ? '10px 15px' : '20px 30px', '&:hover': { color: '#798c96' }, width: tab ? '100%' : '70%' }}>Do we both need to attend court-ordered counseling and marriage counseling?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ marginLeft: mobile ? '40px' : tab ? '55px' : '75px', paddingRight: mobile ? '' :tab? '10%': '30%' }}>
                        <Typography className={Styles.faqPara}>
                            Violence is not a problem for both persons in a relationship, it is the problem of the batterer alone. When the batterer has completed counseling for his/her use of violence on you then it may be safe to try marriage counseling. You will not be required to attend court-ordered counseling with the batterer. If you are required to go with the batterer, call a Victim Advocate. Only counselors trained specifically in domestic violence can help, for this reason, even religious counseling may not be enough.
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>


            {/* -------------- FAQ 4 -----------------  */}
            <Accordion
                expanded={expanded === 'panel4'}
                onChange={(event, isExapnded) => handleChange(isExapnded, 'panel4')}
                className={Styles.accordion}
                disableGutters={true}
            >
                <AccordionSummary
                    id='panel4-header'
                    aria-controls='panel4-content'
                    expandIcon={expanded === 'panel4' ? <ExpandminusIcon className={Styles.expandBtn} /> : <ExpandPlusIcon className={`${Styles.expandBtn} ${Styles.plusHover}`} />}
                    className={Styles.accordionSummary}>
                    <Typography sx={{ marginLeft: mobile ? '0px' : '15px', fontSize: tab ? '20px' : '22px', color: expanded === 'panel4' ? '#e73f15' : '#000', padding: tab ? '10px 15px' : '20px 30px', '&:hover': { color: '#798c96' }, width: tab ? '100%' : '70%' }}>My partner told me to call the prosecutor and drop the case. What should I do?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ marginLeft: mobile ? '40px' : tab ? '55px' : '75px', paddingRight: mobile ? '' :tab? '10%': '30%' }}>
                        <Typography className={Styles.faqPara}>
                            You cannot drop the charges in a criminal case. Unlike a civil case, you are not the party to the lawsuit, but you are an important witness to a crime. If the batterer tells you to drop charges, he/she must understand that you do not have that authority.
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>


            {/* -------------- FAQ 5 -----------------  */}
            <Accordion
                expanded={expanded === 'panel5'}
                onChange={(event, isExapnded) => handleChange(isExapnded, 'panel5')}
                className={Styles.accordion}
                disableGutters={true}
            >
                <AccordionSummary
                    id='panel5-header'
                    aria-controls='panel5-content'
                    expandIcon={expanded === 'panel5' ? <ExpandminusIcon className={Styles.expandBtn} /> : <ExpandPlusIcon className={`${Styles.expandBtn} ${Styles.plusHover}`} />}
                    className={Styles.accordionSummary}>
                    <Typography sx={{ marginLeft: mobile ? '0px' : '15px', fontSize: tab ? '20px' : '22px', color: expanded === 'panel5' ? '#e73f15' : '#000', padding: tab ? '10px 15px' : '20px 30px', '&:hover': { color: '#798c96' }, width: tab ? '100%' : '70%' }}>If I go to court and testify, can the batterer find out where I’m staying?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ marginLeft: mobile ? '40px' : tab ? '55px' : '75px', paddingRight: mobile ? '' :tab? '10%': '30%' }}>
                        <Typography className={Styles.faqPara}>
                            No. Specific state laws let the prosecutor conceal your location from the defendant.
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>


            {/* -------------- FAQ 6 -----------------  */}
            <Accordion
                expanded={expanded === 'panel6'}
                onChange={(event, isExapnded) => handleChange(isExapnded, 'panel6')}
                className={Styles.accordion}
                disableGutters={true}
            >
                <AccordionSummary
                    id='panel6-header'
                    aria-controls='panel6-content'
                    expandIcon={expanded === 'panel6' ? <ExpandminusIcon className={Styles.expandBtn} /> : <ExpandPlusIcon className={`${Styles.expandBtn} ${Styles.plusHover}`} />}
                    className={Styles.accordionSummary}>
                    <Typography sx={{ marginLeft: mobile ? '0px' : '15px', fontSize: tab ? '20px' : '22px', color: expanded === 'panel6' ? '#e73f15' : '#000', padding: tab ? '10px 15px' : '20px 30px', '&:hover': { color: '#798c96' }, width: tab ? '100%' : '70%' }}>He/she tries to be a good parent to the children. Should I put up with domestic abuse to maintain our home for the children’s sake?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ marginLeft: mobile ? '40px' : tab ? '55px' : '75px', paddingRight: mobile ? '' :tab? '10%': '30%' }}>
                        <Typography className={Styles.faqPara}>
                            No. Children growing up in a home with violence are “walking on egg-shells” too. The violence to you directly affects and harms your children.
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>


            {/* -------------- FAQ 7 -----------------  */}
            <Accordion
                expanded={expanded === 'panel7'}
                onChange={(event, isExapnded) => handleChange(isExapnded, 'panel7')}
                className={Styles.accordion}
                disableGutters={true}
            >
                <AccordionSummary
                    id='panel7-header'
                    aria-controls='panel7-content'
                    expandIcon={expanded === 'panel7' ? <ExpandminusIcon className={Styles.expandBtn} /> : <ExpandPlusIcon className={`${Styles.expandBtn} ${Styles.plusHover}`} />}
                    className={Styles.accordionSummary}>
                    <Typography sx={{ marginLeft: mobile ? '0px' : '15px', fontSize: tab ? '20px' : '22px', color: expanded === 'panel7' ? '#e73f15' : '#000', padding: tab ? '10px 15px' : '20px 30px', '&:hover': { color: '#798c96' }, width: tab ? '100%' : '70%' }}>Am I safe now that the batterer’s attending a batterer’s counseling program?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ marginLeft: mobile ? '40px' : tab ? '55px' : '75px', paddingRight: mobile ? '' : tab ? '10%': '30%' }}>
                        <Typography className={Styles.faqPara}>
                            Possibly not. Even though the batterer’s attending a counseling program, even one ordered by the court, you may not be safe. You should be contacted by the program for reports on his/her behavior and to answer any questions you may have about what he/she may be telling you about the program. If the program has not contacted you, call a Victim Advocate. <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Even if the batterer attends the program regularly, you may not be safe. No</span> program can guarantee that you will be safe.
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default Faq