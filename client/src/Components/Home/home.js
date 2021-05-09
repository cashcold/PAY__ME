import React, { Component } from 'react';
import './style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {TimelineLite} from 'gsap'
import {gsap} from 'gsap'
import{ScrollTrigger} from 'gsap/ScrollTrigger'
import 'animate.css'

class HomeMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){

        const reffer = window.location.search;
        sessionStorage.setItem('reffer', reffer) 


        const welcome__msg = ()=>{
            setTimeout(()=>{
                toast.dark(
                    <div className='wlcome animate__animated animate__slower animate__shakeX'>
                        <a href='/login' className='btn btn-login-in'>Login</a>
                        <a href='/register' className='btn btn-join-us'>Register</a>
                    </div>
                )
            },8000)
        }
        welcome__msg()

        const RegisterHomeTrigger = ()=>{
            gsap.registerPlugin(ScrollTrigger)
            const home__A = document.querySelector('.home__A')
            const welcome__img = document.querySelector('.welcome__img')
            const home__h1__1 = document.querySelector('.home__h1__1')
            const text__pay = document.querySelector('.text__pay')
            const home__h3__1 = document.querySelector('.home__h3__1')
            const home__btn__1 = document.querySelector('.home__btn__1')

            const home_ATl  =  new TimelineLite({
                scrollTrigger: {
                    trigger:  home__A,
                    start: "0px 80%",
                    scrub: false,
                    toggleActions: "restart none none none",
                }
            })                       

            home_ATl.from(welcome__img,{opacity: 0, duration: 1.3, ease: "slow(0.4, 0.7, false)", x:'-800', })
            home_ATl.from( home__h1__1,{opacity: 0, duration: 1.3, ease: "slow(0.4, 0.7, false)", x:'800', })
            home_ATl.from(text__pay,{opacity: 0, duration: 1.3, ease: "slow(0.4, 0.7, false)", x:'-800', })
            home_ATl.from(home__h3__1,{opacity: 0, duration: 1.3, ease: "slow(0.4, 0.7, false)", x:'800', })
            home_ATl.from(home__btn__1,{opacity: 0, duration: 1.3, ease: "slow(0.4, 0.7, false)", x:'-800', })




            const about__pay = document.querySelector('.about__pay')
            const aboutMe_1 = document.querySelector('.aboutMe_1')
            const aboutMe_2 = document.querySelector('.aboutMe_2')
            const aboutMe_3 = document.querySelector('.aboutMe_3')
            const aboutMe_4 = document.querySelector('.aboutMe_4')
            const about__payTl =  new TimelineLite({
                scrollTrigger: {
                    trigger:  about__pay,
                    start: "10px 40%",
                    scrub: false,
                    toggleActions: "restart none none none",
                }
            })
            about__payTl.from(aboutMe_1,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'-800', })
            about__payTl.from(aboutMe_2,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'800', })
            about__payTl.from(aboutMe_3,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'-800', })
            about__payTl.from(aboutMe_4,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'-800', })


            const about__investmentt__plan = document.querySelector('.about__investmentt__plan')
            const header__text = document.querySelector('.header__text')
            const title = document.querySelector('.title')
            const box = document.querySelectorAll('.box')
            const about__investmentt__planTl =  new TimelineLite({
                scrollTrigger: {
                    trigger:  about__investmentt__plan,
                    start: "-30px 20%",
                    scrub: false,
                    toggleActions: "restart none none none",
                }
            })
            about__investmentt__planTl.from(header__text,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'-800', })
            about__investmentt__planTl.from(title,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'800', })
            about__investmentt__planTl.from(box,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'800', stagger: 0.3})

            const payitforward__flow = document.querySelector('.payitforward__flow')
            const pay__text__flow = document.querySelector('.pay__text__flow')
            const pay__img__flow = document.querySelector('.pay__img__flow')
            const payitforward__flowTl =  new TimelineLite({
                scrollTrigger: {
                    trigger:  payitforward__flow,
                    start: "10px 50%",
                    scrub: false,
                    toggleActions: "restart none none none",
                }
            })
            payitforward__flowTl.from(pay__text__flow,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'-800', })
            payitforward__flowTl.from(pay__img__flow,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'800', })



            
            
            const pay__pay = document.querySelector('.pay__pay')
            const feature__me = document.querySelector('.feature__me')
            const feature__me__1 = document.querySelector('.feature__me__1')
            const feature__me__2 = document.querySelector('.feature__me__2')
            const feature__me__3 = document.querySelector('.feature__me__3')
            const feature__me__4 = document.querySelector('.feature__me__4')

            const feature_meTl = new TimelineLite({
                scrollTrigger: {
                    trigger:  pay__pay,
                    start: "10px 50%",
                    scrub: false,
                    toggleActions: "restart none none none",
                }
            })
            feature_meTl.from(feature__me,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'-800', })
            feature_meTl.from(feature__me__1,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", y:'800', })
            feature_meTl.from(feature__me__2,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'-800', })
            feature_meTl.from(feature__me__3,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", y:'-800', })
            feature_meTl.from(feature__me__4,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'-800', })
            


            const how__work = document.querySelector('.how__work')
            const howItWork = document.querySelector('.howItWork')
            const workInfo = document.querySelectorAll('.workInfo')
            
            const how_workTl =  new TimelineLite({
                scrollTrigger: {
                    trigger:  how__work,
                    start: "10px 50%",
                    scrub: false,
                    toggleActions: "restart none none none",
                }
            })
            how_workTl.from(howItWork,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'800', })
            how_workTl.from(workInfo,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'800', stagger: 0.3})


            const reffer__comm = document.querySelector('.reffer__comm')
            const reffer__text = document.querySelector('.reffer__text')
            const reffer__img = document.querySelector('.reffer__img')
            const reffer__commTl =  new TimelineLite({
                scrollTrigger: {
                    trigger:  reffer__comm,
                    start: "10px 50%",
                    scrub: false,
                    toggleActions: "restart none none none",
                }
            })
            reffer__commTl.from(reffer__text,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'800', })
            reffer__commTl.from(reffer__img,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", x:'-800', })



            const about__payment = document.querySelector('.about__payment')
            const payment__accept = document.querySelector('.payment__accept')
            const about__paymentTl =  new TimelineLite({
                scrollTrigger: {
                    trigger:  about__payment,
                    start: "20px 50%",
                    scrub: false,
                    toggleActions: "restart none none none",
                }
            })
           about__paymentTl.from(payment__accept,{opacity: 0, duration: 1, ease: "slow(0.7, 0.7, false)", y:'-800', })
            
        }
        RegisterHomeTrigger()
      
    }
    render() { 
        return ( 
            <div className='home__main'>
                <ToastContainer
                position="top-center"
                autoClose={false}
                newestOnTop
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable/>
                <section className='home__A'>
                    <div className="flow__text">
                    </div>
                    {/* animate__animated animate__slower animate__backInLeft */}
                    <div className="welcome__info">
                        <div className="welcome__img " >
                            <img src={require('../../images/sliderthumb-min.png')}/>
                        </div>
                        <div className="welcome__text  ">
                            <h1 className='home__h1__1'>MAKE MONEY WITH</h1>
                            <h1 className='text__pay'>PAYITFORWARD LTD</h1>
                            <h3  className='home__h3__1'>GET GUARANTEED PROFIT</h3>
                            <a href='/login' className='btn btn-warning home__btn__1'>START NOW</a>
                        </div>
                    </div>
                </section>
                <section className='about__pay'>
                    <div className="about__investment">
                        <div className="about__box__1 aboutMe_1">
                            <i class="fas fa-signal fa-3x"></i>
                            <h3>203</h3>
                            <h3>Now Online...</h3>z
                        </div>
                        <div className="about__box__1 aboutMe_2">
                            <i class="fas fa-users fa-3x"></i>
                            <h3 >751</h3>
                            <h3>Total Accounts</h3>
                        </div>
                        <div className="about__box__1 aboutMe_3">
                            <i class="fas fa-hand-holding-usd fa-3x"></i>
                            <h3>$ 20914090.72</h3>
                            <h3>Total Deposited</h3>
                        </div>
                        <div className="about__box__1 aboutMe_4">
                            <i class="fas fa-money-check-alt fa-3x"></i>
                            <h3>$ 12512382.51</h3>
                            <h3>Total Withdrawals</h3>
                        </div>
                    </div>
                </section>
                <section className='about__investmentt__plan  '>
                    <div className="header__text">
                        <h1>OUR <span>INVESTMENT</span> PLANS</h1>
                    </div>
                    <div className="investmentt__plan">
                         <section className='pricingNow'>
                   <div className='title '>Choose Your Plan</div>
                   <div className='container container__2'>
                       <div className="box box__1">
                           <h1>15%</h1>
                           <h2 className='popular__1'>BEGINNER</h2>
                           <div className="price">PLAN: DAILY 24HRS</div>
                          <div className="all__plan">
                              <div className="plan__me">
                                    <i class="fas fa-handshake fa-3x"></i>
                                    <div className="text__content">MINIMUM - 5.00 USD</div>
                                    <hr/>
                                    <div className="text__content">MINIMUM - 99.00 USD</div>
                              </div>
                          </div>
                           
                           <div className="bothInner">
                                <a href='' className='btn btn-warning'>DEPOSIT NOW</a>
                                <a href='/calculate'  target='_blank' className='btn btn-warning'>Calculate</a>
                               </div>
                       </div>
                       <div className="box box__2">
                            <h1>35%</h1>
                            <h2 className='popular'>STANDARD</h2>
                                <div className="price"> PLAN: AFTER 3 DAYS</div>
                                <div className="all__plan">
                              <div className="plan__me">
                                   <i class="fas fa-balance-scale fa-3x"></i>
                                    <div className="text__content">MINIMUM - 100.00 USD</div>
                                    <hr/>
                                    <div className="text__content">MINIMUM - 299.00 USD</div>
                              </div>
                          </div>
                               <div className="bothInner">
                               <a href='' className='btn btn-warning'>DEPOSIT NOW</a>
                                <a href='/calculate'  target='_blank' className='btn btn-warning'>Calculate</a>
                               </div>
                       </div>
                       <div className="box box__3">
                        <h1>55%</h1>
                        <h2 className='popular__3'>POPULAR</h2>
                            <div className="price"> PLAN: AFTER 1 WEEK</div>
                            <div className="all__plan">
                              <div className="plan__me">
                                     <i class="fas fa-user-graduate fa-3x"></i>
                                    <div className="text__content">MINIMUM - 300.00 USD</div>
                                    <hr/>
                                    <div className="text__content">MINIMUM - 500.00 USD</div>
                              </div>
                          </div>
                           <div className="bothInner">
                                <a href='' className='btn btn-warning'>DEPOSIT NOW</a>
                                <a href='/calculate'  target='_blank' className='btn btn-warning'>Calculate</a>
                               </div>
                       </div>
                   </div>
                </section>
                    </div>
                </section>
                <section className='payitforward__flow'>
                    <div className="pay__text__flow">
                        <h1>ABOUT <span>PAYITFORWARD</span> LTD</h1>
                        <p>Looking for highest returns on your investments? PayItForward Ltd is an automatic online investment platform, part of PayItForward Ltd, team of professional traders focusing mainly on Bitcoin and other crypto currencies trading over multiple Exchanges and markets. Thanks to the extraordinary diversification of our investments, we are able to deliver steady income for our investors. Thanks to our company, you can become an investor in the network without any specialist knowledge. You can become a partial shareholder of PayItForward Ltd, which we buy with a minimum investment of 20.00 USD and start earning Every Day. Just choose one of the four investment plans depending on the amount you want to invest.</p>
                    </div>
                    <div className="pay__img__flow">
                    <img src={require('../../images/aboutthumb-min.png')}/>
                    </div>
                </section>
                <section className='pay__pay'>
                <div className="feature__payit">
                    <div className="feature__me animate__fadeInTopLeft">
                        <h1><span>PAYITFORWARD LTD</span> FEATURES</h1>
                    </div>
                    <div className="feature__all">
                        <div className="feature__box feature__me__1">
                            <div className="feature__text">
                                <h3>24/7 CUSTOMER SUPPORT</h3>
                                <p>We provide 24/7 customer support through e-mail and Chat box. Our representatives are always ready to help</p>
                            </div>
                            <div className="feature__img">
                                <img src={require('../../images/customer-service (1).png')}/>
                            </div>
                        </div>
                        <div className="feature__box feature__me__2">
                            <div className="feature__text">
                                <h3>INSTANT WITHDRAWALS</h3>
                                <p>Our withdrawals are all processed instantly after they are requested . Minimum withdrawal is only 0.0005 BTC.</p>
                            </div>
                            <div className="feature__img">
                                <img src={require('../../images/edit.png')}/>
                            </div>
                        </div>
                        <div className="feature__box feature__me__3">
                            <div className="feature__text">
                                <h3>REAL COMPANY</h3>
                                <p>Our company is registered as PayItForward Ltd Investment Services</p>
                            </div>
                            <div className="feature__img">
                                <img src={require('../../images/edit.png')}/>
                            </div>
                        </div>
                        <div className="feature__box feature__me__4">
                            <div className="feature__text">
                                <h3>COMODO SSL</h3>
                                <p>Our website is secured with Comodo SSL that verifies the authenticity of our company.</p>
                            </div>
                            <div className="feature__img">
                                <img src={require('../../images/secure.png')}/>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                <section className='how__work'>
                    <div className="pay__how__work">
                        <div className="how__work__box__A">
                        <section className='howWorkMain aboutItFOrward'>
                    <div className='howWork'>
                        <div className='howItWork'>
                            <h1>HOW IT WORKS</h1>
                        </div>
                        <div className='overWork'>
                            <div className='workInfo'>
                                <i class="fas fa-user-alt fa-3x showIcon"></i>
                                <h3>OPEN AN ACCOUNT</h3>
                                <p>Click the signup button, fill in the register form. Once you've done that, you'll receive an email from us, and you're done. You are now an official member of our site!</p>
                            </div>
                            <div className='workInfo'>
                             <i class="fas fa-universal-access fa-3x showIcon"></i>
                                <h3>ACCESS MEMBER AREA</h3>
                                <p>The next thing would be to familiarize yourself with your account. Explore your account and get a feel of how everything works, such as making deposits, requesting withdrawals, etc.</p>
                            </div>
                            <div className='workInfo'>
                            <i class="fas fa-money-bill-alt fa-3x showIcon"></i>
                                <h3>MAKE A DEPOSIT</h3>
                                <p>Your can do this from the deposit section of your account. There are 2 investment plans ranging from 0% Daily profit  (Lifetime) .You Can Withdrawal Anytime Any Where any Amount.All Withdrawal Will be Instant.</p>
                            </div>
                            <div className='workInfo'>
                                <i class="fas fa-american-sign-language-interpreting fa-3x showIcon"></i>
                                <h3>WATCH YOUR CAPITAL GROW</h3>
                                <p>Once you made a deposit you can watch your earnings grow. It means you can be anywhere you want to be in the world, and your funds will still be growing in your account</p>
                            </div>
                            <div className='workInfo'>
                                <i class="fas fa-hand-holding-usd fa-3x showIcon"></i>
                                <h3>REQUEST PAYMENT</h3>
                                <p>It only takes a few seconds to request payment. All of our withdrawals are instant, and your withdrawal will be sent to the Wallet address you provided during registration.</p>
                            </div>
                            <div className='workInfo'>
                                <i class="fas fa-users fa-3x showIcon"></i>
                                <h3>REFER YOUR FRIENDS</h3>
                                <p>You don't need an active deposit to take advantage of our referral program. You only need to use your personal affiliate link from your member's area and share it with friends..</p>
                            </div>
                        </div>
                    </div>
                    </section>
                        </div>
                    </div>
                </section>
                <section className='reffer__comm'>
                    <div className="reffer__text">
                        <div className="reffer__box__1">
                            <h1>REFERRAL <span>COMMISSION</span></h1>
                            <p>Our Referral Commission offers something useful and beneficial for everyone. We are confident that the Referral Commission from Instant Trade Ltd provides the right path to the career progression ladder, confidently leading to financial prosperity.</p>
                        </div>
                        <div className="reffer__box__2">
                            <div className="reffer__item">
                                <h2>2%</h2>
                                <div className="reffer_item_text">
                                    <h3 className='reffer__h3'>FIRST</h3>
                                    <h3>LEVEL</h3>
                                </div>
                            </div>
                            <div className="reffer__item">
                                <h2>1%</h2>
                                <div className="reffer_item_text">
                                    <h3 className='reffer__h3'>SECOND</h3>
                                    <h3>LEVEL</h3>
                                </div>
                            </div>
                            <div className="reffer__item">
                                <h2>0.5%</h2>
                                <div className="reffer_item_text">
                                    <h3 className='reffer__h3'>THIRD</h3>
                                    <h3>LEVEL</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="reffer__img">
                        <img src={require('../../images/referralthumb-min.png')}/>
                    </div>
                </section>
                <section className='about__payment'>
                   <div className="payment__accept">
                         <h1><span>WE</span> ACCEPT</h1>
                         <img src={require('../../images/paymenticon1-min.png')}/>
                       
                    </div>
                </section>
                <section>
                <iframe  className='api'  height="500" width="1140" src="https://www.widgets.investing.com/top-cryptocurrencies?theme=darkTheme&roundedCorners=true" width="100%" height="100%" frameborder="0" allowtransparency="true" marginwidth="0" marginheight="0"></iframe>
                </section>
            </div>
         );
    }
}
 
export default HomeMain;