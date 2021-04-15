
import {TextField,Grid, Button} from '@material-ui/core';
import '../App.css';
import {Helmet} from 'react-helmet';
import Logo from '../assets/images/logo.png';
import Web from '../assets/images/web.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';


const ResetPassword = ({ match }) => {
    const [formData, setFormData] = useState({
        password1: '',
        password2: '',
        token: '',
      textChange: 'Submit'
    });
      const { password1, password2, textChange, token } = formData;
      
      useEffect(() => {
          let token = match.params.token
          if(token) {
              setFormData({...formData, token,})
          }
          
      }, [])
    const handleChange = text => e => {
      setFormData({ ...formData, [text]: e.target.value });
    };
      const handleSubmit = e => {
        console.log(password1, password2)
      e.preventDefault();
      if ((password1 === password2) && password1 && password2) {
        setFormData({ ...formData, textChange: 'Submitting' });
        axios
          .put(`${process.env.REACT_APP_API_URL}/resetpassword`, {
              newPassword: password1,
              resetPasswordLink: token
          })
          .then(res => {
            console.log(res.data.message)
              setFormData({
                ...formData,
                 password1: '',
                password2: ''
              });
              swal("Successfully password recovered", "", "success");
            
          })
          .catch(err => {
            swal("Try Again", "Something went wrong", "error");
          });
      } else {
        swal("Password donot matches", "", "error");
      }
    };
    return(
        <div className="main">
        <Helmet>
            <title>Reset Password | Let's Futsal</title>
        </Helmet>
        <div className="login-page">
        <header>
            <img src={Logo} alt="No Preview" width="70" height="70"/>
            <div className="heading">
                <h1>Let's Futsal<sup><img src={Web} width="25" alt="No Preview"/></sup></h1>
            </div>
        </header>
        <section className="login-form">
        <h2>Recover Your Password</h2>
        <div className="form">
            <Grid container spacing={5}>
            <Grid item xs={12}>
            <TextField variant="outlined" label="New Password" name = "password" type="password" fullWidth value={password1} onChange={handleChange('password1')}/>
            </Grid>
            <Grid item xs={12}>
            <TextField variant="outlined" label="Confirm Password" name = "cf_password" type="password" fullWidth value={password2} onChange={handleChange('password2')}/>
            </Grid>
            <Grid item xs={12}><Button variant="contained"  style={{backgroundColor:'#1b5e20', color: '#fff', width:'100%', padding:'15px'}} onClick={handleSubmit} >Reset Password</Button></Grid>
            </Grid>
        </div>
        </section>
        <footer><p>Final Year Project</p> <p>by</p> <p>Pawan Chaudhary</p></footer>
        </div>
        </div>
    );
    
}
export default ResetPassword;