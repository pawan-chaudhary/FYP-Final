import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Helmet} from 'react-helmet';
import Navbar from './Navbar';
import './master.css';
import { DataGrid } from '@material-ui/data-grid';
import { Divider, Typography } from '@material-ui/core';
import Posts from './feedbacksData/feedbackList';
import Pagination from './feedbacksData/feedbackPagination';
// import FeedbackList from './feedbacksData/feedbackList';
// import FeedbackPagination from './feedbacksData/feedbackPagination';
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
 const Payment = () => {
        return(
            <React.Fragment>
            <div>
                <Helmet>
                    <title>Payment | Shantinagar Futsal</title>
                </Helmet>
            </div>
            <Navbar/>
            <div className="content">
                <Typography variant="h4" align="center" component="h2">
                    Payments Detail
                </Typography>
                <Divider/>
                <br/>
                <div style={{ height: 633, width: '100%' }}>
                    <DataGrid rows={rows} columns={columns} pageSize={10} />
                </div>
            </div>
            </React.Fragment>
        )
    
}

export default Payment;
// <h1 className='text-primary mb-3'>My Blog</h1>
// <FeedbackList posts={currentFeedbacks} loading={loading} />
// <FeedbackPagination
// feedbacksPerPage={feedbacksPerPage}
// totalFeedbacks={feedbacks.length}
// paginate={paginate}
// />