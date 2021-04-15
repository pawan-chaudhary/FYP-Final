import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Helmet} from 'react-helmet';
import Navbar from './Navbar';
import './master.css';
import { DataGrid } from '@material-ui/data-grid';
import { Divider, Typography } from '@material-ui/core';

const columns = [
  { field: 'subject', headerName: 'Subject', width: 200 },
  { field: 'description', headerName: 'Description', width: 550 },
  { field: 'createdAt', headerName: 'Created Date', width: 250 },
  { field: 'user', headerName: 'Created By', width: 180 },
];
  
 const Feedbacks = () => {
  const [feedback, setFeedback] = useState([]);
  useEffect(() =>{
    axios.get('http://localhost:5000/api/feedback')
    .then(data => {
      setFeedback(data.data);
      
    })
    .catch(err=>{
      console.log(err)
    })
    
  },[]);
  const newData = feedback;
        return(
            <React.Fragment>
            <div>
                <Helmet>
                    <title>Feedbacks | Shantinagar Futsal</title>
                </Helmet>
            </div>
            <Navbar/>
            <div className="content">
                <Typography variant="h4" align="center" component="h2">
                    User's Feedbacks on Futsal and Services
                </Typography>
                <Divider/>
                <br/>
                <div style={{ height: 633, width: '100%' }}>
                    <DataGrid rows={newData} columns={columns} pageSize={10} />
                </div>
            </div>
            </React.Fragment>
        )
    
}

export default Feedbacks;