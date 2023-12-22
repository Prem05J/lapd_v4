import React from 'react'
import Link from 'next/link'
import { Box, Button, IconButton, Typography } from '@mui/material'
import Image from 'next/image'
import logo from "../../public/logo.svg"
import headerLogo from "../../public/Images/LAPD-Badge-Logo.png"
import navStyle from "../styles/nav.module.css"
import downLogo from "../../public/Icons/down-arrow-svgrepo-com.svg"
import searchIcon from "../../public/Icons/search-svgrepo-com.svg"


const Header = () => {
  return (
    <div>
     <div className="non-sticky-header">
      <Box sx={{display:"flex",flexDirection:"column"}}>

        <Box sx={{width:"100%",backgroundColor:"#052942",height:"50px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>

          <Box sx={{display:"flex",gap:"6px",marginLeft:"15px"}}>
          <Image alt="logo" src={logo} height={30} width={30}/>
          <Typography sx={{color:"white",fontSize:"18px",fontWeight:"bold"}}>LOS ANGELS</Typography>
          </Box>

          <Box sx={{display:"flex",gap:"15px",marginRight:"15px"}}>
            <Box sx={{display:"flex",gap:"5px"}}>
               <Box sx={{backgroundColor:"white",borderRadius:"5px",height:"20px",width:"30px",textAlign:"center"}}>
                  <Typography sx={{fontSize:"12px"}}>311</Typography>
               </Box>
               <Typography sx={{color:"white"}}>
                City Services
               </Typography>
            </Box>


            <Box>
              <Box sx={{display:"flex",gap:"5px"}}>
               <Box sx={{backgroundColor:"white",borderRadius:"5px",height:"20px",width:"30px",textAlign:"center",justifyContent:"center"}}>
                  <Typography sx={{fontSize:"12px"}}>LA</Typography>
               </Box>
               <Typography sx={{color:"white"}}>
                City Directory
               </Typography>
            </Box>
            </Box>


            <Box>
              <input placeholder='English'></input>
            </Box>
          </Box>

         
          
        </Box>



        <Box sx={{display:"flex",alignItems:"center",backgroundColor:"#ebf4f7",width:"100%",justifyContent:"center",height:"50px"}}>
          <Typography>Have a Safe Holiday </Typography> <span style={{height:"2px",width:"20px",opacity:".9",backgroundColor:"black",marginLeft:"10px"}}></span>
          <Button disableRipple href='https://www.youtube.com/watch?v=SIUb_Y3fVFk'>
          <Typography sx={{color:"red",textTransform:"none",'&:hover' : {color:"grey"}}}>{`Chief's Message - December 2023`}</Typography>
            </Button>

        </Box>
        
      </Box>
     </div>

     <div className={navStyle.stickyHeader}>
      <Box sx={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
             <Box>
              <Image src={headerLogo} alt="header-logo" height={96} width={68}/>
             </Box>

             <Box>
        <nav className={navStyle.nav}>
            <Link href="/" className={navStyle.navItems}>Your lapd <Image src={downLogo} alt='arrow' height={14} width={14}/></Link>
            <Link href="/services" className={navStyle.navItems}>Get services <Image src={downLogo} alt='arrow' height={14} width={14}/></Link>
            <Link href="/crime" className={navStyle.navItems}>crime info <Image src={downLogo} alt='arrow' height={14} width={14}/></Link>
            <Link href="/involved" className={navStyle.navItems}>grt involved <Image src={downLogo} alt='arrow' height={14} width={14}/></Link>
            <Link href="/news" className={navStyle.navItems}>news <Image src={downLogo} alt='arrow' height={14} width={14}/></Link>
            <Link href="/contact"><Button variant="contained" sx={{backgroundColor:"#e73f15",padding:"14px 16px",color:"white",borderRadius:"0px",'&:hover':{backgroundColor:"#e73f15",color:"white"}}}>
              <Typography sx={{fontWeight:"bold"}}>CONTACT </Typography>
               </Button></Link>
               <IconButton><Image src={searchIcon} alt="search-icon" height={20} width={20}/></IconButton>
        </nav>
        </Box>

        </Box>

        </div>
    </div>
  )
}

export default Header