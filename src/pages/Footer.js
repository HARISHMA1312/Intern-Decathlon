import React from "react";
import Shine from '../assets/shining.png';
import Retur from '../assets/return.png';
import Smile from '../assets/smile.png';
import PlayStore from '../assets/playstore.jpg';
import AppleStore from '../assets/appStore.jpg';
import Insta from '../assets/insta.png';
import Facebook from '../assets/fb.png';
import TwitterX from '../assets/tweet.png';
import Youtube from '../assets/youtube.png';
import Debit from '../assets/debit.png';
import Credit from '../assets/credit-card.png';
import Upi from '../assets/upi.png';
import Net from '../assets/net.png';

function Footer() {
    return (
        <footer className="footer-container bg-light py-5">
            <div className="container">
                <div className="promise-section mb-4">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="promise">
                                <h5>Our Promise</h5>
                                <div className="promise-details">
                                    <div className="d-flex align-items-center mb-2">
                                        <img src={Shine} alt="No Cost EMI Available" width={20} height={20} className="mr-2" />
                                        <span>No Cost EMI Available</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-2">
                                        <img src={Retur} alt="Easy Returns*" width={20} height={20} className="mr-2" />
                                        <span>Easy Returns*</span>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <img src={Smile} alt="1 million+ happy Customers" width={20} height={20} className="mr-2" />
                                        <span>1 million+ happy Customers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="app-section">
                                <h5>Experience Decathlon App on Mobile</h5>
                                <div className="app-icons">
                                    <img src={PlayStore} alt="Play Store" width={150} height={50} className="mr-2" />
                                    <img src={AppleStore} alt="Apple Store" width={150} height={50} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="footer-content">
                            <div className="footer-column">
                                <h5>Support</h5>
                                <ul className="list-unstyled">
                                    <li>Contact our Stores</li>
                                    <li>Delivery</li>
                                </ul>
                            </div>
                            <div className="footer-column">
                                <h5>Our Services</h5>
                                <ul className="list-unstyled">
                                    <li>Decathlon for Schools</li>
                                    <li>Decathlon for Corporates</li>
                                    <li>Decathlon for Sport Clubs</li>
                                    <li>Decathlon Gift Cards</li>
                                    <li>Installation & Assembly Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="footer-content">
                            <div className="footer-column">
                                <h5>About Us</h5>
                                <ul className="list-unstyled">
                                    <li>Who we are</li>
                                    <li>Careers</li>
                                    <li>Made in India</li>
                                </ul>
                            </div>
                            <div className="footer-column">
                                <h5>Legal</h5>
                                <ul className="list-unstyled">
                                    <li>Return Policy</li>
                                    <li>Terms and Conditions</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="payment-section text-center">
                            <p><img src={Shine} alt="100% Secure Transaction" width={30} height={30} className="mr-2" /> 100% Secure Transaction</p>
                            <p>Secure SSL encryption</p>
                            <div className="payment-icons d-flex justify-content-center">
                                <img src={Debit} alt="Debit Card" width={50} height={50} className="mr-2" />
                                <img src={Credit} alt="Credit Card" width={50} height={50} className="mr-2" />
                                <img src={Upi} alt="UPI" width={50} height={50} className="mr-2" />
                                <img src={Net} alt="Net Banking" width={50} height={50} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="follow-us text-center">
                            <p>Follow Us</p>
                            <div className="social-icons d-flex justify-content-center">
                                <img src={Facebook} alt="Facebook" width={30} height={30} className="mr-2" />
                                <img src={TwitterX} alt="TwitterX" width={30} height={30} className="mr-2" />
                                <img src={Insta} alt="Instagram" width={30} height={30} className="mr-2" />
                                <img src={Youtube} alt="YouTube" width={30} height={30} />
                            </div>
                            <p>Sport Advice for You</p>
                            <button className="btn btn-link">blog.decathlon.in</button>
                            <p>Explore Sports Events Near You</p>
                            <button className="btn btn-link">play.decathlon.in</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;