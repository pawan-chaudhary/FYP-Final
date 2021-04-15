import {TextField,Grid, Button} from '@material-ui/core';
import React, { useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import '../App.css';
import {Helmet} from 'react-helmet';
import Logo from '../assets/images/logo.png';
import Web from '../assets/images/web.png';

const ForgotPassword = () => {
    const [formData, setFormData] = useState({
        email: '',
        textChange: 'Submit'
      });
      const { email, textChange } = formData;
      const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
      };
      const handleSubmit = e => {
        e.preventDefault();
        if (email) {
          setFormData({ ...formData, textChange: 'Submitting' });
          axios
            .put(`${process.env.REACT_APP_API_URL}/forgotpassword`, {
              email
            })
            .then(res => {
              
                setFormData({
                  ...formData,
                  email: '',
                });
                swal("Successfully Sent", "Please Check Your Email to Recover Password", "success");
              
            })
            .catch(err => {
                swal("Something went wrong", "", "error");
            });
        } else {

          swal("Please enter value in field", "", "warning");
        }
      };
        return(
            <div className="main">
            <Helmet>
                <title>Forgot Password | Let's Futsal</title>
            </Helmet>
            <div className="login-page">
            <header>
                <img src={Logo} alt="No Preview" width="70" height="70"/>
                <div className="heading">
                    <h1>Let's Futsal<sup><img src={Web} width="25" alt="No Preview"/></sup></h1>
                </div>
            </header>
            <section className="login-form">
            <h2>Confirm your email to recover password</h2>
            <div className="form">
                <Grid container spacing={5}>
                <Grid item xs={12}>
                <TextField variant="outlined" label="Enter your email" name = "email" type="email" fullWidth value={email} onChange={handleChange('email')}/>
                </Grid>
                <Grid item xs={12}><Button variant="contained"  style={{backgroundColor:'#1b5e20', color: '#fff', width:'100%', padding:'15px'}} onClick={handleSubmit} >Submit</Button></Grid>
                </Grid>
            </div>
            </section>
            <footer><p>Final Year Project</p> <p>by</p> <p>Pawan Chaudhary</p></footer>
            </div>
            </div>
        );
}
export default ForgotPassword;