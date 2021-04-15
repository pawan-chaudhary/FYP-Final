import React, {useState} from 'react';
import {TextField,Grid, Button} from '@material-ui/core';
import { Link, Redirect} from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import '../App.css';
import {Helmet} from 'react-helmet';
import Logo from '../assets/images/logo.png';
import Web from '../assets/images/web.png';
import { authenticate, isAuth } from '../helpers/auth';

const Login = ({ history }) => {
    const [formData, setFormData] = useState({
        email: '',
        password1: '',
        textChange: 'Login in'
      });
      const { email, password1, textChange } = formData;
      const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
      };
      const handleSubmit = e => {
        console.log(process.env.REACT_APP_API_URL);
        e.preventDefault();
        if (email && password1) {
          setFormData({ ...formData, textChange: 'Submitting' });
          axios
            .post(`${process.env.REACT_APP_API_URL}/login`, {
              email,
              password: password1
            })
            .then(res => {
              authenticate(res, () => {
                setFormData({
                  ...formData,
                  email: '',
                  password1: '',
                  textChange: 'Submitted'
                });
                isAuth() && isAuth().role === "Admin"
                  ? history.push('/home')
                  : swal("User does not exist", "", "error");
                swal("Welcome back!", `Mr. ${res.data.user.name}`, "info");
              });
            })
            .catch(err => {
              setFormData({
                ...formData,
                email: '',
                password1: '',
                textChange: 'Login in'
              });
              swal("Something went wrong", "", "error");
            //   console.log(err.response);
            //   toast.error(err.response.data.errors);
            });
        } else {
            swal("Please fill all fields", "", "error");
        //   toast.error('Please fill all fields');
        }
      };
    return(
        <div className="main">

        <Helmet>
            <title>Log in | Let's Futsal</title>
        </Helmet>
        <div className="login-page">
        <header>
            <img src={Logo} alt="No Preview" width="70" height="70"/>
            <div className="heading">
                <h1>Let's Futsal<sup><img src={Web} width="25" alt="No Preview"/></sup></h1>
            </div>
        </header>
        <section className="login-form">
        <h2>Log in to your account</h2>
        <div className="form">
            <Grid container spacing={5}>
            <Grid item xs={12}>
            <TextField variant="outlined" label="Email" name = "email" type="email" required fullWidth value={email} onChange={handleChange('email')}/>
            </Grid>
            <Grid item xs={12}>
            <TextField variant="outlined" label="Password" name = "password" type="password" required fullWidth value={password1} onChange={handleChange('password1')}/>
            <Link to='/forgotpassword' style={{textDecoration:'none', color:'#000'}}><p style={{textAlign:'right'}}>Forgot Password?</p></Link>
            </Grid>
            <Grid item xs={12}><Button variant="contained"  style={{backgroundColor:'#1b5e20', color: '#fff', width:'100%', padding:'15px'}} onClick={handleSubmit} >Login</Button></Grid>
            </Grid>
        </div>
        </section>
        <footer><p>Final Year Project</p> <p>by</p> <p>Pawan Chaudhary</p></footer>
        </div>
        </div>
    );
}
export default Login;