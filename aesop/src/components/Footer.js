import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footerNav">
                <nav> 
                    <ul> 
                        <h3>Contact Us</h3>
                        <li>Contact us</li>
                        <li>FAQ</li>
                        <li>Delivery and Returns</li>
                        <li>Track your order</li>
                        <li>Check gift card balances</li>
                        <li>Terms and conditions</li>
                        <li>Accessibility</li>
                    </ul>
                    <ul>
                        <h3>About</h3>
                        <li>Our story</li>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>Corporate gifts</li>
                        <li>Facial appointments</li>
                    </ul>
                    <ul>
                        <h3>Social</h3>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                </nav>
            </div>
        )
    }
}
