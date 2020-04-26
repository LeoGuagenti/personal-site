import React from 'react'
import { Paper, Typography } from '@material-ui/core'

export default function ContentCard(props){
    return (
        <Paper className="content-card" elevation={2} style={{backgroundColor: '#1f1f1f', transition: '.2s'}}>
            <Typography variant="h5">
                {props.title}
            </Typography>
            {props.children}
        </Paper>
    );
}