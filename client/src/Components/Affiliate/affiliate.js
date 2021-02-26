import React, { Component } from 'react';
import './style.css'
class AffiliateMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className='affiliate__main'>
                <h1 className='affi_h1'><span>AFFILIATE</span> PROGRAM</h1>
                <section className='reffer__comm '>
                    <div className="reffer__text">
                        <div className="reffer__box__1 reffer__comm__affiliate">
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
            </div>
        );
    }
}
 
export default AffiliateMain;