import React, { Component } from 'react'

import { Typography, Button } from '@material-ui/core'

import Header from '../Header/Header'
import 'typeface-roboto'

export default class AboutPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="about-page">
                <Header />
            </div>
        );
    }
}