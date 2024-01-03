'use client'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import bodyImg from '../../../public/Images/thumbnailImage.png';
import pdf from "../../../public/Icons/pdf-svg-icon.svg"
import global from "../global.module.css"

// ------------ 1873 - 1904 ------------- 
const pdf_1 = '/pdfs/history/first/timeline-page-2.pdf';
const pdf_2 = '/pdfs/history/first/timeline-page-3.pdf';
const pdf_3 = '/pdfs/history/first/timeline-page-4.pdf';
const pdf_4 = '/pdfs/history/first/timeline-page-5.pdf';
const pdf_6 = '/pdfs/history/first/timeline-page-7.pdf';
const pdf_5 = '/pdfs/history/first/timeline-page-6.pdf';
const pdf_7 = '/pdfs/history/first/timeline-page-8.pdf';
const pdf_8 = '/pdfs/history/first/timeline-page-9.pdf';

// ------------ 1913 - 1944 ------------- 
const pdf_9 = '/pdfs/history/second/timeline-page-10.pdf';
const pdf_10 = '/pdfs/history/second/timeline-page-11.pdf';
const pdf_11 = '/pdfs/history/second/timeline-page-12.pdf';
const pdf_12 = '/pdfs/history/second/timeline-page-13.pdf';
const pdf_13 = '/pdfs/history/second/timeline-page-14.pdf';
const pdf_14 = '/pdfs/history/second/timeline-page-15.pdf';
const pdf_15 = '/pdfs/history/second/timeline-page-17.pdf';

// ------------ 1953 - 1984 ------------- 
const pdf_16 = '/pdfs/history/thired/timeline-page-18.pdf';
const pdf_17 = '/pdfs/history/thired/timeline-page-19.pdf';
const pdf_18 = '/pdfs/history/thired/timeline-page-20.pdf';
const pdf_19 = '/pdfs/history/thired/timeline-page-21.pdf';
const pdf_20 = '/pdfs/history/thired/timeline-page-22.pdf';
const pdf_21 = '/pdfs/history/thired/timeline-page-23.pdf';
const pdf_22 = '/pdfs/history/thired/timeline-page-24.pdf';
const pdf_23 = '/pdfs/history/thired/timeline-page-25.pdf';

// ------------ 1993 - 2019 ------------- 
const pdf_24 = '/pdfs/history/fourth/timeline-page-26.pdf';
const pdf_25 = '/pdfs/history/fourth/timeline-page-27.pdf';
const pdf_26 = '/pdfs/history/fourth/timeline-page-28.pdf';
const pdf_27 = '/pdfs/history/fourth/timeline-page-29.pdf';
const pdf_28 = '/pdfs/history/fourth/timeline-page-30.pdf';
const pdf_29 = '/pdfs/history/fourth/timeline-page-31.pdf';
const pdf_30 = '/pdfs/history/fourth/timeline-page-32.pdf';
const pdf_31 = '/pdfs/history/fourth/timeline-page-33.pdf';
const pdf_32 = '/pdfs/history/fourth/timeline-page-34.pdf';



const HistoryOfLapd: React.FC = () => {

    const mobile = useMediaQuery('(max-width: 576px)');
    const tab = useMediaQuery('(max-width: 768px)');

    const firstBox: Record<string, string | number> = { '1873': pdf_1, '1874': pdf_2, '1883': pdf_3, '1884': pdf_4, '1893': pdf_5, '1894': pdf_6, '1903': pdf_7, '1904': pdf_8 }
    const secondBox: Record<string, string | number> = { '1913': pdf_9, '1914': pdf_10, '1923': pdf_11, '1924': pdf_12, '1933': pdf_13, '1934': pdf_14, '1944': pdf_15 }
    const thiredBox: Record<string, string | number> = { '1953': pdf_16, '1954': pdf_17, '1963': pdf_18, '1964': pdf_19, '1973': pdf_20, '1974': pdf_21, '1983': pdf_22, '1984': pdf_23 }
    const fourthBox: Record<string, string | number> = { '1993': pdf_24, '1994': pdf_25, '1999': pdf_26, '2000': pdf_27, '2007': pdf_28, '2008': pdf_29, '2013': pdf_30, '2014': pdf_31, '2019': pdf_32}



    return (
        <>
            <Box sx={{ display: 'flex', padding: '32px 5%', flexDirection: 'column', background: '#0f212b' }}>
                <Typography className={global.fadeInUp} sx={{ marginBottom: '8px', color: '#fff', fontSize: mobile ? '18px' : '22px', fontStyle: 'italic' }}>from the early beginnings to the present</Typography>
                <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 10px', fontSize: mobile ? '30px' : '62px', fontWeight: '700' }}>History of the LAPD</Typography>
            </Box>
            <Grid container sx={{ margin: '20px 0px' }} className={global.fadeInUp}>
                <Grid item xs={12} sm={12} md={12} lg={7} xl={5}>
                    <Box sx={{ padding: mobile ? '0' : '30px' }}>
                        <Image src={bodyImg} alt='Body-Image' style={{ width: '100%', height: tab ? '100vh' : mobile ? '50vh' : '' }} />
                    </Box>
                </Grid>
                
            </Grid>

            <Grid className={global.fadeInUp} container style={{ padding: mobile ? '20px' : tab ? '40px' : '30px 50px' }} columnSpacing={4} rowSpacing={2}>
                {/* ---------------- First Box -------------- */}
                <Grid item xs={12} sm={6} lg={4.1}>
                    <Box sx={{ padding: '35px', background: '#ebf4f7' }}>
                        <Typography sx={{ fontSize: '26px', fontWeight: '700', marginBottom: '20px' }}>LAPD History 1873-1904</Typography>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0', marginBottom: '0' }}>
                            {Object.entries(firstBox).map(([key, values]) => (

                                <li key={key} style={{ margin: '10px' }}>
                                    <Link href={`${values}`} target="_blank" style={{ display: 'flex', textDecoration: 'none' }}>
                                        <Image src={pdf} alt='pdf_image' />
                                        <Typography sx={{ marginLeft: '10px', color: '#e73f15', fontSize: '18px' }}>{key}</Typography>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Box>
                </Grid>

                {/* ---------------- Second Box -------------- */}
                <Grid item xs={12} sm={6} lg={4.1} >
                    <Box sx={{ padding: '35px', background: '#ebf4f7' }}>
                        <Typography sx={{ fontSize: '26px', fontWeight: '700', marginBottom: '20px' }}>LAPD History 1913-1944</Typography>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0', marginBottom: '0' }}>
                            {Object.entries(secondBox).map(([key, values]) => (

                                <li key={key} style={{ margin: '10px' }}>
                                    <Link href={`${values}`} target="_blank" style={{ display: 'flex', textDecoration: 'none' }}>
                                        <Image src={pdf} alt='pdf_image' />
                                        <Typography sx={{ marginLeft: '10px', color: '#e73f15', fontSize: '18px' }}>{key}</Typography>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Box>
                </Grid>

                {/* ---------------- Thired Box -------------- */}
                <Grid item xs={12} sm={6} lg={4.1} >
                    <Box sx={{ padding: '35px', background: '#ebf4f7' }}>
                        <Typography sx={{ fontSize: '26px', fontWeight: '700', marginBottom: '20px' }}>LAPD History 1953-1984</Typography>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0', marginBottom: '0' }}>
                            {Object.entries(thiredBox).map(([key, values]) => (

                                <li key={key} style={{ margin: '10px' }}>
                                    <Link href={`${values}`} target="_blank" style={{ display: 'flex', textDecoration: 'none' }}>
                                        <Image src={pdf} alt='pdf_image' />
                                        <Typography sx={{ marginLeft: '10px', color: '#e73f15', fontSize: '18px' }}>{key}</Typography>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Box>
                </Grid>

                {/* ---------------- Fourth Box -------------- */}
                <Grid item xs={12} sm={6} lg={4.1} sx={{marginTop: mobile ? '0' :'-35px'}}>
                    <Box sx={{ padding: '35px', background: '#ebf4f7' }}>
                        <Typography sx={{ fontSize: '26px', fontWeight: '700', marginBottom: '20px' }}>LAPD History 1993-2019</Typography>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0', marginBottom: '0' }}>
                            {Object.entries(fourthBox).map(([key, values]) => (

                                <li key={key} style={{ margin: '10px' }}>
                                    <Link href={`${values}`} target="_blank" style={{ display: 'flex', textDecoration: 'none' }}>
                                        <Image src={pdf} alt='pdf_image' />
                                        <Typography sx={{ marginLeft: '10px', color: '#e73f15', fontSize: '18px' }}>{key}</Typography>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Box>
                </Grid>


            </Grid>
        </>
    )
}

export default HistoryOfLapd