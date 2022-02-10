import * as React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="safe-area">
            <div className="container">
              <div className="footer-lists">
                <div className="footer-column">
                  <ul>
                    <li>
                      <a href="javascript:void(0)">Service</a>
                    </li>
                    <li>
                      <a href="/take-off.html">Take Off</a>
                    </li>
                    <li>
                      <a href="/reroute.html">Reroute</a>
                    </li>
                    <li>
                      <a href="/fly-hight.html">Fly High</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-column">
                  <ul>
                    <li>
                      <a href="#">Collaborate</a>
                    </li>
                    <li>
                      <a href="#">Work With Us</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Get Support</a>
                    </li>
                    <li>
                      <a href="#">Report A Bug</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-column">
                  <ul>
                    <li>
                      <a href="javascript:void(0)">Find Us</a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/theseoarch/">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/theseoarch-105995281587114">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/theseoarch">LinkedIn</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-column">
                  <p>Be the first to know</p>
                  <p>
                    <a href="#" className="button">
                      {" "}
                      JOIN OUR NEWSLETTER{" "}
                    </a>
                  </p>
                </div>
              </div>
              <div className="footer-mini">
                <p>Copyright &copy; 2021 Madarth Pvt. Ltd</p>
                <ul>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer__cookie">
        <div className="wrapper">
          <img alt="cookies" src="https://via.placeholder.com/24x24" />
          <p>
            This site uses cookies to provide you with a better user experience.
            By vising our webiste, you accept our use of cookies
            <a href="/">
              classes="btn-know" target="_blank">Know More
            </a>
          </p>
          <div className="cookie-btn">
            <button className="btn-agree">I Agree</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
