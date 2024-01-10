'use client'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './identity.module.css'
import pdf1 from '../../../public/Icons/icon-pdf-white.svg'
import global from "../global.module.css"
import Typography from '@mui/material/Typography'
import LaunchIcon from '@mui/icons-material/Launch';
import { Container } from '@mui/material'

const IdentityTheft = () => {
    return (
        <>
            {/* 1st block */}
            <Box className={styles.bg}>
                <Container>

                    <Grid container className={styles.blockspace}>
                        <Grid item xs={11} sm={10} md={7} lg={6} className={global.fadeInUp}>
                            <Typography className={styles.h1size}>Identity Theft</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {/* 2nd block */}
            <Container>

                <Box className={`${styles.wholeblock} ${global.fadeInUp}`}>
                    <Box>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={10} lg={8}>
                                <Typography sx={{ fontWeight: '600', lineHeight: '1.55' }}>PURPOSE</Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>The purpose of this circular is to standardize Identity Theft Prevention and Victim Information presented during community crime prevention meetings. The circular will also assist Los Angeles Police Department (LAPD) personnel to impart basic Identity Theft Prevention and Victim Information tips to community members to help slow down one of the fastest growing white-collar crimes. The circular will also serve to warn community members how to take steps to protect their privacy and to educate Identity Theft victims about what to do when an identity thief strikes.</Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={10} lg={8}>
                                <Typography sx={{ fontWeight: '600', lineHeight: '1.55', marginTop: '30px', fontSize: '18px' }}>INTRODUCTION</Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>The crime of identity theft is on the rise and it has become a significant problem for the LAPD and for people who reside in the City of Los Angeles. This is because there has been an increase in the number of reported identity theft incidents and in the level of fear within the community. Additionally, the identity theft issue continues to receive considerable media attention. The LAPD believes there could be as many as 10,000 reported identity theft incidents within the City of Los Angeles in 2003. To more effectively coordinate identity theft investigations, the LAPD now investigates these crimes through their Commercial Crimes Division. The LAPD encourages anyone victimized by identity theft to contact the LAPD or their local law enforcement agency to report the incident.</Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}>
                                    The law making identity theft a crime was enacted as a misdemeanor crime in 1998. In 1999, the law was upgraded to an alternate felony/misdemeanor crime. The crime of identity theft is described in the California Penal Code as follows:
                                </Typography>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
                <Box className={`${styles.wholeblock} ${global.fadeInUp}`}>
                    <Box>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={10} lg={8} className={styles.bluecard}>
                                <Typography>“Section 530.5 PC: Unauthorized use of personal identifying information to obtain credit, goods, services, or medical information in the name of another person.</Typography>
                                <Typography sx={{ marginTop: '30px' }}>
                                    Section 530.5 (a) PC: Every person who willfully obtains personal identifying information, as defined in subdivision (b), of another person without the authorization of that person, and uses that information for any unlawful purpose, including to obtain, or attempt to obtain, credit, goods, services, or medical information in the name of the other person without the consent of that person is guilty of a public offense, and upon conviction therefore, shall be punished either by imprisonment in a county jail not to exceed one year, a fine not to exceed one thousand dollars, or both that imprisonment and fine, or by imprisonment in the state prison, a fine not to exceed ten thousand dollars, or both that imprisonment and fine.
                                </Typography>
                                <Typography sx={{ marginTop: '30px' }}>
                                    Section 530.5 (b) PC: “Personal identifying information,” as used in this section, means the name, address, telephone number, driver’s license number, social security number, place of employment, employee identification number, mother’s maiden name, demand deposit account number, savings account number, or credit card number of an individual person.
                                </Typography>
                                <Typography sx={{ marginTop: '30px' }}>
                                    Section 530.5 (c) PC: In any case in which a person willfully obtains personal identifying information of another person without the authorization of that person, and uses that information to commit a crime in addition to a violation of subdivision (a), and is convicted of that crime, the court records shall reflect that the person whose identity was falsely used to commit the crime did not commit the crime.”
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

                <Box className={`${styles.wholeblock} ${global.fadeInUp}`}>
                    <Box>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={10} lg={9}>
                                <Typography sx={{ fontWeight: '600', lineHeight: '1.55' }}>PRESENTATION</Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    It is important to remember that the victim of identity theft is a person whose identity has been fraudulently assumed by another with the intent to obtain credit, goods, or services without the victim’s consent. No financial loss is necessary. Identity theft includes the criminal assumption of someone’s name, address, credit card information, driver’s license, social security number and other personal data. Criminals use this information to impersonate their victims, spending as much money as they can in as short a time as possible before moving on to impersonate someone else.
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}>
                                    The victims of credit and banking fraud will usually be liable for no more than the first $50.00 of the loss. In many cases, victims will not be required to pay any part of the loss. However, victims are supposed to notify financial institutions within two days of learning of the loss, although this is often waived.
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}>
                                    Even though victims are usually not required to pay their imposters’ bills, they are often left with a bad credit report and must spend months and even years regaining their financial health. In the meantime, they have difficulty writing checks, obtaining loans, renting apartments, and even getting hired. Stealing wallets used to be the best way identity thieves obtained credit card numbers and other pieces of identification. Now more sophisticated means are commonly used:
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}>
                                    Accessing your credit report fraudulently by posing as an employer, loan officer or landlord and ordering a copy;
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    Stealing mail from your mailbox to obtain newly issued credit cards, bank and credit card statements, pre-approved credit offers, or tax information, and;
                                    Dumpster diving in your trash containers for discarded credit card and loan applications.
                                </Typography>

                                <Typography sx={{ fontWeight: '600', lineHeight: '1.55', marginTop: '30px' }}>IDENTITY THEFT PREVENTION TIPS</Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    The LAPD suggests the following crime prevention techniques to avoid becoming a victim of identity theft:
                                </Typography>

                                <ol type='1' style={{ paddingLeft: '15px', fontSize: '18px', fontWeight: '700', marginLeft: '15px' }}>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>To minimize the amount of information an identity thief can steal, do not carry extra credit cards, a social security card, birth certificate or passport in your wallet or purse, except when needed.
                                        </Typography>
                                    </li>

                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            To reduce the amount of personal information that is in circulation consider the following:
                                        </Typography>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Remove your name from the marketing lists of the three major credit reporting bureaus, i.e., Equifax, Experian (formerly TRW) and Trans Union. This will limit the number of pre-approved offers of credit that you receive. These offers, if thrown away in the trash, are potential targets of identity thieves who will use them to order credit cards using your identity.
                                        </Typography>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Sign up for the Direct Marketing Association Mail Preference Service and the Telephone Preference Service. By doing this, your name is added to computerized name deletion lists used by nationwide marketers.
                                        </Typography>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Have your name and address removed from telephone books and reverse directories.
                                        </Typography>
                                    </li>

                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Install a locked mailbox at your residence or business to reduce mail theft or use a post office box.
                                        </Typography>
                                    </li>

                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            When you order new checks, do not have them sent to your home address. Have them sent to a post office box or arrange to pick them up at your bank.
                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            When you pay bills, do not place the envelopes containing your checks in your home mailbox for the letter carrier to pick up. If stolen, your checks can be altered and cashed by identity thieves. It is best to mail your checks and other sensitive mail at the post office rather than your home or neighborhood mailbox. Write checks with a fine-point permanent marker.
                                        </Typography>
                                    </li>

                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Pay bills with an electronic bill payment service.

                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Reduce the number of credit cards you actively use to a bare minimum. Carry only one or two credit cards in your wallet. Cancel all unused credit card accounts. Even though you do not use these accounts, account numbers are recorded in your credit report along with other data that can be used by identity thieves.
                                        </Typography>
                                    </li>

                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Keep a list and/or photocopy of all your credit cards, account numbers, expiration dates and telephone numbers of the customer service and fraud departments in a secure place (not your wallet or purse) so you can quickly contact your creditors in case your credit cards are stolen. Do the same with your bank accounts.
                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Never give out your credit card number or other personal information over the telephone, unless you have a trusted business relationship with the person or company and you have initiated the telephone call. Identity thieves have been known to call their victims with a fake story that goes something like this, “Today is your lucky day! You have been chosen by the “Jane and John Doe Sweepstakes Committee” to receive a free trip to Europe. All we need is your credit card number and expiration date to verify you as the lucky winner.”
                                        </Typography>
                                    </li>

                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Order your credit report once a year from each of the three major credit bureaus to check for inaccuracies and fraudulent use of your accounts. Make sure that you recognize every line of information established in your file.
                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Always take credit card receipts with you. Never throw them in a public trash container.
                                        </Typography>
                                    </li>

                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Watch the mail when you expect a new or reissued credit card to arrive. Contact the issuer if the card does not arrive.
                                        </Typography>
                                    </li>

                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            When creating a password or Personal Identification Number (PIN), do not use the last four digits of your social security number, date of birth, middle name, the name of your family pet, consecutive numbers of anything else that could easily be discovered by identity thieves.
                                        </Typography>
                                    </li>

                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Ask your financial institution to add extra security protection to your account. Most will allow you to use an additional code (a number or word) when assessing your account. Do not use your mother’s maiden name, as that is all too easily obtained by identity thieves.
                                        </Typography>
                                    </li>

                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Memorize all your passwords. Do not record them on anything in your wallet or purse.
                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Protect your social security number. Release it only when absolutely necessary (tax forms, employment records, most banking, stock and property transactions). The social security number is the key to your credit and bank accounts and is a prime target of identity thieves.
                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Do not have your social security number printed on your checks. Do not let merchants write your social security number on your checks because of the risk of fraud.
                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>

                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Order your &nbsp; <span className={styles.hlinetwo}></span>
                                            <Link href="#" style={{ marginLeft: '25px' }} className={styles.lnk}>Social Security Earnings and Benefits Statement</Link> once a year to check for fraud.
                                        </Typography>

                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Carefully review your credit card statements for unauthorized use.
                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Do not throw pre-approved credit offers in the trash or in a recycling container without first shredding them. The discarded credit offers can be used by identity thieves to order credit cards in your name and to have the credit cards mailed to their address.
                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Do the same with other sensitive information like credit card receipts. Home shredders can be purchased at many office supply stores.
                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Demand financial institutions to adequately safeguard your data. Request a special password that only you would know. Memorize all passwords. Discourage your bank from using the last four digits of the social security number as the PIN they assign to customers.
                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            When you fill out loan applications, find out how the company disposes of them. If you are not convinced that they store them in locked files and/or shred them, take your business elsewhere. Some car dealerships, department stores, car rental agencies, and video stores have been known to be careless with customer applications. When you pay by credit card, ask the business how it stores and disposes of the transaction slip. Avoid paying by credit card if you think the business does not use adequate safeguards.
                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Store your cancelled checks in a safe place. In the wrong hands, they can reveal a lot of information about you. Never permit your credit card number to be written on your checks. It is a violation of California law (California Civil Code 1725) and places you at risk of fraud.
                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Any entity involved in handling personal information should train all its employees, from the top to the bottom, on responsible information-handling practices. Persuade the companies, government agencies and nonprofit agencies with which you are associated to adopt privacy policies and conduct privacy training. Employees should be trained to check picture identification cards when accepting credit cards.
                                        </Typography>
                                    </li>
                                </ol>

                                <Typography sx={{ fontWeight: '600', lineHeight: '1.55', marginTop: '30px' }}>IDENTITY THEFT VICTIM TIPS</Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    If you become the victim of identity theft, it is important to act immediately to stop the thief’s further use of your identity. Unfortunately, at this time victims themselves are burdened with resolving the problem. It is important to act quickly and assertively to minimize the damage. In dealing with authorities and financial institutions, keep a log of all conversations, dates, names, and telephone numbers. Note the time spent and any expenses incurred. Confirm conversations in writing. Provide your police report number to expedite reporting the crime.
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    Send correspondence by certified mail (return receipt requested). Keep copies of all letters and documents. Sometimes victims of identity theft are wrongfully accused of crimes committed by an imposter. If a civil judgment has been entered in your name for actions taken by an imposter, contact the court where the judgment was entered and report that you are a victim of identity theft. If you are wrongfully prosecuted of criminal charges, contact the state Department of Justice and the FBI. Ask how to clear your name.
                                </Typography>
                                <Typography sx={{ fontWeight: '600', lineHeight: '1.55', marginbottom: '30px' }}>The LAPD also suggests you do the following:</Typography>


                                <ol type='1' style={{ paddingLeft: '15px', fontSize: '18px', fontWeight: '700', marginLeft: '15px' }}>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Report the crime to all police and sheriff departments with jurisdiction in your case immediately. Give them as much documented evidence as possible. Obtain a copy of all police reports. Keep the telephone number of your fraud detective/investigator handy and give it to creditors and others who require verification of your case. Credit card companies, banks, and insurance companies may require you to show the report in order to verify the crime. Some police and sheriff departments have been known to refuse to write reports on such crimes. Be persistent!
                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Immediately contact (by telephone and in writing) all creditors with whom your name has been used fraudulently. Obtain replacement cards with new account numbers for your own accounts that have been used fraudulently. Ask that old accounts be processed as “account closed at consumer’s request.” (This is better than “card lost or stolen,” because when this statement is reported to credit reporting bureaus, it can be interpreted as blaming you for the loss.) Carefully monitor your mail and credit card bills for evidence of new fraudulent activity. Report it immediately to credit grantors.
                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            If you have had checks stolen or bank accounts set up fraudulently, notify your bank. Report the fraud to check verification companies. Place stop payments on any outstanding checks that you are unsure of. Cancel your checking and saving accounts and obtain new account numbers. Ask the bank to issue you a secret password that must be used in every transaction (not your mother’s maiden name). Write a form letter that can be mailed or faxed whenever you receive an inquiry about fraudulent checks written from your bank account. The letter should give a brief description of what happened, check numbers and check manufacturer (obtained from your bank), bank account number, case number (assigned by police or the law enforcement agency with jurisdiction), the name of the police or sheriff detective/investigator handling your case, and the name and telephone number of the customer service representative at your bank.
                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            You may be asked by banks and credit grantors to fill out and notarize fraud affidavits, which are costly. The law does not require that a notarized affidavit be provided to creditors. A written statement and supporting documentation should be enough (unless the creditor offers to pay the notary). Overly burdensome requirements by creditors should be reported to federal government authorities.
                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            The &nbsp; <span className={styles.hlinetwo}></span>
                                            <Link href="#" style={{ marginLeft: '25px' }} className={styles.lnk}>Secret Service</Link> has jurisdiction over financial fraud cases but it usually does not investigate individual cases unless the dollar amount is high and/or you are one of many victims of a fraud ring. To interest the Secret Service in your case, you may want to ask the fraud department of the credit card companies and/or banks, as well as the police or sheriff detective/investigator to notify the particular Secret Service agent they work with regarding your case.
                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Call the &nbsp; <span className={styles.hlinetwo}></span>
                                            <Link href="#" style={{ marginLeft: '25px' }} className={styles.lnk}>Social Security Administration (SSA)</Link> to report fraudulent use of your Social Security number. Also, order a copy of your Social Security Earnings and Benefits Statement and check it for accuracy. As a last resort, you might want to change your number. The SSA will only change it if you fit their fraud victim criteria. Caution: This step should be reserved for only the most extreme situations. You must be sure to notify all credit grantors and credit reporting bureaus of your new Social Security number.
                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Notify the local &nbsp; <span className={styles.hlinetwo}></span><Link href="#" style={{ marginLeft: '25px' }} className={styles.lnk}>Postal Inspector</Link> if you suspect an identity thief has filed a change of address with the post office or has used the mail to commit credit or bank fraud against you. Notify the local Postal Inspector if you suspect mail theft. Theft of mail is a felony. (Call the local Postmaster to obtain the telephone number). Find out where fraudulent credit cards were sent. Notify the local Postmaster for that address to forward all mail in your name to your own address. You may also need to talk with your mail carrier.
                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            If you have a passport, notify the &nbsp; <span className={styles.hlinetwo}></span><Link href="#" style={{ marginLeft: '25px' }} className={styles.lnk}>passport office</Link> to be on the lookout for anyone ordering a new passport fraudulently.
                                        </Typography>
                                    </li>

                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Call electrical, gas and water utilities. Alert them to the possibility that someone may attempt to open new service using your identification.
                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            You may want to change your driver license number if someone is using your license as identification to pass bad checks. Call the Department of Motor Vehicles (DMV) to see if another license has been issued in your name. Place a fraud alert in your DMV records. Go to your local DMV office to request a new driver license number. Also, fill out a DMV complaint form to begin the fraud investigation process. Send supporting documents with the completed form to the nearest DMV investigation office. Be persistent!
                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            You may want to consult an attorney to determine legal action to take against creditors and/or credit bureaus if they are not cooperative in removing fraudulent entries from your credit report or if negligence is a factor. Call the local Bar Association to find an attorney who specializes in consumer law and the &nbsp; <span className={styles.hlinetwo}></span><Link href="#" style={{ marginLeft: '25px' }} className={styles.lnk}>Fair Credit Reporting Act</Link>.
                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Pay attention to your own mental health. Victims of identity theft often report they are somehow to blame. They often feel violated, even powerless, due to the fact that few, if any, of the authorities they have notified of the crime step forward to help them. Psychological counseling may help you deal with the stress and anxiety commonly experienced by victims. Discuss your situation with a trusted friend, spiritual advisor or counselor.
                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Do not give in and do not pay any bill or portion of a bill, which is the result of identity theft. Do not cover any checks, which were written and/or cashed fraudulently. Your credit rating should not be permanently affected, and no legal action should be taken against you. If any merchant, financial institution or collection agency suggests otherwise, simply restate your willingness to cooperate, but do not allow yourself to be coerced into paying fraudulent bills. Write to your state and federal legislators. Demand stronger privacy protection and fraud assistance by creditors and credit reporting bureaus.
                                        </Typography>
                                    </li>
                                    <li style={{ marginBottom: '12px' }}>
                                        <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px' }}>
                                            Finally, speak with the detective investigating your case, he or she may be able to assist you in obtaining a fingerprint comparison if the suspect has ever been arrested or has used your name during an arrest. You may be able to obtain information regarding any warrants connected to the arrest, this may also help in reestablishing your credit or obtaining a new social security number.
                                        </Typography>
                                    </li>
                                </ol>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}><Link href="#" className={styles.lnk}>FEDERAL TRADE COMMISSION</Link></Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}>
                                    After notifying your local law enforcement agency, contact the Federal Trade Commission at 1-877-438-4338 or by visiting their website at <Link href="#" className={styles.lnk}>http://www.consumer.gov/</Link>
                                </Typography>

                                <Typography sx={{ fontWeight: '600', lineHeight: '1.55', marginTop: '30px' }}>CREDIT REPORTING BUREAUS</Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    Contact credit reporting bureaus for names and telephone numbers of credit grantors with whom fraudulent accounts have been opened. Ask the credit reporting bureaus to remove inquiries that have been generated due to the fraudulent access. You may also ask the credit reporting bureaus to notify those who have received your credit report in the last six months in order to alert them to the disputed and erroneous information (two years for employers).
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}>
                                    The nearest office of the <Link href="#" className={styles.lnk}>Consumer Credit Counseling Service of Los Angeles</Link> might be able to give you advice on removing fraudulent claims from your credit report. Call 213-514-3600.
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}>
                                    Immediately call the fraud unit of one of the three credit reporting bureaus, i.e., <Link href="#" className={styles.lnk}>Equifax</Link>, <Link href="#" className={styles.lnk}>Experian (formerly TRW)</Link> and <Link href="#" className={styles.lnk}>Trans Union</Link>.  These organizations currently share fraud information eliminating the need to contact all three. Report the theft of your credit cards or numbers. Ask that your accounts be flagged. Also, add a victim’s statement to your report, up to 100 words. (“My Identification has been used to apply for credit fraudulently. Contact me at (telephone number) to verify all applications.”) Be sure to ask how long the fraud alert is posted on your account, and how you can extend it, if necessary. Be aware that these measures may not entirely stop new fraudulent accounts from being opened by an imposter. Ask the credit bureaus in writing to provide you with free copies every few months so you can monitor your credit report.
                                </Typography>


                                <Typography sx={{ fontWeight: '600', lineHeight: '1.55', marginTop: '30px' }}>EQUIFAX</Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    To report fraud call: 800-525-6285 or 800-685-1111
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    To order a copy of credit report write:
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    P.O. Box 740241
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    Atlanta, GA 30374-0241
                                </Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}>
                                    To dispute information in credit report write:
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    P.O. Box 740256
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    Atlanta, GA 30374-0256
                                </Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}>
                                    To opt out of pre-approved offers of credit write:
                                </Typography>


                                <Typography sx={{ fontWeight: '600', lineHeight: '1.55', marginTop: '30px' }}>Equifax Options</Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    P.O. Box 740123
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    Atlanta, GA 30374-0123
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    Call: 888-5OPTOUT (888-567-8688)
                                </Typography>

                                <Typography sx={{ fontWeight: '600', lineHeight: '1.55', marginTop: '30px' }}>EXPERIAN (formerly TRW)</Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    To report fraud call: 888-397-3742 or
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    Fax: 800-301-7196
                                </Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}>
                                    To contact Experian Consumer Fraud Assistance write:
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    P. O. Box 1017
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    Allen, TX 75013
                                </Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}>
                                    To order a copy of credit report write:
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    P.O. Box 2104
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    Allen, TX 75013-2104
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    or call: 888-EXPERIAN (888-397-3742)
                                </Typography>


                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}>
                                    To dispute information in credit report contact:
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    Experian at the address and telephone number provided on your credit report.
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    To opt out of pre-approved offers of credit and marketing lists call: 800-353-0809
                                </Typography>

                                <Typography sx={{ fontWeight: '600', lineHeight: '1.55', marginTop: '30px' }}>TRANS UNION</Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    To report fraud, call: 800-680-7289
                                </Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}>
                                    To report fraud, write:
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}>
                                    Fraud Victim Assistance Division
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    P.O. Box 6790
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    Fullerton, CA 92634
                                </Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}>
                                    To order a copy of credit report write:
                                </Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}>
                                    P.O. Box 390
                                </Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    Springfield, PA 19064
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    Call: 800-916-8800
                                </Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}>
                                    To dispute information in credit report call: 800-888-4213 or call the telephone number provided on your credit report or use “investigation request form” provided by Trans Union when you order your report.
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}>
                                    To opt out of pre-approved offers of credit and marketing lists call: 888-5OPTOUT (888-567-8688)
                                </Typography>


                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}>
                                    Remember, if you have been denied credit you are entitled to a free credit report. If you are the victim of fraud, be sure to ask the credit reporting bureau for a free copy of your credit report. In 1997, a law became effective requiring credit reporting bureaus to provide credit reports free of charge to victims of identity theft.
                                </Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}><Link href="#" className={styles.lnk}>SOCIAL SECURITY ADMINISTRATION</Link></Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    If your Social Security number has been used fraudulently, report the problem to the Social Security Administration (SSA) at 800-269-0271. You may also order your Earnings and Benefits Statement by calling the SSA at 800-772-1213. For extreme cases of identity theft, they may be willing to change your Social Security number.
                                </Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}><Link href="#" className={styles.lnk}>DIRECT MARKETING ASSOCIATION</Link></Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    To remove your name from mailing lists (Direct Marketing Association) write to:
                                </Typography>


                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}>
                                    Mail Preference Service
                                </Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    P.O. Box 9008
                                </Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    Farmingdale, NY 11735
                                </Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}>
                                    To remove your name from telephone lists (Direct Marketing Association) write to:
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}><Link href="#" className={styles.lnk}>Telephone Preference Service</Link></Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    P.O. Box 9008
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    Farmingdale, NY 11735
                                </Typography>

                                <Typography sx={{ fontWeight: '600', lineHeight: '1.55', marginTop: '30px' }}>REPORTING THEFT OR FRAUDULENT USE OF CHECKS</Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    To report theft or fraudulent use of your checks call:
                                </Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}>
                                    International Check Services (ICS):
                                </Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    800-526-5380

                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    Equifax:
                                </Typography>


                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    800-437-5120
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}><Link href="#" className={styles.lnk}>TeleCheck:</Link></Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    800-710-9898
                                </Typography>


                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}><Link href="#" className={styles.lnk}>ChexSystems</Link> (Regarding closed checking accounts only):</Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    800-428-9623
                                </Typography>



                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}><Link href="#" className={styles.lnk}>Federal Information Center</Link> (For help in obtaining government agency telephone numbers):</Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    800-688-9889
                                </Typography>

                                <Typography sx={{ fontWeight: '600', lineHeight: '1.55', marginTop: '30px' }}>SUMMARY</Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    When identity theft occurs, you need to act quickly, know what to do, who to contact and fully understand your rights under the law. Identity theft exerts great emotional distress on its victims. Damage containment in each fraud case depends on how deeply the imposter has invaded your personal, professional and financial life. There are many preparatory actions one can take to prevent identity theft.
                                </Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    The information in this circular is meant to educate consumers. You can never be too careful, prepared, or aware. Share this information with family and friends. Schedule family discussions, ensure everyone is aware and prepared in the event an identity thief strikes.
                                </Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    Identity Theft Related Links
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}><Link href="#" className={styles.lnk}>Federal Trade Commission</Link></Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}><Link href="#" className={styles.lnk}>Department of Motor Vehicles</Link></Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}><Link href="#" className={styles.lnk}>Social Security</Link></Typography>


                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}>
                                    The identity theft information included in this circular was compiled from materials obtained from the following:
                                </Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginTop: '30px' }}>
                                    Los Angeles Police Department, Crime Prevention Resource Center
                                </Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    Los Angeles Police Department, Financial Crimes Division
                                </Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    Privacy Rights Clearinghouse
                                </Typography>
                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    Victims of Crime Resource Center, McGeorge School of Law
                                </Typography>

                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55' }}>
                                    Consumer Credit Counseling Service of Los Angeles
                                </Typography>


                                <Typography sx={{ fontSize: '18px', lineHeight: '1.55', marginLeft: '5px', marginTop: '30px' }}>
                                    See Also &nbsp; <span className={styles.hlinetwo}></span><Link href="/coping-with-identity-theft/" style={{ marginLeft: '25px' }} className={styles.lnk}>Coping With Identity Theft</Link>.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </>
    )
}

export default IdentityTheft