"use client";
import React from 'react'
import { useState } from 'react';
import Link from 'next/link'
import { Box, Button, Divider, Grid, IconButton, Typography } from '@mui/material'
import Image from 'next/image'
import logo from "../../public/logo.svg"
import headerLogo from "../../public/Images/LAPD-Badge-Logo.png"
import navStyle from "../styles/nav.module.css"
import downLogo from "../../public/Icons/down-arrow-svgrepo-com.svg"
import searchIcon from "../../public/Icons/search-svgrepo-com.svg"
import searchIcon2 from "../../public/Icons/search-alt-2-svgrepo-com.svg"
import infoIcon from "../../public/Icons/message.png"


const Header = () => {
  const [isMenuVisible1, setIsMenuVisible1] = useState(false);
  const [isMenuVisible2, setIsMenuVisible2] = useState(false);
  const [isMenuVisible3, setIsMenuVisible3] = useState(false);
  const [isMenuVisible4, setIsMenuVisible4] = useState(false);
  const [isMenuVisible5, setIsMenuVisible5] = useState(false);

  return (
    <div>
      <div className="non-sticky-header">
        <Box sx={{ display: "flex", flexDirection: "column" }}>

          <Box sx={{ width: "100%", backgroundColor: "#052942", height: "50px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

            <Box sx={{ display: "flex", gap: "6px", marginLeft: "15px" }}>
              <Image alt="logo" src={logo} height={30} width={30} />
              <Typography sx={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>LOS ANGELS</Typography>
            </Box>

            <Box sx={{ display: "flex", gap: "15px", marginRight: "15px" }}>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <Box sx={{ backgroundColor: "white", borderRadius: "5px", height: "20px", width: "30px", textAlign: "center" }}>
                  <Typography sx={{ fontSize: "12px" }}>311</Typography>
                </Box>
                <Typography sx={{ color: "white" }}>
                  City Services
                </Typography>
              </Box>


              <Box>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <Box sx={{ backgroundColor: "white", borderRadius: "5px", height: "20px", width: "30px", textAlign: "center", justifyContent: "center" }}>
                    <Typography sx={{ fontSize: "12px" }}>LA</Typography>
                  </Box>
                  <Typography sx={{ color: "white" }}>
                    City Directory
                  </Typography>
                </Box>
              </Box>


              <Box>
                <input placeholder='English'></input>
              </Box>
            </Box>



          </Box>



          <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#ebf4f7", width: "100%", justifyContent: "center", height: "50px" }}>
            <Typography>Have a Safe Holiday </Typography> <span style={{ height: "2px", width: "20px", opacity: ".9", backgroundColor: "black", marginLeft: "10px" }}></span>
            <Button disableRipple href='https://www.youtube.com/watch?v=SIUb_Y3fVFk'>
              <Typography sx={{ color: "red", textTransform: "none", '&:hover': { color: "grey" } }}>{`Chief's Message - December 2023`}</Typography>
            </Button>

          </Box>

        </Box>
      </div>

      <div className={navStyle.stickyHeader}>
        <Box sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
          <Box>
            <Image src={headerLogo} alt="header-logo" height={96} width={68} />
          </Box>

          <Box>
            <nav className={navStyle.nav}>
              <Link href="/"
                onMouseEnter={() => setIsMenuVisible1(true)}
                onMouseLeave={() => setIsMenuVisible1(false)}
                className={navStyle.navItems}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px", height: "96px" }}>
                  <Typography sx={{ textTransform: "uppercase", fontWeight: "bold" }}>Your lapd</Typography>
                  <Image src={downLogo} alt='arrow' height={10} width={10} />
                </Box>
              </Link>


              <Link href="#" 
               onMouseEnter={() => setIsMenuVisible2(true)}
               onMouseLeave={() => setIsMenuVisible2(false)}
              className={navStyle.navItems}><Box sx={{ display: "flex", alignItems: "center", gap: "10px", height: "96px" }}>
              <Typography sx={{ textTransform: "uppercase", fontWeight: "bold" }}>Get Service</Typography>
              <Image src={downLogo} alt='arrow' height={10} width={10} />
            </Box> </Link>

              <Link href="#" 
              onMouseEnter={() => setIsMenuVisible3(true)}
              onMouseLeave={() => setIsMenuVisible3(false)}
               className={navStyle.navItems}><Box sx={{ display: "flex", alignItems: "center", gap: "10px", height: "96px" }}>
               <Typography sx={{ textTransform: "uppercase", fontWeight: "bold" }}>Crime Info</Typography>
               <Image src={downLogo} alt='arrow' height={10} width={10} />
             </Box></Link>

              <Link href="#" 
             onMouseEnter={() => setIsMenuVisible4(true)}
             onMouseLeave={() => setIsMenuVisible4(false)}
               className={navStyle.navItems}><Box sx={{ display: "flex", alignItems: "center", gap: "10px", height: "96px" }}>
               <Typography sx={{ textTransform: "uppercase", fontWeight: "bold" }}>Get Involved</Typography>
               <Image src={downLogo} alt='arrow' height={10} width={10} />
             </Box></Link>

              <Link href="#" 
              onMouseEnter={() => setIsMenuVisible5(true)}
              onMouseLeave={() => setIsMenuVisible5(false)}
               className={navStyle.navItems}><Box sx={{ display: "flex", alignItems: "center", gap: "10px", height: "96px" }}>
               <Typography sx={{ textTransform: "uppercase", fontWeight: "bold" }}>News</Typography>
               <Image src={downLogo} alt='arrow' height={10} width={10} />
             </Box></Link>

              <Link href="#"><Button variant="contained" sx={{ backgroundColor: "#e73f15", padding: "14px 16px", color: "white", borderRadius: "0px", '&:hover': { backgroundColor: "#e73f15", color: "white" } }}>
                <Typography sx={{ fontWeight: "bold" }}>CONTACT </Typography>
              </Button></Link>
              <IconButton><Image src={searchIcon} alt="search-icon" height={20} width={20} /></IconButton>
            </nav>


          </Box>

        </Box>

      </div>



      <div className="navSubmenu">
        <Box className={`${navStyle.menu} ${isMenuVisible1 ? navStyle.visible : ''}`}
          sx={{ backgroundColor: "#ffffff", width: "100%", padding: "3% 0% 2% 0%" }}>


          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Image src={searchIcon2} alt='search' height={32} width={32} />
              <Button disableRipple href='#'>
                <Typography sx={{ color: "black", fontSize: "22px", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Find Your Local Police Station`}</Typography>
              </Button>


            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Image src={infoIcon} alt='search' height={32} width={32} />
              <Button disableRipple href='#'>
                <Typography sx={{ color: "black", fontSize: "22px", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Inside the LAPD`}</Typography>
              </Button>


            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Image src={searchIcon2} alt='search' height={35} width={35} />
              <Button disableRipple href='#'>
                <Typography sx={{ color: "black", fontSize: "22px", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Join the LAPD`}</Typography>
              </Button>


            </Box>

          </Box>
          <Divider orientation="vertical" flexItem sx={{ backgroundColor: "grey" }} />

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button disableRipple disableElevation disableFocusRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Community Safety Partnership Bureau`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Constitutional Policing`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`History of the LAPD`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`LAPD Organization Chart`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`LAPD Store`}</Typography>
            </Button>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Community Safety Partnership Bureau`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Constitutional Policing`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`History of the LAPD`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`LAPD Organization Chart`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`LAPD Store`}</Typography>
            </Button>
          </Box>


        </Box>

        <Box className={`${navStyle.menu} ${isMenuVisible2 ? navStyle.visible : ''}`}
          sx={{ backgroundColor: "#ffffff", width: "100%", padding: "3% 0% 2% 0%" }}>


          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Image src={searchIcon2} alt='search' height={35} width={35} />
              <Button disableRipple href='#'>
                <Typography sx={{ color: "black", fontSize: "22px", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`File a Police Report`}</Typography>
              </Button>


            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Image src={searchIcon2} alt='search' height={35} width={35} />
              <Button disableRipple href='#'>
                <Typography sx={{ color: "black", fontSize: "22px", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Obtain a Traffic Collision Report`}</Typography>
              </Button>


            </Box>
            

          </Box>
          <Divider orientation="vertical" flexItem sx={{ backgroundColor: "grey" }} />

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button disableRipple disableElevation disableFocusRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`California Public Records Act`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`CCW Carry Concealed Weapon License`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Commend an Officer`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`FAQ’s`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`File a Complaint`}</Typography>
            </Button>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Fireworks Complaints`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Request a Police Report (Victims Only)`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Sites of Interest`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Sites of Interest`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Undocumented Immigrants`}</Typography>
            </Button>
          </Box>












        </Box>

        <Box className={`${navStyle.menu} ${isMenuVisible3 ? navStyle.visible : ''}`}
          sx={{ backgroundColor: "#ffffff", width: "100%", padding: "3% 0% 2% 0%" }}>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Image src={searchIcon2} alt='search' height={35} width={35} />
              <Button disableRipple href='#'>
                <Typography sx={{ color: "black", fontSize: "22px", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Crime Mapping & COMPSTAT`}</Typography>
              </Button>


            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Image src={searchIcon2} alt='search' height={35} width={35} />
              <Button disableRipple href='#'>
                <Typography sx={{ color: "black", fontSize: "22px", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`2022 Criminal Homicide Victims`}</Typography>
              </Button>

            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Image src={searchIcon2} alt='search' height={35} width={35} />
              <Button disableRipple href='#'>
                <Typography sx={{ color: "black", fontSize: "22px", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Missing Persons`}</Typography>
              </Button>


            </Box>
            

          </Box>
          <Divider orientation="vertical" flexItem sx={{ backgroundColor: "grey" }} />

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button disableRipple disableElevation disableFocusRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`AB 953: The Racial and Identity `}</Typography >
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{` Profiling Act of 2015 (RIPA)`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Bureau of Justice Statistics (BJS)`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Crime Prevention`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Critical Incident Videos`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Domestic Violence`}</Typography>
            </Button>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Hate Crime Information`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Human Trafficking`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`ID Theft`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Statistical Data`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Traffic Info`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Unsolved Murders of LAPD Officers`}</Typography>
            </Button>
          </Box>

        </Box>

        <Box className={`${navStyle.menu} ${isMenuVisible4 ? navStyle.visible : ''}`}
          sx={{ backgroundColor: "#ffffff", width: "100%", padding: "3% 0% 2% 0%" }}>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Image src={searchIcon2} alt='search' height={35} width={35} />
              <Button disableRipple href='#'>
                <Typography sx={{ color: "black", fontSize: "22px", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`iWatch`}</Typography>
              </Button>
            </Box>
          </Box>
          <Divider orientation="vertical" flexItem sx={{ backgroundColor: "grey" }} />

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button disableRipple disableElevation disableFocusRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Crime Stoppers`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`iWatch`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Neighborhood Watch`}</Typography>
            </Button>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Reward Bulletin`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Volunteer`}</Typography>
            </Button>
          </Box>

        </Box>

        <Box className={`${navStyle.menu} ${isMenuVisible5 ? navStyle.visible : ''}`}
          sx={{ backgroundColor: "#ffffff", width: "100%", padding: "3% 0% 2% 0%" }}>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Image src={searchIcon2} alt='search' height={35} width={35} />
              <Button disableRipple href='#'>
                <Typography sx={{ color: "black", fontSize: "22px", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Newsroom`}</Typography>
              </Button>
 </Box>
      
          </Box>
          <Divider orientation="vertical" flexItem sx={{ backgroundColor: "grey" }} />

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button disableRipple disableElevation disableFocusRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`Critical Incident Videos`}</Typography>
            </Button>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`LAPD TV`}</Typography>
            </Button>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button disableRipple href='#'>
              <Typography sx={{ color: "black", textTransform: "none", '&:hover': { color: "#e73f15" } }}>{`LAPD Up Close`}</Typography>
            </Button>
          </Box>

        </Box>

      </div>


    </div>
  )
}

export default Header