import { Col, Container, Row, Input } from "reactstrap"
import Logo from "../../assets/images/Logo.svg"
import "../../CSS/Footer.scss"
function Footer() {

    return (
        <div className="footer" color="#22023e">
            <Row>
                <Col xs={4}>
                    <div>
                        <img src={Logo} width="150px" />
                    </div>
                    <div className="pt-5 text-light">
                        <span>Cinemy Movies and Tv Series</span>
                        <p>Nakuru, Kenya</p>
                        <span>call Us: (+254) 78728340</span>
                    </div>
                </Col>
                <Col className="text-light" xs={2}>
                    <div>
                        <h4>Resources</h4>
                    </div>
                    <div>
                        <a href="">About CinemyPlex</a>
                    </div>
                    <div>
                        <a href="">Contact Us</a>
                    </div>
                    <div>
                        <a href="">Forums</a>
                    </div>
                    <div>
                        <a href="">Blog</a>
                    </div>
                    <div>
                        <a href="">Help Center</a>
                    </div>
                </Col>
                <Col className="text-light" xs={2}>
                    <div>
                        <h4>Legal</h4>
                    </div>
                    <div>
                        <a href="">Terms of Use</a>
                    </div>
                    <div>
                        <a href="">Privacy Policy</a>
                    </div>
                    <div>
                        <a href="">Security</a>
                    </div>
                </Col>
                <Col className="text-light" xs={4}>
                    <div>
                        <h4>Newsletter</h4>
                    </div>
                    <div>
                        <a>Subscribe to our newsletter system now to get latest news from us</a>
                    </div>
                    <div className="pt-2">
                        <Input/>
                    </div>
                    <div className="pt-2">
                        <h3 style={{"color": "#ff0000"}}>SUBSCRIBE NOW</h3>
                    </div>
                </Col>
            </Row>

        </div>
    )
} export default Footer;