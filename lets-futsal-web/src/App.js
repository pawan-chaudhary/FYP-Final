import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
// import NotFound from './components/notFound';
import ResetPassword from './components/resetPassword';
import ForgotPassword from './components/forgotPassword';
import Notice from './components/notice';
import Payment from './components/payment';
import Feedbacks from './components/feedbacks';
import Bookings from './components/bookings';
import Tournament from './components/tournament';
import MakeBooking from './components/makeBooking';
import Activate from './components/activate';
// <Route component={NotFound}/>

export default function App() {
  return (
    <Router>
      <Switch>
      <Redirect exact from="/" to="login" />
      <Route path='/login' exact render={props => <Login {...props} />} />
      <Route path="/resetpassword/:token" exact component={ResetPassword}/>
      <Route path="/forgotpassword" exact component={ForgotPassword}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/bookings" exact component={Bookings}/>
      <Route path="/payment" exact component={Payment}/>
      <Route path="/tournament" exact component={Tournament}/>
      <Route path="/notice" exact component={Notice}/>
      <Route path="/feedbacks" exact component={Feedbacks}/>
      <Route path="/proceed/bookings/:id" exact component={MakeBooking}/>
      <Route path='/activate/:token' exact render={props => <Activate {...props} />} />
      </Switch>

    </Router>
  );
}
// <Route path="/" exact component={Login}/>
