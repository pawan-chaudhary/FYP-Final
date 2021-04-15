import React, {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';
import Navbar from './Navbar';
import './master.css';
import swal from 'sweetalert';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';
import { Typography, Divider, TextField, Grid, Button , TextareaAutosize} from '@material-ui/core';


const Notice = () =>{
  const user = JSON.parse(localStorage.getItem('user'))['name'];
  const [formData, setFormData] = useState({
    user: user,
    subject: '',
    description: '',
    
  });
    const {subject, description } = formData;
    const handleChange = text => e => {
      setFormData({ ...formData, [text]: e.target.value });
    };
      const handleSubmit = e => {
      if (subject && description){
      e.preventDefault();
      axios.post('http://localhost:5000/api/notice',formData)
      .then(res=>{
        swal("Notice is created", "", "success");
        setFormData({
          subject: '',
          description: '',
        })
      }).catch(err=>{
        console.log(err)
      })

    }else {
      swal("Please fill all fields", "", "error");
  //   toast.error('Please fill all fields');
  }
  }
  const [notice, setNotice] = useState([]);
  
  useEffect(() =>{
    axios.get('http://localhost:5000/api/notice')
    .then(data => {
      setNotice(data.data);
      
    })
    .catch(err=>{
      console.log(err)
    })
    
  },[]);
  const newData = notice;

  const columns = [
    { field: 'subject', headerName: 'Subject', width: 200 },
    { field: 'description', headerName: 'Description', width: 700 },
    { field: 'createdAt', headerName: 'Created Date', width: 250 },
    { field: 'user', headerName: 'Created By', width: 180 },
  ];
    const [show, setShowForm] = useState(false);
        return(
            <React.Fragment>
            <div>
                <Helmet>
                    <title>Notice | Shantinagar Futsal</title>
                </Helmet>
            </div>
            <Navbar/>
            <div className="content">
                <Typography variant="h4" align="center" component="h2">
                    Notice Management
                </Typography>
                <Divider/>
                <br/>
                <Button variant="contained" color="primary" onClick={()=> setShowForm(!show)}>{show ? 'X Close Form' : '+ Create Notice'}</Button>
                
                {show &&
             
                <div>
                <br/>
                <Grid  container spacing={2}>
                    <Grid item xs={12}>
                    <TextField id="outlined-input" style={{width:'50%'}} label="Subject" type="text" variant="outlined" value={subject} onChange={handleChange('subject')}/>
                    </Grid>
                    <Grid item xs={12}>
                    <TextareaAutosize aria-label="maximun height" style={{resize:'none', width:'50%', fontFamily:'Arial', fontSize:'16px'}} rowsMin={20} placeholder="Write message here" value={description} onChange={handleChange('description')}  />
                    </Grid>
                    <Grid item xs={4}>
                    <Button variant="contained"  style={{backgroundColor:'#546e7a', color: '#fff', width:'70%', padding:'15px', marginLeft:'165px'}} onClick={handleSubmit}>Submit</Button>
                    </Grid>
                    
                </Grid>
                <br/>
                </div>}
                <Divider/>
                <br/>
                <div style={{ height: 632, width: '100%' }}>
                    <DataGrid rows={newData} columns={columns} pageSize={10} />
                </div>
            </div>
            </React.Fragment>
        )

}
export default Notice;
