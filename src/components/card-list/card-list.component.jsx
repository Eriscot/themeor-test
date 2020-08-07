import React from 'react';
import { Card } from '../card/card.component';
import { Align } from 'themeor';


export const CardList = ({jobs}) => (
    <Align pattern='1fr 1fr 1fr 1fr'>
        {
            jobs.map(job => <Card key={job.id} job={job} />)
        }
    </Align>
)