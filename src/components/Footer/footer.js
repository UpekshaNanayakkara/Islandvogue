import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import './footer.css'
import logo from '../../assets/images/logo.jpeg';
import '@fortawesome/fontawesome-free/css/all.min.css';


const footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="column">
                            <div className="logoDiv">
                                <img src={logo} alt='Footer Logo' />
                            </div>
                            <div >
                                <p className="slag">
                                Island Vogue - Ethnic & Modest wear sore..
                                Slay it with Island Vogue !. 
                                </p>
                                {/* <p>
                                    Reg No:
                                </p> */}
                            </div>
                            
                            <div className="footer-icons">
                                <a href="aa" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                                <a href="aa" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                                <a href="aa" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
                            </div>
                        </div>
                        <div className="column">
                            <h5><u>Other Links</u></h5>
                            <ul>
                                <li >
                                    <a href="/terms">Terms & Conditions</a>
                                </li>
                                <li >
                                    <a href="/delivery">Delivery Policy</a>
                                </li>
                                <li>
                                    <a href="/exchange">Exchange Policy</a>
                                </li>
                                <li>
                                    <a href="/cookiepolicy">Cookie policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="column">
                            <h5><u>Contact Details</u></h5>
                            <table>
                                <tr>
                                    <td><FaPhone /></td>
                                    <td>(+94) 727 772 459</td>
                                </tr>
                                <tr>
                                    <td><FaPhone /></td>
                                    <td>(+94) 110 000 000</td>
                                </tr>
                                <tr>
                                    <td><FaEnvelope /></td>
                                    <td>islandvoguesl@gmail.com</td>
                                </tr>
                                <tr>
                                    <td><FaGlobe /></td>
                                    <td>www.islandvoguesl.com</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='Last-footer'>
                    <hr />
                    <div>
                        <p>© All rights reserved by Island Vogue</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default footer
