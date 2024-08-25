import styles from "./Women.module.css";
import { useSelector } from "react-redux";

function Cart() {
  const title = useSelector((store) => store.title);
  const description = useSelector((store) => store.description);
  const price = useSelector((store) => store.price);
  const image = useSelector((store) => store.img);

  return (
    <>
      {/* Frist Image / Products View Options */}
      <div class="card mb-3 " className={styles.mainCard}>
        <div class="row g-0">
          <div class="col-md-2">
            <img src={image} class="img-fluid rounded-start" alt="Dress" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{description}</p>
              <p class="card-text">
                <b> ₹{price}</b>
              </p>
              <button type="button" class="btn btn-success">
                BUY
              </button>

              <button
                type="button"
                class="btn btn-danger"
                style={{ marginLeft: "1rem" }}
                onClick={() => console.log("Delete")}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
