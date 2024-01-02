'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import global from "../../../global.module.css"
import Link from 'next/link'
import Image from 'next/image'
import LaunchIcon from '@mui/icons-material/Launch'
import useMediaQuery from '@mui/material/useMediaQuery'
import styles from "./detective.module.css"
import Grid from '@mui/material/Grid'
import detective1 from "../../../../../public/Images/detective_1.jpg"
import detective2 from "../../../../../public/Images/detective_2.jpg"
import detective3 from "../../../../../public/Images/detective_3.jpg"
import detective4 from "../../../../../public/Images/detective_4.jpg"
import detective5 from "../../../../../public/Images/detective_5.jpg"




const DetectiveBureau = () => {

    const mobile = useMediaQuery('(max-width: 576px)');

  return (
    <div>

      <Box sx={{ display: 'flex', padding: '32px 5%', flexDirection: 'column', background: '#0f212b' }}>
        <Grid container >
       <Grid item xs={12} sm={12} lg={5}>
       <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 20px', fontSize: mobile ? '40px' : '62px', fontWeight: '700' }}>Detective Bureau</Typography>
        <Box className={global.fadeInUp} sx={{ display: 'flex', alignItems: 'center' }}>
                            <span className={styles.hline}></span><Link href="javascript:;" className={styles.linktext}><Typography>Commanding Officer Deputy Chief Kris Pitcher</Typography></Link>
                        </Box>
       </Grid>
       
       </Grid>
    
        </Box>

        <Box sx={{padding:"40px 5% 40px 5%"}}>

         <Grid className={global.fadeInUp} container columnSpacing={5} rowSpacing={10} justifyContent="center">
         <Grid item xs={12} sm={12} md={6} lg={4.1}>
            <Box sx={{display:"flex",flexDirection:"column",backgroundColor:"#ebf4f7",height:"100%"}}>
            <Box sx={{textAlign:"center",backgroundColor:"#052942"}}>
                    <Image src={detective1} alt="detective-image" className={styles.detectiveImage}/>
                </Box>
                    <Box sx={{padding:"30px 30px 30px 40px",display:"flex",flexDirection:"column"}}>
                     <Typography>Jonathan L. Tippet</Typography>
                     <Typography>Captain III</Typography>
                     <Typography>Commanding Officer</Typography>
                     <Typography sx={{marginTop:"20px"}}>
                     Robbery-Homicide Division (RHD) is responsible for investigating select homicides, bank robberies,
                      serial robberies, extortions, sexual assaults, human trafficking, kidnapping, incidents that result
                       in injury or death to an officer, and threats against officers.

                     </Typography>
                     <Box sx={{ display: 'flex',flexDirection:"row", alignItems: 'center',marginTop:"20px",gap:"20px"}}>
                            <span className={styles.hline1}></span>
                            <Link href="javascript:;" className={styles.linktext1}><Typography>Robbery Homicide Division</Typography></Link>
                        </Box>
                      </Box>
                </Box>
               
         </Grid>

         <Grid item xs={12} sm={12} md={6} lg={4.1}>
            <Box sx={{display:"flex",flexDirection:"column",backgroundColor:"#ebf4f7",height:"100%"}}>
            <Box  sx={{textAlign:"center",backgroundColor:"#052942"}}>
                    <Image src={detective2} alt="detective-image" className={styles.detectiveImage}/>
                </Box>
                    <Box sx={{padding:"30px 30px 30px 40px",display:"flex",flexDirection:"column"}}>
                     <Typography>Jonathan L. Tippet</Typography>
                     <Typography>Captain III</Typography>
                     <Typography>Commanding Officer</Typography>
                     <Typography sx={{marginTop:"20px"}}>
                     Robbery-Homicide Division (RHD) is responsible for investigating select homicides, bank robberies,
                      serial robberies, extortions, sexual assaults, human trafficking, kidnapping, incidents that result
                       in injury or death to an officer, and threats against officers.

                     </Typography>
                     <Box sx={{ display: 'flex',flexDirection:"row", alignItems: 'center',marginTop:"20px",gap:"20px"}}>
                            <span className={styles.hline1}></span>
                            <Link href="javascript:;" className={styles.linktext1}><Typography>Robbery Homicide Division</Typography></Link>
                        </Box>
                      </Box>
                </Box>
               
         </Grid>

         <Grid item xs={12} sm={12} md={6} lg={4.1}>
            <Box sx={{display:"flex",flexDirection:"column",backgroundColor:"#ebf4f7",height:"100%"}}>
            <Box sx={{textAlign:"center",backgroundColor:"#052942"}}>
                    <Image src={detective3} alt="detective-image" className={styles.detectiveImage}/>
                </Box>
                    <Box sx={{backgroundColor:"#ebf4f7",padding:"30px 30px 30px 40px",display:"flex",flexDirection:"column"}}>
                     <Typography>James Hwang</Typography>
                     <Typography>Captain II</Typography>
                     <Typography>Commanding Officer</Typography>
                     <Typography sx={{marginTop:"20px"}}>
                     Juvenile Division (JUV) is responsible for juvenile narcotics enforcement, child abuse and child 
                     exploitation investigations, overseeing the Department&apos;s youth programs, and providing Department-wide
                      juvenile advice, consulting, and training.
                     </Typography>
                     <Box sx={{ display: 'flex',flexDirection:"row", alignItems: 'center',marginTop:"20px",gap:"20px"}}>
                            <span className={styles.hline1}></span>
                            <Link href="javascript:;" className={styles.linktext1}><Typography>Juvenile Division</Typography></Link>
                        </Box>
                      </Box>
                </Box>
               
         </Grid>

         <Grid item xs={12} sm={12} md={6} lg={4.1}>
            <Box sx={{display:"flex",flexDirection:"column",height:"100%",backgroundColor:"#ebf4f7"}}>
            <Box sx={{padding:"30px 30px 30px 40px",display:"flex",flexDirection:"column"}}>
                     <Typography >Ahmad Zarekani</Typography>
                     <Typography>Captain III</Typography>
                     <Typography>Commanding Officer</Typography>
                     <Typography sx={{marginTop:"20px"}}>
                     Gang and Narcotics Division (GND) is responsible for disrupting violent street gangs and the means by 
                     which they support their lifestyle, including the manufacture, transportation, sale and use of illicit
                      drugs, and sales of firearms in the greater Los Angeles area. GND’s enforcement efforts also focus on
                       street-level enforcement strategies to effect a reduction in Part I crimes, thereby resolving 
                       community problems and facilitating uniformed officers’ involvement in narcotics and gang
                        enforcement. GND coordinates in 15 task forces and/or memoranda of understanding/agreement
                         with the following agencies: U.S. Postal Service, Drug Enforcement Agency (DEA), Los Angeles
                          Intra-Agency Metropolitan Police Apprehension Crime Task Force (LA IMPACT), U.S. Immigration 
                          Customs and Enforcement (ICE), Federal Bureau of Investigation (FBI), U.S. Marshals Service,
                           Department of Justice (DOJ), and the Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF).
                     </Typography>
                     <Box sx={{ display: 'flex',flexDirection:"row", alignItems: 'center',marginTop:"30px",gap:"20px"}}>
                            <span className={styles.hline1}></span>
                            <Link href="javascript:;" className={styles.linktext1}><Typography>Gang and Narcotics Division</Typography></Link>
                        </Box>
                      </Box>
                </Box>
               
         </Grid>
         
         <Grid item xs={12} sm={12} md={6} lg={4.1}>
            <Box sx={{display:"flex",flexDirection:"column",backgroundColor:"#ebf4f7",height:"100%"}}>
            <Box  sx={{textAlign:"center",backgroundColor:"#052942"}}>
                    <Image src={detective4} alt="detective-image" className={styles.detectiveImage}/>
                </Box>
                    <Box sx={{backgroundColor:"#ebf4f7",padding:"30px 30px 30px 40px",display:"flex",flexDirection:"column"}}>
                     <Typography>Alfonso Lopez</Typography>
                     <Typography>Captain III</Typography>
                     <Typography>Commanding Officer</Typography>
                     <Typography sx={{marginTop:"20px"}}>
                     Commercial Crimes Division (CCD) can be categorized into two main areas of investigation. 
                     The Burglary/Auto Theft Sections provide logistical, technical and investigative support to 
                     Area detectives, and have primary investigative responsibility on certain select burglary, theft,
                      auto theft and robbery crimes on a Citywide basis. In addition, these sections are responsible for
                       enforcing state law and Police Commission rules and regulations governing pawnshops, junk dealers 
                       and any other business handling secondhand merchandise. The Financial Crimes sections are tasked
                        with the citywide investigative responsibility for all forgery and fraud related white-collar 
                        crimes.
                     </Typography>
                     <Box sx={{ display: 'flex',flexDirection:"row", alignItems: 'center',marginTop:"20px",gap:"20px"}}>
                            <span className={styles.hline1}></span>
                            <Link href="javascript:;" className={styles.linktext1}><Typography>Commercial Crimes Division</Typography></Link>
                        </Box>
                      </Box>
                </Box>
               
         </Grid>

         <Grid item xs={12} sm={12} md={6} lg={4.1}>
            <Box sx={{display:"flex",flexDirection:"column",backgroundColor:"#ebf4f7",height:"100%"}}>
            <Box  sx={{textAlign:"center",backgroundColor:"#052942"}}>
                    <Image src={detective5} alt="detective-image" className={styles.detectiveImage}/>
                </Box>
                    <Box sx={{backgroundColor:"#ebf4f7",padding:"30px 30px 30px 40px",display:"flex",flexDirection:"column"}}>
                     <Typography>Cliff Humphris</Typography>
                     <Typography>Captain II</Typography>
                     <Typography>Commanding Officer</Typography>
                     <Typography sx={{marginTop:"20px"}}>
                     Detective Support and Vice Division (DSVD) is responsible for investigating missing persons,
                      hate crimes, threats made to public officials/prominent persons, aggravated stalking, piracy and 
                      counterfeit sales/goods, animal cruelty, pimping/pandering, pornography, and prostitution/human
                       trafficking.</Typography>
                       <Typography sx={{marginTop:"20px"}}>
                     Detective Support and Vice Division (DSVD) is responsible for investigating missing persons,
                      hate crimes, threats made to public officials/prominent persons, aggravated stalking, piracy and 
                      counterfeit sales/goods, animal cruelty, pimping/pandering, pornography, and prostitution/human
                       trafficking.</Typography>
                       <Typography sx={{marginTop:"20px"}}>
                     Detective Support and Vice Division (DSVD) is responsible for investigating missing persons,
                      hate crimes, threats made to public officials/prominent persons, aggravated stalking, piracy and 
                      counterfeit sales/goods, animal cruelty, pimping/pandering, pornography, and prostitution/human
                       trafficking.</Typography>
                
                     <Box sx={{ display: 'flex',flexDirection:"row", alignItems: 'center',marginTop:"20px",gap:"20px"}}>
                            <span className={styles.hline1}></span>
                            <Link href="javascript:;" className={styles.linktext1}><Typography>Detective Support and Vice Division</Typography></Link>
                        </Box>
                      </Box>
                </Box>
               
         </Grid>
        </Grid>

        </Box>

        </div>
  )
}

export default DetectiveBureau