import React, { useState} from 'react';
import {Link} from "react-router-dom";
import {Helmet} from 'react-helmet';
import {AppBar, Typography, Toolbar, Grid, FormControl, InputLabel, NativeSelect, Paper, Divider, Button } from '@material-ui/core';
import Navbar from './Navbar';
import './master.css';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
  const Home = () => {
    const user = JSON.parse(localStorage.getItem('user'))['name'];
    // const test = <p>Pawan</p>
    // const fiveA = <p>Pawan</p>
    // const sevenA = <p>Hello</p>
    
        
    const [selectedDate, setSelectedDate] = useState(new Date());
    // const [userName, setUserName] = React.useState('');
    // const onChange = event => setValue(event.target.value);
    const [courtState, setCourtState] = useState("5A");
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    const handleSelect =(e) => {
        const selectedCourt = e.target.value;
        setCourtState(selectedCourt);
        
    }


    const fiveA =   <div>
                        <Paper elevation={3} style={{height:'505px'}}>
                            <Typography variant="h5" align="center">
                                    5A Court Available Bookings
                            </Typography>
                            <Divider/>
                            <br/>
                            <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Paper style={{marginLeft: '5px', backgroundColor:'#ef9a9a', padding:'5px'}}>
                                    <Typography variant="h6" align="center">Court A</Typography>
                                    <Grid container spacing={3}>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{ textDecoration:'none', backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}> <Link  style={{ textDecoration:'none', color:'white'}} to='/proceed/bookings/627am'>6AM-7AM</Link></Button>                      
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>7AM-8AM</Button>                                
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>8AM-9AM</Button>                                
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>9AM-10AM</Button>                                
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3}>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>10AM-11AM</Button>                                
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>11AM-12PM</Button>                                
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>12PM-1PM</Button>                                
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>1PM-2PM</Button>                                
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3}>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>2PM-3PM</Button>                                
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>3PM-4PM</Button>                                
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>4PM-5PM</Button>                                
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>5PM-6PM</Button>                                
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3}>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>6PM-7PM</Button>                                
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>7PM-8PM</Button>                                
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper style={{marginLeft: '5px', backgroundColor: '#ffc107', padding:'5px'}}>
                                    <Typography variant="h6" align="center">Court B</Typography>
                                    <Grid container spacing={3}>
                                        <Grid item xs={3}>
                                            <Button variant="contained" style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>6AM-7AM</Button>                                
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>7AM-8AM</Button>                                
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>8AM-9AM</Button>                                
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>9AM-10AM</Button>                                
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3}>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>10AM-11AM</Button>                                
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>11AM-12PM</Button>                                
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>12PM-1PM</Button>                                
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>1PM-2PM</Button>                                
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3}>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>2PM-3PM</Button>                                
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>3PM-4PM</Button>                                
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>4PM-5PM</Button>                                
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>5PM-6PM</Button>                                
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3}>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>6PM-7PM</Button>                                
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>7PM-8PM</Button>                                
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                                        
                                </Grid>
                        </Paper>
                    </div>

    const sevenA =  <div>
                        <Paper elevation={3} style={{height:'505px'}}>
                            <Typography variant="h5" align="center">
                                    7A Court Available Bookings
                            </Typography>
                            <Divider/>
                            <br/>
                            <Paper style={{marginLeft: '5px', padding:'5px'}}>
                                <Grid container spacing={3}>
                                    <Grid item xs={3}>
                                        <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>6AM-7AM</Button>                                
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>7AM-8AM</Button>                                
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>8AM-9AM</Button>                                
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>9AM-10AM</Button>                                
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3}>
                                    <Grid item xs={3}>
                                        <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>10AM-11AM</Button>                                
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>11AM-12PM</Button>                                
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>12PM-1PM</Button>                                
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>1PM-2PM</Button>                                
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3}>
                                    <Grid item xs={3}>
                                        <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>2PM-3PM</Button>                                
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>3PM-4PM</Button>                                
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>4PM-5PM</Button>                                
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>5PM-6PM</Button>                                
                                    </Grid>
                                </Grid>
                                <Grid container spacing={3}>
                                    <Grid item xs={3}>
                                        <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>6PM-7PM</Button>                                
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'100%', padding:'15px'}}>7PM-8PM</Button>                                
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Paper>
                    </div>
    let type = null;
    if (courtState === "5A"){
        type = fiveA;
    } else if (courtState === "7A"){
        type = sevenA;
    }

    return(
            <React.Fragment>
            <div>
                <Helmet>
                    <title>Home | Shantinagar Futsal</title>
                </Helmet>
            </div>
            <Navbar/>
            <div className="content">
            <AppBar position="static" style={{backgroundColor:'#1b5e20'}}>
                <div className="titleBar">
                    <Toolbar>
                        <Typography variant="h6">Shantinagar Futsal</Typography>
                        <AccountCircle style={{marginLeft: '720px'}} />
                        <Typography style={{marginLeft: '20px'}}>{user}</Typography>
                    </Toolbar>
                </div>
            </AppBar>
            <br/>
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                            'aria-label': 'change date',
                            }}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={3} style={{marginTop:'20px'}}>
                        <FormControl style={{width:'100px'}}>
                            <InputLabel >Court Type</InputLabel>
                            <NativeSelect defaultValue="5A" onChange={handleSelect}>
                            <option value="5A">5A</option>
                            <option value="7A">7A</option>
                            </NativeSelect>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
            <br/>
            {type}
            </div>
            </React.Fragment>
        )
 
}
export default Home;