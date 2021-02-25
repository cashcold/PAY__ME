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
    }
    render() { 
        return ( 
            <div className=' navbarMain'>
               <section className='navMain'>
                   <nav>
                       <div className='logoImg animate__animated animate__slower animate__flash'>
                         <h1><i class="fas fa-ruble-sign fa-2x"></i>ayItForward</h1>
                       </div>
                       <div className='nav__links animate__animated animate__slower animate__bounceInDown'>
                           <ul className='links'>
                               <li><a href='/'>HOME</a></li>
                               <li><a href='/'>ABOUT US</a></li>
                               <li><a href='/'>GET STARTED</a></li>
                               <li><a href='/'>AFFILIATE</a></li>
                               <li><a href='/'>FAQ</a></li>
                               <li><a href='/'>SUPPORT</a></li>
                                <a href='' className='btn btn-login-in'>Login</a> 
                                <a href='' className='btn btn-join-us'>Join-us</a> 
                           </ul>
                       </div>
                       <div className='aboyt__toggle '>
                            <div className='toggle__bar animate__animated animate__slower animate__zoomInDown'>
                                <i class="fas fa-bars fa-3x"></i>
                            </div>
                     </div>
                     </nav>
                     
               </section>
            </div>
         );
    }
}
 
export default Navbar;