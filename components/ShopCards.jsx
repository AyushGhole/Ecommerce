import styles from "./ShopCards.module.css";
import { Link } from "react-router-dom";
function Shopcards() {
  return (
    <>
      {/* Frist Image / Products View Options */}
      <div class="card mb-3 " className={styles.mainCard}>
        <div class="row g-0">
          <div class="col-md-2">
            <img src="dress.jpg" class="img-fluid rounded-start" alt="Dress" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Womens Wear</h5>
              <p class="card-text">
                A dress (also known as a frock or a gown) is a garment
                predominantly worn by women or girls consisting of a skirt with
                an attached bodice (or a matching bodice giving the effect of a
                one-piece garment).
              </p>
              <p class="card-text">
                <b>₹ 1299/- On Wards...</b>
              </p>
              <Link to="/Shop_Women">
                <button type="button" class="btn btn-success">
                  See More
                </button>
              </Link>

              <p class="card-text">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Second Products / Mens Section view */}

      <div class="card mb-3 " className={styles.mainCard}>
        <div class="row g-0">
          <div class="col-md-2">
            <img src="tshirt.jpg" class="img-fluid rounded-start" alt="Mens" />
          </div>
          <div class="col-md-8" style={{ margin: "1rem" }}>
            <div class="card-body">
              <h5 class="card-title">Men's Wear</h5>
              <p class="card-text">
                As men, we are extremely blessed to have simple choices: pants,
                shirts, t-shirts, shoes, socks, and jackets. You need a few of
                each of these to create great individual style.
              </p>
              <p class="card-text">
                <b>₹ 999/- On Wards...</b>
              </p>
              <button type="button" class="btn btn-success">
                See More
              </button>

              <p class="card-text">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Kids Wear / Kids Mall */}

      <div class="card mb-3 " className={styles.mainCard}>
        <div class="row g-0">
          <div class="col-md-2">
            <img src="kids.jpg" class="img-fluid rounded-start" alt="kids" />
          </div>
          <div class="col-md-8" style={{ margin: "1rem" }}>
            <div class="card-body">
              <h5 class="card-title">Kid's Mall</h5>
              <p class="card-text">
                Clothing for babies and young children should be casual, and
                modern, with a variety of patterns, designs, prints, fabrics,
                and colours, and made from materials that are nice, useful, and
                cosy
              </p>
              <p class="card-text">
                <b>₹ 3999/- On Wards...</b>
              </p>
              <button type="button" class="btn btn-success">
                See More
              </button>

              <p class="card-text">
                <small class="text-body-secondary">
                  Last updated 2 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Furniture / Home Appliances */}

      <div class="card mb-3 " className={styles.mainCard}>
        <div class="row g-0">
          <div class="col-md-2">
            <img
              src="dsoffa.jpg"
              class="img-fluid rounded-start"
              alt="Furniture"
            />
          </div>
          <div class="col-md-8" style={{ marginLeft: "1rem" }}>
            <div class="card-body">
              <h5 class="card-title">Furniture/Home Appliances</h5>
              <p class="card-text">
                Furniture and appliances are the objects we engage with most
                during our day, whether they are the beds we sleep on, the
                chairs we sit on to work, or the tools we use to prepare our
                meals.
              </p>
              <p class="card-text">
                <b>₹ 13999/- On Wards...</b>
              </p>
              <button type="button" class="btn btn-success">
                See More
              </button>

              <p class="card-text">
                <small class="text-body-secondary">
                  Last updated 2 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shopcards;
