import React, { Component } from 'react';
import './style.css'
// import 'animate.css'
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
      


        const ToggleBtn = ()=>{
            const toggleBtn = document.querySelector('.toggle__bar')
            const links = document.querySelector('.nav__links')

            toggleBtn.addEventListener('click',()=>{
                if(links.style.display==='none'){
                    links.style.display='block';
                }
                else{
                    links.style.display='none'
                }
            })
            
        }
        ToggleBtn()

        const LogoRedirect = ()=>{
            document.querySelector('.logoImg').addEventListener('click',()=>{
                window.location = '/'
            })
        }
        LogoRedirect()
    }
    render() { 
        return ( 
            <div className=' navbarMain'>
               <section className='navMain'>
                   <nav>
                       <div className='logoImg animate__animated animate__slower animate__flash'>
                         <h1>PayItForward</h1>
                       </div>
                       <div className='nav__links animate__animated animate__slower animate__bounceInDown'>
                           <ul className='links'>
                               <li><a href='/'>HOME</a></li>
                               <li><a href='/about-us'>ABOUT US</a></li>
                               <li><a href='/getstart'>GET STARTED</a></li>
                               <li><a href='/affiliate'>AFFILIATE</a></li>
                               <li><a href='/FQA'>FAQ</a></li>
                               <li><a href='/contact-us'>SUPPORT</a></li>
                                <a href='/login' className='btn btn-login-in'>Login</a> 
                                <a href='/register' className='btn btn-join-us'>Register</a> 
                           </ul>
                       </div>
                       <div className='aboyt__toggle '>
                            <div className='toggle__bar animate__animated animate__slower animate__zoomInDown'>
                                <div className='toggle'></div>
                                <div className='toggle'></div>
                                <div className='toggle'></div>
                            </div>
                     </div>
                     </nav>
                     
               </section>
            </div>
         );
    }
}
 
export default Navbar;