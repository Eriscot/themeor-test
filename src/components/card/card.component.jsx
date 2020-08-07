import React from 'react';
import { Font, Box, Align } from 'themeor';

export const Card = ({job}) => (
    <Box fill="accent" radius="sm" style={{border: '2px solid black', margin: '1rem', padding: '.5rem'}}>
        <Align hor="center">
            <img alt="card" src={job.company_logo} width="70" height="70"/>
            <Font size="xl" align="center">{job.company}</Font>
            <Font size="sm">{job.title}</Font>
            <Font size="xs">{job.type}</Font>
        </Align>
    </Box>
)