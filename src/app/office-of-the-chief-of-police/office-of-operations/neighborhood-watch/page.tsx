'use client'
import React, { useState } from "react";
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Container, Divider } from '@mui/material'
import LaunchIcon from '@mui/icons-material/Launch';
import useMediaQuery from '@mui/material/useMediaQuery'
import Link from 'next/link'
import styles from "./styles.module.css"

const NeighborhoodWatch = () => {

    const [toggle,setToggle] = useState(false)
    const mobile = useMediaQuery('(max-width: 576px)');

  return (
    <div>
    <Box sx={{ display: 'flex', padding: '32px 0px', flexDirection: 'column', background: '#0f212b' }}>
                <Container><Grid container>
                        <Grid item xs={12} sm={12}  lg={8}>
                   <Typography className={global.fadeInUp} sx={{ color: '#fff', fontSize: mobile ? '20px' : '22px',fontStyle:"italic" }}>forges bonds among area residents and businesses, helps reduce burglaries and robberies, and improves relations between police and the communities they serve.</Typography>
                   </Grid>
                    </Grid>
                  <Typography className={global.fadeInUp} sx={{ color: '#fff',lineHeight:"1.2",padding:"0px 30px 10px 0px", fontSize: mobile ? '38px' : '62px', fontWeight: '700',marginTop:"10px" }}>Neighborhood Watch</Typography>
               
                 <Link className={global.fadeInUp} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} href='https://www.lapdonline.org/office-of-the-chief-of-police-ocop/'>
                    <LaunchIcon sx={{ fontSize: 'large', color: '#fff', marginRight: '5px' }} />
                    <Typography sx={{ padding: '0px 0px 0xp 20px',marginTop:"10px", color: "#7DDFFF", fontSize: "16px", textTransform: "none", '&:hover': { color: "#fff" } }}>Neighborhood Watch Sign Application</Typography>
                </Link>
                </Container>
     </Box>


      <Container>
    <Box sx={{marginTop:"60px"}}>
        <Grid container>
            <Grid item xs={12}  lg={8}>
            <Typography sx={{fontSize:"18px"}}>
        Neighborhood Watch, Block Watch, Town Watch, Crime Watch – whatever the name, it’s one of the most effective and 
        least costly ways to prevent crime and reduce fear in your neighborhood. Neighborhood Watch Programs fight the 
        isolation and separation that crime creates and feeds upon. It forges bonds among area residents and businesses,
         helps reduce burglaries and robberies, and improves relations between police and the communities they serve.
        </Typography>
        <Box className={styles.listbox}sx={{marginTop:"30px"}}>
          <ul>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",height:"8px",width:"8px",borderRadius:"50%"}}></Box>
                 <Typography className={styles.linktxt}>
                    <Link href="#">The LAPD’s Neighborhood Watch Program </Link>
                    </Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",height:"8px",width:"8px",borderRadius:"50%"}}></Box>
                 <Typography className={styles.linktxt}>
                    <Link href="#">Neighborhood Watch Sign Installation Application</Link>
                    </Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",height:"8px",width:"8px",borderRadius:"50%"}}></Box>
                 <Typography className={styles.linktxt}>
                    <Link href="#">Neighborhood Watch Sign Specifications</Link>
                    </Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",height:"8px",width:"8px",borderRadius:"50%"}}></Box>
                 <Typography className={styles.linktxt}>
                    <Link href="#">The LAPD’s Basic Car System</Link>
                    </Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",height:"8px",width:"8px",borderRadius:"50%"}}></Box>
                 <Typography className={styles.linktxt}>
                    <Link href="#">The National Crime Prevention Council</Link>
                    </Typography>
             </li>
           </ul>
           </Box>
          
          <Box sx={{display: toggle ? "none" : ""}}>
           <Link onClick={() => setToggle(true)} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center',gap:"10px" }} href='javascript:;'>
                <span style={{width:"18px",height:"2px",backgroundColor:"#000",marginBottom:"2px"}}></span>
                    <Typography sx={{ padding: '0px 0px 0xp 20px', color: "#e73f15", fontSize: "16px", textTransform: "none"}}>Read More</Typography>
                </Link>
          </Box>

          <Box className={toggle ? styles.readMoreView : styles.readMoreHide}>
            <Box sx={{marginTop:"30px"}}>
            <Divider />
            <Typography sx={{marginTop:"20px",fontWeight:"bold",fontSize:"18px"}}> Neighborhood Watch Program</Typography>
            <Typography sx={{fontSize:"18px",marginTop:"10px"}}>
            Neighborhood Watch is the cornerstone of the LAPD’s crime prevention strategy. 
            It enlists the active participation of residents, in cooperation with law enforcement, to reduce crime in 
            communities throughout the City.
            </Typography>
            <Typography sx={{marginTop:"30px",fontSize:"18px"}}>
            The Neighborhood Watch program was pioneered by the Los Angeles Police Department to educate community residents
             regarding their roles and responsibilities in the prevention of crime, and to encourage them to take active
              measures to prevent crime. The program calls upon residents to step forward and assist the police in organizing 
              the community into a cohesive unit working toward the goal of building a safer, crime-free neighborhood.
               Neighborhood Watch groups discuss neighborhood crime problems with the objective of developing solutions to
                local problems. Los Angeles Police Officers supply crime information to neighborhood watch organizations and
                 instruct these groups in various crime prevention techniques.
            </Typography>

            <Typography sx={{marginTop:"20px",fontWeight:"bold",fontSize:"18px"}}>Block Captains</Typography>
            <Typography sx={{marginTop:"30px",fontSize:"18px"}}>
            The continuity and success of the Neighborhood Watch program hinges on the person referred to as the Block Captain. The “Block Captain” is a community member who acts as a liaison between those who work and/or live in a particular area, and the officers assigned to that area. Through the Block Captain, and through neighborhood general meetings, officers pass along crime prevention tips and information to members of the community. This liaison is maintained on an informal basis within the framework of the Neighborhood Watch group.
            </Typography>

            <Typography sx={{marginTop:"20px",fontWeight:"bold",fontSize:"18px"}}>Senior Lead Officers</Typography>
            <Typography sx={{marginTop:"30px",fontSize:"18px"}}>
            Senior Lead Officers are a pivotal element in the LAPD’s effort to prevent and deter crime. Senior Lead Officers provide the vital link that helps unite the LAPD and the communities it serves by ensuring that community problems are brought to the attention of the Department or other appropriate government agencies. They are also instrumental in mobilizing neighborhoods through creative problem-solving strategies, crime prevention, and quality of life enhancement programs.  The continuity and success of the Neighborhood Watch program hinges on the person referred to as the Block Captain. The “Block Captain” is a community member who acts as a liaison between those who work and/or live in a particular area, and the officers assigned to that area. Through the Block Captain, and through neighborhood general meetings, officers pass along crime prevention tips and information to members of the community. This liaison is maintained on an informal basis within the framework of the Neighborhood Watch group.
            </Typography>

            <Typography sx={{marginTop:"20px",fontWeight:"bold",fontSize:"18px"}}>Senior Lead Officers are responsible for:</Typography>
            <Box className={styles.listbox}sx={{marginTop:"30px"}}>
          <ul>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
                 <Typography sx={{fontSize:"18px"}}>Monitoring crime trends in their Basic Car areas</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
                 <Typography sx={{fontSize:"18px"}}>Working with the Community-Police Advisory Boards (CPAB) and residents to develop goals to be accomplished through the efforts of all officers assigned to the Basic Car </Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
           <Typography sx={{fontSize:"18px"}}>Acting as liaisons with Area detectives in order to stay informed of crime trends and special problems within the Basic Car area </Typography>
             </li>
            
           </ul>

           <Typography sx={{fontSize:"18px",marginTop:"20px"}}>
           Senior Lead Officers develop directed patrol plans that include strategies for dealing with recurrent Basic Car concerns. Sincere and continuous interaction between the police and the community enhances the quality of life and deters crime within the Basic Car area. Senior Lead Officers take the lead in establishing and maintaining this police-community partnership.
           </Typography>

           <Divider sx={{marginTop:"30px"}} />
           <Typography sx={{marginTop:"20px",fontWeight:"bold",fontSize:"18px"}}>Basic Car System</Typography>
           <Typography className={styles.link} sx={{marginTop:"20px",fontSize:"18px"}}>
           The Los Angeles Police Department, working in conjunction with community organizations, businesses, neighborhood residents, and area elected officials, has apportioned the City into nineteen geographic Areas. This system allows the LAPD to deliver the highest quality police service to our constituents while at the same time tailoring law enforcement and public safety efforts to individual community needs. Each of the City’s 21 geographic Areas is served by a 
           <Link href="#">Community Police Station</Link>. These stations themselves are further apportioned into small neighborhood units, referred to as Basic Cars. There are roughly eight to ten Basic Car areas per Community Police Station and each Basic Car area has one patrol car permanently assigned to provide service in that neighborhood. Additional patrol units may be assigned during periods of increasing workload.

           </Typography>


           <Typography sx={{marginTop:"20px",fontWeight:"bold",fontSize:"18px"}}>How Does It Work?</Typography>
           <Typography sx={{fontSize:"18px",marginTop:"20px"}}>
           Three teams of officers are assigned to patrol your neighborhood on a 24-hour basis. Each team works one of the three 8-hour shifts. These officers patrol your neighborhood preventing crime and answering radio calls for service.
           </Typography>
           <Typography sx={{fontSize:"18px",marginTop:"20px"}}>
           Officers assigned to a Basic Car generally do not rotate to other police cars. They remain assigned to your neighborhood car to familiarize themselves with you, your neighbors, and the problems that may arise in your community. Although there are other police cars assigned to the same area, the Basic Car has priority in answering all calls within its boundaries. Three teams of officers are assigned to patrol your neighborhood on a 24-hour basis. Each team works one of the three 8-hour shifts. These officers patrol your neighborhood preventing crime and answering radio calls for service.
           </Typography>

           <Divider sx={{marginTop:"30px"}} />
           <Typography sx={{marginTop:"20px",fontWeight:"bold",fontSize:"18px"}}>The ABC’s of Neighborhood Watch</Typography>

           <Typography sx={{fontSize:"18px",marginTop:"20px"}}>
           You can form a Watch group around any geographical unit: a block, apartment, park, business area, public housing complex, office, or marina. A few concerned residents, a community organization, or a law enforcement agency can spearhead the effort to organize a Neighborhood Watch. Any community resident can join — young or old, single or married, renter or homeowner.
           </Typography>
           <Typography sx={{fontSize:"18px",marginTop:"20px"}}>
           Members learn how to make their homes more secure, watch out for each other and the neighborhood, and report activities that raise their suspicions to the police department. Watch groups are not vigilantes. They are extra eyes and ears for reporting crime and helping neighbors. Neighborhood Watch helps build pride and serves as a springboard for efforts that address community concerns such as recreation for youth, child care, and affordable housing.
           </Typography>
           <ul>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
                 <Typography sx={{fontSize:"18px"}}>Getting Organized</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
                 <Typography sx={{fontSize:"18px"}}>What Neighborhood Watch Members Look For</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
           <Typography sx={{fontSize:"18px"}}>How to Report</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
           <Typography sx={{fontSize:"18px"}}>Keeping Your Neighborhood Watch Group Active</Typography>
             </li>
            
           </ul>
           <Divider sx={{marginTop:"30px"}} />
           <Typography sx={{marginTop:"20px",fontWeight:"bold",fontSize:"18px"}}>Getting Organized</Typography>
           <Typography sx={{fontSize:"18px",marginTop:"30px"}}>When a group decides to form a Neighborhood Watch, it:</Typography>
           <ul>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
                 <Typography sx={{fontSize:"18px"}}>Contacts the police department or local crime prevention organization for help in training members in home security and reporting skills and for information on local crime patterns</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
                 <Typography sx={{fontSize:"18px"}}>elects a coordinator and block captains who are responsible for organizing meetings and relaying information to members</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
           <Typography sx={{fontSize:"18px"}}>Recruits members, keeps up-to-date on new residents and makes special efforts to involve the elderly, working parents, and young people</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
           <Typography sx={{fontSize:"18px"}}>Works with local government and law enforcement to put up Neighborhood Watch signs, usually after at least 50 percent of all households in a neighborhood are enrolled</Typography>
             </li>
            
           </ul>

           <Typography sx={{marginTop:"30px",fontWeight:"bold",fontSize:"18px"}}>What Neighborhood Watch Members Look For</Typography>

           <ul>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
                 <Typography sx={{fontSize:"18px"}}>Someone screaming or shouting for help</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
                 <Typography sx={{fontSize:"18px"}}>Someone looking into windows and parked cars</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
           <Typography sx={{fontSize:"18px"}}>Unusual noises</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
           <Typography sx={{fontSize:"18px"}}>Property being taken out of houses where no one is at home or a business is closed</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
           <Typography sx={{fontSize:"18px"}}>Cars, vans, or trucks moving slowly without apparent destination, or without lights</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
           <Typography sx={{fontSize:"18px"}}>Anyone being forced into a vehicle</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
           <Typography sx={{fontSize:"18px"}}>A stranger sitting in a car or stopping to talk to a child</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
           <Typography sx={{fontSize:"18px"}}>Abandoned cars.</Typography>
             </li>
            
           </ul>

           <Typography sx={{fontSize:"18px",marginTop:"20px"}}>
           Report these incidents to the police department. Talk about the problem with your neighbors.
           </Typography>

           <Typography sx={{marginTop:"30px",fontWeight:"bold",fontSize:"18px"}}>How To Report</Typography>
           <ul>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
                 <Typography sx={{fontSize:"18px"}}>Give your name and address.</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
                 <Typography sx={{fontSize:"18px"}}>Briefly describe the event – what happened, when, where, and who was involved.</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
           <Typography sx={{fontSize:"18px"}}>Describe the suspect: sex and race, age, height, weight, hair color, clothing, distinctive characteristics such as beard, mustache, scars, tattoos or accent.</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
           <Typography sx={{fontSize:"18px"}}>Describe the vehicle if one was involved: color, make, model, year, license plate, and special features such as stickers, dents, or decals.</Typography>
             </li>
             </ul>

           <Typography sx={{marginTop:"30px",fontWeight:"bold",fontSize:"18px"}}>Keeping your Neighborhood Watch Group Active</Typography>
<Typography sx={{fontSize:"18px",marginTop:"20px"}}>
It’s an unfortunate fact that when a neighborhood crime crisis goes away, so does enthusiasm for Neighborhood Watch. Work to keep your Watch group a vital force for community well-being.
</Typography>

            <ul>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
                 <Typography sx={{fontSize:"18px"}}>Organize regular meetings that focus on current issues such as drug abuse, “hate” or bias-motivated violence, crime in schools, child care before and after school, recreational activities for young people, and victim services.</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
                 <Typography sx={{fontSize:"18px"}}>Organize community patrols to walk around streets or apartment complexes and alert police to crime and suspicious activities and identify problems needing attention. People in cars with cellular phones or CB radios can patrol.</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
           <Typography sx={{fontSize:"18px"}}>Adopt a park or school playground. Pick up litter, repair broken equipment, paint over graffiti.</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
           <Typography sx={{fontSize:"18px"}}>Work with local building code officials to require dead bolt locks, smoke alarms, and other safety devices in new and existing homes and commercial buildings.</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
           <Typography sx={{fontSize:"18px"}}>Work with parent groups and schools to start a McGruff House or other block parent program (to help children in emergency situations). A McGruff House is a reliable source of help for children in emergency or frightening situations. For information, call 801-486-8691.</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
           <Typography sx={{fontSize:"18px"}}>Publish a newsletter that gives prevention tips and local crime news, recognizes residents of all ages who have “made a difference,” and highlights community events.</Typography>
             </li>
             <li>
             <Box sx={{backgroundColor:"#7ddfff",padding:"4px",borderRadius:"50%"}}></Box>
           <Typography sx={{fontSize:"18px"}}>Don’t forget social events that give neighbors a chance to know each other – a block party, potluck dinner, volleyball softball game, or picnic.</Typography>
             </li>
            
            
           </ul>

<Box sx={{marginTop:"40px"}}>
    <Typography sx={{fontWeight:"bold",fontSize:"18px"}}>Los Angeles Police Department</Typography>
    <Typography sx={{marginTop:"5px",fontSize:"18px"}}>Crime Prevention Section</Typography>
    <Typography sx={{marginTop:"5px",fontSize:"18px"}}>100 West First Street, Room 250</Typography>
    <Typography sx={{marginTop:"5px",fontSize:"18px"}}>Los Angeles, CA 90012</Typography>
    <Typography sx={{marginTop:"5px",fontSize:"18px"}}>213-486-6000</Typography>
    </Box>

    <Box sx={{marginTop:"40px"}}>
    <Typography sx={{fontWeight:"bold",fontSize:"18px"}}>Take A Bite Out Of Crime</Typography>
    <Typography sx={{marginTop:"5px",fontSize:"18px"}}>Crime Prevention Tips From</Typography>
    <Typography className={styles.lnk} sx={{marginTop:"5px",fontSize:"18px"}}><Link href="#">National Crime Prevention Council</Link></Typography>
    <Typography sx={{marginTop:"5px",fontSize:"18px"}}>1700 K Street, NW, Second Floor</Typography>
    <Typography sx={{marginTop:"5px",fontSize:"18px"}}>Washington, DC 20006-3817</Typography>
    </Box>
 </Box>
</Box>
            
            <Box sx={{display: toggle ? "" : "none",marginTop:"20px"}}>
           <Link onClick={() => setToggle(false)} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center',gap:"10px" }} href='javascript:;'>
                <span style={{width:"18px",height:"2px",backgroundColor:"#000",marginBottom:"2px"}}></span>
                    <Typography sx={{ padding: '0px 0px 0xp 20px', color: "#e73f15", fontSize: "16px", textTransform: "none"}}>Read Less</Typography>
                </Link>
          </Box>
          </Box>

           
            </Grid>
        </Grid>
     </Box>

    </Container>

    </div>
  )
}

export default NeighborhoodWatch