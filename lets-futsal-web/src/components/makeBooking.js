import React, {Component, useState} from 'react';
import {Helmet} from 'react-helmet';
// import Link from 'react-dom';
import Navbar from './Navbar';
import './master.css';
import {useParams} from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import { Typography, Divider, TextField, Grid, Button, Paper } from '@material-ui/core';


  
const makeBooking = () =>{
    const { id } = useParams;
        return(
            <React.Fragment>
            <div>
                <Helmet>
                    <title>Proceed | Booking</title>
                </Helmet>
            </div>
            <Navbar/>
            <div className="content" style={{height:'677px'}}>
                <Typography variant="h5" align="center" component="h2">
                    Proceed Booking
                </Typography>
                <Divider/>
                <br/>
                <br/>
                <Paper elevation={3}  style={{width:'600px', marginLeft:'280px'}}>
                    <div style={{padding: '10px'}}>
                        <Grid container spacing={1} style={{padding:'5px'}}>
                            <Grid item xs={12}>
                            <TextField id="outlined-input" style={{width:'100%'}} label="Name" type="text" variant="outlined"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="outlined-input" value={id} style={{width:'100%'}} label="Ground Type" type="text" variant="outlined"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="outlined-input" value="6-7AM" style={{width:'100%'}} label="Time" type="text" variant="outlined"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="outlined-input" value="Cash" style={{width:'100%'}} label="Payment Type" type="text" variant="outlined"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="outlined-input" value="Admin" style={{width:'100%'}} label="Booked By" type="text" variant="outlined"/>
                            </Grid>
                        </Grid>
                    <br/>
                    <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>Proceed</Button>
                    </div>
                </Paper>
            </div>
            </React.Fragment>
        )

}
export default makeBooking;