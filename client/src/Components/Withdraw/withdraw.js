import React, { Component } from 'react';
import jwt_decode from 'jwt-decode'
import './style.css'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class WithdrawNow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            user_Name: '',
            email: '',
            accountBalance: '',
            zero_accountBalance: '0',
            activetDeposit: '',
            bitcoin: '',
            bitcoinCash: '',
            ethereum: '',
            date: ''
              
         }
        //  this.ConfirmWithdraw = this.ConfirmWithdraw.bind(this)
         this.onSubmit = this.onSubmit.bind(this)
         this.handleChange = this.handleChange.bind(this)

         this.userNameRef = React.createRef()
    }
   
     
    handleChange =input => (event)=>{
        event.preventDefault()
        this.setState({[input]: event.target.value})
    }

    WithdrawNowFound = ()=>{
        this.setState({accountBalance: '0'})
        setTimeout(()=>
        {toast.success(`Payment of $${this.state.activetDeposit} Have sent to you ${this.state.bitcoin}`)},800)

        // sessionStorage.removeItem('token')
        

        const Withdraw = { 
            user_id: this.state.user_id,
            accountBalance: this.state.accountBalance,
            zero_accountBalance: this.state.zero_accountBalance,
            user_Name: this.state.user_Name,
            email: this.state.email,
            date: this.state.date,
            bitcoin: this.state.bitcoin,
            bitcoinCash: this.state.bitcoinCash,
            ethereum: this.state.ethereum,
            
        }
        const id  = this.props.match.params.id
        console.log(Withdraw)
        axios.post(`http://localhost:8000/users/withdraw/${id}`,Withdraw).then(res => { 
            sessionStorage.setItem('RefreshToken',JSON.stringify(res.data))
            return res.data;
        }).then(res => {toast.success("Account Update") }).then(setTimeout(()=>{
            window.location='/dashboard'
        },8000))

       
        
    }

    //  ConfirmWithdraw = ()=>{
    //     toast.success('Payment sent to your Bitcoin Address')
    //     setTimeout(()=>{
    //         window.location='/dashboard'
    //     },800)
    //     }
    componentDidMount(){
        const DateTime = new Date().toString()
        this.setState({
            date: DateTime
        })
        
        const user_id =  sessionStorage.getItem('user_id')
        const user_Name =  sessionStorage.getItem('user_Name')
        const email = sessionStorage.getItem('email')
        const activetDeposit = sessionStorage.getItem('activetDeposit')
        const bitcoin = sessionStorage.getItem('bitcoin')
        const bitcoinCash = sessionStorage.getItem('bitcoinCash')
        const ethereum = sessionStorage.getItem('ethereum')
        
        const accountBalance = JSON.parse(sessionStorage.getItem('activetDeposit'))
        this.setState({
            accountBalance,
            user_Name,
            email,
            bitcoin,
            bitcoinCash,
            ethereum,
            activetDeposit,
            user_id
        })
        if(accountBalance < 1){
            document.querySelector('.checkBalance').innerHTML ="You have no funds to withdraw."
            document.querySelector('.confrimWithdraw').style.display = "none"
        }
      
      
       
    }

    onSubmit = ()=>{
        
        // axios.post('http://localhost:800/users/widthdraw',ConfirmWithdrawDetails).then(res => (toast.success("Payment have sent to your wallert address"))).catch(err => {toast.error(err.response.data)})
        
    }
   
    render() { 
        console.log(this.state.user_id)
        return ( 
            <div className='mainWidthDraw'>
                <div className='withdraw'>
                    <div className='withdrawNow'>
                    <h1 > <span>WITHDRAWAL</span> FUNDS </h1>
                    <ToastContainer/>
                    </div>
                   <div className='withNowAll'>
                        <div className='withAbout'>
                            <p>Account Balance:</p>
                            <p className='withDrawBalance' >${this.state.accountBalance}</p>
                            
                        </div>
                        <div className='withAbout'>
                            <p>Pending Withdrawals:</p>
                            <p>0.00$</p>
                        </div>
                   </div>
                   <div className='nowWithdraw'>
                       <div className='checkBalance'></div>
                       <div className='comfrimWithdraw'>
                           <h1 className='btn btn-success confrimWithdraw' onClick={this.WithdrawNowFound}>Confirm  Withdraw</h1>
                       </div>
                   </div>
                </div>
            </div>
         );
    }
}
export default WithdrawNow;