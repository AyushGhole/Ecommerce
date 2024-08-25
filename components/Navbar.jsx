import styles from "./Navbar.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { FaUserCircle, FaAmazonPay } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header class={`${styles.back} p-3`}>
        <span class="fs-4">
          <img src="amazon_logo.JPG" alt="logo" />
        </span>
        <div class={`${styles.div}`}>
          <a href="" class={`${styles.icon_location}`}>
            <IoLocationOutline />
          </a>
          <div>
            <p class={`${styles.para}`}>Deliver to</p>
            <p class={`${styles.para2}`}>India</p>
          </div>
        </div>
        <div class={`${styles.div1}`}>
          <input
            type="text"
            class={`${styles.search1}`}
            placeholder="ALL"
            readOnly
          />
          <input
            type="text"
            class={`${styles.search}`}
            placeholder="Search products here..."
          />
        </div>
        <div>
          <a href="" class={`${styles.icon_location} ${styles.gap}`}>
            <FaUserCircle />
          </a>
        </div>
        <div>
          <a href="" class={`${styles.icon_location} ${styles.gap}`}>
            <FaAmazonPay />
          </a>
        </div>
        <Link to="/cart">
          <div>
            <a href="" class={`${styles.icon_location} ${styles.gap}`}>
              <FaOpencart />
            </a>
          </div>
        </Link>
      </header>
    </>
  );
}

export default Navbar;
