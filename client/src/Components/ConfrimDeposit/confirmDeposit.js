import React, { Component } from 'react';
import axios from 'axios'
import './style.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import jwt_decode from 'jwt-decode'
class ConfirmDeposit extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user_id: '',
            planNow: '',
            depositAmount: '',
            walletAddress: '',
            user_Name: '',
            full_Name: '',
            email: '',
            amount: '',
            date: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
       
    }

    componentDidMount(){
        
        
        const user_id =  sessionStorage.getItem('user_id')
        const user_Name =  sessionStorage.getItem('user__name')
        const full_Name = sessionStorage.getItem('full_Name')
        const planNow  = sessionStorage.getItem('planNow')
        const email  = sessionStorage.getItem('email')
        const depositAmount = sessionStorage.getItem('depositAmount')
        const walletAddress = sessionStorage.getItem('walletAddress')
        const date = sessionStorage.getItem('date')

        this.setState({
            user_id,
            user_Name,
            full_Name,
            planNow,
            depositAmount,
            walletAddress,
            email,
            date


        })
        
    }

    
   onSubmit = ()=>{
        const NewDeposit = {
        user_id: this.state.user_id,
        email: this.state.email,
        user_Name: this.state.user_Name,
        full_Name: this.state.full_Name,
        planNow: this.state.planNow,
        depositAmount: this.state.depositAmount,
        walletAddress: this.state.walletAddress,
        date: this.state.date

       }
       console.log(NewDeposit)
    //    http://localhost:8000
       axios.post( "/users/deposit",NewDeposit).then(res => {toast.success('...Waiting for Blockchain confirmation')}).then(res => setTimeout(()=>{
            window.location='/dashboard'
       },1200))

   }
    render() { 

        const depositAmount = ()=>{
            if(this.state.depositAmount){
            document.querySelector('.outAmount').innerHTML =  this.state.depositAmount * 0.0000185
        }
            if(this.state.depositAmount){
            document.querySelector('.outAmount1').innerHTML =  this.state.depositAmount * 0.0000185
        }

       }
     depositAmount()
        return(
            <div className='confirm'>
                <div className='confirmDepositNow'>
                    <h1 className='animate__animated animate__flash animate__slower'><span>CONFIRM</span> DEPOSIT</h1>
                    <ToastContainer/>
                </div>
                <div className='confirmLine'>
                    <div className='lastConfirm'>
                        <div className='planInfo'>
                            <p>Plan:</p>  
                            <p>Instant Daily Plan: {this.state.plan} Daily Forever</p>
                        </div>
                        <div className='planInfo'>
                            <p>Principal Return:</p>
                            <p>No (included in profit)</p>
                        </div>
                        <div className='planInfo'>
                            <p>Principal Withdraw:</p>
                            <p>Not available</p>
                        </div>
                        <div className='planInfo'>
                            <p>Credit Amount:</p>
                            <p>${this.state.depositAmount}</p>
                        </div>
                        <div className='planInfo'>
                            <p>Debit Amount:</p>
                            <p>${this.state.depositAmount}</p>
                        </div>
                        <div className='planInfo'>
                            <p>BTC Debit Amount:</p>
                            <p><span className='outAmount'></span></p>
                        </div>

                        <div className='confirmBtnInfo'>
                            <p> <p>Kindly use your User Name <span>{this.state.user_Name}</span><br/> as Reference ID or Description ID when making payment </p> <br/>Please send exactly <span className='outAmount1'></span> BTC to<br/>
                            <p className='wallertNumber'>14VoBZY3Pap6NUeTxNttspyGHBx92d1wAh</p>
                            <div className='automatic'>
                                <img src={require('../../images/blockChain.png')} alt='pic'/>
                            </div>
                            <h4>Order status: Waiting for payment</h4>
                            </p>
                        </div>
                        <div className='btnConfirm'>
                            <button className='btn btn-success' onClick={this.onSubmit}>I PAID CONFIRM</button>
                        </div>
                    </div>
                </div>
                <div className='blochChanImg'>
                    {/* <img src={require('../../pic/')}/> */}
                </div>
            </div>

        )
    }
}
 
export default ConfirmDeposit;