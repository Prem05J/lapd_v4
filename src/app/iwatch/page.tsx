import Box  from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import React from 'react'
import Image from 'next/image'
import Iwatch from "../../../public/Images/IWatch-Billboard-for-mug2.jpg"
import Link from 'next/link'
import googleplay from "../../../public/Images/googlePlay-iwatch.png"
import appstore from "../../../public/Images/App-Store-I-watch.png"
import { StylesProvider } from '@material-ui/core'
import styles from "./styles.module.css"

const IWatch = () => {
  return (
    <div>
        <Container>
            <Box>
                <Typography sx={{fontSize:"60px",fontWeight:"bold",marginTop:"20px"}}>iWatch</Typography>
            
                 <Box sx={{marginTop:"140px"}}>
                    <Link href="#">
                    <Image src={Iwatch} alt="iwatch-image" className={styles.iwatchImage} height={318} width={700}/>
                    </Link>
                 </Box>

                 <Box sx={{marginTop:"100px",display:"flex",flexDirection:"column",gap:"30px"}}>
                    <Typography className={styles.linktxt} sx={{fontSize:"18px"}}>To submit an iWATCH report online <Link href="#">click here</Link></Typography>
                    <Typography className={styles.linktxt} sx={{fontSize:"18px"}}>Para declarar un reporte iWATCH por internet haga <Link href="#">clic aquí</Link></Typography>
                 

                 <Box sx={{display:"flex",flexDirection:"row",gap:"20px"}}>
                    <Link href="#">
                    <Image src={googleplay} alt="iwatch-image" width={135} height={48}/>
                    </Link>

                    <Link href="#">
                    <Image src={appstore} alt="iwatch-image" width={135} height={48}/>
                    </Link>
                 </Box>

                 <Typography sx={{fontSize:"18px"}}>
                 iWATCH, iREPORT, i KEEP US SAFE (iWATCH) is a community awareness program created to 
                 educate the public about behaviors and activities that may have a connection to terrorism.
                 </Typography>

                 <Typography sx={{fontSize:"18px"}}>
                 This program is a community program to help your neighborhood stay safe from terrorist activities. It is a partnership 
                 between your community and the Los Angeles Police Department.  We can and must work together to prevent terrorist attacks.
                 </Typography>

                 <Typography sx={{fontSize:"18px"}}>
                 To learn about the iWATCH program and about the behaviors and activities that you should report, 
                 view the videos and review the list of examples.  You can also read and download a brochure that explains the program.
                 </Typography>

                 <Typography sx={{fontSize:"18px"}}>
                 Remember that the iWATCH program is about behaviors and activities, not individuals.
                 </Typography>

                 <Box>
                    <Typography sx={{fontSize:'18px',fontWeight:"bold"}}>SUSPICIOUS BEHAVIORS</Typography>
                    <Typography className={styles.linktxt} sx={{fontSize:"18px"}}><Link href="#">What Suspicious Behaviors and Activities Should You Report?</Link></Typography>
                 </Box>


                 </Box>
            </Box>
        </Container>
        </div>
  )
}

export default IWatch