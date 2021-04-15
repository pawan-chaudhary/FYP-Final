import React, {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';
import Navbar from './Navbar';
import './master.css';
import swal from 'sweetalert';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';
import { Typography, Divider, TextField, Grid, Button, NativeSelect, FormControl, InputLabel } from '@material-ui/core';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';



const columns = [
    { field: 'tournamentName', headerName: 'Tournament', width: 130 },
    { field: 'startDate', headerName: 'Start Date', width: 130 },
    { field: 'endDate', headerName: 'End Date', width: 130 },
    { field: 'courtType', headerName: 'Court Type', width: 130 },
    { field: 'organizer', headerName: 'Organizer', width: 130 },
    { field: 'registrationCost', headerName: 'Registration Cost', width: 130 },
    { field: 'playerNo', headerName: 'No. of Players', width: 130 },
    { field: 'user', headerName: 'Created', width: 130 },
  ];
  

  
const Tournament = () =>{
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    // Create Tournament
    const user = JSON.parse(localStorage.getItem('user'))['name'];
    const [formData, setFormData] = useState({
      user: user,
      tournamentName: '',
      startDate: new Date(),
      endDate: new Date(),
      courtType: '',
      organizer: '',
      registrationCost: '',
      playerNo: 0,
    });
    const { tournamentName, startDate, endDate, courtType, organizer, registrationCost, playerNo} = formData;
    const handleChange = text => e => {
      setFormData({ ...formData, [text]: e.target.value });
    };
    const handleStartDateChange = (date) => {
          let from_date = JSON.stringify(new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes())));
          let startDate = from_date.slice(1,11);
          setFormData({ ...formData, startDate});
      
    };
    const handleEndDateChange = (date) => {
      let from_date = JSON.stringify(new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes())));
      let endDate = from_date.slice(1,11);
      setFormData({ ...formData, endDate});
  
    };
    const handleSubmit = e => {
      console.log(formData);
      console.log('lol');
      if (tournamentName && startDate && endDate && courtType && organizer && registrationCost && playerNo){
      e.preventDefault();
      axios.post('http://localhost:5000/api/tournament',formData)
      .then(res=>{
        swal("Tournament is created", "", "success");
        setFormData({
          tournamentName: '',
          startDate: '',
          endDate: '',
          courtType: '',
          organizer: '',
          registrationCost: '',
          playerNo: 0,
        })
      }).catch(err=>{
        console.log(err)
      })

    }else {
      swal("Please fill all fields", "", "error");
  }
  }
  const [tournamentList, setTournamentList] = useState([]);
  
  useEffect(() =>{
    axios.get('http://localhost:5000/api/tournament')
    .then(data => {
      setTournamentList(data.data);
      
    })
    .catch(err=>{
      console.log(err)
    })
    
  },[]);
  const newData = tournamentList;
    const [show, setShowForm] = useState(false);
        return(
            <React.Fragment>
            <div>
                <Helmet>
                    <title>Tournament | Shantinagar Futsal</title>
                </Helmet>
            </div>
            <Navbar/>
            <div className="content">
                <Typography variant="h4" align="center" component="h2">
                    Tournament Management
                </Typography>
                <Divider/>
                <br/>
                <Button variant="contained" color="primary" onClick={()=> setShowForm(!show)}>{show ? 'X Close' : '+ Add Tournament'}</Button>
                
                {show &&
             
                <div>
                <br/>
                <Grid  container spacing={2}>
                    <Grid item xs={3}>
                        <TextField id="outlined-input" style={{width:'100%'}} label="Tournament Name" type="text" variant="outlined" value={tournamentName} onChange={handleChange('tournamentName')} />
                    </Grid>
                    <Grid item xs={3}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        marginTop="20px"
                        id="date-picker-inline"
                        label="Start Date"
                        value={startDate}
                        onChange={handleStartDateChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={3}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                      <KeyboardDatePicker
                        
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        marginTop="20px"
                        id="date-picker-inline"
                        label="End Date"
                        value={endDate}
                        onChange={handleEndDateChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl style={{width:'100px'}}>
                            <InputLabel >Court Type</InputLabel>
                            <NativeSelect value={courtType} onChange={handleChange} >
                            <option value="5A">5A</option>
                            <option value="7A">7A</option>
                            </NativeSelect>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField id="outlined-input" style={{width:'100%'}} label="Organizer" type="text" variant="outlined" value={organizer} onChange={handleChange('organizer')}/>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField id="outlined-input" style={{width:'100%'}} label="Registration cost" type="text" variant="outlined" value={registrationCost} onChange={handleChange('registrationCost')}/>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField id="outlined-input" style={{width:'100%'}} label="Number of player" type="text" variant="outlined" value={playerNo} onChange={handleChange('playerNo')}/>
                    </Grid>
                    <Grid item xs={4}>
                    <Button variant="contained"  style={{backgroundColor:'#1b5e20', color: '#fff', width:'70%', padding:'15px'}} onClick={handleSubmit}>Submit</Button>
                    </Grid>
                    
                </Grid>
                <br/>
                </div>}
                <Divider/>
                <br/>
                <div style={{ height: 370, width: '100%' }}>
                    <DataGrid rows={newData} columns={columns} pageSize={5} />
                </div>
                <div>
                <Typography variant="h6" align="center" component="h2">
                    Tournament Registration Detail
                </Typography>
                <Divider/>
                <br/>
                <div style={{ height: 370, width: '100%' }}>
                    <DataGrid rows={newData} columns={columns} pageSize={5} />
                </div>
                </div>
            </div>
            </React.Fragment>
        )

}
export default Tournament;