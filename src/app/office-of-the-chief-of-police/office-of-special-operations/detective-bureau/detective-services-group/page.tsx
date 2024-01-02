'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import global from "../../../../global.module.css"
import Grid from '@mui/material/Grid'
import useMediaQuery from '@mui/material/useMediaQuery'

const DetectiveServices = () => {

    const mobile = useMediaQuery('(max-width: 950px)');
   
  return (
    <div> 

          <Box sx={{ display: 'flex', padding: '32px 5%', flexDirection: 'column', background: '#0f212b' }}>
         <Typography className={global.fadeInUp} sx={{ color: '#fff', margin: '0px 0px 20px', fontSize: mobile ? '40px' : '62px', fontWeight: '700' }}>Detective Services Group</Typography>
       </Box>  

       <Box  sx={{padding:"40px 5% 40px 5%"}}>
        <Grid container>
            <Grid item xs={12} sm={12} md={9} lg={5}>
            <Box  className={global.fadeInUp} sx={{display:"flex",flexDirection:"column",gap:"30px"}}>
            <Typography sx={{fontSize:"18px"}}>The District Attorney Liaison Unit (DALU) acts as a liaison to the City and District Attorneys’ Offices, files selected criminal cases and presents criminal cases to Deputy District Attorneys received through facsimile.  They are also responsible for monitoring all court “on-call” cases and subpoenaed court appearances.  In addition, the unit is responsible for releasing felony changes of defendants in Department “30” and re-filing felony cases dismissed at preliminary hearings.  Officers monitor the Felony Arraignment Court and are available to assist detectives from this Department and other agencies in filing cases.</Typography>
        <Typography sx={{fontSize:"18px"}}>The City Attorney Liaison Unit (CALU) acts as a liaison with the City Attorney’s Office and the City Attorney’s staff, reviewing and processing misdemeanor arrest reports, misdemeanor cases not assigned to a detective, non-traffic Notice to Appear and 17(b)4 arrest reports.  The unit organizes and presents faxed criminal cases, Release From Custody (RFC) arrest report and presents cases for filing to the City Attorney’s Office.</Typography>
       <Typography sx={{fontSize:"18px"}}>The Traffic Court Liaison Unit (TCLU) receives and files all Department traffic citations, misdemeanor DUI/traffic-related misdemeanor cases, receives, processes and files all Department citation cancellations requests and vehicle forfeiture requests.  They return defective citations to the divisions and forward absentee citations to the Department of Transportation.  They also conduct officer check-in and tracking for misdemeanor cases and issue Court notices to divisional subpoena control officers.  They also conduct vehicle inspections of forfeited vehicles prior to sale by official police garages.</Typography>
       <Typography sx={{fontSize:"18px"}}>The Court On-Call (COC) is primarily responsible for monitoring court cases for officers placed on-call.  They act as the Department liaison between the City Attorney’s Office, District Attorney’s Office, their witness coordinators and Department Subpoena Control Officers (SCO) for officer attendance in court at the Criminal Courts Building, 210 W. Temple Street, L.A., 90012.  The COC conducts training of SCO’s in the use of the COC and Department manual updates on court/subpoena procedures and provides statistical data pertaining to officers’ court status.</Typography>
      <Typography sx={{fontSize:"18px"}}>The Officer Check-In/Out Center (OCC) checks in officers at the Criminal Courts Building, 210 W. Temple Street, L.A., 90012, for court appearance, maintains statistics and daily delivery of subpoenas to divisions.</Typography>
            </Box>
            </Grid>

        </Grid>
        </Box>
    
        </div>
  )
}

export default DetectiveServices