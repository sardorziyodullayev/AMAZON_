import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
	const backToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	return (
		<div className="footer">
			<Link to={""} style={{ textDecoration: "none" }}>
				<div className="footer__back-top">
					<span onClick={backToTop} className="navbar__footer-back-to-top">
						Back to top
					</span>
				</div>
			</Link>
			<div className="footer-content">
				<div className="footer__text-content">
					<ul className="footer__text-content-group">
						<li className="footer__text-content-title">Get to Know Us</li>
						<li className="footer__text-content-text">Careers</li>
						<li className="footer__text-content-text">Blog</li>
						<li className="footer__text-content-text">About Amazon</li>
						<li className="footer__text-content-text">Investor Relations</li>
						<li className="footer__text-content-text">Amazon Devices</li>
						<li className="footer__text-content-text">Amazon Science</li>
					</ul>
					<ul className="footer__text-content-group">
						<li className="footer__text-content-title">Make Money with Us</li>
						<li className="footer__text-content-text">Sell products on Amazon</li>
						<li className="footer__text-content-text">Sell on Amazon Business</li>
						<li className="footer__text-content-text">Sell apps on Amazon</li>
						<li className="footer__text-content-text">Become an Affiliate</li>
						<li className="footer__text-content-text">Advertise Your Products</li>
						<li className="footer__text-content-text">Self-Publish with Us</li>
						<li className="footer__text-content-text">Host an Amazon Hub</li>
						<li className="footer__text-content-text">
							›See More Make Money <br /> with Us
						</li>
					</ul>
					<ul className="footer__text-content-group">
						<li className="footer__text-content-title">Amazon Payment Products</li>
						<li className="footer__text-content-text">Amazon Business Card</li>
						<li className="footer__text-content-text">Shop with Points</li>
						<li className="footer__text-content-text">Reload Your Balance</li>
						<li className="footer__text-content-text">Amazon Currency Converter</li>
					</ul>
					<ul className="footer__text-content-group">
						<li className="footer__text-content-title">Let Us Help You</li>
						<li className="footer__text-content-text">
							Amazon and COVID- <br /> 19
						</li>
						<li className="footer__text-content-text">Your Account</li>
						<li className="footer__text-content-text">Your Orders</li>
						<li className="footer__text-content-text">
							Shipping Rates & <br /> Policies
						</li>
						<li className="footer__text-content-text">
							Returns & <br /> Replacements
						</li>
						<li className="footer__text-content-text">
							Manage Your <br /> Content and Devices
						</li>
						<li className="footer__text-content-text">Amazon Assistant</li>
						<li className="footer__text-content-text">Help</li>
					</ul>
				</div>
				<div className="footer__text-content-media-div">
					<ul className="footer__media-ul">
						<li className="footer__text-media-text">Amazon.com</li>
						<li className="footer__text-media-text">Your Lists</li>
						<li className="footer__text-media-text">Find a Gift</li>
						<li className="footer__text-media-text">Browsing History</li>
						<li className="footer__text-media-text">Returns</li>
					</ul>
					<ul className="footer__media-ul">
						<li className="footer__text-media-text">Your Orders</li>
						<li className="footer__text-media-text">Gift Cards & Registry</li>
						<li className="footer__text-media-text">Your Account</li>
						<li className="footer__text-media-text">Sell products on Amazon</li>
						<li className="footer__text-media-text">
							Your Recalls and Product Safety Alerts
						</li>
						<li className="footer__text-media-text">Customer Service</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
export default Footer;
