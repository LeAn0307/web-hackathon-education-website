import React from 'react'
import "./footer.css"
export default function Footer() {
    return (
      <div className="container-fluid" style={{padding: "0px 0px 0px 0px"}}>
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h3>Mentor</h3>
                  <p>
                    ktx khu A <br />
                    Dĩ An <br />
                    Bình Dương, Việt Nam <br />
                    <br />
                    <strong>Phone:</strong> +1 99999955
                    <br />
                    <strong>Email:</strong> info@example.com
                    <br />
                  </p>
                </div>
                <div className="col-lg-2 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" /> <a href="#">Blog</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Message</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Contest</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">My Courses</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" /> <a href="#">OOP</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Toán Cao Cấp</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" /> <a href="#">IT</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Graphic Design</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 footer-newsletter">
                  <h4>Hãy tiến hành học ngay</h4>
                  <p>
                    Tamen quem nulla quae legam multos aute sint culpa legam
                    noster magna
                  </p>
                  <form action method="post">
                    <input type="email" name="email" />
                    <input type="submit" defaultValue="Subscribe" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="container d-md-flex py-4">
            <div className="mr-md-auto text-center text-md-left">
              <div className="copyright">
                © Copyright{" "}
                <strong>
                  <span>Mentor</span>
                </strong>
                . All Rights Reserved
              </div>
              <div className="credits">
                Designed by <a href="https://bootstrapmade.com/">Blue_Sky</a>
              </div>
            </div>
            <div className="social-links text-center text-md-right pt-3 pt-md-0">
              <a href="#" className="twitter">
                <i className="bx bxl-twitter" />
              </a>
              <a href="#" className="facebook">
                <i className="bx bxl-facebook" />
              </a>
              <a href="#" className="instagram">
                <i className="bx bxl-instagram" />
              </a>
              <a href="#" className="google-plus">
                <i className="bx bxl-skype" />
              </a>
              <a href="#" className="linkedin">
                <i className="bx bxl-linkedin" />
              </a>
            </div>
          </div>
        </footer>
        {/* End Footer */}
      </div>
    );
}
