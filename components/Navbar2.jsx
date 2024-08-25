import styles from "./Navbar2.module.css";
import { MdOutlineStorage } from "react-icons/md";

function NavBar2() {
  return (
    <>
      <header class={`${styles.background}`}>
        <div>
          <a href="" class={`${styles.all} `}>
            <MdOutlineStorage />
            ALL
          </a>

          <ul class={styles.unordered}>
            <li class={styles.unordered}>Todays deals</li>
            <li class={styles.unordered}>Customers service</li>
            <li class={styles.unordered}>Register</li>
            <li class={styles.unordered}>Gift Card</li>
            <li class={styles.unordered}>Sell</li>
            <li class={styles.unordered}>Men</li>
            <li class={styles.unordered}>Women</li>
            <li class={styles.unordered}>Products</li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default NavBar2;
