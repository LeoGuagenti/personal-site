import React from 'react'

import { Typography, 
         Drawer, 
         ListItem, 
         ListItemIcon, 
         ListItemText 
        } from '@material-ui/core'

import AccountBoxIcon from '@material-ui/icons/AccountBox'
import GitHubIcon from '@material-ui/icons/GitHub'
import CodeIcon from '@material-ui/icons/Code'
import HomeIcon from '@material-ui/icons/Home'

export default function SideBar(props){
    return (
        <Drawer open={props.open} onClose={props.toggle}>
            <ListItem>
                <Typography varient="h1">
                    Personal Site
                </Typography>
            </ListItem>
            <ListItem button key={'Home'} >
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={'Home'} />
            </ListItem>
            <ListItem button key={'About'} >
                <ListItemIcon>
                    <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary={'About'} />
            </ListItem>
            <ListItem button key={'Github'} >
                <ListItemIcon>
                    <GitHubIcon />
                </ListItemIcon>
                <ListItemText primary={'GitHub'} />
            </ListItem>
            <ListItem button key={'Code'} >
                <ListItemIcon>
                    <CodeIcon />
                </ListItemIcon>
                <ListItemText primary={'Code'} />
            </ListItem>
        </Drawer>
    );
}
