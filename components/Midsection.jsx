import styles from "./Midsection.module.css";
import Display from "./Display";
import Shopcards from "./ShopCards";

function MidSection() {
  return (
    <>
      <div className={styles.midsection}>
        <p className={styles.para}>
          You are on amazon.com. You can also shop on Amazon India for millions
          of products with fast local delivery.<a href="">Click here</a>
        </p>
      </div>
      <Display />
      <Shopcards />
    </>
  );
}

export default MidSection;
