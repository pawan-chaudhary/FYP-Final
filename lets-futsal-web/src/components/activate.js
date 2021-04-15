import React, {useState, useEffect} from 'react';
import {TextField,Grid, Button} from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import { authenticate, isAuth } from '../helpers/auth';
import { Link, Redirect } from 'react-router-dom';
import swal from 'sweetalert';

import jwt from 'jsonwebtoken';
// import {Button} from '@material-ui/core';
import axios from 'axios';
import '../App.css';
import {Helmet} from 'react-helmet';
import Logo from '../assets/images/logo.png';
import Web from '../assets/images/web.png';
// import {TextField,Grid, Button} from '@material-ui/core';
// import swal from 'sweetalert';
// import swal from '@sweetalert/with-react'

const Activate = ({ match }) => {
    const [formData, setFormData] = useState({
        name: '',
        token: '',
        show: true
      });
    
      useEffect(() => {
        let token = match.params.token;
        let { name } = jwt.decode(token);
    
        if (token) {
          setFormData({ ...formData, name, token });
        }
    
        console.log(token, name);
      }, [match.params]);
      const { name, token, show } = formData;
    
      const handleSubmit = e => {
          console.log (token);
        e.preventDefault();
    
        axios
          .post(`${process.env.REACT_APP_API_URL}/activation`, {
            token
          })
          .then(res => {
            setFormData({
              ...formData,
              show: false
            });
    
            swal("Registered Successfully", "", "success");
          })
          .catch(err => {
            
            swal("Something Went Wrong", "", "error");
          });
      };
    return(
        <div className="main">
        <Helmet>
            <title>Activation | Let's Futsal</title>
        </Helmet>
        <div className="login-page">
        <header>
            <img src={Logo} alt="No Preview" width="70" height="70"/>
            <div className="heading">
                <h1>Let's Futsal<sup><img src={Web} width="25" alt="No Preview"/></sup></h1>
            </div>
        </header>
        <section className="login-form">
        <h2>Please activate your account by clicking on activation button</h2>
        <div className="form">
            <Grid container spacing={5}>
            <Grid item xs={12}><Button variant="contained"  style={{backgroundColor:'#1b5e20', color: '#fff', width:'100%', padding:'15px'}} onClick= {handleSubmit} >Activate your Account</Button></Grid>
            </Grid>
        </div>
        </section>
        <footer><p>Final Year Project</p> <p>by</p> <p>Pawan Chaudhary</p></footer>
        </div>
        </div>
    );
}
export default Activate;


// import React, {useState, useEffect} from 'react';
// import {Grid, Button} from '@material-ui/core';
// import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';
// import '../App.css';
// import {Helmet} from 'react-helmet';
// import jwt from 'jsonwebtoken';
// import { authenticate, isAuth } from '../helpers/auth';
// import { Link, Redirect } from 'react-router-dom';
// import Logo from '../assets/images/logo.png';
// import Web from '../assets/images/web.png';
// // import {TextField,Grid, Button} from '@material-ui/core';
// // import swal from 'sweetalert';
// // import swal from '@sweetalert/with-react'

// const Activate = ({ match }) => {
//     const [formData, setFormData] = useState({
//       name: '',
//       token: '',
//       show: true
//     });
  
//     useEffect(() => {
//       let token = match.params.token;
//       let { name } = jwt.decode(token);
  
//       if (token) {
//         setFormData({ ...formData, name, token });
//       }
  
//       console.log(token, name);
//     }, [match.params]);
//     const { name, token, show } = formData;
  
//     const handleSubmit = e => {
//       e.preventDefault();
  
//       axios
//         .post(`${process.env.REACT_APP_API_URL}/activation`, {
//           token
//         })
//         .then(res => {
//           setFormData({
//             ...formData,
//             show: false
//           });
  
//           toast.success(res.data.message);
//         })
//         .catch(err => {
          
//           toast.error(err.response.data.errors);
//         });
//     };
//     return(
//         <div className="main">
//         <Helmet>
//             <title>Activation | Let's Futsal</title>
//         </Helmet>
//         <div className="login-page">
//         <header>
//             <img src={Logo} alt="No Preview" width="70" height="70"/>
//             <div className="heading">
//                 <h1>Let's Futsal<sup><img src={Web} width="25" alt="No Preview"/></sup></h1>
//             </div>
//         </header>
//         <section className="login-form">
//         <ToastContainer />
//         <h2>Please activate your account by clicking on activation button</h2>
//         <div className="form">
//             <Grid container spacing={5}>
//             <Grid item xs={12}><Button variant="contained"  style={{backgroundColor:'#1b5e20', color: '#fff', width:'100%', padding:'15px'}} onClick={handleSubmit} >Activate your Account</Button></Grid>
//             </Grid>
//         </div>
//         </section>
//         <footer><p>Final Year Project</p> <p>by</p> <p>Pawan Chaudhary</p></footer>
//         </div>
//         </div>
//     );
// }

// export default Activate;