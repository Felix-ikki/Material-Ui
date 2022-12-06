import { Stack, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { PaperInformation } from '../../components/PaperInformation'
import { LocationInformation } from '../../components/LocationInformation'

const Description = (props) => {
    const { userState } = props
    const { bio } = userState

  return (
    <>
    <Stack sx={{justifyContent: 'center'}}>
        {bio !== null
        ?<Typography variant='body1'>{bio}</Typography>
        :<Typography variant='body1'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </Typography>
        }
    </Stack>
    <PaperInformation userState={userState}/>
    <LocationInformation userState={userState}/>
    </>    
)
}

export default Description