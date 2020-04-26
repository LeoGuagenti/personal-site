import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { AppBar, Toolbar, Button, IconButton, Tooltip } from '@material-ui/core'
import { Icon } from '@iconify/react';

import 'typeface-roboto'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import stackOverflow from '@iconify/icons-mdi/stack-overflow';

export default class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            sidebar: false
        }

        this.toggleSideBar = this.toggleSideBar.bind(this);
        this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    toggleSideBar(){
        this.setState({
            sidebar: !this.state.sidebar
        })
    }

    copyToClipboard(){
        const el = document.createElement('textarea');
        el.value = "lg424117@ohio.edu";
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      };

    render(){
        return (
            <div className="app-bar">
                <AppBar style={{backgroundColor: '#1e1e1e', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', position: 'absolute'}}>
                    <div className="app-bar-container">
                        <div className="app-bar-left">
                            <Toolbar style={{display: 'flex', flexDirection: 'row', width: '90%'}}>
                                <Link to="/">
                                    <Button style={{textTransform: 'none'}}>
                                        <p className="header-text">Home</p>
                                    </Button>
                                </Link>
                                <Link to="/about">
                                    <Button style={{textTransform: 'none'}}>
                                        <p className="header-text">About</p>
                                    </Button>
                                </Link>
                                <Link to="/portfolio">
                                    <Button style={{textTransform: 'none'}}>
                                        <p className="header-text">Portfolio</p>
                                    </Button>
                                </Link>
                                <Link to="/contact">
                                    <Button style={{textTransform: 'none'}}>
                                        <p className="header-text">Contact</p>
                                    </Button>
                                </Link>
                            </Toolbar>
                        </div>
                        <div className="app-bar-right">
                            <Toolbar style={{display: 'flex', flexDirection: 'row', width: '90%'}}>
                                <Tooltip title="Copy Email to Clipboard">
                                    <IconButton onClick={this.copyToClipboard}>
                                        <AlternateEmailIcon className="app-bar-icon" />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Github">
                                    <a href="https://www.github.com/LeoGuagenti">
                                        <IconButton>
                                            <GitHubIcon className="app-bar-icon" />
                                        </IconButton>
                                    </a>
                                </Tooltip>
                                <Tooltip title="Stack Overflow">
                                    <a href="https://stackoverflow.com/users/10243971/leo-guagenti">
                                        <IconButton>
                                            <Icon className="app-bar-icon" icon={stackOverflow} />
                                        </IconButton>
                                    </a>
                                </Tooltip>
                                <Tooltip title="LinkedIn">
                                    <a href="https://www.linkedin.com/in/leonardo-g-a98878115/">
                                        <IconButton>
                                            <LinkedInIcon className="app-bar-icon" />
                                        </IconButton>
                                    </a>
                                </Tooltip>
                            </Toolbar>
                        </div>
                    </div>
                </AppBar>
            </div>
        );
    }
}