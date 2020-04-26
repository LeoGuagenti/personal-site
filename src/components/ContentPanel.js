import React from 'react'
import { Paper } from '@material-ui/core'

export default function ContentPanel(props){
    return (
        <Paper elevation={2}>
            <div className="content-panel">
                {props.children}    
            </div>
        </Paper>
    );
}