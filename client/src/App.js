import React, { Component } from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/navbar';
import './App.css'
import HomeMain from './Components/Home/home';
import FooterMain from './Components/Footer/footer';
import AboutUsMain from './Components/About-us/about-us';
import GetStartMain from './Components/GetStart/getstart';
import AffiliateMain from './Components/Affiliate/affiliate';
import ContactMain from './Components/Contact-us/contact-us';
import RegisterUser from './Components/Register/register';
import LoginMain from './Components/Login/login';
import FQA from './Components/FQA/fqa';
import DashboardMain from './Components/Dashboard/dashboard';

class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <Router>
                <div className='mainApp animate__animated animate__zoomIn animate__slowerss'>
                    <div className='container_!'>
                        <Navbar/>
                        <div className='router'>
                           <Switch>
                              <Route path='/' exact component={HomeMain}/> 
                              <Route path='/about-us' exact component={AboutUsMain}/> 
                              <Route path='/getstart' exact component={GetStartMain}/> 
                              <Route path='/affiliate' exact component={AffiliateMain}/> 
                              <Route path='/contact-us' exact component={ContactMain}/> 
                              <Route path='/register' exact component={RegisterUser}/> 
                              <Route path='/login' exact component={LoginMain}/> 
                              <Route path='/FQA' exact component={FQA}/> 
                              <Route path='/dashboard' exact component={DashboardMain}/> 
                              
                           </Switch>
                        </div>
                        <FooterMain/>
                    </div>
                </div>
            </Router>
         );
    }
}
 
export default MainApp;