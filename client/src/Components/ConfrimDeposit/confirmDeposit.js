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
            plan: '',
            depositAmount: '',
            user_Name: '',
            bitcoin: '',
            bitcoinCash: '',
            ethereum: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
       
    }

    componentDidMount(){
         





        
    }

    
   onSubmit = ()=>{
    


       const NewDeposit = {
           plan: this.state.plan,
           depositAmount: this.state.depositAmount,
           user_Name: this.state.user_Name,
           bitcoin: this.state.bitcoin,
           bitcoinCash: this.state.bitcoinCash,
           ethereum: this.state.ethereum

       }
       console.log(NewDeposit)
    //    http://localhost:8000
       axios.post( "/users/deposit",NewDeposit).then(res => {toast.success('...Waiting for Blockchain confirmation')}).then(res => setTimeout(()=>{
            window.location='/dashboard'
       },1200))

   }
    render() { 
       
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
                            <p>0.00177447</p>
                        </div>

                        <div className='confirmBtnInfo'>
                            <p>Please send exactly 0.00177447 BTC to<br/>
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