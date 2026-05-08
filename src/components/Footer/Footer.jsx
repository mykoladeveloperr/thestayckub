import "./Footer.scss";
import logo from "../../assets/logo.svg";
import footerImage1 from "../../assets/footer-img-1.svg";
import footerImage2 from "../../assets/footer-img-2.svg";

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-md-6 col-xl-3">
            <div className="footer__logo">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-9">
            <div className="row g-4">
              <div className="col-12 col-md-6 col-xl-3">
                <label
                  htmlFor="footer-content-1"
                  className="footer-label text-secondary"
                >
                  Accommodation <i className="bi bi-chevron-down"></i>
                </label>
                <input
                  type="checkbox"
                  id="footer-content-1"
                  className="footer-toggler"
                />
                <div className="footer-content">
                  <nav className="footer-menu">
                    <a href="" className="link footer-link">
                      Student Accommodation
                    </a>
                    <a href="" className="link footer-link">
                      North Acton
                    </a>
                    <a href="" className="link footer-link">
                      Kentish Town
                    </a>
                    <a href="" className="link footer-link">
                      Camden
                    </a>
                    <a href="" className="link footer-link">
                      Hanger Lane
                    </a>
                  </nav>
                  <h6 className="footer-title text-secondary text-uppercase">
                    Extras
                  </h6>
                  <nav className="footer-menu">
                    <a href="" className="link footer-link">
                      Clearing
                    </a>
                    <a href="" className="link footer-link">
                      Promotions
                    </a>
                    <a href="" className="link footer-link">
                      All inclusive living
                    </a>
                    <a href="" className="link footer-link">
                      Short Stays
                    </a>
                  </nav>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <label
                  htmlFor="footer-content-2"
                  className="footer-label text-secondary"
                >
                  New London Developments <i className="bi bi-chevron-down"></i>
                </label>
                <input
                  type="checkbox"
                  id="footer-content-2"
                  className="footer-toggler"
                />
                <div className="footer-content">
                  <nav className="footer-menu">
                    <a href="" className="link footer-link">
                      New London Developments
                    </a>
                  </nav>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <label
                  htmlFor="footer-content-3"
                  className="footer-label text-secondary"
                >
                  Community <i className="bi bi-chevron-down"></i>
                </label>
                <input
                  type="checkbox"
                  id="footer-content-3"
                  className="footer-toggler"
                />
                <div className="footer-content">
                  <nav className="footer-menu">
                    <a href="" className="link footer-link">
                      Resources
                    </a>
                  </nav>
                  <h6 className="footer-title text-secondary text-uppercase">
                    Students
                  </h6>
                  <nav className="footer-menu">
                    <a href="" className="link footer-link">
                      Partnerships
                    </a>
                    <a href="" className="link footer-link">
                      Events
                    </a>
                    <a href="" className="link footer-link">
                      Join our Whatsapp
                    </a>
                    <a href="" className="link footer-link">
                      Become a student ambassador
                    </a>
                  </nav>
                  <h6 className="footer-title text-secondary text-uppercase">
                    Wellbeing
                  </h6>
                  <nav className="footer-menu">
                    <a href="" className="link footer-link">
                      Student Wellbeing
                    </a>
                    <a href="" className="link footer-link">
                      Parent Information
                    </a>
                    <a href="" className="link footer-link">
                      Accessibility
                    </a>
                  </nav>
                  <h6 className="footer-title text-secondary text-uppercase">
                    About us
                  </h6>
                  <nav className="footer-menu">
                    <a href="" className="link footer-link">
                      About
                    </a>
                    <a href="" className="link footer-link">
                      FAQs
                    </a>
                  </nav>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <label
                  htmlFor="footer-content-4"
                  className="footer-label text-secondary"
                >
                  Universities A-M <i className="bi bi-chevron-down"></i>
                </label>
                <input
                  type="checkbox"
                  id="footer-content-4"
                  className="footer-toggler"
                />
                <div className="footer-content">
                  <h6 className="footer-title text-secondary text-uppercase">
                    Universities
                  </h6>
                  <nav className="footer-menu">
                    <a href="" className="link footer-link">
                      BCOM
                    </a>
                    <a href="" className="link footer-link">
                      Birkbeck
                    </a>
                    <a href="" className="link footer-link">
                      ESCP
                    </a>
                    <a href="" className="link footer-link">
                      Guildhall
                    </a>
                    <a href="" className="link footer-link">
                      Hult International
                    </a>
                    <a href="" className="link footer-link">
                      ICMP
                    </a>
                    <a href="" className="link footer-link">
                      Imperial
                    </a>
                    <a href="" className="link footer-link">
                      King's College
                    </a>
                    <a href="" className="link footer-link">
                      Le Cordon Bleu
                    </a>
                    <a href="" className="link footer-link">
                      London College of Fashion
                    </a>
                    <a href="" className="link footer-link">
                      London Contemporary Dance
                    </a>
                    <a href="" className="link footer-link">
                      London Metropolitan
                    </a>
                    <a href="" className="link footer-link">
                      The ISA
                    </a>
                    <a href="" className="link footer-link">
                      LSHTM
                    </a>
                    <a href="" className="link footer-link">
                      LSBU
                    </a>
                    <a href="" className="link footer-link">
                      LSE
                    </a>
                  </nav>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <label
                  htmlFor="footer-content-5"
                  className="footer-label text-secondary"
                >
                  Universities N-Z <i className="bi bi-chevron-down"></i>
                </label>
                <input
                  type="checkbox"
                  id="footer-content-5"
                  className="footer-toggler"
                />
                <div className="footer-content">
                  <h6 className="footer-title text-secondary text-uppercase">
                    Universities M-Z
                  </h6>
                  <nav className="footer-menu">
                    <a href="" className="link footer-link">
                      Queen Mary's{" "}
                    </a>
                    <a href="" className="link footer-link">
                      Regent's
                    </a>
                    <a href="" className="link footer-link">
                      RCVS
                    </a>
                    <a href="" className="link footer-link">
                      Sassoon Academy
                    </a>
                    <a href="" className="link footer-link">
                      SOAS
                    </a>
                    <a href="" className="link footer-link">
                      Sotherby's
                    </a>
                    <a href="" className="link footer-link">
                      Syracuse
                    </a>
                    <a href="" className="link footer-link">
                      The Courtauld
                    </a>
                    <a href="" className="link footer-link">
                      LIBF
                    </a>
                    <a href="" className="link footer-link">
                      LIS
                    </a>
                    <a href="" className="link footer-link">
                      UAL
                    </a>
                    <a href="" className="link footer-link">
                      UCL
                    </a>
                    <a href="" className="link footer-link">
                      UOL
                    </a>
                    <a href="" className="link footer-link">
                      PSL
                    </a>
                    <a href="" className="link footer-link">
                      UWL
                    </a>
                    <a href="" className="link footer-link">
                      Vogue College
                    </a>
                    <a href="" className="link footer-link">
                      Westminster
                    </a>
                  </nav>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <label
                  htmlFor="footer-content-6"
                  className="footer-label text-secondary"
                >
                  Extras <i className="bi bi-chevron-down"></i>
                </label>
                <input
                  type="checkbox"
                  id="footer-content-6"
                  className="footer-toggler"
                />
                <div className="footer-content">
                  <h6 className="footer-title text-secondary text-uppercase">
                    Extras
                  </h6>
                  <nav className="footer-menu">
                    <a href="" className="link footer-link">
                      Summer Accommodation
                    </a>
                    <a href="" className="link footer-link">
                      Study Abroad
                    </a>
                    <a href="" className="link footer-link">
                      International Students
                    </a>
                  </nav>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-3">
                <label
                  htmlFor="footer-content-7"
                  className="footer-label text-secondary"
                >
                  T&C's <i className="bi bi-chevron-down"></i>
                </label>
                <input
                  type="checkbox"
                  id="footer-content-7"
                  className="footer-toggler"
                />
                <div className="footer-content">
                  <h6 className="footer-title text-secondary text-uppercase">
                    T&C's
                  </h6>
                  <nav className="footer-menu">
                    <a href="" className="link footer-link">
                      T&C's
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row g-3 align-items-lg-end justify-content-lg-between">
              <div className="col-12 col-lg-6">
                <div className="row g-3">
                  <div className="col-6 col-md-4">
                    <img src={footerImage1} alt="" />
                  </div>
                  <div className="col-6 col-md-4">
                    <img src={footerImage2} alt="" />
                  </div>
                  <div className="col-12 col-md-4 text-center text-md-start">
                    This property is approved by the National Code for Large
                    Student Developments.
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="row justify-content-center justify-content-lg-end">
                  <div className="col-auto">
                    <a href="" className="link">
                      Privacy Notice
                    </a>
                  </div>
                  <div className="col-auto">
                    <a href="" className="link">
                      <i className="bi bi-telephone"></i> +44 020 7267 7774
                    </a>
                  </div>
                  <div className="col-auto">
                    <nav>
                      <a href="" className="link px-2">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="" className="link px-2">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="" className="link px-2">
                        <i className="bi bi-facebook"></i>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
