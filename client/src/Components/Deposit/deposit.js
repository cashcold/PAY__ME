import React, { Component } from 'react';
import './style.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import jwt_decode from 'jwt-decode'
import axios from 'axios' 
// import ConfirmDeposit from '../ConfirmDeposit/confirmDeposit'

class Deposit extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user_id: '',
            planNow: '',
            depositAmount: '',
            walletAddress: '',
            user_Name: '',
            full_Name: '',
            activetDeposit: '',
            date: ''
            // bitcoinCash: '',
            // ethereum: '',
            // bitcoin: '',

         }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange = input => (event)=>{
        event.preventDefault()
        this.setState({[input]: event.target.value})
    }
    componentDidMount(){
        
        const DateTime = new Date().toString()
        this.setState({
            date: DateTime
        })

        const token = sessionStorage.getItem('x-access-token')
        const decoded = jwt_decode(token)
        this.setState({
            user_id: decoded.user_id,
            user_Name: decoded.user_Name,
            full_Name: decoded.full_Name,
            activetDeposit: decoded.activetDeposit
         })

        document.querySelector('.planBtn1').addEventListener('click',()=>{
            {toast.success("INVESTMENT PLAN 1")}
        })
        document.querySelector('.planBtn2').addEventListener('click',()=>{
            {toast.success("INVESTMENT PLAN 2")}
        })
        document.querySelector('.planBtn3').addEventListener('click',()=>{
            {toast.success("INVESTMENT PLAN 3")}
        })
        document.querySelector('.planBtn4').addEventListener('click',()=>{
            {toast.success("INVESTMENT PLAN 4")}
        })
    }
    
    onSubmit = (event)=>{
        event.preventDefault()
        const DepositForm = {
            user_id: this.state.user_id,
            user_Name: this.state.user_Name,
            full_Name: this.state.full_Name,
            planNow: this.state.planNow,
            depositAmount: this.state.depositAmount,
            walletAddress: this.state.walletAddress,
            date: this.state.date
            // bitcoin: this.state.bitcoin,
            // bitcoinCash: this.state.bitcoinCash,
            // ethereum: this.state.ethereum

        }
        if(!DepositForm.planNow){
            toast.warn('Please Select Plan')
            return false
        }
        if(!DepositForm.depositAmount){
            toast.warn('Amount to Deposit')
            return false
        }
        if(!DepositForm.walletAddress){
            toast.warn('Spend funds from')
            return false
        }

        sessionStorage.setItem('user__name', this.state.user_Name)
        sessionStorage.setItem('full_Name', this.state.full_Name)
        sessionStorage.setItem('planNow', this.state.planNow)
         sessionStorage.setItem('depositAmount', this.state.depositAmount)
        sessionStorage.setItem('walletAddress', this.state.walletAddress)
        sessionStorage.setItem('date', this.state.date)
       
        
        toast.warning('Confirm Payment')
        setTimeout(()=>{
            window.location='/confirmDeposit'
        },700)
    }
    render() { 
        return ( 
            <div className='mainDeposit'>
                <div className='hideComponent'>
                    {/* <ConfirmDeposit Plan={this.state.planNow} depositAmount={this.state.depositAmount} walletAddress={this.state.walletAddress}/> */}
                </div>
                <div className='deposit'>
                    <div className='supportHeaderDeposite '>
                        <h1 className='supH1 animate__animated animate__zoomInUp animate__slower'>MAKE A <span>DEPOSIT</span></h1>
                    </div>
                    
                </div>
                <ToastContainer/>
                <div className="linkDash">
                        <ul>
                            <li><a href=''><i class="fas fa-user"></i> DASHBOARD</a></li>
                            <li><a href=''><i class="fas fa-dollar-sign"></i> DEPOSIT</a></li>
                            <li><a href=''><i class="fas fa-hand-holding-usd"></i> YOUR DEPOSITS</a></li>
                            <li><a href=''><i class="fas fa-receipt"></i> TRANSACTIONS</a></li>
                            <li><a href=''><i class="fas fa-money-check-alt"></i> WITHDRAW</a></li>
                            <li><a href=''><i class="fas fa-users"></i>  REFERRALS</a></li>
                            <li><a href='' className='btn btn-join-us'> {this.state.full_Name} &#8615;</a></li>
                        </ul>
                    </div>
                <div className='selectPlan'>
                    <div className='plain'>
                        <div className='planNow'>
                            <h1 className='animate__animated animate__fadeInLeftBig animate__slower'>SELECT <span>INVESTMENT</span> PLAN</h1>
                        </div>
                        <div className='planDeposit animate__animated animate__fadeInRightBig animate__slower'>
                            <div className=''>
                                <div className='plan1'>
                                    <div className='planPlan'>
                                        <p><input  type='radio' name='planNow' value='24HRS' onChange={this.handleChange('planNow')} className='planBtn1'/> PLAN 1 </p>
                                    </div>
                                    <p>24HRS</p>
                                </div>
                                <hr/>
                                <div className='plan1'>
                                    <div className='planPlan'>           
                                        <p><input type='radio' name='planNow' value='3 DAYS' onChange={this.handleChange('planNow')}  className='planBtn2'/> PLAN 2 </p>
                                    </div>
                                    <p>3 DAYS</p>
                                </div>
                                <hr/>
                                <div className='plan1'>
                                    <div className='planPlan'>
                                        <p><input type='radio' name='planNow' value='5 DAYS' onChange={this.handleChange('planNow')}  className='planBtn3'/>  PLAN 3 </p>
                                    </div>
                                    <p>5 DAYS</p>
                                </div>
                                <hr/>
                                <div className='plan1'>
                                    <div className='planPlan'>
                                        <p> <input type='radio' name='planNow' value='ONE WEEK' onChange={this.handleChange('planNow')}  className='planBtn4'/> PLAN 4 </p>
                                    </div>
                                    <p>ONE WEEK</p>
                                </div>
                            </div>
                            <div className='amountSpent'>
                                <div className='amounLimt'>
                                    <div className='amountMain'>
                                        <p>SPENT AMOUNT ($)</p>
                                    </div>
                                    <p>$5.00 - $99.00</p>
                                </div>
                                <hr/>
                                <div className='amounLimt'>
                                    <div className='amountMain'>
                                        <p>SPENT AMOUNT ($)</p>
                                    </div>
                                    <p>$100.00 - $299.00</p> 
                                </div>
                                <hr/>
                                <div className='amounLimt'>
                                    <div className='amountMain'>
                                        <p>SPENT AMOUNT ($)</p>
                                    </div>
                                    <p>$300.00 - $500.00</p>
                                </div>
                                <hr/>
                                <div className='amounLimt'>
                                    <div className='amountMain'>
                                        <p>SPENT AMOUNT ($)</p>
                                    </div>
                                    <p>VIP MEMBER</p>
                                </div>
                                
                            </div>
                            <div className='dailyProfit'>
                               <div className='countProfit'>
                                    <div className='profitCount'>
                                        <p> PROFIT (%)</p>
                                    </div>
                                    <p>15%</p>
                                </div>
                                <hr/>
                                <div className='countProfit'>
                                    <div className='profitCount'>
                                        <p> PROFIT (%)</p>
                                    </div>
                                    <p>35%</p>
                                </div>
                                <hr/>
                                <div className='countProfit'>
                                    <div className='profitCount'>
                                        <p> PROFIT (%)</p>
                                    </div>
                                    <p>50%</p>
                                </div>
                                <hr/>
                                <div className='countProfit'>
                                    <div className='profitCount'>
                                        <p> PROFIT (%)</p>
                                    </div>
                                    <p>%</p>
                                </div>
                            </div>
                        </div>
                        <a href='/calculate' target='_blank'><h4 className='calculate__now btn btn-success  calculateLink'>CALCULATE PROFIT</h4></a>
                    </div>
                </div>
                <div className='depositMethod'>
                    <div className='methodDeposit'>
                        <div className='deMethod'>
                            <p>Your account balance ($):</p>
                            <p>$0.00</p>
                        </div>
                        <div className='amountSpend'>
                            <p>Amount to Spend ($):</p>
                            <p><input placeholder='Amount Deposit' name='depositAmount' onChange={this.handleChange('depositAmount')}/></p>
                        </div>
                        <br/>
                    </div>
                    <div className='matchMethod'>
                    <div className='matchDeposit'>
                        <p><input type='radio' name='spendMehtod' value='Bitcoin' onChange={this.handleChange('walletAddress')}/> Spend funds from Bitcoin</p>
                    </div>
                    
                </div>
                <a href='/' className='btn btn-warning depositBtn' onClick={this.onSubmit}>SEND</a>
                </div>
                
            </div>
         );
    }
}
 
export default Deposit;