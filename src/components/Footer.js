import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">Uplift</h1>
                <p className="footer-text">

                A L L - I N - O N E ’ S G R O W T H
                E C O S Y S T E M
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Important Link</p>
                <ul>
                  <li>
                    <Link spy={true} smooth={true} duration={1000} to="headerbg">Home</Link>
                  </li>
                  <li>
                    <Link to="services" spy={true} smooth={true} duration={1000}>Services</Link>
                  </li>
                  <li>
                    <Link to="about-scroll" spy={true} smooth={true} duration={1000}>About Us</Link>
                  </li>
                  <li>
                    <Link to="contact" spy={true} smooth={true} duration={1000}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#">zinniafc@gmail.com</Link>
                  </li>
                  <li>
                    <Link to="#">SUST, Akhaliya, Sylhet</Link>
                  </li>
                  <li>
                    <Link to="#">01705667079</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/MollahHamza">GitHub</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://x.com/HamzaMollah">X</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mollah-hamza-819a55266/">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>
    </footer>
  );
}

export default Footer;
