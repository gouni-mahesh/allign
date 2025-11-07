import "./footer.css";
import footerImg1 from "../../assets/images/footer_image1.jpg";
import footerImg2 from "../../assets/images/footer_image2.jpg";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="footer">
            {/* Newsletter */}
            <div className="newsletter">
                <h2>Subscribe To Our Newsletter</h2>
                <div className="newsletter-input">
                    <input type="email" placeholder="Your-mail address" />
                    <button>Submit Now</button>
                </div>
            </div>

            {/* Main Footer */}
            <div className="footer-content">
                {/* COLUMN 1: Logo, Text, Contact, Social - Corrected Structure */}
                <div className="footer-col">
                    <h2>align</h2>
                    <p>Melbourne is simply dummy text<br />Lorem Ipsum is simply</p>
                    <p className="contact-item">
                        {/* <FiPhone /> (+888) 123 456 765 */}
                    </p>
                    <p className="contact-item">
                        {/* <FiMail /> Mail@example.com */}
                    </p>

                    <div className="social-icons">
                        {/* <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                        <a href="#"><FaYoutube /></a> */}
                    </div>
                </div>

                {/* COLUMN 2: Our Service */}
                <div className="footer-col">
                    <h3>Our Service</h3>
                    <ul>
                        <li>UI Design</li>
                        <li>Webdesign</li>
                        <li>Digital Marketing</li>
                        <li>Video Editing</li>
                        <li>PC Repairs</li>
                    </ul>
                </div>

                {/* COLUMN 3: Pay Links */}
                <div className="footer-col">
                    <h3>Pay Links</h3>
                    <ul>
                        <li>Credit Industries</li>
                        <li>Research Selector</li>
                        <li>Finance Sector</li>
                        <li>Credit Industries</li>
                        <li>PC Repairs</li>
                    </ul>
                </div>

                {/* COLUMN 4: Recent Blogs */}
                <div className="footer-col">
                    <h3>Recent Blogs</h3>
                    <div className="blog-item">
                        <img src={footerImg1} alt="Blog 1" />
                        <div>
                            <p className="date">Jan 12, 2025</p>
                            <p className="title">Social Media Promote for Business</p>
                        </div>
                    </div>
                    <div className="blog-item">
                        <img src={footerImg2} alt="Blog 2" />
                        <div>
                            <p className="date">Jan 12, 2025</p>
                            <p className="title">Social Media Promote for Business</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>2025 Align, all rights Reserved</p>
                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookie Privacy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;