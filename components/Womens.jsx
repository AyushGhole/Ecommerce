import styles from "./Women.module.css";
import { useDispatch } from "react-redux";

function Women() {
  const dispatch = useDispatch();

  const submit = (title) => {
    dispatch({ type: title });
  };

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
                <b>₹ 1999/- On Offer...</b>
              </p>
              <button
                type="button"
                class="btn btn-success"
                onClick={() => submit("0")}>
                Add TO CART
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

      {/*Second Products / Mens Section view */}

      <div class="card mb-3 " className={styles.mainCard}>
        <div class="row g-0">
          <div class="col-md-2">
            <img src="kurta.jpg" class="img-fluid rounded-start" alt="kurta" />
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
                <b>₹ 1999/- On Offer...</b>
              </p>
              <button
                type="button"
                class="btn btn-success"
                onClick={() => submit("1")}>
                ADD TO CART
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
            <img src="dress1.jpg" class="img-fluid rounded-start" alt="kids" />
          </div>
          <div class="col-md-8" style={{ margin: "1rem" }}>
            <div class="card-body">
              <h5 class="card-title">Women's Wear</h5>
              <p class="card-text">
                A dress (also known as a frock or a gown) is a garment
                predominantly worn by women or girls consisting of a skirt with
                an attached bodice (or a matching bodice giving the effect of a
                one-piece garment).
              </p>
              <p class="card-text">
                <b>₹ 9999/- On Offer...</b>
              </p>
              <button
                type="button"
                class="btn btn-success"
                onClick={() => submit("2")}>
                ADD TO CART
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
              src="tard.jpg"
              class="img-fluid rounded-start"
              alt="Furniture"
            />
          </div>
          <div class="col-md-8" style={{ marginLeft: "1rem" }}>
            <div class="card-body">
              <h5 class="card-title">Women's Wear</h5>
              <p class="card-text">
                A dress (also known as a frock or a gown) is a garment
                predominantly worn by women or girls consisting of a skirt with
                an attached bodice (or a matching bodice giving the effect of a
                one-piece garment).
              </p>
              <p class="card-text">
                <b>₹ 13999/- On Offer...</b>
              </p>
              <button
                type="button"
                class="btn btn-success"
                onClick={() => submit("3")}>
                ADD TO BUY
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

export default Women;
