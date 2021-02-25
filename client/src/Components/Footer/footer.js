import React, { Component } from 'react';
import './style.css'
class FooterMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='footer__main'>
                <section className='footer__class'>
                    <div className="footer">
                        <div className="foot__box1">
                            <h1><i class="fas fa-ruble-sign fa-2x"></i>ayItForward</h1>
                            <p>COPYRIGHT 2021. PAYITFORWARD</p>
                        </div>
                        <div className="foot__box2">
                            <h1>QUICK LINKS:</h1>
                            <div className="quick__lick">
                                <ul>
                                    <li><a href=''>HOME</a></li>
                                    <li><a href=''>ABOUT US</a></li>
                                    <li><a href=''>FAQ</a></li>
                                </ul>
                                <ul>
                                    <li><a href=''>SUPPORT</a></li>
                                    <li><a href=''>TERMS & CONDITIONS</a></li>
                                    <li><a href=''>AFFILIATES</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="foot__box3">
                            <h1>CONTACTS:</h1>
                            <p><i class="fas fa-envelope-square"></i>SUPPORT@PAYITFORWARD.COM</p>
                            <p><i class="fas fa-map-marker-alt"></i>221 VIOLET ROAD, LONDON, UNITED KINGDOM, E3 3AE</p>
                        </div>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default FooterMain;