import React from "react";
import "../css/Footer.css";
export default function Footer() {
  return (
    <div className="footer padding-lr padding-tb">

      <div className='logoname'>
        <span className='color'>Beta</span>
        <span className='black'>craft</span>
      </div>
      <div className="row-primary">
        <div className="column-about">
          <div className="column-links">
            <ul>
              <h3>Services</h3>
              <li>
                <a href="#faq">Design & Innovation</a>
              </li>
              <li>
                <a href="#cookies-policy"> Degital Product Engineering</a>
              </li>
              <li>
                <a href="#terms-of-services">Cloud Adoptation Services</a>
              </li>
              <li>
                <a href="#support">Data Analytics</a>
              </li>
              <li>
                <a href="#support">Degital Marketing Studio</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="column-links">
          <ul>
            <h3>Industries</h3>
            <li>
              <a href="#faq">Blockchain</a>
            </li>
            <li>
              <a href="#cookies-policy">Travel & Hospitality</a>
            </li>
            <li>
              <a href="#terms-of-services">Manufacturing(OEM's)</a>
            </li>
            <li>
              <a href="#support">Loyalty</a>
            </li>
            <li>
              <a href="#support">Martech</a>
            </li>
            <li>
              <a href="#support">GIS</a>
            </li>
            <li>
              <a href="#support">eLearning</a>
            </li>
          </ul>
        </div>

        <div className="column-links">

          <ul>
            <h3>Company</h3>
            <li>
              <a href="#faq">About</a>
            </li>
            <li>
              <a href="#cookies-policy">Work</a>
            </li>
            <li>
              <a href="#terms-of-services">Insights</a>
            </li>
            <li>
              <a href="#support">Partners</a>
            </li>
            <li>
              <a href="#support">Careers</a>
            </li>
            <li>
              <a href="#support">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="column-links">
          <ul>
            <h3>Other</h3>
            <li>
              <a href="#faq">Code of Conduct</a>
            </li>
            <li>
              <a href="#cookies-policy">Privay Notice</a>
            </li>
            <li>
              <a href="#terms-of-services">Cookie Policy</a>
            </li>
            <li>
              <a href="#support">Terms of Use</a>
            </li>
          </ul>

          <h4>Follow us</h4>
          <div className="social">

            <i class="fa-brands fa-linkedin-in social-icon"></i>
            <i class="fa-brands fa-instagram social-icon"></i>
            <i class="fa-brands fa-twitter social-icon"></i>
            <i class="fa-brands fa-facebook-square social-icon"></i>

          </div>
        </div>

      </div>

      <div className="row copyright">
        @2021 betacraft. All Rights Reserved.
       
      </div>
    </div>
  );
}
