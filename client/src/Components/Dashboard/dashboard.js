import React, { Component } from 'react';
import './style.css'
import jwt_decode from 'jwt-decode'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
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
            ethereum: '',
            date: '',
            accountBalance: '',
            activetDeposit: '',
            login: '',
            plan: ''
        }
        this.LogoutNow = this.LogoutNow.bind(this)
    }
    componentDidMount(){

        const RefreshToken = sessionStorage.getItem('RefreshToken')
        if(RefreshToken){
            sessionStorage.removeItem('x-access-token')
            sessionStorage.setItem('x-access-token',RefreshToken)
        }


        const token = sessionStorage.getItem('x-access-token')
        const decoded = jwt_decode(token)
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
            accountBalance: decoded.accountBalance,
            activetDeposit: decoded.activetDeposit,
            date: decoded.date
         }) 
         
         const activetDeposit__amount = JSON.parse(sessionStorage.getItem('activetDeposit'))
        
         const ActivetDeposit__24HR = ()=>{
                if(activetDeposit__amount > 99){
                    setTimeout(()=>{
                        document.querySelector('.activetStatus').innerHTML = "0.00$"
                        document.querySelector('.balanceMe').innerHTML = "$"+activetDeposit__amount+".00"
                    },8000)
                }
            }
            ActivetDeposit__24HR() 
        //  const ActivetDeposit__24HR = ()=>{
        //    var d = new Date();
        //     d.setDate(d.getDate() + 3);
        //     console.log(d)
        //   if(activetDeposit__amount > 99){
        //       if(d){
        //         document.querySelector('.activetStatus').innerHTML = "0.00$"
        //         document.querySelector('.balanceMe').innerHTML = "$"+activetDeposit__amount+".00"
        //       }
        //     }
          
        //     }
        //     ActivetDeposit__24HR() 
        
        }

        LogoutNow = ()=>{
        sessionStorage.removeItem('x-access-token');
        sessionStorage.clear(); 
    }
    render() { 
        return ( 
            <div className='dashboard__main'>
                <ToastContainer/>
                <section className='dash__box__1'>
                    <h1>MY <span>DASHBOARD</span></h1>
                </section>
                <section className='dash__links'>
                    <div className="linkDash">
                        <ul>
                            <li><a href='/dashboard'><i class="fas fa-user"></i> DASHBOARD</a></li>
                            <li><a href='/deposit'><i class="fas fa-dollar-sign"></i> DEPOSIT</a></li>
                            <li><a href=''><i class="fas fa-hand-holding-usd"></i> YOUR DEPOSITS</a></li>
                            <li><a href=''><i class="fas fa-receipt"></i> TRANSACTIONS</a></li>
                            <li><a href=''><i class="fas fa-money-check-alt"></i> WITHDRAW</a></li>
                            <li><a href=''><i class="fas fa-users"></i>  REFERRALS</a></li>
                            <li><a href='' className='btn btn-join-us'> {this.state.full_Name} &#8615;</a></li>
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
                    <div className="about__dash__info">
                        <div className="dash__info__text">
                            <p>ACCOUNT BALANCE</p>
                            <p className='p__text balanceMe'><span className='sign__color'>$</span> {this.state.accountBalance}</p>
                            <a href={`/withdraw/${this.state.id}`} className='btn btn-warning'>REQUEST PAYMENT</a>
                        </div>
                        <div className="dash__info__img">
                        <i class="fas fa-wallet fa-3x"></i>
                        </div>
                    </div>
                    <div className="about__dash__info">
                        <div className="dash__info__text">
                            <p>REGISTRATION DATE</p>
                            <p className='p__text'>{this.state.date}</p>
                        </div>
                        <div className="dash__info__img">
                        <i class="fas fa-calendar-alt fa-3x"></i>
                        </div>
                    </div>
                    <div className="about__dash__info">
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
                    <div className="balance__info__box">
                        <i class="fas fa-file-invoice-dollar fa-4x"></i>
                        <p className='p__text'><span className='sign__color'>$</span>0.00</p>
                        <p>EARNED TOTAL</p>
                        <a href='' className='btn btn-warning'>MAKE A DEPOSIT</a>
                    </div>
                    <div className="balance__info__box">
                        <i class="fas fa-funnel-dollar fa-4x"></i>
                        <p className='p__text activetStatus'><span className='sign__color'>$</span> {this.state.activetDeposit}</p>
                        <p>ACTIVE DEPOSIT</p>
                        <a href='' className='btn btn-warning'>DEPOSIT LIST</a>
                    </div>
                    <div className="balance__info__box">
                        <i class="fas fa-money-check-alt fa-4x"></i>
                        <p className='p__text'><span className='sign__color'>$</span>0.00</p>
                        <p>WITHDREW TOTAL</p>
                        <a href='' className='btn btn-warning'>WITHDREW TOTAL</a>
                    </div>
                </section>
                <section className='reffer_link'>
                    <div className="link__reffer">
                        <i class="fas fa-link fa-2x"></i><h3>https://payitforward.com/?ref={this.state.user_Name}</h3>
                    </div>
                </section>
                <section className='last__dash'>
                    <div className="last__dash__box">
                        <div className="dash__text"><p>$0.00</p></div>
                        <div className="dash__text">TOTAL DEPOSITED</div>
                    </div>
                    <div className="last__dash__box">
                        <div className="dash__text"><p>$0.00</p></div>
                        <div className="dash__text">TOTAL DEPOSITED</div>
                    </div>
                    <div className="last__dash__box">
                        <div className="dash__text"><p>$0.00</p></div>
                        <div className="dash__text">TOTAL DEPOSITED</div>
                    </div>
                    <div className="last__dash__box">
                        <div className="dash__text"><p>$0.00</p></div>
                        <div className="dash__text">TOTAL DEPOSITED</div>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default DashboardMain;