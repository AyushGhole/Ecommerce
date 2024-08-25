import styles from "./Display.module.css";

function Display() {
  return (
    <>
      <div className={styles.main_card}>
        <div className={styles.second_card}>
          <div>
            <img src="tshirt.jpg" alt="tshirt" className={styles.img} />
          </div>
          <div>
            <img src="dress.jpg" alt="dress" className={styles.img} />
          </div>

          <div>
            <img src="scooter.jpg" alt="scooter" className={styles.img} />
          </div>
          <div>
            <img
              src="pants.jpg"
              alt="Jeans_Pants"
              className={`${styles.img} ${styles.img2}`}
            />
          </div>
          <div>
            <img src="glass.jpg" alt="glass" className={styles.img1} />
          </div>
        </div>
      </div>
      <h3 className={styles.heading}>OUR TOP PRODUCTS</h3>
    </>
  );
}

export default Display;
