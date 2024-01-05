'use client'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import useMediaQuery from '@mui/material/useMediaQuery'
import { Container, Grid, styled } from '@mui/material';
import styles from "../../global.module.css"

const MedalValor = () => {
    const mobile = useMediaQuery('(max-width: 576px)');

    const StyledLink = styled(Link) ({
        textDecoration: 'none',
        color: '#e73f15',
        '&:hover':{
            color:"#798c96"
        }
    })
    const yearText = [2023, 2021, '2020 - No Recipients', 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, '2005 - No Recipients', '2004 - No Recipients', 2003, 2002, 2001, 2000, 1999, 1998, '1997 - No Recipients', '1996 - No Recipients', '1995 - No Recipients', 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980, 1979, 1978, 1977, 1976, 1975, 1974, 1973, 1972, 1971, 1970, 1969, 1968, 1967, 1966, 1965, 1964, 1963, 1962, 1961, '1960 - No Recipients', 1959, 1958, 1957, '1956 - No Recipients', 1955, 1954, 1953, '1936 thru 1952 - No Recipients', 1935, '1929 thru 1934 - No Recipients', 1928, '1927 - No Recipients', 1926, 1925]
    return (
        <>

            <Box sx={{ display: 'flex', padding: '32px 5%', flexDirection: 'column', background: '#0f212b' }}>
                <Container>
                <Typography className={styles.fadeInUp} sx={{ marginBottom: '5px', color: '#fff', fontSize: mobile ? '18px' : '22px', fontStyle: 'italic' }}>valor, preservation of life, extreme courage</Typography>
                <Typography className={styles.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 20px', fontSize: mobile ? '30px' : '62px', fontWeight: '700' }}>Medal of Valor</Typography>
                <Link className={styles.fadeInUp} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} href='https://www.joinlapd.com/'>
                    <LaunchIcon sx={{ fontSize: 'large', color: '#fff', marginRight: '5px' }} />
                    <Typography sx={{ padding: '0px 0px 0xp 20px', color: "#7DDFFF", fontSize: "16px", textTransform: "none", '&:hover': { color: "#fff" } }}>Awards and Decorations</Typography>
                </Link>
                </Container>
            </Box>



           <Container>
            <Grid className={styles.fadeInUp} container sx={{marginTop:"70px"}}>
                <Grid item xs={12} sm={12} md={12} lg={7} xl={8}>
                    <Typography sx={{ marginBottom: '30px', textAlign: 'justify', fontSize: '18px' }}>
                        The Medal of Valor is the Los Angeles Police Department’s highest honor and is awarded to officers who distinguish themselves by conspicuous bravery or heroism above and beyond the normal demands of police service. To be awarded the Medal of Valor, an officer would have performed an act displaying extreme courage while consciously facing imminent peril.
                    </Typography>
                    <Typography sx={{ textAlign: 'justify', fontSize: '18px' }}>
                        The medal is awarded by the Board of Police Commissioners and is presented by the Chief of Police in the name of the Department at the annual Medal of Valor awards ceremony. The award consists of a medal, ribbon, and citation. The Medal of Valor was first presented in 1925, and the awards ceremony is made possible thanks to the generosity of the <StyledLink href='' >Los Angeles Police Foundation.</StyledLink>
                    </Typography>
                </Grid>
            </Grid>

            <Grid className={styles.fadeInUp} container sx={{marginTop:"70px"}}>
                <Grid item xs={12} sm={6}  sx={{ padding: '35px 30px', background: '#ebf4f7' }}>
                    <Typography sx={{ fontSize: '25px', fontWeight: '700', marginBottom: '30px' }}>Award Recipients</Typography>

                    <ul style={{listStyleType: 'none', paddingLeft: '0'}}>
                        {
                            yearText.map((value, index) => {
                                switch (typeof value){
                                    case 'number':
                                        return <li style={{margin: '15px 0px'}}><StyledLink href='#'><Typography sx={{fontWeight: 'bold'}}>{value}</Typography></StyledLink></li>
                                            
                                    case 'string' :
                                        return <li style={{margin: '15px 0px'}}><Typography sx={{fontSize: '18px', color: '#0f212b', fontWeight: 'bold'}}>{value}</Typography></li>
                                }
                            })
                        }
                    </ul>
                    

                </Grid>
            </Grid>
            </Container>
        </>
    )
}

export default MedalValor;