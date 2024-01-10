"use client";
import React from "react";
import Box from "@mui/material/Box";
import  useMediaQuery  from "@mui/material/useMediaQuery";
import  Grid  from "@mui/material/Grid";
import  Typography  from "@mui/material/Typography";
import  Container  from "@mui/material/Container";
import styles from "./copingwithIdentityTheft.module.css"


const CopingwithIdentityTheft = () => {

    const mobile = useMediaQuery('(max-width: 576px)');
    const tab = useMediaQuery('(max-width: 992px)');
    return (
        <div> 
            <Box className={styles.head} >
                <Container>
                    <Grid container>
                        <Grid item xs={12} sm={9} md={10} lg={12} >
                            <Typography
                                sx={{
                                    
                                    paddingLeft:mobile?'0px':tab?'45px':'0px',
                                    fontSize: mobile ? '35px' : tab ? '45px' : '60px',
                                    fontWeight: "700",
                                    lineHeight:mobile?'1':tab?'1':'1.3'
                                                                    
                                }}
                            >
                                Coping with Identity Theft
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Container >
                <Grid container>
                    <Grid item xs={12} sm={12} md={10}  lg={8.2}>
                        <Box className={styles.box} 
                         sx={{paddingTop:mobile?'6%':tab?'2%':'0',
                          paddingBottom:mobile?'13%':tab?'13%':'0',
                          paddingLeft:mobile?'0px':tab?'40px':'0px',
                         paddingRight:mobile?'0px':tab?'10px':'0px'     
                         }}>
                            <Typography sx={{fontSize:'18px'}}>
                                If you have recently been the victim of identity
                                theft, the following tips are offered to assist
                                you in resolving any problems associated with
                                this crime. The names, addresses, and phone
                                numbers of businesses and organizations that you
                                might find useful are also listed.
                            </Typography>
                            <br></br>
                            <Typography sx={{fontSize:'18px'}}>
                                If you fall prey to such crime, immediately
                                contact the fraud units of the three credit
                                reporting bureaus and all creditors with whom
                                your name has been used fraudulently.
                            </Typography>
                            <br></br>
                            
                            <Typography sx={{fontSize:'18px'}}>
                                If you have checks stolen or bank accounts set
                                up fraudulently, report it to the six check
                                verification companies, stop payment on
                                outstanding checks through your bank, cancel
                                your checking and savings accounts and obtain
                                new account numbers. Give the bank a secret
                                password for your account (not your mother’s
                                maiden name).
                            </Typography>
                            <br></br>
                            <Typography sx={{fontSize:'18px'}}>
                                Write a form letter that can be mailed or faxed
                                whenever you receive an inquiry about fraudulent
                                checks written from your bank account. The
                                letter should give a brief description of what
                                happened, check numbers and check manufacturer
                                (obtained from your bank), bank account number,
                                case number (assigned by the police or law
                                enforcement agency with jurisdiction), the name
                                of the detective handling your case, and the
                                name and phone number of the customer service
                                representative at your bank.
                            </Typography>
                            <br></br>
                            <Typography sx={{fontSize:'18px'}}>
                                
                                If your ATM card has been stolen or compromised,
                                get a new card, account number and password.
                            </Typography>
                            <br></br>
                            <Typography sx={{fontSize:'18px'}}>
                                If someone has submitted a fraudulent
                                change-of-address to the post office to
                                illegally receive credit cards in your name,
                                notify your Postal Inspector, find out where the
                                fraudulent cards were sent, and tell the
                                Postmaster for that address to forward all mail
                                in your name to your own address. You may also
                                need to talk to the mail carrier.
                            </Typography>
                            <br></br>
                            <Typography sx={{fontSize:'18px'}}>
                                If someone else obtains your Social Security
                                number, call the Social Security Administration
                                (SSA). As a last resort, the SSA may allow you
                                to change your number. If you have a passport,
                                notify the passport office in writing to be on
                                the lookout for anyone ordering a new passport
                                using your Social Security number.
                            </Typography>
                            <br></br>
                            <Typography sx={{fontSize:'18px'}}>
                                If your long distance calling card has been
                                stolen, or you find fraudulent charges on your
                                bill, cancel the account immediately and open a
                                new one. Provide a password that must be used
                                any time the account is changed.
                            </Typography>
                            <br></br> 
                            <Typography sx={{fontSize:'18px'}}>
                                If your driver’s license number is being misused
                                – to write bad checks, for example – contact the
                                Department of Motor Vehicles to see if another
                                license has been issued in your name. If so, put
                                a fraud alert on your license and request a new
                                number immediately.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                </Container>

           
        </div>
    );
};

export default CopingwithIdentityTheft;
