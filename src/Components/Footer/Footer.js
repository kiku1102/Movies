
import "../../CSS/Footer.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg"

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer__container__row">
                    <div className="col-fot1">
                        <img src={Logo} width="50%"/>
                        <div className="footer__details">
                            <p>Cinemy Movies and Tv Series</p>
                            <p>Nakuru, Kenya</p>
                            <p>
                                call Us: <span>(+254) 78728340</span>
                            </p>
                        </div>
                    </div>
                    <div className="col-fot2">
                        <h4 className="footer-title">Resources</h4>
                        <div className="menu-footer">
                                <p className="menu-item ">
                                    <Link to="#">About CinemyPlex</Link>
                                </p>
                                <p id="menu-item-72" className="menu-item">
                                    <Link to="#">Contact Us</Link>
                                </p>
                                <p id="menu-item-73" className="menu-item ">
                                    <Link to="#">Forums</Link>
                                </p>
                                <p id="menu-item-74" className="menu-item">
                                    <Link to="#">Blog</Link>
                                </p>
                                <p id="menu-item-75" className="menu-item ">
                                    <Link to="#">Help Center</Link>
                                </p>
                        </div>
                    </div>

                    <div className="col-fot4">
                        <h4 className="footer-title">Legal</h4>
                        <div className="menu-footer">
                                <p id="menu-item-76" className="menu-item-76">
                                    <Link to="#">Terms of Use</Link>
                                </p>
                                <p id="menu-item-77" className="menu-item-77">
                                    <Link to="#">Privacy Policy</Link>
                                </p>
                                <p id="menu-item-78" className="menu-item-78">
                                    <Link to="#">Security</Link>
                                </p>
                        </div>
                    </div>
                    <div className="col-fot5">
                        <h4 className="footer-title">Newsletter</h4>
                        <div className="footer-email">
                            <p>
                                Subscribe to our newsletter system now to get latest news from
                                us
                            </p>
                            <form className="footer-email-form ">
                                <input type="email" placeholder="Enter your email" />
                                <div>
                                    <button className="footer-email-submit">Subscribe now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;