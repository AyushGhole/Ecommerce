import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <header className={`${styles.back} p-1`}>
        <a href="#" className={`${styles.back1}`}>
          Back To Top
        </a>
      </header>
      <div className={`${styles.background}`}>
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-3 mb-3">
              <h5>Get to know us more</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className={`${styles.para}`}>
                    Career
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className={`${styles.para}`}>
                    Blog
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className={`${styles.para}`}>
                    About Amazon
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className={`${styles.para}`}>
                    Investors
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className={`${styles.para}`}>
                    Devices
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-3 mb-3">
              <h5>Make Money with Us</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className={`${styles.para}`}>
                    Sell Products
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className={`${styles.para}`}>
                    Sell on Amazon
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className={`${styles.para}`}>
                    Sell Apps
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className={`${styles.para}`}>
                    Advertise Your Products
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className={`${styles.para}`}>
                    Host on Amazon Hub
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-3 mb-5">
              <h5>Payments Products</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className={`${styles.para}`}>
                    Business Card
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className={`${styles.para}`}>
                    Shop With Points
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className={`${styles.para}`}>
                    Reload Your Balance
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className={`${styles.para}`}>
                    Currency Converter
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className={`${styles.para}`}>
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2024 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlink:href="#twitter"></use>
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlink:href="#instagram"></use>
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlink:href="#facebook"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
