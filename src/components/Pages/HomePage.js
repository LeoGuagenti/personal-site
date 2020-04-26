import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Button } from '@material-ui/core'

import Header from '../Header/Header'
import 'typeface-roboto'

export default function HomePage(){
    return (
        <div className="home-page">
            <Header/>
            <div className="home-page-background"/>
            <div className="background-overlay"/>
            <div className="home-page-content-container">
                <div className="home-page-text">
                    <Typography variant="h2">
                        Hello I'm Leo Guagenti
                    </Typography>
                    <Typography variant="h2" style={{padding: '2vh', color: '#E31B6D'}}>
                        Developer.
                    </Typography>
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <Link to="/contact" style={{textDecoration: 'none'}}>
                        <Button variant="outlined" color="inherit" style={{padding: '2vh', color: '#adadad'}}>Contact</Button>
                    </Link>
                    <div className="spacer" style={{width: '.5vw'}}></div>
                    <Link to="/about" style={{textDecoration: 'none'}}>
                        <Button variant="outlined" color="inherit" style={{padding: '2vh', color: '#adadad'}}>View More  ⯈</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}    
