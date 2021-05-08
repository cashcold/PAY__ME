import React, { Component } from 'react';
import './style.css'
import jwt_decode from 'jwt-decode'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import {addDays,addMinutes} from "date-fns"
import 'react-toastify/dist/ReactToastify.css';
import {TimelineLite} from 'gsap'
import {gsap} from 'gsap'
import{ScrollTrigger} from 'gsap/ScrollTrigger'
import axios from 'axios' 

class DashboardMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            full_Name: '',
            user_Name: '',
            ip_address: '',
            bitcoin: '',
            bitcoinCash: '',
            id: '',
            user_id: '',
            email: '',
            ethereum: '',
            date: '',
            accountBalance: '',
            activetDeposit: '',
            totalDeposit: [],
            withdrawTotal: [],
            totalDeposit_id: '',
            login: '',
            plan: '',
            timestamp: ''
        }
        this.LogoutNow = this.LogoutNow.bind(this)
        
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = input => (event)=>{
        this.setState({[input]: event.target.value})
    }
    componentDidMount(){
       
       setTimeout(()=>{
            toast.success(
            <div classNmae='welcomeDash'>
                <h2 >Welcome <span className='welName'>{this.state.user_Name}</span></h2>
            </div>)
       },9000)

        const RefreshToken = sessionStorage.getItem('RefreshToken')
        if(RefreshToken){
            sessionStorage.removeItem('x-access-token')
            sessionStorage.setItem('x-access-token',RefreshToken)
        }

        
        const token = sessionStorage.getItem('x-access-token')
        const decoded = jwt_decode(token)
         JSON.stringify( sessionStorage.setItem('user_id',decoded.user_id))
        //  JSON.stringify( sessionStorage.setItem('deposit_id',decoded.deposit_id))
         JSON.stringify( sessionStorage.setItem('email',decoded.email))
         JSON.stringify( sessionStorage.setItem('user_Name',decoded.user_Name))
         JSON.stringify( sessionStorage.setItem('activetDeposit',decoded.activetDeposit))
         JSON.stringify( sessionStorage.setItem('bitcoin',decoded.bitcoin))
         JSON.stringify( sessionStorage.setItem('bitcoinCash',decoded.bitcoinCash))
         JSON.stringify( sessionStorage.setItem('ethereum',decoded.ethereum))
        this.setState({
            id: decoded.user_id,
            full_Name: decoded.full_Name,
            user_Name: decoded.user_Name,
            ip_address: decoded.ip_address,
            email: decoded.email,
            accountBalance: decoded.accountBalance,
            activetDeposit: decoded.activetDeposit,
            date: decoded.date
         }) 
         
         const id = decoded.user_id

         axios.post('/users/withdrawInfo',{id}).then(data => this.setState({
            withdrawTotal: data.data
         }))

         axios.post('/users/depositInfo',{id}).then(data => this.setState({
            totalDeposit: data.data
         }))
         axios.post('/users/checkdate',{id}).then(data => this.setState({
            timestamp: data.data.map(user => user.lastDate)
         }))
        //  axios.post('/users/checkdate',{id}).then(data => this.setState({
        //     timestamp: JSON.stringify(data.data.map(user => user.lastDate))
        //  }))

       
        
            setTimeout(()=>{
            const activetDeposit__amount = JSON.parse(sessionStorage.getItem('activetDeposit'))
            const date = new Date(`${this.state.timestamp}`);
            const today_date = new Date();
            const date_24hrs = addDays(date,1)
            const date_3days = addDays(date,3)
            const date_5days = addDays(date,5)

                if(activetDeposit__amount){
                    if(activetDeposit__amount < 99){
                      if(today_date > date_24hrs){
                            document.querySelector('.activetStatus').innerHTML = "0.00$"
                            document.querySelector('.balanceMe').innerHTML = "$ "+activetDeposit__amount+".00"
                        
                        }else{
                        
                        }
                    }
                }
                if(activetDeposit__amount){
                    if(activetDeposit__amount > 99){
                      if(today_date > date_3days){
                            document.querySelector('.activetStatus').innerHTML = "0.00$"
                            document.querySelector('.balanceMe').innerHTML = "$ "+activetDeposit__amount+".00"
                        
                        }else{
                        
                        }
                    }
                }
                if(activetDeposit__amount){
                    if(activetDeposit__amount > 299){
                      if(today_date > date_5days){
                            document.querySelector('.activetStatus').innerHTML = "0.00$"
                            document.querySelector('.balanceMe').innerHTML = "$ "+activetDeposit__amount+".00"
                        
                        }else{
                        
                        }
                    }
                }
          
   
            },5000)

            const RegisterDashboardTrigger = ()=>{
                gsap.registerPlugin(ScrollTrigger)

                const dash__links = document.querySelector('.dash__links')
                const dashLinks__me = document.querySelectorAll('.dashLinks__me')

                const dash_linkTl =  new TimelineLite({
                    scrollTrigger: {
                        trigger:  dash__links,
                        start: "10px 80%",
                        scrub: false,
                        toggleActions: "restart none none none",
                    }
                })       
                dash_linkTl.from(dashLinks__me,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'800', stagger: 0.3})

                const dash__profile = document.querySelector('.dash__profile')
                const profileDash = document.querySelector('.profileDash')
                const profileDash__file = document.querySelector('.profileDash__file')
                const dash__profileTl  =  new TimelineLite({
                    scrollTrigger: {
                        trigger: dash__profile,
                        start: "10px 60%",
                        scrub: false,
                        toggleActions: "restart none none none",
                    }
                })    
                dash__profileTl.from(profileDash,{opacity: 0, duration: 1.8, ease: "slow(0.7, 0.7, false)", x:'8000', }) 
                dash__profileTl.from( profileDash__file,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'-800', }) 


                const about__dash = document.querySelector('.about__dash')
                const about__dash__info__1 = document.querySelector('.about__dash__info__1')
                const about__dash__info__2 = document.querySelector('.about__dash__info__2')
                const about__dash__info__3 = document.querySelector('.about__dash__info__3')
                const link__reffer = document.querySelector('.link__reffer')
                const about__dashTl  =  new TimelineLite({
                    scrollTrigger: {
                        trigger: about__dash,
                        start: "10px 50%",
                        scrub: false,
                        toggleActions: "restart none none none",
                    }
                })
                about__dashTl.from(about__dash__info__1,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'800', }) 
                about__dashTl.from(about__dash__info__2,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'-800', }) 
                about__dashTl.from(about__dash__info__3,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'800', }) 
                about__dashTl.from(link__reffer,{opacity: 0, duration: 1.5, ease: "slow(0.7, 0.7, false)", x:'800', }) 


                const blance__info = document.querySelector('.blance__info')
                const balance__info__box__1 = document.querySelector('.balance__info__box__1')
                const balance__info__box__2 = document.querySelector('.balance__info__box__2')
                const balance__info__box__3 = document.querySelector('.balance__info__box__3')
                
                const blance__infoTl =  new TimelineLite({
                    scrollTrigger: {
                        trigger:  blance__info,
                        start: "20px 50%",
                        scrub: false,
                        toggleActions: "restart none none none",
                    }
                })
                blance__infoTl.from(balance__info__box__1,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'800', }) 
                blance__infoTl.from(balance__info__box__2,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'-800', }) 
                blance__infoTl.from(balance__info__box__3,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'800', }) 
                


                const last__dash = document.querySelector('.last__dash')
                const last__dash__box__1 = document.querySelector('.last__dash__box__1')
                const last__dash__box__2 = document.querySelector('.last__dash__box__2')
                const last__dash__box__3 = document.querySelector('.last__dash__box__3')
                const last__dash__box__4 = document.querySelector('.last__dash__box__4')

                const last__dashTl =  new TimelineLite({
                    scrollTrigger: {
                        trigger:  last__dash,
                        start: "20px 50%",
                        scrub: false,
                        toggleActions: "restart none none none",
                    }
                })
                last__dashTl.from(last__dash__box__1,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'-800', })
                last__dashTl.from(last__dash__box__2,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'800', })
                last__dashTl.from(last__dash__box__3,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'800', })
                last__dashTl.from(last__dash__box__4,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'-800', })


            }
            RegisterDashboardTrigger()
        
        }

        LogoutNow = ()=>{
            sessionStorage.removeItem('x-access-token');
            sessionStorage.clear(); 
        }
    render() { 
        // console.log(this.state.timestamp)
        return ( 
            <div className='dashboard__main'>
                {/* <ToastContainer/> */}
                <ToastContainer
                position="top-center"
                autoClose={false}
                newestOnTop
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable/>
                <section className='dash__box__1'>
                    <h1 className='animate__animated animate__slower animate__rubberBand'>MY <span>DASHBOARD</span></h1>
                        {/* <h1>{this.state.timestamp}</h1> */}
                </section>
                <section className='dash__links'>
                    <div className="linkDash">
                        <ul>
                            <li className='dashLinks__me'><a href='/dashboard'><i class="fas fa-user"></i> DASHBOARD</a></li>
                            <li className='dashLinks__me'><a href='/deposit'><i class="fas fa-dollar-sign"></i> DEPOSIT</a></li>
                            <li className='dashLinks__me'><a href=''><i class="fas fa-hand-holding-usd"></i> YOUR DEPOSITS</a></li>
                            <li className='dashLinks__me'><a href=''><i class="fas fa-receipt"></i> TRANSACTIONS</a></li>
                            <li className='dashLinks__me'><a href=''><i class="fas fa-money-check-alt"></i> WITHDRAW</a></li>
                            <li className='dashLinks__me'><a href=''><i class="fas fa-users"></i>  REFERRALS</a></li>
                            <li className='dashLinks__me'><a href='' className='btn btn-join-us'> {this.state.full_Name} &#8615;</a></li>
                        </ul>
                    </div>
                </section>
                <section className='dash__profile'>
                    <div className="profileDash">
                        <i class="fas fa-user fa-3x"></i><p>WELCOME, {this.state.user_Name}! LAST ACCESS:FROM IP {this.state.ip_address}</p>
                    </div>
                    <div className="profileDash__file">
                        <a href='/settings' className='btn btn-warning'><i class="fas fa-user-edit"></i> EDIT PROFILE</a>
                        <a href='/' className='btn btn-primary' onClick={this.LogoutNow}><i class="fas fa-sign-out-alt"></i> LOGOUT</a>
                    </div>
                </section>
                <section className='about__dash'>
                    <div className="about__dash__info about__dash__info__1">
                        <div className="dash__info__text">
                            <p>ACCOUNT BALANCE</p>
                            <p className='p__text balanceMe'><span className='sign__color'>$</span> {this.state.accountBalance}</p>
                            
                        </div>
                        <div className="dash__info__img">
                        <a href={`/withdraw/${this.state.id}`} className='btn btn-warning'>REQUEST PAYMENT</a>
                        </div>
                    </div>
                    <div className="about__dash__info about__dash__info__2">
                        <div className="dash__info__text">
                            <p>REGISTRATION DATE</p>
                            <p className='p__text'>{this.state.date}</p>
                        </div>
                        <div className="dash__info__img">
                        <i class="fas fa-calendar-alt fa-3x"></i>
                        </div>
                    </div>
                    <div className="about__dash__info about__dash__info__3">
                        <div className="dash__info__text">
                            <p>IP ADDRESS</p>
                            <p className='p__text'>{this.state.ip_address}</p>
                        </div>
                        <div className="dash__info__img">
                        <i class="fas fa-map-marker-alt fa-3x"></i>
                        </div>
                    </div>
                </section>
                <section className='blance__info'>
                    <div className="balance__info__box balance__info__box__1">
                        <i class="fas fa-file-invoice-dollar fa-4x"></i>
                        <p className='p__text'><span className='sign__color'>$</span>  {this.state.withdrawTotal.map(user => user.WithdrawAmount)}.00</p>
                        <p>EARNED TOTAL</p>
                        <a href='/deposit' className='btn btn-warning'>MAKE A DEPOSIT</a>
                    </div>
                    <div className="balance__info__box balance__info__box__2">
                        <i class="fas fa-funnel-dollar fa-4x"></i>
                        <p className='p__text activetStatus'><span className='sign__color'>$</span> {this.state.activetDeposit}</p>
                        <p>ACTIVE DEPOSIT</p>
                        <a href='' className='btn btn-warning'>DEPOSIT LIST</a>
                    </div>
                    <div className="balance__info__box balance__info__box__3">
                        <i class="fas fa-money-check-alt fa-4x"></i>
                        <p className='p__text'><span className='sign__color'>$</span> {this.state.withdrawTotal.map(user => user.WithdrawAmount)}.00</p>
                        <p>TOTAL WITHDREW </p>
                        <a href='' className='btn btn-warning'>TOTAL WITHDREW</a>
                    </div>
                </section>
                <section className='reffer_link'>
                    <div className="link__reffer">
                        <i class="fas fa-link fa-2x"></i><h3>https://payitforward.com/?ref={this.state.user_Name}</h3>
                    </div>
                </section>
                <section className='last__dash'>
                    <div className="last__dash__box last__dash__box__1">
                        <div className="dash__text"><p>$ {this.state.totalDeposit.map(user => user.depositAmount)}.00</p></div>
                        <div className="dash__text">TOTAL DEPOSITED</div>
                    </div>
                    <div className="last__dash__box last__dash__box__2">
                        <div className="dash__text"><p>$ {this.state.totalDeposit.map(user => user.depositAmountlast)}.00</p></div>
                        <div className="dash__text">LAST DEPOSITED</div>
                    </div>
                    <div className="last__dash__box last__dash__box__3">
                        <div className="dash__text"><p>$0.00</p></div>
                        <div className="dash__text">PENDING WITHDRAWAL</div>
                    </div>
                    <div className="last__dash__box last__dash__box__4">
                        <div className="dash__text"><p>$  {this.state.withdrawTotal.map(user => user.WithdrawAmountlast)}.00</p></div>
                        <div className="dash__text">LAST WITHDRAWAL</div>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default DashboardMain;