import React, { Component } from 'react'

import { Typography, Container, Paper } from '@material-ui/core'

import Header from '../Header/Header'
import ContentPanel from '../ContentPanel'

import 'typeface-roboto'

export default class AboutPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="about-page">
                <Header />
                <div className="background"/>
                <div className="background-overlay"/>
                <div className="about-page-main">
                    <ContentPanel>
                        <div className="header-padding"/>
                        <Typography variant="h2">
                            You
                        </Typography>
                    </ContentPanel>
                </div>              
            </div>
        );
    }
}