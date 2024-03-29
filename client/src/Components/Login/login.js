import React, { Component } from 'react';
import './style.css'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
class LoginMain extends Component { 
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
   
    handleChange = input => (event)=>{
        event.preventDefault()
        this.setState({[input]: event.target.value})
    }

    onSubmit = (event)=>{

        const userLogin = {
            email: this.state.email,
            password: this.state.password
        }
        if(!userLogin.email){
            toast.warning('Enter Email Address')
        }
        if(!userLogin.password){
            toast.warning('Enter Password')
        }
        event.preventDefault()
        axios.post( "/users/login",userLogin).then(res => { 
            sessionStorage.setItem('x-access-token',JSON.stringify(res.data))
            return res.data;
        }).then(res => {toast.success("Login Successful !", setTimeout(()=>{
            toast.success("LOADING ACCOUNT") 
        },4000),{
            
            });}).then(res => window.location="/dashboard" ).catch(err => {toast.error(err.response.data, {
            position: toast.POSITION.TOP_RIGHT
         });
        });
        
    }
    render() { 
        return ( 
            <div className='loginMain'>
                <ToastContainer/>
                <h1 className='animate__animated animate__slower animate__swing'><span>Welcome</span> Back</h1>
                <section className='loginNow'>
                    <div className='loginForm'>
                        <form className='myFormControl'>
                            <div className='loginmyForms animate__animated animate__slower animate__backInLeft'>
                                <input type='text'name='email' placeholder='Email' onChange={this.handleChange('email')}/>
                            </div>
                            <div className='loginmyForms animate__animated animate__slower animate__backInRight'>
                                <input type='email' name='password' placeholder='confirm password'  onChange={this.handleChange('password')}/>
                            </div>
                            <div className="allLogin  animate__animated animate__slower animate__backInUp">
                                <a href='' className='btn btn-success contactBtn'  onClick={this.onSubmit}>Login</a>
                            <a href='/forgotpassword' className='btn btn-warning contactBtn'>Forgot Password</a>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default LoginMain;